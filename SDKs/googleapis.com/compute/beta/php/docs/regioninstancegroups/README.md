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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'voluptatem';
    $request->instanceGroup = 'aut';
    $request->key = 'optio';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->project = 'maxime';
    $request->quotaUser = 'deserunt';
    $request->region = 'repudiandae';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'et';
    $request->userIp = 'similique';

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
    $request->accessToken = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'impedit';
    $request->fields = 'repellat';
    $request->filter = 'laudantium';
    $request->key = 'quo';
    $request->maxResults = 240080;
    $request->oauthToken = 'eius';
    $request->orderBy = 'cupiditate';
    $request->pageToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'commodi';
    $request->quotaUser = 'harum';
    $request->region = 'quidem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'ducimus';
    $request->userIp = 'id';

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
    $request->regionInstanceGroupsListInstancesRequest->instanceState = RegionInstanceGroupsListInstancesRequestInstanceStateEnum::ALL;
    $request->regionInstanceGroupsListInstancesRequest->portName = 'deserunt';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'deserunt';
    $request->filter = 'perspiciatis';
    $request->instanceGroup = 'voluptates';
    $request->key = 'impedit';
    $request->maxResults = 333112;
    $request->oauthToken = 'rerum';
    $request->orderBy = 'amet';
    $request->pageToken = 'eum';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->quotaUser = 'rem';
    $request->region = 'maxime';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'consectetur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupsSetNamedPortsRequest = new RegionInstanceGroupsSetNamedPortsRequest();
    $request->regionInstanceGroupsSetNamedPortsRequest->fingerprint = 'dolor';
    $request->regionInstanceGroupsSetNamedPortsRequest->namedPorts = [
        new NamedPort(),
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dignissimos';
    $request->fields = 'iure';
    $request->instanceGroup = 'sit';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'autem';
    $request->region = 'earum';
    $request->requestId = 'sint';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'accusantium';

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
        'beatae',
        'aut',
    ];
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquam';
    $request->fields = 'esse';
    $request->key = 'pariatur';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'asperiores';
    $request->region = 'repellat';
    $request->resource = 'odit';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'cupiditate';
    $request->userIp = 'ab';

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
