# pricing

### Available Operations

* [retrievePrefixPricing](#retrieveprefixpricing) - Retrieve outbound pricing for a specific dialing prefix.
* [retrievePricingAllCountries](#retrievepricingallcountries) - Retrieve outbound pricing for all countries.
* [retrievePricingCountry](#retrievepricingcountry) - Retrieve outbound pricing for a specific country.

## retrievePrefixPricing

Retrieves the pricing information based on the dialing prefix.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrievePrefixPricingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrievePrefixPricingRequest();
    $request->apiKey = 'unde';
    $request->apiSecret = 'nulla';
    $request->prefix = 'corrupti';
    $request->type = 'illum';

    $response = $sdk->pricing->retrievePrefixPricing($request);

    if ($response->pricingCountriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrievePricingAllCountries

Retrieves the pricing information for all countries.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrievePricingAllCountriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrievePricingAllCountriesRequest();
    $request->apiKey = 'vel';
    $request->apiSecret = 'error';
    $request->type = 'deserunt';

    $response = $sdk->pricing->retrievePricingAllCountries($request);

    if ($response->pricingCountriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrievePricingCountry

Retrieves the pricing information based on the specified country.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrievePricingCountryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrievePricingCountryRequest();
    $request->apiKey = 'suscipit';
    $request->apiSecret = 'iure';
    $request->country = 'French Guiana';
    $request->type = 'debitis';

    $response = $sdk->pricing->retrievePricingCountry($request);

    if ($response->pricingCountryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
