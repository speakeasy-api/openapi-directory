<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            Parent: "corrupti",
        },
        QueryParams: operations.CloudassetAssetsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            AssetTypes: []string{
                "nulla",
                "corrupti",
                "illum",
            },
            Callback: "vel",
            ContentType: "ORG_POLICY",
            Fields: "deserunt",
            Key: "suscipit",
            OauthToken: "iure",
            PageSize: 297534,
            PageToken: "debitis",
            PrettyPrint: false,
            QuotaUser: "ipsa",
            ReadTime: "delectus",
            UploadType: "tempora",
            UploadProtocol: "suscipit",
        },
    }

    ctx := context.Background()
    res, err := s.Assets.CloudassetAssetsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->