<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.BookingAvailabilityRequest(
    headers=operations.BookingAvailabilityHeaders(
        accept_language="error",
    ),
    request=operations.BookingAvailabilityRequestBody(
        age_bands=[
            operations.BookingAvailabilityRequestBodyAgeBands(
                band_id=6802467659962633827,
                count=8090787409856992088,
            ),
        ],
        currency_code="nisi",
        month="officia",
        product_code="ut",
        year="repellendus",
    ),
)
    
res = s.booking_services.booking_availability(req)

if res.booking_availability_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->