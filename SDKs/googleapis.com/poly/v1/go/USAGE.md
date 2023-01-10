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
            Name: "autem",
        },
        QueryParams: operations.PolyAssetsGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolores",
            Alt: "json",
            Callback: "eum",
            Fields: "facere",
            Key: "vitae",
            OauthToken: "pariatur",
            PrettyPrint: false,
            QuotaUser: "aspernatur",
            UploadType: "reiciendis",
            UploadProtocol: "velit",
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