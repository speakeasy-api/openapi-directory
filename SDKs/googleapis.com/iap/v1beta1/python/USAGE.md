<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.IapGetIamPolicyRequest(
    dollar_xgafv="2",
    get_iam_policy_request=shared.GetIamPolicyRequest(
        options=shared.GetPolicyOptions(
            requested_policy_version=592845,
        ),
    ),
    access_token="distinctio",
    alt="proto",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    resource="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.v1beta1.iap_get_iam_policy(req, operations.IapGetIamPolicySecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.policy is not None:
    # handle response
```
<!-- End SDK Example Usage -->