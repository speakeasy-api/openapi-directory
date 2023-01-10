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
            Parent: "occaecati",
        },
        QueryParams: operations.CloudassetAssetsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "rerum",
            Alt: "json",
            AssetTypes: []string{
                "enim",
                "voluptas",
            },
            Callback: "voluptas",
            ContentType: "RESOURCE",
            Fields: "atque",
            Key: "dolores",
            OauthToken: "optio",
            PageSize: 2232215791667708434,
            PageToken: "aut",
            PrettyPrint: true,
            QuotaUser: "totam",
            ReadTime: "ut",
            UploadType: "et",
            UploadProtocol: "et",
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