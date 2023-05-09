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
        RequestBody: []byte("quasi"),
        AccessToken: sdk.String("odit"),
        AdvertiserID: "delectus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "enim",
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("consequuntur"),
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
