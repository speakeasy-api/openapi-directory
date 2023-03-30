<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ChromeuxreportRecordsQueryHistoryRecordRequest{
        QueryParams: operations.ChromeuxreportRecordsQueryHistoryRecordQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.QueryHistoryRequest{
            FormFactor: "DESKTOP",
            Metrics: []string{
                "iure",
                "magnam",
            },
            Origin: "debitis",
            URL: "ipsa",
        },
    }

    ctx := context.Background()
    res, err := s.Records.ChromeuxreportRecordsQueryHistoryRecord(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryHistoryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->