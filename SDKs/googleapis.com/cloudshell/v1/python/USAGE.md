<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudshellOperationsCancelRequest(
    security=operations.CloudshellOperationsCancelSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudshellOperationsCancelPathParams(
        name="sed",
    ),
    query_params=operations.CloudshellOperationsCancelQueryParams(
        dollar_xgafv="1",
        access_token="consequatur",
        alt="json",
        callback="eos",
        fields="quibusdam",
        key="eos",
        oauth_token="hic",
        pretty_print=True,
        quota_user="voluptas",
        upload_type="repellendus",
        upload_protocol="non",
    ),
    request={
        "dolor": "sit",
        "sint": "nemo",
        "necessitatibus": "ducimus",
    },
)
    
res = s.operations.cloudshell_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->