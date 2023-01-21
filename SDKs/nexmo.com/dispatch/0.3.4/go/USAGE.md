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
    
    req := operations.CreateWorkflowRequest{
        Security: operations.CreateWorkflowSecurity{
            BearerAuth: &shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        Request: shared.CreateWorkflow{
            Template: "failover",
            Workflow: []interface{}{
                "culpa",
            },
        },
    }
    
    res, err := s.CreateWorkflow(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->