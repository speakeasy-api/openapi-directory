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
    
req = operations.GetSetupV1AppointmentsRequest(
    query_params=operations.GetSetupV1AppointmentsQueryParams(
        booked_by="beatae",
        calendar_id="ex",
        customer_id="et",
        email="tenetur",
        end_date="1989-10-30T02:02:02Z",
        lastname="dicta",
        limit=161570741618821330,
        location_id="rerum",
        offset=3200987676983387320,
        resource_id="eius",
        service_allocation_id="quia",
        service_id="ut",
        start_date="1993-02-05T09:16:43Z",
        status="animi",
    ),
)
    
res = s.appointments.get_setup_v1_appointments(req)

if res.appointment_list_view_model is not None:
    # handle response
```
<!-- End SDK Example Usage -->