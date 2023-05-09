# Enterprises

### Available Operations

* [AndroidenterpriseEnterprisesAcknowledgeNotificationSet](#androidenterpriseenterprisesacknowledgenotificationset) - Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
* [AndroidenterpriseEnterprisesCompleteSignup](#androidenterpriseenterprisescompletesignup) - Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
* [AndroidenterpriseEnterprisesCreateEnrollmentToken](#androidenterpriseenterprisescreateenrollmenttoken) - Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.
* [AndroidenterpriseEnterprisesCreateWebToken](#androidenterpriseenterprisescreatewebtoken) - Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.
* [AndroidenterpriseEnterprisesEnroll](#androidenterpriseenterprisesenroll) - Enrolls an enterprise with the calling EMM.
* [AndroidenterpriseEnterprisesGenerateSignupURL](#androidenterpriseenterprisesgeneratesignupurl) - Generates a sign-up URL.
* [AndroidenterpriseEnterprisesGet](#androidenterpriseenterprisesget) - Retrieves the name and domain of an enterprise.
* [AndroidenterpriseEnterprisesGetServiceAccount](#androidenterpriseenterprisesgetserviceaccount) - Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
* [AndroidenterpriseEnterprisesGetStoreLayout](#androidenterpriseenterprisesgetstorelayout) - Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
* [AndroidenterpriseEnterprisesList](#androidenterpriseenterpriseslist) - Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
* [AndroidenterpriseEnterprisesPullNotificationSet](#androidenterpriseenterprisespullnotificationset) - Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
* [AndroidenterpriseEnterprisesSendTestPushNotification](#androidenterpriseenterprisessendtestpushnotification) - Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
* [AndroidenterpriseEnterprisesSetAccount](#androidenterpriseenterprisessetaccount) - Sets the account that will be used to authenticate to the API as the enterprise.
* [AndroidenterpriseEnterprisesSetStoreLayout](#androidenterpriseenterprisessetstorelayout) - Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
* [AndroidenterpriseEnterprisesUnenroll](#androidenterpriseenterprisesunenroll) - Unenrolls an enterprise from the calling EMM.

## AndroidenterpriseEnterprisesAcknowledgeNotificationSet

Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesAcknowledgeNotificationSet(ctx, operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("eaque"),
        NotificationSetID: sdk.String("quis"),
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesCompleteSignup

Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesCompleteSignup(ctx, operations.AndroidenterpriseEnterprisesCompleteSignupRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        CompletionToken: sdk.String("nostrum"),
        EnterpriseToken: sdk.String("hic"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("porro"),
    }, operations.AndroidenterpriseEnterprisesCompleteSignupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Enterprise != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesCreateEnrollmentToken

Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesCreateEnrollmentToken(ctx, operations.AndroidenterpriseEnterprisesCreateEnrollmentTokenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eaque"),
        DeviceType: operations.AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnumDedicatedDevice.ToPointer(),
        EnterpriseID: "rerum",
        Fields: sdk.String("adipisci"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.AndroidenterpriseEnterprisesCreateEnrollmentTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnrollmentTokenResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesCreateWebToken

Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesCreateWebToken(ctx, operations.AndroidenterpriseEnterprisesCreateWebTokenRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AdministratorWebTokenSpec: &shared.AdministratorWebTokenSpec{
            ManagedConfigurations: &shared.AdministratorWebTokenSpecManagedConfigurations{
                Enabled: sdk.Bool(false),
            },
            Parent: sdk.String("pariatur"),
            Permission: []shared.AdministratorWebTokenSpecPermissionEnum{
                shared.AdministratorWebTokenSpecPermissionEnumManageMcm,
                shared.AdministratorWebTokenSpecPermissionEnumManageMcm,
                shared.AdministratorWebTokenSpecPermissionEnumManageMcm,
            },
            PlaySearch: &shared.AdministratorWebTokenSpecPlaySearch{
                ApproveApps: sdk.Bool(false),
                Enabled: sdk.Bool(false),
            },
            PrivateApps: &shared.AdministratorWebTokenSpecPrivateApps{
                Enabled: sdk.Bool(false),
            },
            StoreBuilder: &shared.AdministratorWebTokenSpecStoreBuilder{
                Enabled: sdk.Bool(false),
            },
            WebApps: &shared.AdministratorWebTokenSpecWebApps{
                Enabled: sdk.Bool(false),
            },
            ZeroTouch: &shared.AdministratorWebTokenSpecZeroTouch{
                Enabled: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        EnterpriseID: "dolorem",
        Fields: sdk.String("dolorem"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.AndroidenterpriseEnterprisesCreateWebTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdministratorWebToken != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesEnroll

Enrolls an enterprise with the calling EMM.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesEnroll(ctx, operations.AndroidenterpriseEnterprisesEnrollRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Enterprise: &shared.Enterprise{
            Administrator: []shared.Administrator{
                shared.Administrator{
                    Email: sdk.String("Waldo.Farrell8@yahoo.com"),
                },
                shared.Administrator{
                    Email: sdk.String("Anabelle.Kerluke@gmail.com"),
                },
            },
            GoogleAuthenticationSettings: &shared.GoogleAuthenticationSettings{
                DedicatedDevicesAllowed: shared.GoogleAuthenticationSettingsDedicatedDevicesAllowedEnumAllowed.ToPointer(),
                GoogleAuthenticationRequired: shared.GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnumRequired.ToPointer(),
            },
            ID: sdk.String("f69280d1-ba77-4a89-abf7-37ae4203ce5e"),
            Name: sdk.String("Rosie McKenzie"),
            PrimaryDomain: sdk.String("totam"),
        },
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        Token: "officiis",
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.AndroidenterpriseEnterprisesEnrollSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Enterprise != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesGenerateSignupURL

Generates a sign-up URL.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesGenerateSignupURL(ctx, operations.AndroidenterpriseEnterprisesGenerateSignupURLRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iusto"),
        CallbackURL: sdk.String("ipsum"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.AndroidenterpriseEnterprisesGenerateSignupURLSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignupInfo != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesGet

Retrieves the name and domain of an enterprise.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesGet(ctx, operations.AndroidenterpriseEnterprisesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        EnterpriseID: "nihil",
        Fields: sdk.String("sit"),
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("libero"),
    }, operations.AndroidenterpriseEnterprisesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Enterprise != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesGetServiceAccount

Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesGetServiceAccount(ctx, operations.AndroidenterpriseEnterprisesGetServiceAccountRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        EnterpriseID: "incidunt",
        Fields: sdk.String("qui"),
        Key: sdk.String("cupiditate"),
        KeyType: operations.AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnumPkcs12.ToPointer(),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.AndroidenterpriseEnterprisesGetServiceAccountSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAccount != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesGetStoreLayout

Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesGetStoreLayout(ctx, operations.AndroidenterpriseEnterprisesGetStoreLayoutRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolores"),
        EnterpriseID: "distinctio",
        Fields: sdk.String("facilis"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("qui"),
    }, operations.AndroidenterpriseEnterprisesGetStoreLayoutSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreLayout != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesList

Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesList(ctx, operations.AndroidenterpriseEnterprisesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odio"),
        Domain: "sunt",
        Fields: sdk.String("ullam"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.AndroidenterpriseEnterprisesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterprisesListResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesPullNotificationSet

Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesPullNotificationSet(ctx, operations.AndroidenterpriseEnterprisesPullNotificationSetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        RequestMode: operations.AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnumReturnImmediately.ToPointer(),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.AndroidenterpriseEnterprisesPullNotificationSetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationSet != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesSendTestPushNotification

Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesSendTestPushNotification(ctx, operations.AndroidenterpriseEnterprisesSendTestPushNotificationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("adipisci"),
        EnterpriseID: "dolorum",
        Fields: sdk.String("architecto"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.AndroidenterpriseEnterprisesSendTestPushNotificationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterprisesSendTestPushNotificationResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesSetAccount

Sets the account that will be used to authenticate to the API as the enterprise.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesSetAccount(ctx, operations.AndroidenterpriseEnterprisesSetAccountRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnterpriseAccount: &shared.EnterpriseAccount{
            AccountEmail: sdk.String("repellendus"),
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ut"),
        EnterpriseID: "facilis",
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.AndroidenterpriseEnterprisesSetAccountSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnterpriseAccount != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesSetStoreLayout

Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesSetStoreLayout(ctx, operations.AndroidenterpriseEnterprisesSetStoreLayoutRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        StoreLayout: &shared.StoreLayout{
            HomepageID: sdk.String("quisquam"),
            StoreLayoutType: shared.StoreLayoutStoreLayoutTypeEnumCustom.ToPointer(),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        EnterpriseID: "delectus",
        Fields: sdk.String("voluptate"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("hic"),
    }, operations.AndroidenterpriseEnterprisesSetStoreLayoutSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreLayout != nil {
        // handle response
    }
}
```

## AndroidenterpriseEnterprisesUnenroll

Unenrolls an enterprise from the calling EMM.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Enterprises.AndroidenterpriseEnterprisesUnenroll(ctx, operations.AndroidenterpriseEnterprisesUnenrollRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("similique"),
        EnterpriseID: "facilis",
        Fields: sdk.String("vero"),
        Key: sdk.String("ducimus"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.AndroidenterpriseEnterprisesUnenrollSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
