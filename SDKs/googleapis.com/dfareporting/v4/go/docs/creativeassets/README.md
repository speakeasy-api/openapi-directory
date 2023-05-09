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
        RequestBody: []byte("maiores"),
        AccessToken: sdk.String("corrupti"),
        AdvertiserID: "libero",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("placeat"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "laborum",
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("laborum"),
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
