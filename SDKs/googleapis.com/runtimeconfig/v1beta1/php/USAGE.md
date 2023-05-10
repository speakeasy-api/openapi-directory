<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->runtimeConfig = new RuntimeConfig();
    $request->runtimeConfig->description = 'provident';
    $request->runtimeConfig->name = 'Ellis Mitchell';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'deserunt';
    $request->key = 'suscipit';
    $request->oauthToken = 'iure';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->requestId = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new RuntimeconfigProjectsConfigsCreateSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsCreate($request, $requestSecurity);

    if ($response->runtimeConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->