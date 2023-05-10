# eventsFindEvents

### Available Operations

* [getEventsEventId](#geteventseventid) - Returns an event

## getEventsEventId

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsEventIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsEventIdRequest();
    $request->eventId = 'sint';

    $response = $sdk->eventsFindEvents->getEventsEventId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
