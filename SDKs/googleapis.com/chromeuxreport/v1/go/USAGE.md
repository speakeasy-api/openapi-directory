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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.QueryHistoryRequest{
            FormFactor: "DESKTOP",
            Metrics: []string{
                "iusto",
                "ullam",
            },
            Origin: "saepe",
            URL: "inventore",
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