# MobileApps

### Available Operations

* [DfareportingMobileAppsGet](#dfareportingmobileappsget) - Gets one mobile app by ID.
* [DfareportingMobileAppsList](#dfareportingmobileappslist) - Retrieves list of available mobile apps.

## DfareportingMobileAppsGet

Gets one mobile app by ID.

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
    res, err := s.MobileApps.DfareportingMobileAppsGet(ctx, operations.DfareportingMobileAppsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("quis"),
        ID: "d72d9edd-785b-4e5e-bafe-55297ba6281f",
        Key: sdk.String("aliquam"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eveniet",
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("eos"),
    }, operations.DfareportingMobileAppsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MobileApp != nil {
        // handle response
    }
}
```

## DfareportingMobileAppsList

Retrieves list of available mobile apps.

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
    res, err := s.MobileApps.DfareportingMobileAppsList(ctx, operations.DfareportingMobileAppsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eius"),
        Directories: []DfareportingMobileAppsListDirectoriesEnum{
            operations.DfareportingMobileAppsListDirectoriesEnumAppleAppStore,
            operations.DfareportingMobileAppsListDirectoriesEnumAppleAppStore,
            operations.DfareportingMobileAppsListDirectoriesEnumGooglePlayStore,
        },
        Fields: sdk.String("optio"),
        Ids: []string{
            "sit",
            "illum",
            "ratione",
        },
        Key: sdk.String("alias"),
        MaxResults: sdk.Int64(966372),
        OauthToken: sdk.String("hic"),
        PageToken: sdk.String("ducimus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolores",
        QuotaUser: sdk.String("illo"),
        SearchString: sdk.String("aliquid"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.DfareportingMobileAppsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MobileAppsListResponse != nil {
        // handle response
    }
}
```
