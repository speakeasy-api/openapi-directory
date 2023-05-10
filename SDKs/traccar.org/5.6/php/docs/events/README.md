# events

## Overview

Retrieving event information

### Available Operations

* [getEventsId](#geteventsid)

## getEventsId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsIdRequest();
    $request->id = 677817;

    $response = $sdk->events->getEventsId($request);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
