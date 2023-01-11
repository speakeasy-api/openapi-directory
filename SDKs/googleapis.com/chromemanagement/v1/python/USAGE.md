<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest(
    security=operations.ChromemanagementCustomersAppsCountChromeAppRequestsSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ChromemanagementCustomersAppsCountChromeAppRequestsPathParams(
        customer="sed",
    ),
    query_params=operations.ChromemanagementCustomersAppsCountChromeAppRequestsQueryParams(
        dollar_xgafv="2",
        access_token="ut",
        alt="media",
        callback="nulla",
        fields="ipsa",
        key="quia",
        oauth_token="veniam",
        order_by="cumque",
        org_unit_id="quae",
        page_size=7705353118515142715,
        page_token="est",
        pretty_print=True,
        quota_user="dolore",
        upload_type="odit",
        upload_protocol="ipsum",
    ),
)
    
res = s.customers.chromemanagement_customers_apps_count_chrome_app_requests(req)

if res.google_chrome_management_v1_count_chrome_app_requests_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->