<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaserulesProjectsReleasesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaserulesProjectsReleasesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->releaseInput = new ReleaseInput();
    $request->releaseInput->name = 'Kelvin Sporer';
    $request->releaseInput->rulesetName = 'corrupti';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'deserunt';
    $request->key = 'suscipit';
    $request->name = 'Dr. Valerie Toy';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new FirebaserulesProjectsReleasesCreateSecurity();
    $requestSecurity->option1 = new FirebaserulesProjectsReleasesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaserulesProjectsReleasesCreate($request, $requestSecurity);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->