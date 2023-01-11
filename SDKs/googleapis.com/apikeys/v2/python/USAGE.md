<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ApikeysKeysLookupKeyRequest(
    security=operations.ApikeysKeysLookupKeySecurity(
        option1=operations.ApikeysKeysLookupKeySecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.ApikeysKeysLookupKeyQueryParams(
        dollar_xgafv="2",
        access_token="quo",
        alt="json",
        callback="quis",
        fields="veniam",
        key="earum",
        key_string="omnis",
        oauth_token="sunt",
        pretty_print=False,
        quota_user="corrupti",
        upload_type="quia",
        upload_protocol="commodi",
    ),
)
    
res = s.keys.apikeys_keys_lookup_key(req)

if res.v2_lookup_key_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->