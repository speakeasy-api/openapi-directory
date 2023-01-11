<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudassetOperationsGetRequest(
    security=operations.CloudassetOperationsGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudassetOperationsGetPathParams(
        name="aut",
    ),
    query_params=operations.CloudassetOperationsGetQueryParams(
        dollar_xgafv="2",
        access_token="qui",
        alt="proto",
        callback="sed",
        fields="aut",
        key="ea",
        oauth_token="non",
        pretty_print=False,
        quota_user="et",
        upload_type="et",
        upload_protocol="quod",
    ),
)
    
res = s.operations.cloudasset_operations_get(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->