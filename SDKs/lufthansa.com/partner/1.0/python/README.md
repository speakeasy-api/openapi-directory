# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/lufthansa.com/partner/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### baggage

* `baggage_trip_and_contact` - Baggage Trip and Contact

### offers

* `all_fares` - All Fares
* `best_fares` - Best Fares
* `deep_links` - Deep Links
* `fares` - Fares
* `fares_subscriptions` - Fares Subscriptions
* `lh_deep_links_ffp` - LH Deep Links - FFP
* `lh_deep_links_itco` - LH Deep Links - ITCO
* `lowest_fares` - Lowest Fares
* `ond_route` - OND Route
* `ond_status` - OND Status
* `top_ond` - Top OND

### orders

* `orders` - Orders

### preflight

* `auto_check_in` - Auto Check-In

### promotions

* `price_offers` - Price Offers

### reference_data

* `seat_details` - Seat Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
