# interconnectRemoteLocations

### Available Operations

* [computeInterconnectRemoteLocationsGet](#computeinterconnectremotelocationsget) - Returns the details for the specified interconnect remote location. Gets a list of available interconnect remote locations by making a list() request.
* [computeInterconnectRemoteLocationsList](#computeinterconnectremotelocationslist) - Retrieves the list of interconnect remote locations available to the specified project.
* [computeInterconnectRemoteLocationsTestIamPermissions](#computeinterconnectremotelocationstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInterconnectRemoteLocationsGet

Returns the details for the specified interconnect remote location. Gets a list of available interconnect remote locations by making a list() request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectRemoteLocationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odio';
    $request->fields = 'adipisci';
    $request->interconnectRemoteLocation = 'necessitatibus';
    $request->key = 'veritatis';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'quasi';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'dolorum';
    $request->userIp = 'vel';

    $requestSecurity = new ComputeInterconnectRemoteLocationsGetSecurity();
    $requestSecurity->option1 = new ComputeInterconnectRemoteLocationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectRemoteLocations->computeInterconnectRemoteLocationsGet($request, $requestSecurity);

    if ($response->interconnectRemoteLocation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectRemoteLocationsList

Retrieves the list of interconnect remote locations available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectRemoteLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'eius';
    $request->filter = 'perspiciatis';
    $request->key = 'dolore';
    $request->maxResults = 362174;
    $request->oauthToken = 'natus';
    $request->orderBy = 'numquam';
    $request->pageToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'ducimus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'veniam';
    $request->userIp = 'cumque';

    $requestSecurity = new ComputeInterconnectRemoteLocationsListSecurity();
    $requestSecurity->option1 = new ComputeInterconnectRemoteLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectRemoteLocations->computeInterconnectRemoteLocationsList($request, $requestSecurity);

    if ($response->interconnectRemoteLocationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectRemoteLocationsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectRemoteLocationsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectRemoteLocationsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'amet',
        'blanditiis',
    ];
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'rem';
    $request->key = 'laboriosam';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'quisquam';
    $request->resource = 'nulla';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'dolore';

    $requestSecurity = new ComputeInterconnectRemoteLocationsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeInterconnectRemoteLocationsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectRemoteLocations->computeInterconnectRemoteLocationsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
