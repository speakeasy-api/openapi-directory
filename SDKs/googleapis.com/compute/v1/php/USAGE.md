<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAcceleratorTypesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->filter = 'nulla';
    $request->includeAllScopes = false;
    $request->key = 'corrupti';
    $request->maxResults = 847252;
    $request->oauthToken = 'vel';
    $request->orderBy = 'error';
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'suscipit';
    $request->quotaUser = 'iure';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'ipsa';

    $requestSecurity = new ComputeAcceleratorTypesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeAcceleratorTypesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acceleratorTypes->computeAcceleratorTypesAggregatedList($request, $requestSecurity);

    if ($response->acceleratorTypeAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->