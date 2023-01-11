<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IamIamPoliciesLintPolicyRequest(
    security=operations.IamIamPoliciesLintPolicySecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.IamIamPoliciesLintPolicyQueryParams(
        dollar_xgafv="2",
        access_token="repudiandae",
        alt="media",
        callback="occaecati",
        fields="officia",
        key="ducimus",
        oauth_token="nihil",
        pretty_print=False,
        quota_user="velit",
        upload_type="ipsam",
        upload_protocol="aut",
    ),
    request=shared.LintPolicyRequest(
        condition=shared.Expr(
            description="qui",
            expression="necessitatibus",
            location="voluptas",
            title="qui",
        ),
        full_resource_name="quisquam",
    ),
)
    
res = s.iam_policies.iam_iam_policies_lint_policy(req)

if res.lint_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->