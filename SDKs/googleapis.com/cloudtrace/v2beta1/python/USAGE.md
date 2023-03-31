<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudtraceProjectsTraceSinksCreateRequest(
    dollar_xgafv="2",
    trace_sink_input=shared.TraceSinkInput(
        name="provident",
        output_config=shared.OutputConfig(
            destination="distinctio",
        ),
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    parent="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.projects.cloudtrace_projects_trace_sinks_create(req, operations.CloudtraceProjectsTraceSinksCreateSecurity(
    option1=operations.CloudtraceProjectsTraceSinksCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.trace_sink is not None:
    # handle response
```
<!-- End SDK Example Usage -->