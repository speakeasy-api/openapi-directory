<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.GetSetupV1AppointmentsRequest(
    booked_by="corrupti",
    calendar_id="provident",
    customer_id="distinctio",
    email="Leda_Stiedemann@hotmail.com",
    end_date="2022-05-18T09:34:54.894Z",
    lastname="Oberbrunner",
    limit=384382,
    location_id="iure",
    offset=297534,
    resource_id="debitis",
    service_allocation_id="ipsa",
    service_id="delectus",
    start_date="2022-08-14T01:03:07.567Z",
    status="molestiae",
)
    
res = s.appointments.get_setup_v1_appointments(req)

if res.appointment_list_view_model is not None:
    # handle response
```
<!-- End SDK Example Usage -->