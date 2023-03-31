<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CivicinfoDivisionsSearchRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pretty_print=False,
    query="illum",
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.divisions.civicinfo_divisions_search(req)

if res.division_search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->