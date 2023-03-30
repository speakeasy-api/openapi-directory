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

    req := operations.CreateExecutionRequest{
        Security: operations.CreateExecutionSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateExecutionPathParams{
            FlowSid: "corrupti",
        },
        Request: &operations.CreateExecutionCreateExecutionRequest{
            From: "provident",
            Parameters: "distinctio",
            To: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.CreateExecution(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowExecution != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->