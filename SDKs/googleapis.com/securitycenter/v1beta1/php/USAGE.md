<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsAssetsGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SecuritycenterOrganizationsAssetsGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecuritycenterOrganizationsAssetsGroupRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->groupAssetsRequest = new GroupAssetsRequest();
    $request->groupAssetsRequest->compareDuration = 'provident';
    $request->groupAssetsRequest->filter = 'distinctio';
    $request->groupAssetsRequest->groupBy = 'quibusdam';
    $request->groupAssetsRequest->pageSize = 602763;
    $request->groupAssetsRequest->pageToken = 'nulla';
    $request->groupAssetsRequest->readTime = 'corrupti';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'deserunt';
    $request->key = 'suscipit';
    $request->oauthToken = 'iure';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new SecuritycenterOrganizationsAssetsGroupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->organizations->securitycenterOrganizationsAssetsGroup($request, $requestSecurity);

    if ($response->groupAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->