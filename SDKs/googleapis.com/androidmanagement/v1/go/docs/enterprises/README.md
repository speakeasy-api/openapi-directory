# Enterprises

### Available Operations

* [AndroidmanagementEnterprisesCreate](#androidmanagemententerprisescreate) - Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
* [AndroidmanagementEnterprisesDevicesIssueCommand](#androidmanagemententerprisesdevicesissuecommand) - Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
* [AndroidmanagementEnterprisesDevicesList](#androidmanagemententerprisesdeviceslist) - Lists devices for a given enterprise. Deleted devices are not returned in the response.
* [AndroidmanagementEnterprisesDevicesOperationsCancel](#androidmanagemententerprisesdevicesoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [AndroidmanagementEnterprisesEnrollmentTokensCreate](#androidmanagemententerprisesenrollmenttokenscreate) - Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
* [AndroidmanagementEnterprisesEnrollmentTokensList](#androidmanagemententerprisesenrollmenttokenslist) - Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
* [AndroidmanagementEnterprisesList](#androidmanagemententerpriseslist) - Lists EMM-managed enterprises. Only BASIC fields are returned.
* [AndroidmanagementEnterprisesPoliciesList](#androidmanagemententerprisespolicieslist) - Lists policies for a given enterprise.
* [AndroidmanagementEnterprisesWebAppsCreate](#androidmanagemententerpriseswebappscreate) - Creates a web app.
* [AndroidmanagementEnterprisesWebAppsDelete](#androidmanagemententerpriseswebappsdelete) - Deletes a web app.
* [AndroidmanagementEnterprisesWebAppsGet](#androidmanagemententerpriseswebappsget) - Gets a web app.
* [AndroidmanagementEnterprisesWebAppsList](#androidmanagemententerpriseswebappslist) - Lists web apps for a given enterprise.
* [AndroidmanagementEnterprisesWebAppsPatch](#androidmanagemententerpriseswebappspatch) - Updates a web app.
* [AndroidmanagementEnterprisesWebTokensCreate](#androidmanagemententerpriseswebtokenscreate) - Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

## AndroidmanagementEnterprisesCreate

Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesCreate(ctx, operations.AndroidmanagementEnterprisesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Enterprise: &shared.Enterprise{
            AppAutoApprovalEnabled: sdk.Bool(false),
            ContactInfo: &shared.ContactInfo{
                ContactEmail: sdk.String("consequuntur"),
                DataProtectionOfficerEmail: sdk.String("repellat"),
                DataProtectionOfficerName: sdk.String("mollitia"),
                DataProtectionOfficerPhone: sdk.String("occaecati"),
                EuRepresentativeEmail: sdk.String("numquam"),
                EuRepresentativeName: sdk.String("commodi"),
                EuRepresentativePhone: sdk.String("quam"),
            },
            EnabledNotificationTypes: []shared.EnterpriseEnabledNotificationTypesEnum{
                shared.EnterpriseEnabledNotificationTypesEnumEnrollment,
                shared.EnterpriseEnabledNotificationTypesEnumStatusReport,
            },
            EnterpriseDisplayName: sdk.String("quia"),
            Logo: &shared.ExternalData{
                Sha256Hash: sdk.String("quis"),
                URL: sdk.String("vitae"),
            },
            Name: sdk.String("Matt Hamill"),
            PrimaryColor: sdk.Int(196582),
            PubsubTopic: sdk.String("tenetur"),
            SigninDetails: []shared.SigninDetail{
                shared.SigninDetail{
                    AllowPersonalUsage: shared.SigninDetailAllowPersonalUsageEnumPersonalUsageAllowed.ToPointer(),
                    QrCode: sdk.String("possimus"),
                    SigninEnrollmentToken: sdk.String("aut"),
                    SigninURL: sdk.String("quasi"),
                },
                shared.SigninDetail{
                    AllowPersonalUsage: shared.SigninDetailAllowPersonalUsageEnumPersonalUsageAllowed.ToPointer(),
                    QrCode: sdk.String("temporibus"),
                    SigninEnrollmentToken: sdk.String("laborum"),
                    SigninURL: sdk.String("quasi"),
                },
            },
            TermsAndConditions: []shared.TermsAndConditions{
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("voluptatibus"),
                        LocalizedMessages: map[string]string{
                            "nihil": "praesentium",
                            "voluptatibus": "ipsa",
                            "omnis": "voluptate",
                            "cum": "perferendis",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("doloremque"),
                        LocalizedMessages: map[string]string{
                            "ut": "maiores",
                            "dicta": "corporis",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("dolore"),
                        LocalizedMessages: map[string]string{
                            "dicta": "harum",
                            "enim": "accusamus",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("commodi"),
                        LocalizedMessages: map[string]string{
                            "quae": "ipsum",
                            "quidem": "molestias",
                            "excepturi": "pariatur",
                            "modi": "praesentium",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("rem"),
                        LocalizedMessages: map[string]string{
                            "quasi": "repudiandae",
                            "sint": "veritatis",
                            "itaque": "incidunt",
                            "enim": "consequatur",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("est"),
                        LocalizedMessages: map[string]string{
                            "explicabo": "deserunt",
                            "distinctio": "quibusdam",
                            "labore": "modi",
                            "qui": "aliquid",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("cupiditate"),
                        LocalizedMessages: map[string]string{
                            "perferendis": "magni",
                            "assumenda": "ipsam",
                            "alias": "fugit",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: sdk.String("dolorum"),
                        LocalizedMessages: map[string]string{
                            "tempora": "facilis",
                            "tempore": "labore",
                            "delectus": "eum",
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("non"),
        AgreementAccepted: sdk.Bool(false),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        EnterpriseToken: sdk.String("aliquid"),
        Fields: sdk.String("provident"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("officia"),
        QuotaUser: sdk.String("dolor"),
        SignupURLName: sdk.String("debitis"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.AndroidmanagementEnterprisesCreateSecurity{
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

## AndroidmanagementEnterprisesDevicesIssueCommand

Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesDevicesIssueCommand(ctx, operations.AndroidmanagementEnterprisesDevicesIssueCommandRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Command: &shared.Command{
            ClearAppsDataParams: &shared.ClearAppsDataParams{
                PackageNames: []string{
                    "illum",
                    "maiores",
                },
            },
            ClearAppsDataStatus: &shared.ClearAppsDataStatus{
                Results: map[string]shared.PerAppResult{
                    "dicta": shared.PerAppResult{
                        ClearingResult: shared.PerAppResultClearingResultEnumSuccess.ToPointer(),
                    },
                    "cumque": shared.PerAppResult{
                        ClearingResult: shared.PerAppResultClearingResultEnumAPILevel.ToPointer(),
                    },
                    "ea": shared.PerAppResult{
                        ClearingResult: shared.PerAppResultClearingResultEnumSuccess.ToPointer(),
                    },
                },
            },
            CreateTime: sdk.String("laborum"),
            Duration: sdk.String("accusamus"),
            ErrorCode: shared.CommandErrorCodeEnumUnknown.ToPointer(),
            NewPassword: sdk.String("occaecati"),
            ResetPasswordFlags: []shared.CommandResetPasswordFlagsEnum{
                shared.CommandResetPasswordFlagsEnumLockNow,
                shared.CommandResetPasswordFlagsEnumLockNow,
            },
            Type: shared.CommandTypeEnumRelinquishOwnership.ToPointer(),
            UserName: sdk.String("Lafayette_Reinger"),
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("nisi"),
        Name: "Ada Moen IV",
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("labore"),
    }, operations.AndroidmanagementEnterprisesDevicesIssueCommandSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AndroidmanagementEnterprisesDevicesList

Lists devices for a given enterprise. Deleted devices are not returned in the response.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesDevicesList(ctx, operations.AndroidmanagementEnterprisesDevicesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("eum"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("aspernatur"),
        PageSize: sdk.Int64(102863),
        PageToken: sdk.String("magnam"),
        Parent: "et",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("provident"),
    }, operations.AndroidmanagementEnterprisesDevicesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDevicesResponse != nil {
        // handle response
    }
}
```

## AndroidmanagementEnterprisesDevicesOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesDevicesOperationsCancel(ctx, operations.AndroidmanagementEnterprisesDevicesOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("mollitia"),
        Name: "Natalie Ernser",
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.AndroidmanagementEnterprisesDevicesOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AndroidmanagementEnterprisesEnrollmentTokensCreate

Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesEnrollmentTokensCreate(ctx, operations.AndroidmanagementEnterprisesEnrollmentTokensCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnrollmentToken: &shared.EnrollmentToken{
            AdditionalData: sdk.String("eius"),
            AllowPersonalUsage: shared.EnrollmentTokenAllowPersonalUsageEnumPersonalUsageDisallowed.ToPointer(),
            Duration: sdk.String("deleniti"),
            ExpirationTimestamp: sdk.String("facilis"),
            Name: sdk.String("Alice Bradtke"),
            OneTimeOnly: sdk.Bool(false),
            PolicyName: sdk.String("expedita"),
            QrCode: sdk.String("nihil"),
            User: &shared.User{
                AccountIdentifier: sdk.String("repellat"),
            },
            Value: sdk.String("quibusdam"),
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("praesentium"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("quo"),
    }, operations.AndroidmanagementEnterprisesEnrollmentTokensCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnrollmentToken != nil {
        // handle response
    }
}
```

## AndroidmanagementEnterprisesEnrollmentTokensList

Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesEnrollmentTokensList(ctx, operations.AndroidmanagementEnterprisesEnrollmentTokensListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("ea"),
        PageSize: sdk.Int64(33222),
        PageToken: sdk.String("ab"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.AndroidmanagementEnterprisesEnrollmentTokensListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnrollmentTokensResponse != nil {
        // handle response
    }
}
```

## AndroidmanagementEnterprisesList

Lists EMM-managed enterprises. Only BASIC fields are returned.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesList(ctx, operations.AndroidmanagementEnterprisesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(855804),
        PageToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("aut"),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("hic"),
        View: operations.AndroidmanagementEnterprisesListViewEnumBasic.ToPointer(),
    }, operations.AndroidmanagementEnterprisesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEnterprisesResponse != nil {
        // handle response
    }
}
```

## AndroidmanagementEnterprisesPoliciesList

Lists policies for a given enterprise.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesPoliciesList(ctx, operations.AndroidmanagementEnterprisesPoliciesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("eaque"),
        OauthToken: sdk.String("quis"),
        PageSize: sdk.Int64(199996),
        PageToken: sdk.String("eos"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("quam"),
    }, operations.AndroidmanagementEnterprisesPoliciesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPoliciesResponse != nil {
        // handle response
    }
}
```

## AndroidmanagementEnterprisesWebAppsCreate

Creates a web app.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesWebAppsCreate(ctx, operations.AndroidmanagementEnterprisesWebAppsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WebApp: &shared.WebApp{
            DisplayMode: shared.WebAppDisplayModeEnumFullScreen.ToPointer(),
            Icons: []shared.WebAppIcon{
                shared.WebAppIcon{
                    ImageData: sdk.String("hic"),
                },
                shared.WebAppIcon{
                    ImageData: sdk.String("recusandae"),
                },
            },
            Name: sdk.String("Miss Cesar Metz"),
            StartURL: sdk.String("blanditiis"),
            Title: sdk.String("Miss"),
            VersionCode: sdk.String("eaque"),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("modi"),
        Parent: "iste",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.AndroidmanagementEnterprisesWebAppsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebApp != nil {
        // handle response
    }
}
```

## AndroidmanagementEnterprisesWebAppsDelete

Deletes a web app.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesWebAppsDelete(ctx, operations.AndroidmanagementEnterprisesWebAppsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("quos"),
        Name: "Florence Ebert",
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("cum"),
        WipeDataFlags: []AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum{
            operations.AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnumPreserveResetProtectionData,
            operations.AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnumWipeExternalStorage,
        },
        WipeReasonMessage: sdk.String("amet"),
    }, operations.AndroidmanagementEnterprisesWebAppsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AndroidmanagementEnterprisesWebAppsGet

Gets a web app.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesWebAppsGet(ctx, operations.AndroidmanagementEnterprisesWebAppsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("ipsa"),
        Filter: sdk.String("iure"),
        Key: sdk.String("odio"),
        Name: "Sophia Predovic",
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(179603),
        PageToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("ab"),
    }, operations.AndroidmanagementEnterprisesWebAppsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebApp != nil {
        // handle response
    }
}
```

## AndroidmanagementEnterprisesWebAppsList

Lists web apps for a given enterprise.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesWebAppsList(ctx, operations.AndroidmanagementEnterprisesWebAppsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("omnis"),
        PageSize: sdk.Int64(896672),
        PageToken: sdk.String("distinctio"),
        Parent: "asperiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.AndroidmanagementEnterprisesWebAppsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebAppsResponse != nil {
        // handle response
    }
}
```

## AndroidmanagementEnterprisesWebAppsPatch

Updates a web app.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesWebAppsPatch(ctx, operations.AndroidmanagementEnterprisesWebAppsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WebApp: &shared.WebApp{
            DisplayMode: shared.WebAppDisplayModeEnumFullScreen.ToPointer(),
            Icons: []shared.WebAppIcon{
                shared.WebAppIcon{
                    ImageData: sdk.String("aspernatur"),
                },
                shared.WebAppIcon{
                    ImageData: sdk.String("perferendis"),
                },
            },
            Name: sdk.String("Marianne Thompson"),
            StartURL: sdk.String("suscipit"),
            Title: sdk.String("Miss"),
            VersionCode: sdk.String("provident"),
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("similique"),
        Key: sdk.String("alias"),
        Name: "Alex Goodwin",
        OauthToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UpdateMask: sdk.String("dolorum"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("esse"),
    }, operations.AndroidmanagementEnterprisesWebAppsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebApp != nil {
        // handle response
    }
}
```

## AndroidmanagementEnterprisesWebTokensCreate

Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

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
    res, err := s.Enterprises.AndroidmanagementEnterprisesWebTokensCreate(ctx, operations.AndroidmanagementEnterprisesWebTokensCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WebToken: &shared.WebToken{
            EnabledFeatures: []shared.WebTokenEnabledFeaturesEnum{
                shared.WebTokenEnabledFeaturesEnumPlaySearch,
                shared.WebTokenEnabledFeaturesEnumManagedConfigurations,
            },
            Name: sdk.String("Marvin Renner"),
            ParentFrameURL: sdk.String("enim"),
            Permissions: []shared.WebTokenPermissionsEnum{
                shared.WebTokenPermissionsEnumApproveApps,
            },
            Value: sdk.String("totam"),
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("neque"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("vel"),
        Parent: "libero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("quam"),
    }, operations.AndroidmanagementEnterprisesWebTokensCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebToken != nil {
        // handle response
    }
}
```
