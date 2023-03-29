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
            Parent: "unde",
        },
        QueryParams: operations.CloudassetAssetsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            AssetTypes: []string{
                "vero",
                "perspiciatis",
                "nulla",
            },
            Callback: "nihil",
            ContentType: "ACCESS_POLICY",
            Fields: "facilis",
            Key: "eum",
            OauthToken: "iusto",
            PageSize: 297534,
            PageToken: "saepe",
            PrettyPrint: false,
            QuotaUser: "inventore",
            ReadTime: "sapiente",
            RelationshipTypes: []string{
                "eum",
                "voluptatum",
            },
            UploadType: "autem",
            UploadProtocol: "vel",
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