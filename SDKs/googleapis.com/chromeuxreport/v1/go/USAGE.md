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
        DollarXgafv: "2",
        QueryHistoryRequest: &shared.QueryHistoryRequest{
            FormFactor: "DESKTOP",
            Metrics: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
            Origin: "corrupti",
            URL: "illum",
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        OauthToken: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        UploadType: "ipsa",
        UploadProtocol: "delectus",
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