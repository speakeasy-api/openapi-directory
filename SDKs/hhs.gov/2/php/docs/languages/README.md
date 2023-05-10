# languages

## Overview

Information about languages

### Available Operations

* [getResourcesLanguagesJson](#getresourceslanguagesjson) - Get Languages
* [getResourcesLanguagesIdJson](#getresourceslanguagesidjson) - Get Language by ID

## getResourcesLanguagesJson

Language Listings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesLanguagesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesLanguagesJsonRequest();
    $request->max = 891773;
    $request->offset = 56713;
    $request->sort = 'delectus';

    $response = $sdk->languages->getResourcesLanguagesJson($request);

    if ($response->languageWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesLanguagesIdJson

Information about a specific language

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesLanguagesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesLanguagesIdJsonRequest();
    $request->id = 272656;

    $response = $sdk->languages->getResourcesLanguagesIdJson($request);

    if ($response->languageWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
