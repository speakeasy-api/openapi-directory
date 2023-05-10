# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelBookingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelBookingRequest();
    $request->bookingId = 'corrupti';

    $response = $sdk->bookings->cancelBooking($request);

    if ($response->booking !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [bookings](docs/bookings/README.md)

* [cancelBooking](docs/bookings/README.md#cancelbooking) - Cancel a booking
* [createBooking](docs/bookings/README.md#createbooking) - Create a booking
* [listBookings](docs/bookings/README.md#listbookings) - List all bookings
* [retrieveBooking](docs/bookings/README.md#retrievebooking) - Retrieve a booking
* [updateBooking](docs/bookings/README.md#updatebooking) - Change a booking
* [updateBookingContact](docs/bookings/README.md#updatebookingcontact) - Change a booking contact

### [hotels](docs/hotels/README.md)

* [listHotels](docs/hotels/README.md#listhotels) - List all hotels
* [retrieveHotel](docs/hotels/README.md#retrievehotel) - Retrieve a hotel

### [rateCalendar](docs/ratecalendar/README.md)

* [listRatePlanForHotelForRatePlanId](docs/ratecalendar/README.md#listrateplanforhotelforrateplanid) - List a rate plan (rate calendar) for a hotel (Beta endpoint).
* [listRatePlansForHotel](docs/ratecalendar/README.md#listrateplansforhotel) - List all rate plans (rate calendar) for a hotel (Beta endpoint)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
