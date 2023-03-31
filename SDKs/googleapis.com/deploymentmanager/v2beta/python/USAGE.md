<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeploymentmanagerCompositeTypesDeleteRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    composite_type="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    project="vel",
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.composite_types.deploymentmanager_composite_types_delete(req, operations.DeploymentmanagerCompositeTypesDeleteSecurity(
    option1=operations.DeploymentmanagerCompositeTypesDeleteSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->