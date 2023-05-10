# offers

### Available Operations

* [offersLoungesByLocationGet](#offersloungesbylocationget) - Lounges
* [offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet](#offersseatmapsdestinationdatecabinclassbyflightnumberandoriginget) - Seat Maps

## offersLoungesByLocationGet

Lounge information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OffersLoungesByLocationGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\OffersLoungesByLocationGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OffersLoungesByLocationGetRequest();
    $request->accept = 'magnam';
    $request->cabinClass = 'debitis';
    $request->lang = 'ipsa';
    $request->location = 'delectus';
    $request->tierCode = 'tempora';

    $requestSecurity = new OffersLoungesByLocationGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->offersLoungesByLocationGet($request, $requestSecurity);

    if ($response->offersLoungesByLocationGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet

Cabin layout and seat characteristics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest();
    $request->accept = 'suscipit';
    $request->cabinClass = 'molestiae';
    $request->date = 'minus';
    $request->destination = 'placeat';
    $request->flightNumber = 'voluptatum';
    $request->origin = 'iusto';

    $requestSecurity = new OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offers->offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet($request, $requestSecurity);

    if ($response->offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
