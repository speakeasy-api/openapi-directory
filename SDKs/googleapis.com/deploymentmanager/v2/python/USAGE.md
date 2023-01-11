<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeploymentmanagerDeploymentsCancelPreviewRequest(
    security=operations.DeploymentmanagerDeploymentsCancelPreviewSecurity(
        option1=operations.DeploymentmanagerDeploymentsCancelPreviewSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.DeploymentmanagerDeploymentsCancelPreviewPathParams(
        deployment="qui",
        project="ut",
    ),
    query_params=operations.DeploymentmanagerDeploymentsCancelPreviewQueryParams(
        dollar_xgafv="2",
        access_token="aut",
        alt="proto",
        callback="ipsum",
        fields="corporis",
        key="quas",
        oauth_token="velit",
        pretty_print=True,
        quota_user="temporibus",
        upload_type="nihil",
        upload_protocol="nemo",
    ),
    request=shared.DeploymentsCancelPreviewRequest(
        fingerprint="nostrum",
    ),
)
    
res = s.deployments.deploymentmanager_deployments_cancel_preview(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->