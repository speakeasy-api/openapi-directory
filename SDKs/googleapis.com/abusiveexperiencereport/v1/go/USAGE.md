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
            Name: "tenetur",
        },
        QueryParams: operations.AbusiveexperiencereportSitesGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "aut",
            Alt: "proto",
            Callback: "fuga",
            Fields: "ullam",
            Key: "id",
            OauthToken: "temporibus",
            PrettyPrint: true,
            QuotaUser: "eum",
            UploadType: "aut",
            UploadProtocol: "et",
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