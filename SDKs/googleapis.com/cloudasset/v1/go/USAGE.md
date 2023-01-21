<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CloudassetAssetsListRequest{
        Security: operations.CloudassetAssetsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudassetAssetsListPathParams{
            Parent: "sit",
        },
        QueryParams: operations.CloudassetAssetsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            AssetTypes: []string{
                "dolor",
                "expedita",
                "voluptas",
            },
            Callback: "fugit",
            ContentType: "RESOURCE",
            Fields: "nihil",
            Key: "rerum",
            OauthToken: "dicta",
            PageSize: 2518412263346885298,
            PageToken: "voluptatum",
            PrettyPrint: false,
            QuotaUser: "ut",
            ReadTime: "dolorem",
            RelationshipTypes: []string{
                "voluptate",
                "iste",
            },
            UploadType: "vitae",
            UploadProtocol: "totam",
        },
    }
    
    res, err := s.Assets.CloudassetAssetsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->