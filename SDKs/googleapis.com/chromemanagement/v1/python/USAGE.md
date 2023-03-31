<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    customer="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    order_by="vel",
    org_unit_id="error",
    page_size=645894,
    page_token="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.customers.chromemanagement_customers_apps_count_chrome_app_requests(req, operations.ChromemanagementCustomersAppsCountChromeAppRequestsSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_chrome_management_v1_count_chrome_app_requests_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->