# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_studio_v2/1.40.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
        FlowSid: "corrupti",
        RequestBody: &operations.CreateExecutionCreateExecutionRequest{
            From: "provident",
            Parameters: "distinctio",
            To: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.CreateExecution(ctx, req, operations.CreateExecutionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowExecution != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateExecution` - Triggers a new Execution for the Flow
* `CreateFlow` - Create a Flow.
* `DeleteExecution` - Delete the Execution and all Steps relating to it.
* `DeleteFlow` - Delete a specific Flow.
* `FetchExecution` - Retrieve an Execution
* `FetchExecutionContext` - Retrieve the most recent context for an Execution.
* `FetchExecutionStep` - Retrieve a Step.
* `FetchExecutionStepContext` - Retrieve the context for an Execution Step.
* `FetchFlow` - Retrieve a specific Flow.
* `FetchFlowRevision` - Retrieve a specific Flow revision.
* `FetchTestUser` - Fetch flow test users
* `ListExecution` - Retrieve a list of all Executions for the Flow.
* `ListExecutionStep` - Retrieve a list of all Steps for an Execution.
* `ListFlow` - Retrieve a list of all Flows.
* `ListFlowRevision` - Retrieve a list of all Flows revisions.
* `UpdateExecution` - Update the status of an Execution to `ended`.
* `UpdateFlow` - Update a Flow.
* `UpdateFlowValidate` - Validate flow JSON definition
* `UpdateTestUser` - Update flow test users
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
