<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequestBody();
    $request->answerMethod = 'GET';
    $request->answerUrl = 'https://example.com/webhooks/answer';
    $request->apiKey = 'ap1k3y';
    $request->apiSecret = '230e6cf0709417176df1b4fc1e083adc';
    $request->eventMethod = 'POST';
    $request->eventUrl = 'https://example.com/webhooks/event';
    $request->inboundMethod = 'POST';
    $request->inboundUrl = 'https://example.com/webhooks/inbound';
    $request->name = 'My Application';
    $request->statusMethod = 'POST';
    $request->statusUrl = 'https://example.com/webhooks/status';
    $request->type = CreateApplicationRequestBodyTypeEnum::VOICE;

    $response = $sdk->createApplication($request);

    if ($response->applicationCreated !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->