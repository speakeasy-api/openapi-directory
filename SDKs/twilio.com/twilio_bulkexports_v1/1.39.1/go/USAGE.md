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
        Security: operations.CreateExportCustomJobSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateExportCustomJobPathParams{
            ResourceType: "unde",
        },
        Request: &operations.CreateExportCustomJobCreateExportCustomJobRequest{
            Email: "Michale_Sporer@yahoo.com",
            EndDay: "perspiciatis",
            FriendlyName: "nulla",
            StartDay: "nihil",
            WebhookMethod: "fuga",
            WebhookURL: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.CreateExportCustomJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkexportsV1ExportExportCustomJob != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->