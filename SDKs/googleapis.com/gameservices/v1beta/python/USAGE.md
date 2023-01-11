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
        resource="sint",
    ),
    query_params=operations.GameservicesProjectsLocationsGameServerDeploymentsGetIamPolicyQueryParams(
        dollar_xgafv="1",
        access_token="aut",
        alt="media",
        callback="debitis",
        fields="neque",
        key="inventore",
        oauth_token="quasi",
        options_requested_policy_version=1791742271808730576,
        pretty_print=False,
        quota_user="nobis",
        upload_type="rerum",
        upload_protocol="eaque",
    ),
)
    
res = s.projects.gameservices_projects_locations_game_server_deployments_get_iam_policy(req)

if res.policy is not None:
    # handle response
```
<!-- End SDK Example Usage -->