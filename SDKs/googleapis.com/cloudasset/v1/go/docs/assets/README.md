# Assets

### Available Operations

* [CloudassetAssetsList](#cloudassetassetslist) - Lists assets with time and resource types and returns paged results in response.

## CloudassetAssetsList

Lists assets with time and resource types and returns paged results in response.

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
    res, err := s.Assets.CloudassetAssetsList(ctx, operations.CloudassetAssetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AssetTypes: []string{
            "temporibus",
            "ab",
            "quis",
            "veritatis",
        },
        Callback: sdk.String("deserunt"),
        ContentType: operations.CloudassetAssetsListContentTypeEnumContentTypeUnspecified.ToPointer(),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("sapiente"),
        PageSize: sdk.Int64(778157),
        PageToken: sdk.String("odit"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        ReadTime: sdk.String("maiores"),
        RelationshipTypes: []string{
            "quod",
            "quod",
        },
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
    }, operations.CloudassetAssetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetsResponse != nil {
        // handle response
    }
}
```
