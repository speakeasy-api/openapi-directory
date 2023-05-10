# positions

## Overview

Retrieving raw location information

### Available Operations

* [getPositions](#getpositions) - Fetches a list of Positions

## getPositions

We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPositionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPositionsRequest();
    $request->deviceId = 463451;
    $request->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-15T18:44:26.943Z');
    $request->id = 345352;
    $request->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-20T18:01:24.992Z');

    $response = $sdk->positions->getPositions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
