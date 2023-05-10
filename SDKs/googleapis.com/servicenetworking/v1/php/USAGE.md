<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingOperationsCancelSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingOperationsCancelSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingOperationsCancelSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->name = 'Raquel Bednar';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new ServicenetworkingOperationsCancelSecurity();
    $requestSecurity->option1 = new ServicenetworkingOperationsCancelSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->operations->servicenetworkingOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->