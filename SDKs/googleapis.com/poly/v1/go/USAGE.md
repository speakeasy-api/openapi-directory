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

    req := operations.PolyAssetsGetRequest{
        PathParams: operations.PolyAssetsGetPathParams{
            Name: "unde",
        },
        QueryParams: operations.PolyAssetsGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.Assets.PolyAssetsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Asset != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->