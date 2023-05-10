<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsComputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Operations\EssentialcontactsProjectsContactsComputeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EssentialcontactsProjectsContactsComputeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->notificationCategories = [
        EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum::PRODUCT_UPDATES,
        EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum::SECURITY,
        EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum::BILLING,
    ];
    $request->oauthToken = 'deserunt';
    $request->pageSize = 384382;
    $request->pageToken = 'iure';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new EssentialcontactsProjectsContactsComputeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->essentialcontactsProjectsContactsCompute($request, $requestSecurity);

    if ($response->googleCloudEssentialcontactsV1ComputeContactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->