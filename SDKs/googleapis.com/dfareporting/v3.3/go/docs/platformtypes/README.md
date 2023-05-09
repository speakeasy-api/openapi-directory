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
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("sapiente"),
        ID: "6796ed3d-724c-418f-981e-98cce3f71660",
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "culpa",
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("dolor"),
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
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("optio"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "earum",
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("assumenda"),
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
