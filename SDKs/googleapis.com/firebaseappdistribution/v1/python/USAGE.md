<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirebaseappdistributionMediaUploadRequest(
    dollar_xgafv="2",
    request_body="provident".encode(),
    access_token="distinctio",
    alt="proto",
    app="unde",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.media.firebaseappdistribution_media_upload(req, operations.FirebaseappdistributionMediaUploadSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->