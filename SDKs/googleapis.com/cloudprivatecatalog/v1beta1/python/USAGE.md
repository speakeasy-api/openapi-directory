<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudprivatecatalogOrganizationsCatalogsSearchRequest(
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
    resource="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.organizations.cloudprivatecatalog_organizations_catalogs_search(req, operations.CloudprivatecatalogOrganizationsCatalogsSearchSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->