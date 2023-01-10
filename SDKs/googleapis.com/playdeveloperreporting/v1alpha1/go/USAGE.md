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
            Parent: "nostrum",
        },
        QueryParams: operations.PlaydeveloperreportingAnomaliesListQueryParams{
            DollarXgafv: "1",
            AccessToken: "quo",
            Alt: "proto",
            Callback: "atque",
            Fields: "aut",
            Filter: "laborum",
            Key: "deserunt",
            OauthToken: "ullam",
            PageSize: 7721199028839594214,
            PageToken: "dolores",
            PrettyPrint: false,
            QuotaUser: "cupiditate",
            UploadType: "sit",
            UploadProtocol: "est",
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