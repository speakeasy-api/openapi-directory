<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeploymentmanagerCompositeTypesDeleteRequest(
    security=operations.DeploymentmanagerCompositeTypesDeleteSecurity(
        option1=operations.DeploymentmanagerCompositeTypesDeleteSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.DeploymentmanagerCompositeTypesDeletePathParams(
        composite_type="omnis",
        project="velit",
    ),
    query_params=operations.DeploymentmanagerCompositeTypesDeleteQueryParams(
        dollar_xgafv="2",
        access_token="nulla",
        alt="media",
        callback="velit",
        fields="et",
        key="velit",
        oauth_token="et",
        pretty_print=False,
        quota_user="voluptas",
        upload_type="ab",
        upload_protocol="sed",
    ),
)
    
res = s.composite_types.deploymentmanager_composite_types_delete(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->