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
    
    req := operations.ChromeuxreportRecordsQueryRecordRequest{
        QueryParams: operations.ChromeuxreportRecordsQueryRecordQueryParams{
            DollarXgafv: "2",
            AccessToken: "alias",
            Alt: "json",
            Callback: "officia",
            Fields: "laborum",
            Key: "ipsum",
            OauthToken: "quod",
            PrettyPrint: false,
            QuotaUser: "optio",
            UploadType: "praesentium",
            UploadProtocol: "pariatur",
        },
        Request: &shared.QueryRequest{
            EffectiveConnectionType: "dolorem",
            FormFactor: "PHONE",
            Metrics: []string{
                "reiciendis",
            },
            Origin: "explicabo",
            URL: "illo",
        },
    }
    
    res, err := s.Records.ChromeuxreportRecordsQueryRecord(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->