<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IapGetIamPolicyRequest(
    security=operations.IapGetIamPolicySecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.IapGetIamPolicyPathParams(
        resource="iste",
    ),
    query_params=operations.IapGetIamPolicyQueryParams(
        dollar_xgafv="1",
        access_token="et",
        alt="proto",
        callback="eos",
        fields="porro",
        key="quaerat",
        oauth_token="explicabo",
        pretty_print=False,
        quota_user="atque",
        upload_type="quidem",
        upload_protocol="qui",
    ),
    request=shared.GetIamPolicyRequest(
        options=shared.GetPolicyOptions(
            requested_policy_version=7392143701316706829,
        ),
    ),
)
    
res = s.v1beta1.iap_get_iam_policy(req)

if res.policy is not None:
    # handle response
```
<!-- End SDK Example Usage -->