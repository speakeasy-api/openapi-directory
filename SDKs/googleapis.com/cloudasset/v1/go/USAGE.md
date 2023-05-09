<!-- Start SDK Example Usage -->
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
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        AssetTypes: []string{
            "unde",
            "nulla",
            "corrupti",
            "illum",
        },
        Callback: sdk.String("vel"),
        ContentType: operations.CloudassetAssetsListContentTypeEnumAccessPolicy.ToPointer(),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("iure"),
        PageSize: sdk.Int64(297534),
        PageToken: sdk.String("debitis"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        ReadTime: sdk.String("tempora"),
        RelationshipTypes: []string{
            "molestiae",
            "minus",
        },
        UploadType: sdk.String("placeat"),
        UploadProtocol: sdk.String("voluptatum"),
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
<!-- End SDK Example Usage -->