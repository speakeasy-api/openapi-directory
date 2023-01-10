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
            Name: "in",
        },
        QueryParams: operations.AdexperiencereportSitesGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "illum",
            Alt: "media",
            Callback: "earum",
            Fields: "temporibus",
            Key: "earum",
            OauthToken: "esse",
            PrettyPrint: false,
            QuotaUser: "doloremque",
            UploadType: "deserunt",
            UploadProtocol: "maiores",
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