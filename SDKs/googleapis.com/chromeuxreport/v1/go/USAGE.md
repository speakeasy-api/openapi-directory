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
            DollarXgafv: "1",
            AccessToken: "quod",
            Alt: "json",
            Callback: "rerum",
            Fields: "in",
            Key: "quis",
            OauthToken: "architecto",
            PrettyPrint: false,
            QuotaUser: "ipsa",
            UploadType: "corporis",
            UploadProtocol: "et",
        },
        Request: &shared.QueryRequest{
            EffectiveConnectionType: "consequuntur",
            FormFactor: "PHONE",
            Metrics: []string{
                "dignissimos",
            },
            Origin: "modi",
            URL: "rem",
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