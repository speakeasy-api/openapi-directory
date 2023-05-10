<!-- Start SDK Example Usage -->
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
    $request->email = 'Larue_Rau85@yahoo.com';
    $request->eventName = 'corrupti';
    $request->objectId = 'illum';
    $request->occurredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T09:34:54.894Z');
    $request->properties = [
        'suscipit' => 'iure',
        'magnam' => 'debitis',
        'ipsa' => 'delectus',
    ];
    $request->utk = 'tempora';

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
<!-- End SDK Example Usage -->