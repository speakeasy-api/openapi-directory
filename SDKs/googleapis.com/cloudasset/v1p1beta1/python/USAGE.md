<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudassetIamPoliciesSearchAllRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    page_size=847252,
    page_token="vel",
    pretty_print=False,
    query="error",
    quota_user="deserunt",
    scope="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.iam_policies.cloudasset_iam_policies_search_all(req, operations.CloudassetIamPoliciesSearchAllSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.search_all_iam_policies_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->