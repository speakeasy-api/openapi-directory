<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MetastoreOperationsCancelRequest(
    security=operations.MetastoreOperationsCancelSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.MetastoreOperationsCancelPathParams(
        name="quia",
    ),
    query_params=operations.MetastoreOperationsCancelQueryParams(
        dollar_xgafv="2",
        access_token="cum",
        alt="proto",
        callback="veniam",
        fields="ipsum",
        key="harum",
        oauth_token="aut",
        pretty_print=True,
        quota_user="ipsum",
        upload_type="est",
        upload_protocol="dolorem",
    ),
    request={
        "molestiae": "nam",
        "eius": "earum",
    },
)
    
res = s.operations.metastore_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->