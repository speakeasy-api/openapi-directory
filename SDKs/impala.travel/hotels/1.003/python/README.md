# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/impala.travel/hotels/1.003/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bookings

* `cancel_booking` - Cancel a booking
* `create_booking` - Create a booking
* `list_bookings` - List all bookings
* `retrieve_booking` - Retrieve a booking
* `update_booking` - Change a booking
* `update_booking_contact` - Change a booking contact

### hotels

* `list_hotels` - List all hotels
* `retrieve_hotel` - Retrieve a hotel

### rate_calendar

* `list_rate_plan_for_hotel_for_rate_plan_id` - List a rate plan (rate calendar) for a hotel (Beta endpoint).
* `list_rate_plans_for_hotel` - List all rate plans (rate calendar) for a hotel (Beta endpoint)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
