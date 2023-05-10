<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaProcessorCreateMediaProcessorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMediaProcessorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMediaProcessorCreateMediaProcessorRequest();
    $request->extension = 'corrupti';
    $request->extensionContext = 'provident';
    $request->extensionEnvironment = 'distinctio';
    $request->maxDuration = 844266;
    $request->statusCallback = 'https://tidy-mascara.org';
    $request->statusCallbackMethod = CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum::POST;

    $requestSecurity = new CreateMediaProcessorSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createMediaProcessor($request, $requestSecurity);

    if ($response->mediaV1MediaProcessor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->