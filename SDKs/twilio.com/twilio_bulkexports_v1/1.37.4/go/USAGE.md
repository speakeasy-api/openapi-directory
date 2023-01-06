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
    
    req := operations.CreateExportCustomJobRequest{
        Security: operations.CreateExportCustomJobSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateExportCustomJobPathParams{
            ResourceType: "nobis",
        },
        Request: &operations.CreateExportCustomJobCreateExportCustomJobRequest{
            Email: "repellendus",
            EndDay: "qui",
            FriendlyName: "et",
            StartDay: "voluptatibus",
            WebhookMethod: "voluptas",
            WebhookURL: "repellat",
        },
    }
    
    res, err := s.CreateExportCustomJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkexportsV1ExportExportCustomJob != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->