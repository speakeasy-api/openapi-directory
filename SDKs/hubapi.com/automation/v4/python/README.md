# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/hubapi.com/automation/v4/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.BatchInputCallbackCompletionBatchRequest(
    inputs=[
        shared.CallbackCompletionBatchRequest(
            callback_id="provident",
            output_fields={
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
        ),
        shared.CallbackCompletionBatchRequest(
            callback_id="error",
            output_fields={
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
        ),
        shared.CallbackCompletionBatchRequest(
            callback_id="tempora",
            output_fields={
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
        ),
    ],
)
    
res = s.callbacks.post_automation_v4_actions_callbacks_complete_complete_batch(req, operations.PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity(
    hapikey="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### callbacks

* `post_automation_v4_actions_callbacks_complete_complete_batch` - Complete a batch of callbacks
* `post_automation_v4_actions_callbacks_callback_id_complete_complete` - Complete a callback

### definitions

* `delete_automation_v4_actions_app_id_definition_id_archive` - Archive a custom action
* `get_automation_v4_actions_app_id_definition_id_get_by_id` - Get a custom action
* `get_automation_v4_actions_app_id_get_page` - Get all custom actions
* `patch_automation_v4_actions_app_id_definition_id_update` - Update a custom action
* `post_automation_v4_actions_app_id_create` - Create new custom action

### functions

* `delete_automation_v4_actions_app_id_definition_id_functions_function_type_function_id_archive` - Delete a custom action function
* `delete_automation_v4_actions_app_id_definition_id_functions_function_type_archive_by_function_type` - Delete a custom action function
* `get_automation_v4_actions_app_id_definition_id_functions_function_type_function_id_get_by_id` - Get a custom action function
* `get_automation_v4_actions_app_id_definition_id_functions_function_type_get_by_function_type` - Get a custom action function
* `get_automation_v4_actions_app_id_definition_id_functions_get_page` - Get all custom action functions
* `put_automation_v4_actions_app_id_definition_id_functions_function_type_function_id_create_or_replace` - Create or replace a custom action function
* `put_automation_v4_actions_app_id_definition_id_functions_function_type_create_or_replace_by_function_type` - Create or replace a custom action function

### revisions

* `get_automation_v4_actions_app_id_definition_id_revisions_revision_id_get_by_id` - Get a revision for a custom action
* `get_automation_v4_actions_app_id_definition_id_revisions_get_page` - Get all revisions for a custom action
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
