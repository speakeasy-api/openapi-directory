<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudidentityCustomersUserinvitationsCancelRequest(
    path_params=operations.CloudidentityCustomersUserinvitationsCancelPathParams(
        name="natus",
    ),
    query_params=operations.CloudidentityCustomersUserinvitationsCancelQueryParams(
        dollar_xgafv="1",
        access_token="dolor",
        alt="proto",
        callback="consequatur",
        fields="quo",
        key="ipsum",
        oauth_token="suscipit",
        pretty_print=False,
        quota_user="nisi",
        upload_type="aspernatur",
        upload_protocol="animi",
    ),
    request={
        "voluptas": "voluptas",
    },
)
    
res = s.customers.cloudidentity_customers_userinvitations_cancel(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->