# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_studio_v1/1.43.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateEngagement](docs/sdk/README.md#createengagement) - Triggers a new Engagement for the Flow
* [CreateExecution](docs/sdk/README.md#createexecution) - Triggers a new Execution for the Flow
* [DeleteEngagement](docs/sdk/README.md#deleteengagement) - Delete this Engagement and all Steps relating to it.
* [DeleteExecution](docs/sdk/README.md#deleteexecution) - Delete the Execution and all Steps relating to it.
* [DeleteFlow](docs/sdk/README.md#deleteflow) - Delete a specific Flow.
* [FetchEngagement](docs/sdk/README.md#fetchengagement) - Retrieve an Engagement
* [FetchEngagementContext](docs/sdk/README.md#fetchengagementcontext) - Retrieve the most recent context for an Engagement.
* [FetchExecution](docs/sdk/README.md#fetchexecution) - Retrieve an Execution
* [FetchExecutionContext](docs/sdk/README.md#fetchexecutioncontext) - Retrieve the most recent context for an Execution.
* [FetchExecutionStep](docs/sdk/README.md#fetchexecutionstep) - Retrieve a Step.
* [FetchExecutionStepContext](docs/sdk/README.md#fetchexecutionstepcontext) - Retrieve the context for an Execution Step.
* [FetchFlow](docs/sdk/README.md#fetchflow) - Retrieve a specific Flow.
* [FetchStep](docs/sdk/README.md#fetchstep) - Retrieve a Step.
* [FetchStepContext](docs/sdk/README.md#fetchstepcontext) - Retrieve the context for an Engagement Step.
* [ListEngagement](docs/sdk/README.md#listengagement) - Retrieve a list of all Engagements for the Flow.
* [ListExecution](docs/sdk/README.md#listexecution) - Retrieve a list of all Executions for the Flow.
* [ListExecutionStep](docs/sdk/README.md#listexecutionstep) - Retrieve a list of all Steps for an Execution.
* [ListFlow](docs/sdk/README.md#listflow) - Retrieve a list of all Flows.
* [ListStep](docs/sdk/README.md#liststep) - Retrieve a list of all Steps for an Engagement.
* [UpdateExecution](docs/sdk/README.md#updateexecution) - Update the status of an Execution to `ended`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
