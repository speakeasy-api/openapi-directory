<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FirebasemlOperationsCancelRequest(
    security=operations.FirebasemlOperationsCancelSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.FirebasemlOperationsCancelPathParams(
        name="consequatur",
    ),
    query_params=operations.FirebasemlOperationsCancelQueryParams(
        dollar_xgafv="1",
        access_token="pariatur",
        alt="proto",
        callback="et",
        fields="cum",
        key="occaecati",
        oauth_token="quo",
        pretty_print=False,
        quota_user="in",
        upload_type="et",
        upload_protocol="eos",
    ),
    request={
        "ea": "eaque",
        "consectetur": "consequatur",
    },
)
    
res = s.operations.firebaseml_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->