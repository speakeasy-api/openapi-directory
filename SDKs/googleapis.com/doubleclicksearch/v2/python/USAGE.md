<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DoubleclicksearchConversionGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    ad_group_id="distinctio",
    ad_id="quibusdam",
    advertiser_id="unde",
    agency_id="nulla",
    alt="media",
    callback="illum",
    campaign_id="vel",
    criterion_id="error",
    customer_id="deserunt",
    end_date=384382,
    engine_account_id="iure",
    fields_="magnam",
    key="debitis",
    oauth_token="ipsa",
    pretty_print=False,
    quota_user="delectus",
    row_count=272656,
    start_date=383441,
    start_row=477665,
    upload_type="minus",
    upload_protocol="placeat",
)
    
res = s.conversion.doubleclicksearch_conversion_get(req, operations.DoubleclicksearchConversionGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.conversion_list is not None:
    # handle response
```
<!-- End SDK Example Usage -->