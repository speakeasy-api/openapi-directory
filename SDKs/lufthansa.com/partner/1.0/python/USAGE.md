<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BaggageTripAndContactRequest(
    accept="corrupti",
    search_id="provident",
)
    
res = s.baggage.baggage_trip_and_contact(req, operations.BaggageTripAndContactSecurity(
    auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.baggage_trip_and_contact_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->