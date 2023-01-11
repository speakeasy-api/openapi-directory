<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ServicebrokerGetIamPolicyRequest(
    security=operations.ServicebrokerGetIamPolicySecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ServicebrokerGetIamPolicyPathParams(
        resource="tempora",
    ),
    query_params=operations.ServicebrokerGetIamPolicyQueryParams(
        dollar_xgafv="2",
        access_token="eveniet",
        alt="media",
        callback="quo",
        fields="quam",
        key="perspiciatis",
        oauth_token="saepe",
        options_requested_policy_version=7684993788770030621,
        pretty_print=False,
        quota_user="sunt",
        upload_type="vero",
        upload_protocol="aut",
    ),
)
    
res = s.v1.servicebroker_get_iam_policy(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->