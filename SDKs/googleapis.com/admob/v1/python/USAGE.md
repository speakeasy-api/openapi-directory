<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AdmobAccountsAdUnitsListRequest(
    security=operations.AdmobAccountsAdUnitsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AdmobAccountsAdUnitsListPathParams(
        parent="itaque",
    ),
    query_params=operations.AdmobAccountsAdUnitsListQueryParams(
        dollar_xgafv="1",
        access_token="molestiae",
        alt="media",
        callback="odit",
        fields="qui",
        key="itaque",
        oauth_token="voluptas",
        page_size=3470849913966832319,
        page_token="vel",
        pretty_print=False,
        quota_user="est",
        upload_type="omnis",
        upload_protocol="assumenda",
    ),
)
    
res = s.accounts.admob_accounts_ad_units_list(req)

if res.list_ad_units_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->