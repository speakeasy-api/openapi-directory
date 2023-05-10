# detections

### Available Operations

* [languageDetectionsDetect](#languagedetectionsdetect) - Detects the language of text within a request.
* [languageDetectionsList](#languagedetectionslist) - Detects the language of text within a request.

## languageDetectionsDetect

Detects the language of text within a request.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->detectLanguageRequest = new DetectLanguageRequest();
    $request->detectLanguageRequest->q = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->bearerToken = 'iusto';
    $request->callback = 'excepturi';
    $request->fields = 'nisi';
    $request->key = 'recusandae';
    $request->oauthToken = 'temporibus';
    $request->pp = false;
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'veritatis';

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

## languageDetectionsList

Detects the language of text within a request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\LanguageDetectionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LanguageDetectionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->bearerToken = 'repellendus';
    $request->callback = 'sapiente';
    $request->fields = 'quo';
    $request->key = 'odit';
    $request->oauthToken = 'at';
    $request->pp = false;
    $request->prettyPrint = false;
    $request->q = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->quotaUser = 'esse';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new LanguageDetectionsListSecurity();
    $requestSecurity->option1 = new LanguageDetectionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->detections->languageDetectionsList($request, $requestSecurity);

    if ($response->detectionsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
