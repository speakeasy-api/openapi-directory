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
    
    req := operations.PlaydeveloperreportingAnomaliesListRequest{
        PathParams: operations.PlaydeveloperreportingAnomaliesListPathParams{
            Parent: "quasi",
        },
        QueryParams: operations.PlaydeveloperreportingAnomaliesListQueryParams{
            DollarXgafv: "1",
            AccessToken: "recusandae",
            Alt: "media",
            Callback: "eos",
            Fields: "ut",
            Filter: "est",
            Key: "aut",
            OauthToken: "voluptatem",
            PageSize: 4790505383503673118,
            PageToken: "voluptatibus",
            PrettyPrint: true,
            QuotaUser: "quod",
            UploadType: "nihil",
            UploadProtocol: "maxime",
        },
    }
    
    res, err := s.Anomalies.PlaydeveloperreportingAnomaliesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->