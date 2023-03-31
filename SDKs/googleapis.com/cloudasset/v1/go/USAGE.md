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
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        AssetTypes: []string{
            "unde",
            "nulla",
            "corrupti",
            "illum",
        },
        Callback: "vel",
        ContentType: "ACCESS_POLICY",
        Fields: "deserunt",
        Key: "suscipit",
        OauthToken: "iure",
        PageSize: 297534,
        PageToken: "debitis",
        Parent: "ipsa",
        PrettyPrint: false,
        QuotaUser: "delectus",
        ReadTime: "tempora",
        RelationshipTypes: []string{
            "molestiae",
            "minus",
        },
        UploadType: "placeat",
        UploadProtocol: "voluptatum",
    }

    ctx := context.Background()
    res, err := s.Assets.CloudassetAssetsList(ctx, req, operations.CloudassetAssetsListSecurity{
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