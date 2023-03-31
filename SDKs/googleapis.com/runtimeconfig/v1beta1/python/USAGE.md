<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RuntimeconfigProjectsConfigsCreateRequest(
    dollar_xgafv="2",
    runtime_config=shared.RuntimeConfig(
        description="provident",
        name="distinctio",
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
    request_id="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.projects.runtimeconfig_projects_configs_create(req, operations.RuntimeconfigProjectsConfigsCreateSecurity(
    option1=operations.RuntimeconfigProjectsConfigsCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.runtime_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->