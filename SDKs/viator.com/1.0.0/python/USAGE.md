<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.BookingAvailabilityRequest(
    accept_language="en-US",
    request_body=operations.BookingAvailabilityRequestBody(
        age_bands=[
            operations.BookingAvailabilityRequestBodyAgeBands(
                band_id=592845,
                count=715190,
            ),
            operations.BookingAvailabilityRequestBodyAgeBands(
                band_id=844266,
                count=602763,
            ),
            operations.BookingAvailabilityRequestBodyAgeBands(
                band_id=857946,
                count=544883,
            ),
        ],
        currency_code="illum",
        month="vel",
        product_code="error",
        year="deserunt",
    ),
)
    
res = s.booking_services.booking_availability(req)

if res.booking_availability_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->