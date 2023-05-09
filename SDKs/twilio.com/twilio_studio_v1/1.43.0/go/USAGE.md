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
    res, err := s.CreateEngagement(ctx, operations.CreateEngagementRequest{
        FlowSid: "corrupti",
        RequestBody: &operations.CreateEngagementCreateEngagementRequest{
            From: "provident",
            Parameters: sdk.String("distinctio"),
            To: "quibusdam",
        },
    }, operations.CreateEngagementSecurity{
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