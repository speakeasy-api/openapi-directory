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

    req := operations.CreateExportCustomJobRequest{
        RequestBody: &operations.CreateExportCustomJobCreateExportCustomJobRequest{
            Email: "Larue_Rau85@yahoo.com",
            EndDay: "corrupti",
            FriendlyName: "illum",
            StartDay: "vel",
            WebhookMethod: "error",
            WebhookURL: "deserunt",
        },
        ResourceType: "suscipit",
    }

    ctx := context.Background()
    res, err := s.CreateExportCustomJob(ctx, req, operations.CreateExportCustomJobSecurity{
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