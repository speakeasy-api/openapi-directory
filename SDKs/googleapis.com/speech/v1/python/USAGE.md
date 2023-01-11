<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SpeechOperationsGetRequest(
    security=operations.SpeechOperationsGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.SpeechOperationsGetPathParams(
        name="accusantium",
    ),
    query_params=operations.SpeechOperationsGetQueryParams(
        dollar_xgafv="1",
        access_token="aut",
        alt="json",
        callback="consequatur",
        fields="quaerat",
        key="est",
        oauth_token="et",
        pretty_print=False,
        quota_user="velit",
        upload_type="tempore",
        upload_protocol="consequatur",
    ),
)
    
res = s.operations.speech_operations_get(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->