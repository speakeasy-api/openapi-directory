<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetBillingRecipientsRequest(
    workgroup_id="corrupti",
)
    
res = s.contact.get_billing_recipients(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->