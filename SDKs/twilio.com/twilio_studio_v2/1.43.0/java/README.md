# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExecutionCreateExecutionRequest;
import org.openapis.openapi.models.operations.CreateExecutionRequest;
import org.openapis.openapi.models.operations.CreateExecutionResponse;
import org.openapis.openapi.models.operations.CreateExecutionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateExecutionRequest req = new CreateExecutionRequest("corrupti") {{
                requestBody = new CreateExecutionCreateExecutionRequest("provident", "distinctio") {{
                    parameters = "quibusdam";
                }};;
            }};            

            CreateExecutionResponse res = sdk.createExecution(req, new CreateExecutionSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV2FlowExecution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createExecution](docs/sdk/README.md#createexecution) - Triggers a new Execution for the Flow
* [createFlow](docs/sdk/README.md#createflow) - Create a Flow.
* [deleteExecution](docs/sdk/README.md#deleteexecution) - Delete the Execution and all Steps relating to it.
* [deleteFlow](docs/sdk/README.md#deleteflow) - Delete a specific Flow.
* [fetchExecution](docs/sdk/README.md#fetchexecution) - Retrieve an Execution
* [fetchExecutionContext](docs/sdk/README.md#fetchexecutioncontext) - Retrieve the most recent context for an Execution.
* [fetchExecutionStep](docs/sdk/README.md#fetchexecutionstep) - Retrieve a Step.
* [fetchExecutionStepContext](docs/sdk/README.md#fetchexecutionstepcontext) - Retrieve the context for an Execution Step.
* [fetchFlow](docs/sdk/README.md#fetchflow) - Retrieve a specific Flow.
* [fetchFlowRevision](docs/sdk/README.md#fetchflowrevision) - Retrieve a specific Flow revision.
* [fetchTestUser](docs/sdk/README.md#fetchtestuser) - Fetch flow test users
* [listExecution](docs/sdk/README.md#listexecution) - Retrieve a list of all Executions for the Flow.
* [listExecutionStep](docs/sdk/README.md#listexecutionstep) - Retrieve a list of all Steps for an Execution.
* [listFlow](docs/sdk/README.md#listflow) - Retrieve a list of all Flows.
* [listFlowRevision](docs/sdk/README.md#listflowrevision) - Retrieve a list of all Flows revisions.
* [updateExecution](docs/sdk/README.md#updateexecution) - Update the status of an Execution to `ended`.
* [updateFlow](docs/sdk/README.md#updateflow) - Update a Flow.
* [updateFlowValidate](docs/sdk/README.md#updateflowvalidate) - Validate flow JSON definition
* [updateTestUser](docs/sdk/README.md#updatetestuser) - Update flow test users
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
