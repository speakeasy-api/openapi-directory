<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DomainsrdapAutnumGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    autnum_id="quibusdam",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.autnum.domainsrdap_autnum_get(req)

if res.rdap_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->