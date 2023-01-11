<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FactchecktoolsClaimsSearchRequest(
    query_params=operations.FactchecktoolsClaimsSearchQueryParams(
        dollar_xgafv="2",
        access_token="porro",
        alt="json",
        callback="eos",
        fields="voluptatibus",
        key="et",
        language_code="voluptatum",
        max_age_days=531498979884209372,
        oauth_token="est",
        offset=718631122271686376,
        page_size=2768331678206913841,
        page_token="quo",
        pretty_print=False,
        query="in",
        quota_user="sint",
        review_publisher_site_filter="et",
        upload_type="sapiente",
        upload_protocol="harum",
    ),
)
    
res = s.claims.factchecktools_claims_search(req)

if res.google_factchecking_factchecktools_v1alpha1_fact_checked_claim_search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->