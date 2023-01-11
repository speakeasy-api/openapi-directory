<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PlayintegrityDecodeIntegrityTokenRequest(
    security=operations.PlayintegrityDecodeIntegrityTokenSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.PlayintegrityDecodeIntegrityTokenPathParams(
        package_name="nobis",
    ),
    query_params=operations.PlayintegrityDecodeIntegrityTokenQueryParams(
        dollar_xgafv="1",
        access_token="tenetur",
        alt="proto",
        callback="occaecati",
        fields="sequi",
        key="inventore",
        oauth_token="necessitatibus",
        pretty_print=False,
        quota_user="accusantium",
        upload_type="qui",
        upload_protocol="voluptas",
    ),
    request=shared.DecodeIntegrityTokenRequest(
        integrity_token="mollitia",
    ),
)
    
res = s.v1.playintegrity_decode_integrity_token(req)

if res.decode_integrity_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->