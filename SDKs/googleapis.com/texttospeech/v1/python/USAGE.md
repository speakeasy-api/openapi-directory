<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.TexttospeechOperationsCancelRequest(
    security=operations.TexttospeechOperationsCancelSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.TexttospeechOperationsCancelPathParams(
        name="sunt",
    ),
    query_params=operations.TexttospeechOperationsCancelQueryParams(
        dollar_xgafv="2",
        access_token="consequatur",
        alt="json",
        callback="et",
        fields="ullam",
        key="aliquid",
        oauth_token="quia",
        pretty_print=True,
        quota_user="minus",
        upload_type="dolorum",
        upload_protocol="illo",
    ),
    request={
        "hic": "consequatur",
    },
)
    
res = s.operations.texttospeech_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->