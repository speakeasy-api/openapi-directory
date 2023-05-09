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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("ducimus"),
        ID: "a05a8b4a-9ec5-4b36-88cc-a363272760e9",
        Key: sdk.String("vel"),
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "earum",
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("voluptates"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("aut"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aliquam",
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("molestiae"),
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
