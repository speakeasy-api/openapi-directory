# Assets

### Available Operations

* [PolyAssetsGet](#polyassetsget) - Returns detailed information about an asset given its name. PRIVATE assets are returned only if the currently authenticated user (via OAuth token) is the author of the asset.
* [PolyAssetsList](#polyassetslist) - Lists all public, remixable assets. These are assets with an access level of PUBLIC and published under the CC-By license.

## PolyAssetsGet

Returns detailed information about an asset given its name. PRIVATE assets are returned only if the currently authenticated user (via OAuth token) is the author of the asset.

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
    res, err := s.Assets.PolyAssetsGet(ctx, operations.PolyAssetsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        Name: "Ken Kshlerin",
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Asset != nil {
        // handle response
    }
}
```

## PolyAssetsList

Lists all public, remixable assets. These are assets with an access level of PUBLIC and published under the CC-By license.

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
    res, err := s.Assets.PolyAssetsList(ctx, operations.PolyAssetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Category: sdk.String("repellendus"),
        Curated: sdk.Bool(false),
        Fields: sdk.String("sapiente"),
        Format: sdk.String("quo"),
        Key: sdk.String("odit"),
        Keywords: sdk.String("at"),
        MaxComplexity: operations.PolyAssetsListMaxComplexityEnumSimple.ToPointer(),
        OauthToken: sdk.String("maiores"),
        OrderBy: sdk.String("molestiae"),
        PageSize: sdk.Int64(799159),
        PageToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetsResponse != nil {
        // handle response
    }
}
```
