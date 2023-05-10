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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->diskType = 'voluptas';
    $request->fields = 'delectus';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'occaecati';
    $request->quotaUser = 'labore';
    $request->region = 'ipsam';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'nihil';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reiciendis';
    $request->fields = 'consectetur';
    $request->filter = 'provident';
    $request->key = 'possimus';
    $request->maxResults = 76922;
    $request->oauthToken = 'autem';
    $request->orderBy = 'tenetur';
    $request->pageToken = 'rerum';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'odio';
    $request->region = 'nisi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'assumenda';
    $request->userIp = 'ab';

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
