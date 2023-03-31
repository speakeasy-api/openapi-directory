<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ClouddebuggerControllerDebuggeesBreakpointsListRequest(
    dollar_xgafv="2",
    access_token="provident",
    agent_id="distinctio",
    alt="proto",
    callback="unde",
    debuggee_id="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    success_on_timeout=False,
    upload_type="deserunt",
    upload_protocol="suscipit",
    wait_token="iure",
)
    
res = s.controller.clouddebugger_controller_debuggees_breakpoints_list(req, operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurity(
    option1=operations.ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.list_active_breakpoints_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->