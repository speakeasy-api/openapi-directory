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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AssetTypes: []string{
            "excepturi",
            "nisi",
        },
        Callback: sdk.String("recusandae"),
        ContentType: operations.CloudassetAssetsListContentTypeEnumAccessPolicy.ToPointer(),
        Fields: sdk.String("ab"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("veritatis"),
        PageSize: sdk.Int64(648172),
        PageToken: sdk.String("perferendis"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        ReadTime: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
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
