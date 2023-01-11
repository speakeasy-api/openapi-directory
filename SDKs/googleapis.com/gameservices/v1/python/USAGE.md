<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyRequest(
    security=operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicySecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyPathParams(
        resource="et",
    ),
    query_params=operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams(
        dollar_xgafv="1",
        access_token="tenetur",
        alt="json",
        callback="aperiam",
        fields="non",
        key="consequatur",
        oauth_token="quibusdam",
        options_requested_policy_version=1192596441993014261,
        pretty_print=True,
        quota_user="amet",
        upload_type="quaerat",
        upload_protocol="sed",
    ),
)
    
res = s.projects.gameservices_projects_locations_game_server_deployments_get_iam_policy(req)

if res.policy is not None:
    # handle response
```
<!-- End SDK Example Usage -->