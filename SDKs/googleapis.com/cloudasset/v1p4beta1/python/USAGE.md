<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudassetAnalyzeIamPolicyRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    analysis_query_access_selector_permissions=[
        "unde",
        "nulla",
        "corrupti",
        "illum",
    ],
    analysis_query_access_selector_roles=[
        "error",
        "deserunt",
    ],
    analysis_query_identity_selector_identity="suscipit",
    analysis_query_resource_selector_full_resource_name="iure",
    callback="magnam",
    fields_="debitis",
    key="ipsa",
    oauth_token="delectus",
    options_analyze_service_account_impersonation=False,
    options_execution_timeout="tempora",
    options_expand_groups=False,
    options_expand_resources=False,
    options_expand_roles=False,
    options_output_group_edges=False,
    options_output_resource_edges=False,
    parent="suscipit",
    pretty_print=False,
    quota_user="molestiae",
    upload_type="minus",
    upload_protocol="placeat",
)
    
res = s.v1p4beta1.cloudasset_analyze_iam_policy(req, operations.CloudassetAnalyzeIamPolicySecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.analyze_iam_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->