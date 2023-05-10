<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionsDetectRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DetectLanguageRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionsDetectSecurity;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionsDetectSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionsDetectSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageDetectionsDetectRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->detectLanguageRequest = new DetectLanguageRequest();
    $request->detectLanguageRequest->q = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->bearerToken = 'illum';
    $request->callback = 'vel';
    $request->fields = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->pp = false;
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new LanguageDetectionsDetectSecurity();
    $requestSecurity->option1 = new LanguageDetectionsDetectSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->detections->languageDetectionsDetect($request, $requestSecurity);

    if ($response->detectionsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->