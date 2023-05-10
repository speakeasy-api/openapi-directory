# SDK

## Overview

PlaceKit OpenAPI Specifications ([repository](https://github.com/placekit/api-reference))

### Available Operations

* [reverse](#reverse) - Reverse geocoding
* [search](#search) - Search for addresses

## reverse

Performs a reverse geocoding search.

It will return the closest results around `coordinates`.\
If `coordinates` are not set, it will use the user's IP to approximate its coordinates but results will be less accurate (city level accuracy instead of street level accuracy).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReverseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ReverseRequestBodyLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReverseRequestBody();
    $request->coordinates = '48.873662, 2.295063';
    $request->countries = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->countryByIP = false;
    $request->language = ReverseRequestBodyLanguageEnum::FR;
    $request->maxResults = 891773;
    $request->types = [
        TypesEnum::MINUS_TRAIN,
    ];

    $response = $sdk->sdk->reverse($request);

    if ($response->results !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## search

Performs a forward geocoding search.

It will return results around `coordinates` (if provided) and the best matching textual relevance.

**It is highly recommended** to set the `countries` parameter with the country you need results from for the best accuracy and revelance possible.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequestBodyLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequestBody();
    $request->coordinates = '48.873662, 2.295063';
    $request->countries = [
        'suscipit',
        'molestiae',
    ];
    $request->countryByIP = false;
    $request->language = SearchRequestBodyLanguageEnum::FR;
    $request->maxResults = 791725;
    $request->query = '42 avenue Champs Elysees Paris';
    $request->types = [
        TypesEnum::STREET,
        TypesEnum::MINUS_COUNTRY,
        TypesEnum::MINUS_STREET,
        TypesEnum::COUNTRY,
    ];

    $response = $sdk->sdk->search($request);

    if ($response->results !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
