# SDK

## Overview

The Dispatch API enables the developer to specify a multiple message workflow. A workflow follows a template. The first one we are adding is the failover template. The failover template instructs the Messages API to first send a message to the specified channel. If that message fails immediately or if the condition_status is not reached within the given time period the next message is sent. The developer will also receive status webhooks from the messages resource for each delivery and read event. This API is currently in Beta.

### Available Operations

* [CreateWorkflow](#createworkflow) - Create a workflow

## CreateWorkflow

Create a workflow

### Example Usage

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
    res, err := s.SDK.CreateWorkflow(ctx, shared.CreateWorkflow{
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
