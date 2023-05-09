<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/callbacks"
	"net/http"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateWorkflow(ctx, shared.CreateWorkflow{
        Template: shared.CreateWorkflowTemplateEnumFailover.ToPointer(),
        Workflow: []shared.CreateWorkflowWorkflow{
            shared.CreateWorkflowWorkflow{},
            shared.CreateWorkflowWorkflow{},
            shared.CreateWorkflowWorkflow{},
        },
    }, operations.CreateWorkflowSecurity{
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