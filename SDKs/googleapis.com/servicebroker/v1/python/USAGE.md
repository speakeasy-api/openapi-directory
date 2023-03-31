<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ServicebrokerGetIamPolicyRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    options_requested_policy_version=847252,
    pretty_print=False,
    quota_user="vel",
    resource="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.v1.servicebroker_get_iam_policy(req, operations.ServicebrokerGetIamPolicySecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->