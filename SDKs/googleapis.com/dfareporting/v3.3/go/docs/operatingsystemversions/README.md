# OperatingSystemVersions

### Available Operations

* [DfareportingOperatingSystemVersionsGet](#dfareportingoperatingsystemversionsget) - Gets one operating system version by ID.
* [DfareportingOperatingSystemVersionsList](#dfareportingoperatingsystemversionslist) - Retrieves a list of operating system versions.

## DfareportingOperatingSystemVersionsGet

Gets one operating system version by ID.

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
    res, err := s.OperatingSystemVersions.DfareportingOperatingSystemVersionsGet(ctx, operations.DfareportingOperatingSystemVersionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("consectetur"),
        ID: "0491aa35-d4a8-439f-83ba-b77b918f0313",
        Key: sdk.String("iste"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ut",
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.DfareportingOperatingSystemVersionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperatingSystemVersion != nil {
        // handle response
    }
}
```

## DfareportingOperatingSystemVersionsList

Retrieves a list of operating system versions.

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
    res, err := s.OperatingSystemVersions.DfareportingOperatingSystemVersionsList(ctx, operations.DfareportingOperatingSystemVersionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "saepe",
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("itaque"),
    }, operations.DfareportingOperatingSystemVersionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperatingSystemVersionsListResponse != nil {
        // handle response
    }
}
```
