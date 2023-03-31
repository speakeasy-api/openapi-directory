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

    req := shared.CreateWorkflow{
        Template: "failover",
        Workflow: []shared.CreateWorkflowWorkflow{
            shared.CreateWorkflowWorkflow{},
            shared.CreateWorkflowWorkflow{},
            shared.CreateWorkflowWorkflow{},
        },
    }

    ctx := context.Background()
    res, err := s.CreateWorkflow(ctx, req, operations.CreateWorkflowSecurity{
        BasicAuth: &shared.SchemeBasicAuth{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->