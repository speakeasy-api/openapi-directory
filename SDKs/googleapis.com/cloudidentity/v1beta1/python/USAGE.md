<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudidentityCustomersUserinvitationsCancelRequest(
    path_params=operations.CloudidentityCustomersUserinvitationsCancelPathParams(
        name="dolor",
    ),
    query_params=operations.CloudidentityCustomersUserinvitationsCancelQueryParams(
        dollar_xgafv="1",
        access_token="ut",
        alt="proto",
        callback="nobis",
        fields="ut",
        key="autem",
        oauth_token="praesentium",
        pretty_print=True,
        quota_user="est",
        upload_type="et",
        upload_protocol="et",
    ),
    request={
        "ex": "optio",
        "perferendis": "vel",
    },
)
    
res = s.customers.cloudidentity_customers_userinvitations_cancel(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->