<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsAcceleratorTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TpuProjectsLocationsAcceleratorTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TpuProjectsLocationsAcceleratorTypesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->filter = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->orderBy = 'vel';
    $request->pageSize = 623564;
    $request->pageToken = 'deserunt';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new TpuProjectsLocationsAcceleratorTypesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->tpuProjectsLocationsAcceleratorTypesList($request, $requestSecurity);

    if ($response->listAcceleratorTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->