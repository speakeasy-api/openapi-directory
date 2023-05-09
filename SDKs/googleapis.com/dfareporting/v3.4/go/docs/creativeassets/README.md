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
        RequestBody: []byte("dolore"),
        AccessToken: sdk.String("corrupti"),
        AdvertiserID: "exercitationem",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("est"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolores",
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("consequatur"),
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
