<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.DeleteConsumerV1AppointmentsIDRequest(
    path_params=operations.DeleteConsumerV1AppointmentsIDPathParams(
        id="voluptate",
    ),
)
    
res = s.appointments.delete_consumer_v1_appointments_id_(req)

if res.appointment_view_model is not None:
    # handle response
```
<!-- End SDK Example Usage -->