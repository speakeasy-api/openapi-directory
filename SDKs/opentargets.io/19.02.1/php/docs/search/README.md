# search

## Overview

Methods to search for target or diseases.

### Available Operations

* [getSearch](#getsearch) - Search for a disease or a target

## getSearch

This method allows you to look for gene or diseases of interest using a free text search,
replicating the functionality of the search box on our homepage. It should be used to identify
the best match for a disease or target of interest, rather than gathering a specific set of evidence.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchRequest();
    $request->filter = 'maiores';
    $request->from = 'rerum';
    $request->q = 'dicta';
    $request->size = 'magnam';

    $response = $sdk->search->getSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
