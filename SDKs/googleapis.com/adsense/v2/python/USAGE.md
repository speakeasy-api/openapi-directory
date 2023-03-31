<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AdsenseAccountsAdclientsAdunitsCreateRequest(
    dollar_xgafv="2",
    ad_unit_input=shared.AdUnitInput(
        content_ads_settings=shared.ContentAdsSettings(
            size="provident",
            type="MATCHED_CONTENT",
        ),
        display_name="quibusdam",
        state="ACTIVE",
    ),
    access_token="nulla",
    alt="media",
    callback="illum",
    fields_="vel",
    key="error",
    oauth_token="deserunt",
    parent="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.accounts.adsense_accounts_adclients_adunits_create(req, operations.AdsenseAccountsAdclientsAdunitsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.ad_unit is not None:
    # handle response
```
<!-- End SDK Example Usage -->