# v1

### Available Operations

* [getCountries](#getcountries) - Retrieves summary country information for the provided marketId and filters
* [getCountry](#getcountry) - Retrieves country and summary state information for provided countryKey

## getCountries

Authorization is not required

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCountriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCountriesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCountriesSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCountriesRequest();
    $request->marketId = 'nulla';
    $request->order = GetCountriesOrderEnum::DESCENDING;
    $request->regionName = 'illum';
    $request->regionTypeId = 423655;
    $request->sort = GetCountriesSortEnum::LABEL;

    $response = $sdk->v1->getCountries($request);

    if ($response->arrayOfCountrySummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCountry

Authorization is not required

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCountryOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCountrySortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCountryRequest();
    $request->countryKey = 'deserunt';
    $request->marketId = 'suscipit';
    $request->order = GetCountryOrderEnum::ASCENDING;
    $request->sort = GetCountrySortEnum::KEY;

    $response = $sdk->v1->getCountry($request);

    if ($response->arrayOfCountry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
