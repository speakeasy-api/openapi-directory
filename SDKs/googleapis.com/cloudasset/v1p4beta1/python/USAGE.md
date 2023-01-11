<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudassetAnalyzeIamPolicyRequest(
    security=operations.CloudassetAnalyzeIamPolicySecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudassetAnalyzeIamPolicyPathParams(
        parent="minus",
    ),
    query_params=operations.CloudassetAnalyzeIamPolicyQueryParams(
        dollar_xgafv="1",
        access_token="eligendi",
        alt="proto",
        analysis_query_access_selector_permissions=[
            "voluptatem",
            "culpa",
            "voluptas",
        ],
        analysis_query_access_selector_roles=[
            "velit",
            "et",
            "voluptates",
        ],
        analysis_query_identity_selector_identity="sunt",
        analysis_query_resource_selector_full_resource_name="neque",
        callback="iste",
        fields="aut",
        key="quae",
        oauth_token="fugit",
        options_analyze_service_account_impersonation=True,
        options_execution_timeout="tempora",
        options_expand_groups=True,
        options_expand_resources=True,
        options_expand_roles=True,
        options_output_group_edges=False,
        options_output_resource_edges=True,
        pretty_print=False,
        quota_user="reprehenderit",
        upload_type="iusto",
        upload_protocol="ex",
    ),
)
    
res = s.v1p4beta1.cloudasset_analyze_iam_policy(req)

if res.analyze_iam_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->