# events

## Overview

The `events` resource temporarily holds Brain events that match an event subscription in the `subscriptions` resource.
The subscription determines how long the events are held.

See also the `subscriptions` resource.


<https://intellifi.zendesk.com/hc/en-us/sections/360001588534>
### Available Operations

* [getEventById](#geteventbyid) - Get event
* [getEvents](#getevents) - Get all events

## getEventById

Get event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventByIdRequest();
    $request->id = '97b0074f-1547-41b5-a6e1-3b99d488e1e9';

    $response = $sdk->events->getEventById($request);

    if ($response->event !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvents

Get all events

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EventTopicActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTopicResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsRequest();
    $request->after = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-26T19:21:55.034Z');
    $request->afterId = 'incidunt';
    $request->before = 'enim';
    $request->beforeId = 'consequatur';
    $request->from = 'est';
    $request->fromId = 'quibusdam';
    $request->id = '5b7d6cbd7503c445552a1664';
    $request->idOnly = false;
    $request->limit = 131797;
    $request->populate = 'deserunt';
    $request->resultsOnly = false;
    $request->sort = 'distinctio';
    $request->timeCreated = '2018-08-30T09:51:59.737Z';
    $request->timeEvent = '2018-08-30T09:51:59.737Z';
    $request->timeExpire = '2018-08-30T09:51:59.737Z';
    $request->timeoutS = 8413.86;
    $request->topicAction = EventTopicActionEnum::CREATED;
    $request->topicResource = '5b7d6cbd7503c445552a1664';
    $request->topicResourceType = EventTopicResourceTypeEnum::ITEMS;
    $request->until = 'labore';
    $request->untilId = 'modi';

    $response = $sdk->events->getEvents($request);

    if ($response->getEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
