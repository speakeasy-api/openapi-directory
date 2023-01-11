<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudtraceProjectsTraceSinksCreateRequest(
    security=operations.CloudtraceProjectsTraceSinksCreateSecurity(
        option1=operations.CloudtraceProjectsTraceSinksCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.CloudtraceProjectsTraceSinksCreatePathParams(
        parent="tenetur",
    ),
    query_params=operations.CloudtraceProjectsTraceSinksCreateQueryParams(
        dollar_xgafv="1",
        access_token="natus",
        alt="media",
        callback="culpa",
        fields="consectetur",
        key="iure",
        oauth_token="ab",
        pretty_print=False,
        quota_user="quibusdam",
        upload_type="ad",
        upload_protocol="dolor",
    ),
    request=shared.TraceSinkInput(
        name="aut",
        output_config=shared.OutputConfig(
            destination="odit",
        ),
    ),
)
    
res = s.projects.cloudtrace_projects_trace_sinks_create(req)

if res.trace_sink is not None:
    # handle response
```
<!-- End SDK Example Usage -->