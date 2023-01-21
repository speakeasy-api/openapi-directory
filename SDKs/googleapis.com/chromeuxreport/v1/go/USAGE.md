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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.QueryRequest{
            EffectiveConnectionType: "rerum",
            FormFactor: "TABLET",
            Metrics: []string{
                "voluptatum",
            },
            Origin: "et",
            URL: "ut",
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