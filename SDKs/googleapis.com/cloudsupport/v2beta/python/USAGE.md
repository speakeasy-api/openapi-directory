<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudsupportCaseClassificationsSearchRequest(
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
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.case_classifications.cloudsupport_case_classifications_search(req, operations.CloudsupportCaseClassificationsSearchSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.search_case_classifications_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->