# events

### Available Operations

* [getEventsV3EventsGetPage](#geteventsv3eventsgetpage) - Returns a collection of events matching a query.

## getEventsV3EventsGetPage

Returns a collection of events matching a query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsV3EventsGetPageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsV3EventsGetPageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsV3EventsGetPageRequest();
    $request->after = 'debitis';
    $request->before = 'ipsa';
    $request->eventType = 'delectus';
    $request->limit = 272656;
    $request->objectId = 383441;
    $request->objectType = 'molestiae';
    $request->occurredAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-25T16:12:20.938Z');
    $request->occurredBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T14:47:59.325Z');
    $request->sort = [
        'nisi',
        'recusandae',
        'temporibus',
    ];

    $requestSecurity = new GetEventsV3EventsGetPageSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->events->getEventsV3EventsGetPage($request, $requestSecurity);

    if ($response->collectionResponseExternalUnifiedEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
