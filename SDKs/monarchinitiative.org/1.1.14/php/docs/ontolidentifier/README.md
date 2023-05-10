# ontolIdentifier

## Overview

Retrieve IDs for labels

### Available Operations

* [getOntolIdentifierResource](#getontolidentifierresource) - Fetches a map from CURIEs/IDs to labels
* [postOntolIdentifierResource](#postontolidentifierresource) - Fetches a map from CURIEs/IDs to labels

## getOntolIdentifierResource

Fetches a map from CURIEs/IDs to labels

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOntolIdentifierResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOntolIdentifierResourceRequest();
    $request->label = [
        'cum',
    ];

    $response = $sdk->ontolIdentifier->getOntolIdentifierResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOntolIdentifierResource

Takes 'label' list argument either as a querystring argument or as a key
in the POST body when content-type is application/json.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostOntolIdentifierResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOntolIdentifierResourceRequest();
    $request->label = [
        'dolores',
        'enim',
    ];

    $response = $sdk->ontolIdentifier->postOntolIdentifierResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
