# event

## Overview

Events are actions that occur within a conversation. Examples of this includes: Text events from members, or invite events from users

### Available Operations

* [createEvent](#createevent) - Create an event
* [deleteEvent](#deleteevent) - Delete an event
* [getEvent](#getevent) - Retrieve an event
* [~~getEvents~~](#getevents) - List events :warning: **Deprecated**

## createEvent

Create an event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEventRequest();
    $request->requestBody = new CreateEventRequestBody();
    $request->requestBody->body = [
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->requestBody->from = 'MEM-63f61863-4a51-4f6b-86e1-46edebio0391';
    $request->requestBody->to = 'MEM-63f61863-4a51-4f6b-86e1-46edebio0391';
    $request->requestBody->type = 'text';
    $request->conversationId = 'delectus';

    $response = $sdk->event->createEvent($request);

    if ($response->createEvent201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEvent

Delete an event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEventRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEventRequest();
    $request->conversationId = 'tempora';
    $request->eventId = 'suscipit';

    $response = $sdk->event->deleteEvent($request);

    if ($response->deleteEvent200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvent

Retrieve an event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventRequest();
    $request->conversationId = 'molestiae';
    $request->eventId = 'minus';

    $response = $sdk->event->getEvent($request);

    if ($response->eventRetrieved !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getEvents~~

This endpoint is **DEPRECATED**. Please use [/v0.2/events](/api/conversation.v2#get-events).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsRequest();
    $request->conversationId = 'placeat';

    $response = $sdk->event->getEvents($request);

    if ($response->eventRetrieveds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
