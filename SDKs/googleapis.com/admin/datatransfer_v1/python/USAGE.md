<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatatransferApplicationsGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    application_id="quibusdam",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.applications.datatransfer_applications_get(req, operations.DatatransferApplicationsGetSecurity(
    option1=operations.DatatransferApplicationsGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.application is not None:
    # handle response
```
<!-- End SDK Example Usage -->