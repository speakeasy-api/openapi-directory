# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_studio_v2/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateExecutionRequest(
    flow_sid="corrupti",
    request_body=operations.CreateExecutionCreateExecutionRequest(
        from_="provident",
        parameters="distinctio",
        to="quibusdam",
    ),
)
    
res = s.create_execution(req, operations.CreateExecutionSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.studio_v2_flow_execution is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_execution` - Triggers a new Execution for the Flow
* `create_flow` - Create a Flow.
* `delete_execution` - Delete the Execution and all Steps relating to it.
* `delete_flow` - Delete a specific Flow.
* `fetch_execution` - Retrieve an Execution
* `fetch_execution_context` - Retrieve the most recent context for an Execution.
* `fetch_execution_step` - Retrieve a Step.
* `fetch_execution_step_context` - Retrieve the context for an Execution Step.
* `fetch_flow` - Retrieve a specific Flow.
* `fetch_flow_revision` - Retrieve a specific Flow revision.
* `fetch_test_user` - Fetch flow test users
* `list_execution` - Retrieve a list of all Executions for the Flow.
* `list_execution_step` - Retrieve a list of all Steps for an Execution.
* `list_flow` - Retrieve a list of all Flows.
* `list_flow_revision` - Retrieve a list of all Flows revisions.
* `update_execution` - Update the status of an Execution to `ended`.
* `update_flow` - Update a Flow.
* `update_flow_validate` - Validate flow JSON definition
* `update_test_user` - Update flow test users
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
