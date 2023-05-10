<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugDatasourcesItemsCheckAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Principal;
use \OpenAPI\OpenAPI\Models\Shared\GSuitePrincipal;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugDatasourcesItemsCheckAccessSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchDebugDatasourcesItemsCheckAccessRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->principal = new Principal();
    $request->principal->groupResourceName = 'provident';
    $request->principal->gsuitePrincipal = new GSuitePrincipal();
    $request->principal->gsuitePrincipal->gsuiteDomain = false;
    $request->principal->gsuitePrincipal->gsuiteGroupEmail = 'distinctio';
    $request->principal->gsuitePrincipal->gsuiteUserEmail = 'quibusdam';
    $request->principal->userResourceName = 'unde';
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->debugOptionsEnableDebugging = false;
    $request->fields = 'vel';
    $request->key = 'error';
    $request->name = 'Rick Kertzmann';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new CloudsearchDebugDatasourcesItemsCheckAccessSecurity();
    $requestSecurity->option1 = new CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->debug->cloudsearchDebugDatasourcesItemsCheckAccess($request, $requestSecurity);

    if ($response->checkAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->