<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.KmsinventoryOrganizationsProtectedResourcesSearchRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    crypto_key="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    page_size=423655,
    page_token="error",
    pretty_print=False,
    quota_user="deserunt",
    scope="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.organizations.kmsinventory_organizations_protected_resources_search(req, operations.KmsinventoryOrganizationsProtectedResourcesSearchSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_kms_inventory_v1_search_protected_resources_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->