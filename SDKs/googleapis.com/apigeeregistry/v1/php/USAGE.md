<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApigeeregistryProjectsLocationsApisCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApigeeregistryProjectsLocationsApisCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->apiInput = new ApiInput();
    $request->apiInput->annotations = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->apiInput->availability = 'vel';
    $request->apiInput->description = 'error';
    $request->apiInput->displayName = 'deserunt';
    $request->apiInput->labels = [
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->apiInput->name = 'Ricky Hoppe';
    $request->apiInput->recommendedDeployment = 'placeat';
    $request->apiInput->recommendedVersion = 'voluptatum';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->apiId = 'nisi';
    $request->callback = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->oauthToken = 'quis';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new ApigeeregistryProjectsLocationsApisCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->apigeeregistryProjectsLocationsApisCreate($request, $requestSecurity);

    if ($response->api !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->