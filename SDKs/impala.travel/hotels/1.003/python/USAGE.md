<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_authentication="YOUR_API_KEY_HERE",
    ),
)


req = operations.CancelBookingRequest(
    booking_id="corrupti",
)
    
res = s.bookings.cancel_booking(req)

if res.booking is not None:
    # handle response
```
<!-- End SDK Example Usage -->