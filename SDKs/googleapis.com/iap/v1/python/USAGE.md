<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.IapProjectsBrandsCreateRequest(
    dollar_xgafv="2",
    brand_input=shared.BrandInput(
        application_title="provident",
        support_email="distinctio",
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    parent="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.projects.iap_projects_brands_create(req, operations.IapProjectsBrandsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.brand is not None:
    # handle response
```
<!-- End SDK Example Usage -->