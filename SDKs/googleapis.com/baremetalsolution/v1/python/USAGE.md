<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BaremetalsolutionOperationsCancelRequest(
    security=operations.BaremetalsolutionOperationsCancelSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.BaremetalsolutionOperationsCancelPathParams(
        name="nulla",
    ),
    query_params=operations.BaremetalsolutionOperationsCancelQueryParams(
        dollar_xgafv="1",
        access_token="eligendi",
        alt="json",
        callback="rerum",
        fields="atque",
        key="voluptatem",
        oauth_token="dolor",
        pretty_print=True,
        quota_user="magni",
        upload_type="exercitationem",
        upload_protocol="provident",
    ),
    request={
        "similique": "ipsam",
        "quia": "voluptatum",
    },
)
    
res = s.operations.baremetalsolution_operations_cancel(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->