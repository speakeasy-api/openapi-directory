<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BaggageTripAndContactRequest(
    security=operations.BaggageTripAndContactSecurity(
        auth=shared.SchemeAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.BaggageTripAndContactPathParams(
        search_id="quo",
    ),
    headers=operations.BaggageTripAndContactHeaders(
        accept="rerum",
    ),
)
    
res = s.baggage.baggage_trip_and_contact(req)

if res.baggage_trip_and_contact_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->