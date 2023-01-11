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
        name="assumenda",
    ),
    query_params=operations.SpeechOperationsGetQueryParams(
        dollar_xgafv="1",
        access_token="similique",
        alt="json",
        callback="culpa",
        fields="delectus",
        key="facilis",
        oauth_token="voluptas",
        pretty_print=True,
        quota_user="officia",
        upload_type="error",
        upload_protocol="eligendi",
    ),
)
    
res = s.operations.speech_operations_get(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->