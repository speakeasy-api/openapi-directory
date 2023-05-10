# behavioralEventsTracking

### Available Operations

* [postEventsV3Send](#posteventsv3send) - Sends Custom Behavioral Event

## postEventsV3Send

Endpoint to send an instance of a behavioral event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BehavioralEventHttpCompletionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostEventsV3SendSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BehavioralEventHttpCompletionRequest();
    $request->email = 'Jasper_Schiller47@yahoo.com';
    $request->eventName = 'excepturi';
    $request->objectId = 'nisi';
    $request->occurredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-29T11:50:59.674Z');
    $request->properties = [
        'quis' => 'veritatis',
    ];
    $request->utk = 'deserunt';

    $requestSecurity = new PostEventsV3SendSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->behavioralEventsTracking->postEventsV3Send($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
