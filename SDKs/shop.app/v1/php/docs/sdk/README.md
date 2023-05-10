# SDK

## Overview

Search for millions of products from the world's greatest brands.

### Available Operations

* [details](#details) - Return more details about a list of products.
* [search](#search) - Search for products

## details

Return more details about a list of products.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetailsRequest();
    $request->ids = 'provident';

    $response = $sdk->sdk->details($request);

    if ($response->searchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## search

Search for products

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->numResults = 'distinctio';
    $request->priceMax = 8442.66;
    $request->priceMin = 6027.63;
    $request->query = 'nulla';
    $request->similarToId = 'corrupti';

    $response = $sdk->sdk->search($request);

    if ($response->searchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
