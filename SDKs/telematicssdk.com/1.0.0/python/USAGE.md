<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.TripsTripDetailsRequest(
    track_token="corrupti",
)
    
res = s.two_for_mobile_app_optional.trips_trip_details(req)

if res.trips_trip_details_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->