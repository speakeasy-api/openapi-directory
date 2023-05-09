# Accounts

### Available Operations

* [AdsenseAccountsAdclientsAdunitsCreate](#adsenseaccountsadclientsadunitscreate) - Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566
* [AdsenseAccountsAdclientsAdunitsGetAdcode](#adsenseaccountsadclientsadunitsgetadcode) - Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
* [AdsenseAccountsAdclientsAdunitsList](#adsenseaccountsadclientsadunitslist) - Lists all ad units under a specified account and ad client.
* [AdsenseAccountsAdclientsAdunitsListLinkedCustomChannels](#adsenseaccountsadclientsadunitslistlinkedcustomchannels) - Lists all the custom channels available for an ad unit.
* [AdsenseAccountsAdclientsCustomchannelsCreate](#adsenseaccountsadclientscustomchannelscreate) - Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [AdsenseAccountsAdclientsCustomchannelsDelete](#adsenseaccountsadclientscustomchannelsdelete) - Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [AdsenseAccountsAdclientsCustomchannelsList](#adsenseaccountsadclientscustomchannelslist) - Lists all the custom channels available in an ad client.
* [AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnits](#adsenseaccountsadclientscustomchannelslistlinkedadunits) - Lists all the ad units available for a custom channel.
* [AdsenseAccountsAdclientsCustomchannelsPatch](#adsenseaccountsadclientscustomchannelspatch) - Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [AdsenseAccountsAdclientsList](#adsenseaccountsadclientslist) - Lists all the ad clients available in an account.
* [AdsenseAccountsAdclientsUrlchannelsList](#adsenseaccountsadclientsurlchannelslist) - Lists active url channels.
* [AdsenseAccountsAlertsList](#adsenseaccountsalertslist) - Lists all the alerts available in an account.
* [AdsenseAccountsGetAdBlockingRecoveryTag](#adsenseaccountsgetadblockingrecoverytag) - Gets the ad blocking recovery tag of an account.
* [AdsenseAccountsList](#adsenseaccountslist) - Lists all accounts available to this user.
* [AdsenseAccountsListChildAccounts](#adsenseaccountslistchildaccounts) - Lists all accounts directly managed by the given AdSense account.
* [AdsenseAccountsPaymentsList](#adsenseaccountspaymentslist) - Lists all the payments available for an account.
* [AdsenseAccountsReportsGenerate](#adsenseaccountsreportsgenerate) - Generates an ad hoc report.
* [AdsenseAccountsReportsGenerateCsv](#adsenseaccountsreportsgeneratecsv) - Generates a csv formatted ad hoc report.
* [AdsenseAccountsReportsGetSaved](#adsenseaccountsreportsgetsaved) - Gets the saved report from the given resource name.
* [AdsenseAccountsReportsSavedGenerate](#adsenseaccountsreportssavedgenerate) - Generates a saved report.
* [AdsenseAccountsReportsSavedGenerateCsv](#adsenseaccountsreportssavedgeneratecsv) - Generates a csv formatted saved report.
* [AdsenseAccountsReportsSavedList](#adsenseaccountsreportssavedlist) - Lists saved reports.
* [AdsenseAccountsSitesGet](#adsenseaccountssitesget) - Gets information about the selected site.
* [AdsenseAccountsSitesList](#adsenseaccountssiteslist) - Lists all the sites available in an account.

## AdsenseAccountsAdclientsAdunitsCreate

Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566

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
    res, err := s.Accounts.AdsenseAccountsAdclientsAdunitsCreate(ctx, operations.AdsenseAccountsAdclientsAdunitsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AdUnitInput: &shared.AdUnitInput{
            ContentAdsSettings: &shared.ContentAdsSettings{
                Size: sdk.String("delectus"),
                Type: shared.ContentAdsSettingsTypeEnumDisplay.ToPointer(),
            },
            DisplayName: sdk.String("suscipit"),
            State: shared.AdUnitStateEnumActive.ToPointer(),
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("nisi"),
        Parent: "recusandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    }, operations.AdsenseAccountsAdclientsAdunitsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnit != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdclientsAdunitsGetAdcode

Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).

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
    res, err := s.Accounts.AdsenseAccountsAdclientsAdunitsGetAdcode(ctx, operations.AdsenseAccountsAdclientsAdunitsGetAdcodeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("sapiente"),
        Name: "Fred Strosin",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("esse"),
    }, operations.AdsenseAccountsAdclientsAdunitsGetAdcodeSecurity{
        Option1: &operations.AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdUnitAdCode != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdclientsAdunitsList

Lists all ad units under a specified account and ad client.

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
    res, err := s.Accounts.AdsenseAccountsAdclientsAdunitsList(ctx, operations.AdsenseAccountsAdclientsAdunitsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("nam"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(143353),
        PageToken: sdk.String("deleniti"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.AdsenseAccountsAdclientsAdunitsListSecurity{
        Option1: &operations.AdsenseAccountsAdclientsAdunitsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdUnitsResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdclientsAdunitsListLinkedCustomChannels

Lists all the custom channels available for an ad unit.

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
    res, err := s.Accounts.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannels(ctx, operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("esse"),
        PageSize: sdk.Int64(216550),
        PageToken: sdk.String("excepturi"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("natus"),
    }, operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurity{
        Option1: &operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLinkedCustomChannelsResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdclientsCustomchannelsCreate

Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.

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
    res, err := s.Accounts.AdsenseAccountsAdclientsCustomchannelsCreate(ctx, operations.AdsenseAccountsAdclientsCustomchannelsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CustomChannelInput: &shared.CustomChannelInput{
            Active: sdk.Bool(false),
            DisplayName: sdk.String("iste"),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("hic"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("fuga"),
        Parent: "in",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("iure"),
    }, operations.AdsenseAccountsAdclientsCustomchannelsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannel != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdclientsCustomchannelsDelete

Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.

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
    res, err := s.Accounts.AdsenseAccountsAdclientsCustomchannelsDelete(ctx, operations.AdsenseAccountsAdclientsCustomchannelsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("est"),
        Name: "Cameron Dach",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.AdsenseAccountsAdclientsCustomchannelsDeleteSecurity{
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

## AdsenseAccountsAdclientsCustomchannelsList

Lists all the custom channels available in an ad client.

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
    res, err := s.Accounts.AdsenseAccountsAdclientsCustomchannelsList(ctx, operations.AdsenseAccountsAdclientsCustomchannelsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("iure"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("doloribus"),
        PageSize: sdk.Int64(958950),
        PageToken: sdk.String("architecto"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.AdsenseAccountsAdclientsCustomchannelsListSecurity{
        Option1: &operations.AdsenseAccountsAdclientsCustomchannelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomChannelsResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnits

Lists all the ad units available for a custom channel.

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
    res, err := s.Accounts.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnits(ctx, operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("molestiae"),
        PageSize: sdk.Int64(244425),
        PageToken: sdk.String("error"),
        Parent: "quia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity{
        Option1: &operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLinkedAdUnitsResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdclientsCustomchannelsPatch

Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.

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
    res, err := s.Accounts.AdsenseAccountsAdclientsCustomchannelsPatch(ctx, operations.AdsenseAccountsAdclientsCustomchannelsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CustomChannelInput: &shared.CustomChannelInput{
            Active: sdk.Bool(false),
            DisplayName: sdk.String("enim"),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("ipsam"),
        Name: "Miss Rufus Ankunding",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UpdateMask: sdk.String("reiciendis"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("vero"),
    }, operations.AdsenseAccountsAdclientsCustomchannelsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomChannel != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdclientsList

Lists all the ad clients available in an account.

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
    res, err := s.Accounts.AdsenseAccountsAdclientsList(ctx, operations.AdsenseAccountsAdclientsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("cum"),
        PageSize: sdk.Int64(19987),
        PageToken: sdk.String("doloremque"),
        Parent: "reprehenderit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.AdsenseAccountsAdclientsListSecurity{
        Option1: &operations.AdsenseAccountsAdclientsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdClientsResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsAdclientsUrlchannelsList

Lists active url channels.

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
    res, err := s.Accounts.AdsenseAccountsAdclientsUrlchannelsList(ctx, operations.AdsenseAccountsAdclientsUrlchannelsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("harum"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("accusamus"),
        PageSize: sdk.Int64(414263),
        PageToken: sdk.String("repudiandae"),
        Parent: "quae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("molestias"),
    }, operations.AdsenseAccountsAdclientsUrlchannelsListSecurity{
        Option1: &operations.AdsenseAccountsAdclientsUrlchannelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListURLChannelsResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsAlertsList

Lists all the alerts available in an account.

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
    res, err := s.Accounts.AdsenseAccountsAlertsList(ctx, operations.AdsenseAccountsAlertsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("rem"),
        Key: sdk.String("voluptates"),
        LanguageCode: sdk.String("quasi"),
        OauthToken: sdk.String("repudiandae"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.AdsenseAccountsAlertsListSecurity{
        Option1: &operations.AdsenseAccountsAlertsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAlertsResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsGetAdBlockingRecoveryTag

Gets the ad blocking recovery tag of an account.

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
    res, err := s.Accounts.AdsenseAccountsGetAdBlockingRecoveryTag(ctx, operations.AdsenseAccountsGetAdBlockingRecoveryTagRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("deserunt"),
        Name: "Marty Green",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.AdsenseAccountsGetAdBlockingRecoveryTagSecurity{
        Option1: &operations.AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdBlockingRecoveryTag != nil {
        // handle response
    }
}
```

## AdsenseAccountsList

Lists all accounts available to this user.

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
    res, err := s.Accounts.AdsenseAccountsList(ctx, operations.AdsenseAccountsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("excepturi"),
        PageSize: sdk.Int64(270008),
        PageToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.AdsenseAccountsListSecurity{
        Option1: &operations.AdsenseAccountsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountsResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsListChildAccounts

Lists all accounts directly managed by the given AdSense account.

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
    res, err := s.Accounts.AdsenseAccountsListChildAccounts(ctx, operations.AdsenseAccountsListChildAccountsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("necessitatibus"),
        PageSize: sdk.Int64(572252),
        PageToken: sdk.String("officia"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.AdsenseAccountsListChildAccountsSecurity{
        Option1: &operations.AdsenseAccountsListChildAccountsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChildAccountsResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsPaymentsList

Lists all the payments available for an account.

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
    res, err := s.Accounts.AdsenseAccountsPaymentsList(ctx, operations.AdsenseAccountsPaymentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("magnam"),
        Parent: "cumque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.AdsenseAccountsPaymentsListSecurity{
        Option1: &operations.AdsenseAccountsPaymentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPaymentsResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsReportsGenerate

Generates an ad hoc report.

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
    res, err := s.Accounts.AdsenseAccountsReportsGenerate(ctx, operations.AdsenseAccountsReportsGenerateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Account: "non",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        CurrencyCode: sdk.String("accusamus"),
        DateRange: operations.AdsenseAccountsReportsGenerateDateRangeEnumLast30Days.ToPointer(),
        Dimensions: []AdsenseAccountsReportsGenerateDimensionsEnum{
            operations.AdsenseAccountsReportsGenerateDimensionsEnumCountryName,
            operations.AdsenseAccountsReportsGenerateDimensionsEnumContentPlatformName,
            operations.AdsenseAccountsReportsGenerateDimensionsEnumPlatformTypeCode,
        },
        EndDateDay: sdk.Int64(501324),
        EndDateMonth: sdk.Int64(533206),
        EndDateYear: sdk.Int64(956084),
        Fields: sdk.String("amet"),
        Filters: []string{
            "nisi",
            "vel",
            "natus",
        },
        Key: sdk.String("omnis"),
        LanguageCode: sdk.String("molestiae"),
        Limit: sdk.Int64(19193),
        Metrics: []AdsenseAccountsReportsGenerateMetricsEnum{
            operations.AdsenseAccountsReportsGenerateMetricsEnumAdRequestsSpamRatio,
            operations.AdsenseAccountsReportsGenerateMetricsEnumEstimatedEarnings,
        },
        OauthToken: sdk.String("id"),
        OrderBy: []string{
            "labore",
            "suscipit",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        ReportingTimeZone: operations.AdsenseAccountsReportsGenerateReportingTimeZoneEnumGoogleTimeZone.ToPointer(),
        StartDateDay: sdk.Int64(428769),
        StartDateMonth: sdk.Int64(878453),
        StartDateYear: sdk.Int64(135474),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.AdsenseAccountsReportsGenerateSecurity{
        Option1: &operations.AdsenseAccountsReportsGenerateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportResult != nil {
        // handle response
    }
}
```

## AdsenseAccountsReportsGenerateCsv

Generates a csv formatted ad hoc report.

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
    res, err := s.Accounts.AdsenseAccountsReportsGenerateCsv(ctx, operations.AdsenseAccountsReportsGenerateCsvRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Account: "ullam",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        CurrencyCode: sdk.String("sint"),
        DateRange: operations.AdsenseAccountsReportsGenerateCsvDateRangeEnumReportingDateRangeUnspecified.ToPointer(),
        Dimensions: []AdsenseAccountsReportsGenerateCsvDimensionsEnum{
            operations.AdsenseAccountsReportsGenerateCsvDimensionsEnumDomainRegistrant,
            operations.AdsenseAccountsReportsGenerateCsvDimensionsEnumPlatformTypeCode,
            operations.AdsenseAccountsReportsGenerateCsvDimensionsEnumOwnedSiteDomainName,
        },
        EndDateDay: sdk.Int64(431418),
        EndDateMonth: sdk.Int64(221262),
        EndDateYear: sdk.Int64(896547),
        Fields: sdk.String("odit"),
        Filters: []string{
            "quasi",
            "iure",
        },
        Key: sdk.String("doloribus"),
        LanguageCode: sdk.String("debitis"),
        Limit: sdk.Int64(260341),
        Metrics: []AdsenseAccountsReportsGenerateCsvMetricsEnum{
            operations.AdsenseAccountsReportsGenerateCsvMetricsEnumMatchedAdRequestsCtr,
            operations.AdsenseAccountsReportsGenerateCsvMetricsEnumEstimatedEarnings,
            operations.AdsenseAccountsReportsGenerateCsvMetricsEnumAdRequestsCoverage,
            operations.AdsenseAccountsReportsGenerateCsvMetricsEnumMatchedAdRequests,
        },
        OauthToken: sdk.String("architecto"),
        OrderBy: []string{
            "ullam",
            "expedita",
            "nihil",
            "repellat",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        ReportingTimeZone: operations.AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnumReportingTimeZoneUnspecified.ToPointer(),
        StartDateDay: sdk.Int64(904648),
        StartDateMonth: sdk.Int64(868126),
        StartDateYear: sdk.Int64(37559),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.AdsenseAccountsReportsGenerateCsvSecurity{
        Option1: &operations.AdsenseAccountsReportsGenerateCsvSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HTTPBody != nil {
        // handle response
    }
}
```

## AdsenseAccountsReportsGetSaved

Gets the saved report from the given resource name.

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
    res, err := s.Accounts.AdsenseAccountsReportsGetSaved(ctx, operations.AdsenseAccountsReportsGetSavedRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("illum"),
        Key: sdk.String("pariatur"),
        Name: "Nathaniel Marks",
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.AdsenseAccountsReportsGetSavedSecurity{
        Option1: &operations.AdsenseAccountsReportsGetSavedSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedReport != nil {
        // handle response
    }
}
```

## AdsenseAccountsReportsSavedGenerate

Generates a saved report.

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
    res, err := s.Accounts.AdsenseAccountsReportsSavedGenerate(ctx, operations.AdsenseAccountsReportsSavedGenerateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        CurrencyCode: sdk.String("eaque"),
        DateRange: operations.AdsenseAccountsReportsSavedGenerateDateRangeEnumLast7Days.ToPointer(),
        EndDateDay: sdk.Int64(365496),
        EndDateMonth: sdk.Int64(975522),
        EndDateYear: sdk.Int64(16627),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("amet"),
        LanguageCode: sdk.String("aut"),
        Name: "Lewis Welch",
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        ReportingTimeZone: operations.AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnumAccountTimeZone.ToPointer(),
        StartDateDay: sdk.Int64(489549),
        StartDateMonth: sdk.Int64(54338),
        StartDateYear: sdk.Int64(338985),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("eos"),
    }, operations.AdsenseAccountsReportsSavedGenerateSecurity{
        Option1: &operations.AdsenseAccountsReportsSavedGenerateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportResult != nil {
        // handle response
    }
}
```

## AdsenseAccountsReportsSavedGenerateCsv

Generates a csv formatted saved report.

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
    res, err := s.Accounts.AdsenseAccountsReportsSavedGenerateCsv(ctx, operations.AdsenseAccountsReportsSavedGenerateCsvRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quam"),
        CurrencyCode: sdk.String("dolor"),
        DateRange: operations.AdsenseAccountsReportsSavedGenerateCsvDateRangeEnumLast7Days.ToPointer(),
        EndDateDay: sdk.Int64(345352),
        EndDateMonth: sdk.Int64(944120),
        EndDateYear: sdk.Int64(928082),
        Fields: sdk.String("omnis"),
        Key: sdk.String("facilis"),
        LanguageCode: sdk.String("perspiciatis"),
        Name: "Robyn Cruickshank",
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        ReportingTimeZone: operations.AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnumGoogleTimeZone.ToPointer(),
        StartDateDay: sdk.Int64(237893),
        StartDateMonth: sdk.Int64(992397),
        StartDateYear: sdk.Int64(934214),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("iste"),
    }, operations.AdsenseAccountsReportsSavedGenerateCsvSecurity{
        Option1: &operations.AdsenseAccountsReportsSavedGenerateCsvSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HTTPBody != nil {
        // handle response
    }
}
```

## AdsenseAccountsReportsSavedList

Lists saved reports.

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
    res, err := s.Accounts.AdsenseAccountsReportsSavedList(ctx, operations.AdsenseAccountsReportsSavedListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("delectus"),
        PageSize: sdk.Int64(311945),
        PageToken: sdk.String("quos"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.AdsenseAccountsReportsSavedListSecurity{
        Option1: &operations.AdsenseAccountsReportsSavedListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSavedReportsResponse != nil {
        // handle response
    }
}
```

## AdsenseAccountsSitesGet

Gets information about the selected site.

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
    res, err := s.Accounts.AdsenseAccountsSitesGet(ctx, operations.AdsenseAccountsSitesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("cum"),
        Key: sdk.String("voluptate"),
        Name: "Johanna Farrell",
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("iure"),
    }, operations.AdsenseAccountsSitesGetSecurity{
        Option1: &operations.AdsenseAccountsSitesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
}
```

## AdsenseAccountsSitesList

Lists all the sites available in an account.

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
    res, err := s.Accounts.AdsenseAccountsSitesList(ctx, operations.AdsenseAccountsSitesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(179603),
        PageToken: sdk.String("atque"),
        Parent: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.AdsenseAccountsSitesListSecurity{
        Option1: &operations.AdsenseAccountsSitesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSitesResponse != nil {
        // handle response
    }
}
```
