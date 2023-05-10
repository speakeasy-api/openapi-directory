# interconnectLocations

### Available Operations

* [computeInterconnectLocationsGet](#computeinterconnectlocationsget) - Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a list() request.
* [computeInterconnectLocationsList](#computeinterconnectlocationslist) - Retrieves the list of interconnect locations available to the specified project.
* [computeInterconnectLocationsTestIamPermissions](#computeinterconnectlocationstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInterconnectLocationsGet

Returns the details for the specified interconnect location. Gets a list of available interconnect locations by making a list() request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectLocationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'eligendi';
    $request->interconnectLocation = 'nam';
    $request->key = 'placeat';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'aliquid';
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'enim';

    $requestSecurity = new ComputeInterconnectLocationsGetSecurity();
    $requestSecurity->option1 = new ComputeInterconnectLocationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectLocations->computeInterconnectLocationsGet($request, $requestSecurity);

    if ($response->interconnectLocation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectLocationsList

Retrieves the list of interconnect locations available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'at';
    $request->fields = 'culpa';
    $request->filter = 'alias';
    $request->key = 'eos';
    $request->maxResults = 550066;
    $request->oauthToken = 'quisquam';
    $request->orderBy = 'dolor';
    $request->pageToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'enim';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'veritatis';

    $requestSecurity = new ComputeInterconnectLocationsListSecurity();
    $requestSecurity->option1 = new ComputeInterconnectLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectLocations->computeInterconnectLocationsList($request, $requestSecurity);

    if ($response->interconnectLocationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectLocationsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectLocationsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectLocationsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'aut',
    ];
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deserunt';
    $request->fields = 'sint';
    $request->key = 'eum';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'rem';
    $request->resource = 'occaecati';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'voluptate';
    $request->userIp = 'nam';

    $requestSecurity = new ComputeInterconnectLocationsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeInterconnectLocationsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectLocations->computeInterconnectLocationsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
