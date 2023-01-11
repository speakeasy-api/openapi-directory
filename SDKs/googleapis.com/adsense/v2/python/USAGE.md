<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AdsenseAccountsAdclientsAdunitsCreateRequest(
    security=operations.AdsenseAccountsAdclientsAdunitsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AdsenseAccountsAdclientsAdunitsCreatePathParams(
        parent="fuga",
    ),
    query_params=operations.AdsenseAccountsAdclientsAdunitsCreateQueryParams(
        dollar_xgafv="2",
        access_token="ex",
        alt="json",
        callback="eius",
        fields="consequuntur",
        key="et",
        oauth_token="sit",
        pretty_print=False,
        quota_user="natus",
        upload_type="illo",
        upload_protocol="impedit",
    ),
    request=shared.AdUnitInput(
        content_ads_settings=shared.ContentAdsSettings(
            size="molestiae",
            type="FEED",
        ),
        display_name="et",
        state="STATE_UNSPECIFIED",
    ),
)
    
res = s.accounts.adsense_accounts_adclients_adunits_create(req)

if res.ad_unit is not None:
    # handle response
```
<!-- End SDK Example Usage -->