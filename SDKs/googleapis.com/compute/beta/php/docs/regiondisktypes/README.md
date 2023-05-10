# regionDiskTypes

### Available Operations

* [computeRegionDiskTypesGet](#computeregiondisktypesget) - Returns the specified regional disk type.
* [computeRegionDiskTypesList](#computeregiondisktypeslist) - Retrieves a list of regional disk types available to the specified project.

## computeRegionDiskTypesGet

Returns the specified regional disk type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDiskTypesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDiskTypesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDiskTypesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDiskTypesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDiskTypesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDiskTypesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'exercitationem';
    $request->diskType = 'quaerat';
    $request->fields = 'in';
    $request->key = 'magni';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->project = 'at';
    $request->quotaUser = 'nulla';
    $request->region = 'dicta';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'porro';

    $requestSecurity = new ComputeRegionDiskTypesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionDiskTypesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDiskTypes->computeRegionDiskTypesGet($request, $requestSecurity);

    if ($response->diskType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionDiskTypesList

Retrieves a list of regional disk types available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDiskTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDiskTypesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDiskTypesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDiskTypesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionDiskTypesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionDiskTypesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'quae';
    $request->filter = 'distinctio';
    $request->key = 'maxime';
    $request->maxResults = 685799;
    $request->oauthToken = 'laudantium';
    $request->orderBy = 'blanditiis';
    $request->pageToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'dignissimos';
    $request->region = 'eaque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'labore';
    $request->userIp = 'consectetur';

    $requestSecurity = new ComputeRegionDiskTypesListSecurity();
    $requestSecurity->option1 = new ComputeRegionDiskTypesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionDiskTypes->computeRegionDiskTypesList($request, $requestSecurity);

    if ($response->regionDiskTypeList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
