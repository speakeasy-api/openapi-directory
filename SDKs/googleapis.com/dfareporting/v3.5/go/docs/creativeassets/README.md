# CreativeAssets

### Available Operations

* [DfareportingCreativeAssetsInsert](#dfareportingcreativeassetsinsert) - Inserts a new creative asset.

## DfareportingCreativeAssetsInsert

Inserts a new creative asset.

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
    res, err := s.CreativeAssets.DfareportingCreativeAssetsInsert(ctx, operations.DfareportingCreativeAssetsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: []byte("reprehenderit"),
        AccessToken: sdk.String("aut"),
        AdvertiserID: "recusandae",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolor",
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("earum"),
    }, operations.DfareportingCreativeAssetsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreativeAssetMetadata != nil {
        // handle response
    }
}
```
