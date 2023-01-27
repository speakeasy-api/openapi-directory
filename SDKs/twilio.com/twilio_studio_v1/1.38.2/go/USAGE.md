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
    
    req := operations.CreateEngagementRequest{
        Security: operations.CreateEngagementSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateEngagementPathParams{
            FlowSid: "sit",
        },
        Request: &operations.CreateEngagementCreateEngagementRequest{
            From: "voluptas",
            Parameters: "culpa",
            To: "expedita",
        },
    }
    
    res, err := s.CreateEngagement(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowEngagement != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->