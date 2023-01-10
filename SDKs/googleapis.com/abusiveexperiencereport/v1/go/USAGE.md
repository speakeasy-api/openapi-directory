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
    
    req := operations.AbusiveexperiencereportSitesGetRequest{
        PathParams: operations.AbusiveexperiencereportSitesGetPathParams{
            Name: "rerum",
        },
        QueryParams: operations.AbusiveexperiencereportSitesGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "quia",
            Alt: "media",
            Callback: "qui",
            Fields: "hic",
            Key: "eum",
            OauthToken: "debitis",
            PrettyPrint: true,
            QuotaUser: "cupiditate",
            UploadType: "reiciendis",
            UploadProtocol: "minus",
        },
    }
    
    res, err := s.Sites.AbusiveexperiencereportSitesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteSummaryResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->