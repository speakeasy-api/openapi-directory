<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinkCreateSinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\SinkEnumSinkTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSinkCreateSinkRequest();
    $request->description = 'corrupti';
    $request->sinkConfiguration = 'provident';
    $request->sinkType = SinkEnumSinkTypeEnum::SEGMENT;

    $requestSecurity = new CreateSinkSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createSink($request, $requestSecurity);

    if ($response->eventsV1Sink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->