<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompositionCreateCompositionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompositionEnumFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCompositionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCompositionCreateCompositionRequest();
    $request->audioSources = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->audioSourcesExcluded = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->format = CompositionEnumFormatEnum::MP4;
    $request->resolution = 'error';
    $request->roomSid = 'deserunt';
    $request->statusCallback = 'http://innocent-effect.org';
    $request->statusCallbackMethod = CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum::HEAD;
    $request->trim = false;
    $request->videoLayout = 'delectus';

    $requestSecurity = new CreateCompositionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createComposition($request, $requestSecurity);

    if ($response->videoV1Composition !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->