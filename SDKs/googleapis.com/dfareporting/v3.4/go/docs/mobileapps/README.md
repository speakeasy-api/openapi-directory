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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("provident"),
        ID: "c492c5e8-ba5d-44aa-8a50-8bd380c29aa8",
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "iure",
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("assumenda"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Directories: []DfareportingMobileAppsListDirectoriesEnum{
            operations.DfareportingMobileAppsListDirectoriesEnumSamsungTvAppStore,
        },
        Fields: sdk.String("odio"),
        Ids: []string{
            "perspiciatis",
            "beatae",
            "labore",
        },
        Key: sdk.String("modi"),
        MaxResults: sdk.Int64(608085),
        OauthToken: sdk.String("officia"),
        PageToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "suscipit",
        QuotaUser: sdk.String("unde"),
        SearchString: sdk.String("cumque"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("deleniti"),
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
