<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsEnvironmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\ContainerImage;
use \OpenAPI\OpenAPI\Models\Shared\VmImage;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\NotebooksProjectsLocationsEnvironmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotebooksProjectsLocationsEnvironmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->environmentInput = new EnvironmentInput();
    $request->environmentInput->containerImage = new ContainerImage();
    $request->environmentInput->containerImage->repository = 'provident';
    $request->environmentInput->containerImage->tag = 'distinctio';
    $request->environmentInput->description = 'quibusdam';
    $request->environmentInput->displayName = 'unde';
    $request->environmentInput->postStartupScript = 'nulla';
    $request->environmentInput->vmImage = new VmImage();
    $request->environmentInput->vmImage->imageFamily = 'corrupti';
    $request->environmentInput->vmImage->imageName = 'illum';
    $request->environmentInput->vmImage->project = 'vel';
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->environmentId = 'iure';
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->oauthToken = 'ipsa';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new NotebooksProjectsLocationsEnvironmentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->notebooksProjectsLocationsEnvironmentsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->