<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersCombineRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersCombineSettingSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagmanagerAccountsContainersCombineSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagmanagerAccountsContainersCombineRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->allowUserPermissionFeatureUpdate = false;
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->containerId = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->path = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->settingSource = TagmanagerAccountsContainersCombineSettingSourceEnum::CURRENT;
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new TagmanagerAccountsContainersCombineSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->tagmanagerAccountsContainersCombine($request, $requestSecurity);

    if ($response->container !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->