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
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("excepturi"),
        ID: "c4ae5514-0e75-4726-a003-c2f029419251",
        Key: sdk.String("atque"),
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "saepe",
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("dicta"),
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
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("hic"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "provident",
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("delectus"),
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
