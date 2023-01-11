<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest(
    security=operations.ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyPathParams(
        resource="rem",
    ),
    query_params=operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyQueryParams(
        dollar_xgafv="2",
        access_token="qui",
        alt="proto",
        callback="sunt",
        fields="quod",
        key="quod",
        oauth_token="eum",
        options_requested_policy_version=6698909092157368366,
        pretty_print=False,
        quota_user="ut",
        upload_type="eligendi",
        upload_protocol="est",
    ),
)
    
res = s.projects.apigateway_projects_locations_gateways_get_iam_policy(req)

if res.apigateway_policy is not None:
    # handle response
```
<!-- End SDK Example Usage -->