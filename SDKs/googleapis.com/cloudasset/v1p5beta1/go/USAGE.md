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
            Parent: "voluptates",
        },
        QueryParams: operations.CloudassetAssetsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "vel",
            Alt: "media",
            AssetTypes: []string{
                "delectus",
            },
            Callback: "modi",
            ContentType: "RESOURCE",
            Fields: "aut",
            Key: "necessitatibus",
            OauthToken: "quia",
            PageSize: 1250294203911879157,
            PageToken: "molestias",
            PrettyPrint: false,
            QuotaUser: "ut",
            ReadTime: "aliquid",
            UploadType: "minus",
            UploadProtocol: "dignissimos",
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