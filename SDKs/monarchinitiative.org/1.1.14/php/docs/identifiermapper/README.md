# identifierMapper

## Overview

mapping and resolution of identifiers

### Available Operations

* [getIdentifierMapper](#getidentifiermapper) - TODO maps a list of identifiers from a source to a target

## getIdentifierMapper

TODO maps a list of identifiers from a source to a target

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIdentifierMapperRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIdentifierMapperRequest();
    $request->source = 'sapiente';
    $request->target = 'alias';

    $response = $sdk->identifierMapper->getIdentifierMapper($request);

    if ($response->associations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
