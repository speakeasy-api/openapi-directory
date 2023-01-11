<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudassetIamPoliciesSearchAllRequest(
    security=operations.CloudassetIamPoliciesSearchAllSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudassetIamPoliciesSearchAllPathParams(
        scope="eveniet",
    ),
    query_params=operations.CloudassetIamPoliciesSearchAllQueryParams(
        dollar_xgafv="2",
        access_token="in",
        alt="media",
        callback="vitae",
        fields="ut",
        key="magni",
        oauth_token="reiciendis",
        page_size=1379337464305259067,
        page_token="nesciunt",
        pretty_print=False,
        query="ut",
        quota_user="magni",
        upload_type="architecto",
        upload_protocol="alias",
    ),
)
    
res = s.iam_policies.cloudasset_iam_policies_search_all(req)

if res.search_all_iam_policies_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->