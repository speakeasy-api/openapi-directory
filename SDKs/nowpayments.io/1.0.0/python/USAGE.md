<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAllTransfersRequest(
    id="111",
    limit="10",
    offset="0",
    order="ASC",
    status="CREATED",
)
    
res = s.billing_sub_partner_api.get_all_transfers(req)

if res.get_all_transfers_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->