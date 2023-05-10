# countries

### Available Operations

* [getCountriesJson](#getcountriesjson) - Retrieve all Countries.
* [getCountriesCountryCodeJson](#getcountriescountrycodejson) - Retrieve a single Country information.
* [getCountriesCountryCodeRegionsJson](#getcountriescountrycoderegionsjson) - Retrieve all Regions from a single Country.
* [getCountriesCountryCodeRegionsRegionCodeJson](#getcountriescountrycoderegionsregioncodejson) - Retrieve a single Region information object.

## getCountriesJson

Retrieve all Countries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCountriesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCountriesJsonRequest();
    $request->authtoken = 'hic';
    $request->login = 'saepe';

    $response = $sdk->countries->getCountriesJson($request);

    if ($response->countries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCountriesCountryCodeJson

Retrieve a single Country information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCountriesCountryCodeJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCountriesCountryCodeJsonRequest();
    $request->authtoken = 'fuga';
    $request->countryCode = 'in';
    $request->login = 'corporis';

    $response = $sdk->countries->getCountriesCountryCodeJson($request);

    if ($response->country !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->authtoken = 'iste';
    $request->countryCode = 'iure';
    $request->login = 'saepe';

    $response = $sdk->countries->getCountriesCountryCodeRegionsJson($request);

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
    $request->authtoken = 'quidem';
    $request->countryCode = 'architecto';
    $request->login = 'ipsa';
    $request->regionCode = 'reiciendis';

    $response = $sdk->countries->getCountriesCountryCodeRegionsRegionCodeJson($request);

    if ($response->region !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
