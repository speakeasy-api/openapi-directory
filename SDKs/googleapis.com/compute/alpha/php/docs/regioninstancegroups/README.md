# regionInstanceGroups

### Available Operations

* [computeRegionInstanceGroupsGet](#computeregioninstancegroupsget) - Returns the specified instance group resource.
* [computeRegionInstanceGroupsList](#computeregioninstancegroupslist) - Retrieves the list of instance group resources contained within the specified region.
* [computeRegionInstanceGroupsListInstances](#computeregioninstancegroupslistinstances) - Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running. The orderBy query parameter is not supported.
* [computeRegionInstanceGroupsSetNamedPorts](#computeregioninstancegroupssetnamedports) - Sets the named ports for the specified regional instance group.
* [computeRegionInstanceGroupsTestIamPermissions](#computeregioninstancegroupstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionInstanceGroupsGet

Returns the specified instance group resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'quos';
    $request->instanceGroup = 'corporis';
    $request->key = 'dolorem';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->project = 'eveniet';
    $request->quotaUser = 'eos';
    $request->region = 'laudantium';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'maxime';

    $requestSecurity = new ComputeRegionInstanceGroupsGetSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroups->computeRegionInstanceGroupsGet($request, $requestSecurity);

    if ($response->instanceGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupsList

Retrieves the list of instance group resources contained within the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'non';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'quia';
    $request->filter = 'ratione';
    $request->key = 'illo';
    $request->maxResults = 985677;
    $request->oauthToken = 'earum';
    $request->orderBy = 'commodi';
    $request->pageToken = 'nisi';
    $request->prettyPrint = false;
    $request->project = 'aliquid';
    $request->quotaUser = 'dolore';
    $request->region = 'eligendi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'quae';
    $request->userIp = 'pariatur';

    $requestSecurity = new ComputeRegionInstanceGroupsListSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroups->computeRegionInstanceGroupsList($request, $requestSecurity);

    if ($response->regionInstanceGroupList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupsListInstances

Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running. The orderBy query parameter is not supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupsListInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupsListInstancesRequestInstanceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListInstancesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListInstancesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupsListInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupsListInstancesRequest = new RegionInstanceGroupsListInstancesRequest();
    $request->regionInstanceGroupsListInstancesRequest->instanceState = RegionInstanceGroupsListInstancesRequestInstanceStateEnum::RUNNING;
    $request->regionInstanceGroupsListInstancesRequest->portName = 'nam';
    $request->accessToken = 'est';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quod';
    $request->fields = 'rerum';
    $request->filter = 'culpa';
    $request->instanceGroup = 'sit';
    $request->key = 'eum';
    $request->maxResults = 590360;
    $request->oauthToken = 'tempore';
    $request->orderBy = 'corrupti';
    $request->pageToken = 'at';
    $request->prettyPrint = false;
    $request->project = 'fugit';
    $request->quotaUser = 'cupiditate';
    $request->region = 'dicta';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'recusandae';
    $request->userIp = 'libero';

    $requestSecurity = new ComputeRegionInstanceGroupsListInstancesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupsListInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroups->computeRegionInstanceGroupsListInstances($request, $requestSecurity);

    if ($response->regionInstanceGroupsListInstances !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupsSetNamedPorts

Sets the named ports for the specified regional instance group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsSetNamedPortsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupsSetNamedPortsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NamedPort;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsSetNamedPortsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsSetNamedPortsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsSetNamedPortsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupsSetNamedPortsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupsSetNamedPortsRequest = new RegionInstanceGroupsSetNamedPortsRequest();
    $request->regionInstanceGroupsSetNamedPortsRequest->fingerprint = 'quae';
    $request->regionInstanceGroupsSetNamedPortsRequest->namedPorts = [
        new NamedPort(),
    ];
    $request->accessToken = 'est';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'laborum';
    $request->instanceGroup = 'atque';
    $request->key = 'molestiae';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'perspiciatis';
    $request->quotaUser = 'labore';
    $request->region = 'esse';
    $request->requestId = 'unde';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'assumenda';

    $requestSecurity = new ComputeRegionInstanceGroupsSetNamedPortsSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupsSetNamedPortsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroups->computeRegionInstanceGroupsSetNamedPorts($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'cumque',
        'earum',
        'ducimus',
        'libero',
    ];
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'repellat';
    $request->key = 'blanditiis';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'quae';
    $request->region = 'deleniti';
    $request->resource = 'asperiores';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'fugit';

    $requestSecurity = new ComputeRegionInstanceGroupsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroups->computeRegionInstanceGroupsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
