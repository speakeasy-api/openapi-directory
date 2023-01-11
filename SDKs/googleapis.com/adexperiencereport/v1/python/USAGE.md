<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AdexperiencereportSitesGetRequest(
    path_params=operations.AdexperiencereportSitesGetPathParams(
        name="in",
    ),
    query_params=operations.AdexperiencereportSitesGetQueryParams(
        dollar_xgafv="2",
        access_token="illum",
        alt="media",
        callback="earum",
        fields="temporibus",
        key="earum",
        oauth_token="esse",
        pretty_print=False,
        quota_user="doloremque",
        upload_type="deserunt",
        upload_protocol="maiores",
    ),
)
    
res = s.sites.adexperiencereport_sites_get(req)

if res.site_summary_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->