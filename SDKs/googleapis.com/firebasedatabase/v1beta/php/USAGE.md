<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasedatabaseProjectsLocationsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->databaseInstanceInput = new DatabaseInstanceInput();
    $request->databaseInstanceInput->name = 'Kelvin Sporer';
    $request->databaseInstanceInput->type = DatabaseInstanceTypeEnum::DEFAULT_DATABASE;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->databaseId = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->parent = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';
    $request->validateOnly = false;

    $requestSecurity = new FirebasedatabaseProjectsLocationsInstancesCreateSecurity();
    $requestSecurity->option1 = new FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasedatabaseProjectsLocationsInstancesCreate($request, $requestSecurity);

    if ($response->databaseInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->