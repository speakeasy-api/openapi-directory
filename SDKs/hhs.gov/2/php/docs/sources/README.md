# sources

## Overview

Information about tags

### Available Operations

* [getResourcesSourcesJson](#getresourcessourcesjson) - Get Sources
* [getResourcesSourcesIdJson](#getresourcessourcesidjson) - Get Source by ID
* [getResourcesSourcesIdSyndicateFormat](#getresourcessourcesidsyndicateformat) - Get MediaItems for Source

## getResourcesSourcesJson

Source Listings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesSourcesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesSourcesJsonRequest();
    $request->max = 368725;
    $request->offset = 662527;
    $request->sort = 'possimus';

    $response = $sdk->sources->getResourcesSourcesJson($request);

    if ($response->sourceWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesSourcesIdJson

Information about a specific source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesSourcesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesSourcesIdJsonRequest();
    $request->id = 13571;

    $response = $sdk->sources->getResourcesSourcesIdJson($request);

    if ($response->sourceWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesSourcesIdSyndicateFormat

MediaItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesSourcesIdSyndicateFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesSourcesIdSyndicateFormatRequest();
    $request->displayMethod = 'quasi';
    $request->format = 'error';
    $request->id = 837945;

    $response = $sdk->sources->getResourcesSourcesIdSyndicateFormat($request);

    if ($response->mediaItemWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
