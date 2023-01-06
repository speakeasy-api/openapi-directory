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
    
    req := operations.AdexperiencereportSitesGetRequest{
        PathParams: operations.AdexperiencereportSitesGetPathParams{
            Name: "omnis",
        },
        QueryParams: operations.AdexperiencereportSitesGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "repellendus",
            Alt: "media",
            Callback: "omnis",
            Fields: "architecto",
            Key: "ea",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "ullam",
            UploadType: "ea",
            UploadProtocol: "veritatis",
        },
    }
    
    res, err := s.Sites.AdexperiencereportSitesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteSummaryResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->