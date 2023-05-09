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
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("recusandae"),
        ID: "9085075b-c253-4825-b343-fb0a4e66ea47",
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "praesentium",
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("voluptate"),
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
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Directories: []DfareportingMobileAppsListDirectoriesEnum{
            operations.DfareportingMobileAppsListDirectoriesEnumUnknown,
            operations.DfareportingMobileAppsListDirectoriesEnumPlaystationAppStore,
        },
        Fields: sdk.String("ab"),
        Ids: []string{
            "maiores",
            "optio",
            "aliquid",
        },
        Key: sdk.String("in"),
        MaxResults: sdk.Int64(587459),
        OauthToken: sdk.String("facilis"),
        PageToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "facilis",
        QuotaUser: sdk.String("quia"),
        SearchString: sdk.String("delectus"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("veniam"),
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
