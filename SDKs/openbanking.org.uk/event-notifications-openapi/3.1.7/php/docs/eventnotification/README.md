# eventNotification

### Available Operations

* [createEventNotification](#createeventnotification) - Send an event notification

## createEventNotification

Send an event notification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateEventNotificationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEventNotificationRequest();
    $request->requestBody = 'quibusdam';
    $request->xFapiFinancialId = 'unde';
    $request->xFapiInteractionId = 'nulla';

    $response = $sdk->eventNotification->createEventNotification($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
