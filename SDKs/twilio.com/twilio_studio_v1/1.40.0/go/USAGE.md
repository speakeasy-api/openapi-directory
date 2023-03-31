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

    req := operations.CreateEngagementRequest{
        FlowSid: "corrupti",
        RequestBody: &operations.CreateEngagementCreateEngagementRequest{
            From: "provident",
            Parameters: "distinctio",
            To: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.CreateEngagement(ctx, req, operations.CreateEngagementSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowEngagement != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->