<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ScriptProcessesListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    page_size=847252,
    page_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
    user_process_filter_deployment_id="iure",
    user_process_filter_end_time="magnam",
    user_process_filter_function_name="debitis",
    user_process_filter_project_name="ipsa",
    user_process_filter_script_id="delectus",
    user_process_filter_start_time="tempora",
    user_process_filter_statuses=[
        "CANCELED",
        "UNKNOWN",
    ],
    user_process_filter_types=[
        "WEBAPP",
        "TRIGGER",
        "WEBAPP",
        "TIME_DRIVEN",
    ],
    user_process_filter_user_access_levels=[
        "OWNER",
        "USER_ACCESS_LEVEL_UNSPECIFIED",
        "NONE",
        "USER_ACCESS_LEVEL_UNSPECIFIED",
    ],
)
    
res = s.processes.script_processes_list(req, operations.ScriptProcessesListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.list_user_processes_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->