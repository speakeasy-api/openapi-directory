# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_taskrouter_v1/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateActivityRequest(
    request_body=operations.CreateActivityCreateActivityRequest(
        available=False,
        friendly_name="corrupti",
    ),
    workspace_sid="provident",
)
    
res = s.create_activity(req, operations.CreateActivitySecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.taskrouter_v1_workspace_activity is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_activity`
* `create_task`
* `create_task_channel`
* `create_task_queue`
* `create_worker`
* `create_workflow`
* `create_workspace`
* `delete_activity`
* `delete_task`
* `delete_task_channel`
* `delete_task_queue`
* `delete_worker`
* `delete_workflow`
* `delete_workspace`
* `fetch_activity`
* `fetch_event`
* `fetch_task`
* `fetch_task_channel`
* `fetch_task_queue`
* `fetch_task_queue_cumulative_statistics`
* `fetch_task_queue_real_time_statistics`
* `fetch_task_queue_statistics`
* `fetch_task_reservation`
* `fetch_worker`
* `fetch_worker_channel`
* `fetch_worker_instance_statistics`
* `fetch_worker_reservation`
* `fetch_worker_statistics`
* `fetch_workers_cumulative_statistics`
* `fetch_workers_real_time_statistics`
* `fetch_workflow`
* `fetch_workflow_cumulative_statistics`
* `fetch_workflow_real_time_statistics`
* `fetch_workflow_statistics`
* `fetch_workspace`
* `fetch_workspace_cumulative_statistics`
* `fetch_workspace_real_time_statistics`
* `fetch_workspace_statistics`
* `list_activity`
* `list_event`
* `list_task`
* `list_task_channel`
* `list_task_queue`
* `list_task_queues_statistics`
* `list_task_reservation`
* `list_worker`
* `list_worker_channel`
* `list_worker_reservation`
* `list_workflow`
* `list_workspace`
* `update_activity`
* `update_task`
* `update_task_channel`
* `update_task_queue`
* `update_task_reservation`
* `update_worker`
* `update_worker_channel`
* `update_worker_reservation`
* `update_workflow`
* `update_workspace`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
