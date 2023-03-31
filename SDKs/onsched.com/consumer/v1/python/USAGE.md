<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.DeleteConsumerV1AppointmentsIDRequest(
    id="corrupti",
)
    
res = s.appointments.delete_consumer_v1_appointments_id_(req)

if res.appointment_view_model is not None:
    # handle response
```
<!-- End SDK Example Usage -->