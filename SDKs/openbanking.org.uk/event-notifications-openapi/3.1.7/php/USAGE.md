<!-- Start SDK Example Usage -->
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
    $request->requestBody = 'corrupti';
    $request->xFapiFinancialId = 'provident';
    $request->xFapiInteractionId = 'distinctio';

    $response = $sdk->eventNotification->createEventNotification($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->