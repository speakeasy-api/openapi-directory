<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Records.ChromeuxreportRecordsQueryHistoryRecord(ctx, operations.ChromeuxreportRecordsQueryHistoryRecordRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        QueryHistoryRequest: &shared.QueryHistoryRequest{
            FormFactor: shared.QueryHistoryRequestFormFactorEnumDesktop.ToPointer(),
            Metrics: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
            Origin: sdk.String("corrupti"),
            URL: sdk.String("illum"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryHistoryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->