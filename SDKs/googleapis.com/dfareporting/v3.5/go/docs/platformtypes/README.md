# PlatformTypes

### Available Operations

* [DfareportingPlatformTypesGet](#dfareportingplatformtypesget) - Gets one platform type by ID.
* [DfareportingPlatformTypesList](#dfareportingplatformtypeslist) - Retrieves a list of platform types.

## DfareportingPlatformTypesGet

Gets one platform type by ID.

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
    res, err := s.PlatformTypes.DfareportingPlatformTypesGet(ctx, operations.DfareportingPlatformTypesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("impedit"),
        ID: "cb2822b4-a985-40ed-af4a-1e9c4ae55140",
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "corporis",
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.DfareportingPlatformTypesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlatformType != nil {
        // handle response
    }
}
```

## DfareportingPlatformTypesList

Retrieves a list of platform types.

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
    res, err := s.PlatformTypes.DfareportingPlatformTypesList(ctx, operations.DfareportingPlatformTypesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("porro"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aut",
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.DfareportingPlatformTypesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlatformTypesListResponse != nil {
        // handle response
    }
}
```
