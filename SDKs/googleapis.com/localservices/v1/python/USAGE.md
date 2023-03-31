<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.LocalservicesAccountReportsSearchRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    end_date_day=602763,
    end_date_month=857946,
    end_date_year=544883,
    fields_="illum",
    key="vel",
    oauth_token="error",
    page_size=645894,
    page_token="suscipit",
    pretty_print=False,
    query="iure",
    quota_user="magnam",
    start_date_day=891773,
    start_date_month=56713,
    start_date_year=963663,
    upload_type="tempora",
    upload_protocol="suscipit",
)
    
res = s.account_reports.localservices_account_reports_search(req, operations.LocalservicesAccountReportsSearchSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_ads_homeservices_localservices_v1_search_account_reports_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->