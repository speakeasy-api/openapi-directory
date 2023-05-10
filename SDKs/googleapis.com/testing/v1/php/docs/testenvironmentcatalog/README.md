# testEnvironmentCatalog

### Available Operations

* [testingTestEnvironmentCatalogGet](#testingtestenvironmentcatalogget) - Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred

## testingTestEnvironmentCatalogGet

Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestingTestEnvironmentCatalogGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TestingTestEnvironmentCatalogGetEnvironmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\TestingTestEnvironmentCatalogGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\TestingTestEnvironmentCatalogGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\TestingTestEnvironmentCatalogGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestingTestEnvironmentCatalogGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->environmentType = TestingTestEnvironmentCatalogGetEnvironmentTypeEnum::ANDROID;
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->projectId = 'quasi';
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new TestingTestEnvironmentCatalogGetSecurity();
    $requestSecurity->option1 = new TestingTestEnvironmentCatalogGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->testEnvironmentCatalog->testingTestEnvironmentCatalogGet($request, $requestSecurity);

    if ($response->testEnvironmentCatalog !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
