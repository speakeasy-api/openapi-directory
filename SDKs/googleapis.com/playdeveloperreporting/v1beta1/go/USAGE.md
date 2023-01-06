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
            Parent: "nesciunt",
        },
        QueryParams: operations.PlaydeveloperreportingAnomaliesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "eligendi",
            Alt: "media",
            Callback: "autem",
            Fields: "minima",
            Filter: "veritatis",
            Key: "reprehenderit",
            OauthToken: "non",
            PageSize: 8618473008943969169,
            PageToken: "enim",
            PrettyPrint: false,
            QuotaUser: "autem",
            UploadType: "commodi",
            UploadProtocol: "praesentium",
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