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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("aut"),
        ID: "7e7e4396-713b-4acc-a072-abd61918d279",
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "alias",
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("blanditiis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "rerum",
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("vel"),
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
