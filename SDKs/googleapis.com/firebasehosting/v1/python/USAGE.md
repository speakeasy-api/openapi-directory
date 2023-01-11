<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FirebasehostingOperationsCancelRequest(
    path_params=operations.FirebasehostingOperationsCancelPathParams(
        name="inventore",
    ),
    query_params=operations.FirebasehostingOperationsCancelQueryParams(
        dollar_xgafv="1",
        access_token="cumque",
        alt="media",
        callback="voluptatem",
        fields="tempore",
        key="cum",
        oauth_token="ratione",
        pretty_print=True,
        quota_user="eius",
        upload_type="et",
        upload_protocol="consequatur",
    ),
    request={
        "placeat": "est",
        "voluptas": "et",
    },
)
    
res = s.operations.firebasehosting_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->