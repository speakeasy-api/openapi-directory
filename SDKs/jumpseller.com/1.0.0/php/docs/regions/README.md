# regions

### Available Operations

* [getCountriesCountryCodeRegionsJson](#getcountriescountrycoderegionsjson) - Retrieve all Regions from a single Country.
* [getCountriesCountryCodeRegionsRegionCodeJson](#getcountriescountrycoderegionsregioncodejson) - Retrieve a single Region information object.

## getCountriesCountryCodeRegionsJson

Retrieve all Regions from a single Country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCountriesCountryCodeRegionsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCountriesCountryCodeRegionsJsonRequest();
    $request->authtoken = 'aliquid';
    $request->countryCode = 'aperiam';
    $request->login = 'cum';

    $response = $sdk->regions->getCountriesCountryCodeRegionsJson($request);

    if ($response->regions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCountriesCountryCodeRegionsRegionCodeJson

Retrieve a single Region information object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCountriesCountryCodeRegionsRegionCodeJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCountriesCountryCodeRegionsRegionCodeJsonRequest();
    $request->authtoken = 'consectetur';
    $request->countryCode = 'in';
    $request->login = 'exercitationem';
    $request->regionCode = 'earum';

    $response = $sdk->regions->getCountriesCountryCodeRegionsRegionCodeJson($request);

    if ($response->region !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
