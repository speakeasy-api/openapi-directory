<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingProjectsSitesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->siteInput = new SiteInput();
    $request->siteInput->appId = 'provident';
    $request->siteInput->labels = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->oauthToken = 'debitis';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->siteId = 'tempora';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new FirebasehostingProjectsSitesCreateSecurity();
    $requestSecurity->option1 = new FirebasehostingProjectsSitesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasehostingProjectsSitesCreate($request, $requestSecurity);

    if ($response->site !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->