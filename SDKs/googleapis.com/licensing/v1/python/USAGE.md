<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.LicensingLicenseAssignmentsDeleteRequest(
    security=operations.LicensingLicenseAssignmentsDeleteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.LicensingLicenseAssignmentsDeletePathParams(
        product_id="unde",
        sku_id="sed",
        user_id="et",
    ),
    query_params=operations.LicensingLicenseAssignmentsDeleteQueryParams(
        dollar_xgafv="2",
        access_token="temporibus",
        alt="media",
        callback="iure",
        fields="facere",
        key="iste",
        oauth_token="aut",
        pretty_print=False,
        quota_user="dignissimos",
        upload_type="ipsam",
        upload_protocol="voluptatem",
    ),
)
    
res = s.license_assignments.licensing_license_assignments_delete(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->