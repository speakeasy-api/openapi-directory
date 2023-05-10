<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\Deployment;
use \OpenAPI\OpenAPI\Models\Shared\CreateProfileRequestProfileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\CloudprofilerProjectsProfilesCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudprofilerProjectsProfilesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createProfileRequest = new CreateProfileRequest();
    $request->createProfileRequest->deployment = new Deployment();
    $request->createProfileRequest->deployment->labels = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->createProfileRequest->deployment->projectId = 'vel';
    $request->createProfileRequest->deployment->target = 'error';
    $request->createProfileRequest->profileType = [
        CreateProfileRequestProfileTypeEnum::HEAP,
        CreateProfileRequestProfileTypeEnum::HEAP,
        CreateProfileRequestProfileTypeEnum::WALL,
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->parent = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new CloudprofilerProjectsProfilesCreateSecurity();
    $requestSecurity->option1 = new CloudprofilerProjectsProfilesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudprofilerProjectsProfilesCreate($request, $requestSecurity);

    if ($response->profile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->