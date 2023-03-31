<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.LicensingLicenseAssignmentsDeleteRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pretty_print=False,
    product_id="illum",
    quota_user="vel",
    sku_id="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
    user_id="iure",
)
    
res = s.license_assignments.licensing_license_assignments_delete(req, operations.LicensingLicenseAssignmentsDeleteSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->