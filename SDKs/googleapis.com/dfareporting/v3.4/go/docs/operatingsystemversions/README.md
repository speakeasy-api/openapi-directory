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
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("voluptates"),
        ID: "cb812a66-1489-444a-8e90-85075bc25382",
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nesciunt",
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("asperiores"),
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
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "earum",
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("nihil"),
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
