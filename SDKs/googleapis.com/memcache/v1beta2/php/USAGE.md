<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesApplyParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplyParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MemcacheProjectsLocationsInstancesApplyParametersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MemcacheProjectsLocationsInstancesApplyParametersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->applyParametersRequest = new ApplyParametersRequest();
    $request->applyParametersRequest->applyAll = false;
    $request->applyParametersRequest->nodeIds = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->fields = 'vel';
    $request->key = 'error';
    $request->name = 'Rick Kertzmann';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new MemcacheProjectsLocationsInstancesApplyParametersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->memcacheProjectsLocationsInstancesApplyParameters($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->