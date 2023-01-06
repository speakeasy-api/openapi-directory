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
    
    req := operations.PolyAssetsGetRequest{
        PathParams: operations.PolyAssetsGetPathParams{
            Name: "quod",
        },
        QueryParams: operations.PolyAssetsGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "media",
            Callback: "iusto",
            Fields: "porro",
            Key: "eos",
            OauthToken: "veritatis",
            PrettyPrint: false,
            QuotaUser: "possimus",
            UploadType: "ut",
            UploadProtocol: "vel",
        },
    }
    
    res, err := s.Assets.PolyAssetsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Asset != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->