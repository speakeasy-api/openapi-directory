<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateExportCustomJob(ctx, operations.CreateExportCustomJobRequest{
        RequestBody: &operations.CreateExportCustomJobCreateExportCustomJobRequest{
            Email: sdk.String("Larue_Rau85@yahoo.com"),
            EndDay: "corrupti",
            FriendlyName: "illum",
            StartDay: "vel",
            WebhookMethod: sdk.String("error"),
            WebhookURL: sdk.String("deserunt"),
        },
        ResourceType: "suscipit",
    }, operations.CreateExportCustomJobSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkexportsV1ExportExportCustomJob != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->