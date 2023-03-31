<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.TestingApplicationDetailServiceGetApkDetailsRequest(
    dollar_xgafv="2",
    file_reference=shared.FileReference(
        gcs_path="provident",
    ),
    access_token="distinctio",
    alt="proto",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.application_detail_service.testing_application_detail_service_get_apk_details(req, operations.TestingApplicationDetailServiceGetApkDetailsSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.get_apk_details_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->