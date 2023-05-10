# event

## Overview

Events are actions that occur within a conversation. Examples of this includes: Text events from members, or invite events from users

### Available Operations

* [getEvents](#getevents) - List Events

## getEvents

List Events

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsRequest();
    $request->conversationId = 'suscipit';
    $request->cursor = 'iure';
    $request->endId = 'magnam';
    $request->eventType = 'debitis';
    $request->order = OrderEnum::ASC;
    $request->pageSize = 963663;
    $request->startId = 'tempora';

    $response = $sdk->event->getEvents($request);

    if ($response->getEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
