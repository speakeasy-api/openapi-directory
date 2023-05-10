<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerLiensCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Lien;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerLiensCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerLiensCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudresourcemanagerLiensCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudresourcemanagerLiensCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->lien = new Lien();
    $request->lien->createTime = 'provident';
    $request->lien->name = 'Ellis Mitchell';
    $request->lien->origin = 'illum';
    $request->lien->parent = 'vel';
    $request->lien->reason = 'error';
    $request->lien->restrictions = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new CloudresourcemanagerLiensCreateSecurity();
    $requestSecurity->option1 = new CloudresourcemanagerLiensCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->liens->cloudresourcemanagerLiensCreate($request, $requestSecurity);

    if ($response->lien !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->