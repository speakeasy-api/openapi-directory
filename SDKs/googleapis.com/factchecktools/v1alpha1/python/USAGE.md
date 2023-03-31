<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FactchecktoolsClaimsSearchRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    language_code="corrupti",
    max_age_days=847252,
    oauth_token="vel",
    offset=623564,
    page_size=645894,
    page_token="suscipit",
    pretty_print=False,
    query="iure",
    quota_user="magnam",
    review_publisher_site_filter="debitis",
    upload_type="ipsa",
    upload_protocol="delectus",
)
    
res = s.claims.factchecktools_claims_search(req)

if res.google_factchecking_factchecktools_v1alpha1_fact_checked_claim_search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->