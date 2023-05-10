# promotions

### Available Operations

* [priceOffers](#priceoffers) - Price Offers

## priceOffers

Retrieve a best price offer given an origin and destination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PriceOffersRequest;
use \OpenAPI\OpenAPI\Models\Operations\PriceOffersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PriceOffersRequest();
    $request->departureDate = 'tenetur';
    $request->destination = 'ipsam';
    $request->origin = 'id';
    $request->returnDate = 'possimus';
    $request->service = 'aut';

    $requestSecurity = new PriceOffersSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->promotions->priceOffers($request, $requestSecurity);

    if ($response->priceOffers200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
