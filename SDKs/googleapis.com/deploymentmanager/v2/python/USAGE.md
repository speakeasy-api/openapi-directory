<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeploymentmanagerDeploymentsCancelPreviewRequest(
    dollar_xgafv="2",
    deployments_cancel_preview_request=shared.DeploymentsCancelPreviewRequest(
        fingerprint="provident",
    ),
    access_token="distinctio",
    alt="proto",
    callback="unde",
    deployment="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    project="error",
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.deployments.deploymentmanager_deployments_cancel_preview(req, operations.DeploymentmanagerDeploymentsCancelPreviewSecurity(
    option1=operations.DeploymentmanagerDeploymentsCancelPreviewSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->