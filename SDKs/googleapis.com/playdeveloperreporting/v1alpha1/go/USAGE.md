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
            Parent: "quas",
        },
        QueryParams: operations.PlaydeveloperreportingAnomaliesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "aperiam",
            Alt: "json",
            Callback: "nobis",
            Fields: "impedit",
            Filter: "rem",
            Key: "vel",
            OauthToken: "in",
            PageSize: 5790576081560137153,
            PageToken: "cumque",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "officiis",
            UploadProtocol: "officiis",
        },
    }
    
    res, err := s.Anomalies.PlaydeveloperreportingAnomaliesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->