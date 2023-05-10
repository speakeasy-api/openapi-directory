# instanceGroups

### Available Operations

* [computeInstanceGroupsAddInstances](#computeinstancegroupsaddinstances) - Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.
* [computeInstanceGroupsAggregatedList](#computeinstancegroupsaggregatedlist) - Retrieves the list of instance groups and sorts them by zone.
* [computeInstanceGroupsDelete](#computeinstancegroupsdelete) - Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.
* [computeInstanceGroupsGet](#computeinstancegroupsget) - Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.
* [computeInstanceGroupsInsert](#computeinstancegroupsinsert) - Creates an instance group in the specified project using the parameters that are included in the request.
* [computeInstanceGroupsList](#computeinstancegroupslist) - Retrieves the list of zonal instance group resources contained within the specified zone. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.
* [computeInstanceGroupsListInstances](#computeinstancegroupslistinstances) - Lists the instances in the specified instance group. The orderBy query parameter is not supported. The filter query parameter is supported, but only for expressions that use `eq` (equal) or `ne` (not equal) operators.
* [computeInstanceGroupsRemoveInstances](#computeinstancegroupsremoveinstances) - Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.
* [computeInstanceGroupsSetNamedPorts](#computeinstancegroupssetnamedports) - Sets the named ports for the specified instance group.
* [computeInstanceGroupsTestIamPermissions](#computeinstancegroupstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInstanceGroupsAddInstances

Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsAddInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupsAddInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsAddInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsAddInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsAddInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupsAddInstancesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupsAddInstancesRequest = new InstanceGroupsAddInstancesRequest();
    $request->instanceGroupsAddInstancesRequest->instances = [
        new InstanceReference(),
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'nemo';
    $request->instanceGroup = 'laboriosam';
    $request->key = 'iste';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'culpa';
    $request->requestId = 'reiciendis';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'voluptates';
    $request->zone = 'dolorum';

    $requestSecurity = new ComputeInstanceGroupsAddInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupsAddInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroups->computeInstanceGroupsAddInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupsAggregatedList

Retrieves the list of instance groups and sorts them by zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'placeat';
    $request->filter = 'libero';
    $request->includeAllScopes = false;
    $request->key = 'saepe';
    $request->maxResults = 57719;
    $request->oauthToken = 'dignissimos';
    $request->orderBy = 'veritatis';
    $request->pageToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'ab';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'officiis';

    $requestSecurity = new ComputeInstanceGroupsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroups->computeInstanceGroupsAggregatedList($request, $requestSecurity);

    if ($response->instanceGroupAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupsDelete

Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'harum';
    $request->fields = 'sequi';
    $request->instanceGroup = 'libero';
    $request->key = 'ipsa';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->project = 'aliquam';
    $request->quotaUser = 'vero';
    $request->requestId = 'dolorum';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'consequuntur';
    $request->zone = 'veniam';

    $requestSecurity = new ComputeInstanceGroupsDeleteSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroups->computeInstanceGroupsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupsGet

Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'asperiores';
    $request->instanceGroup = 'eius';
    $request->key = 'ipsa';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'iusto';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'in';
    $request->userIp = 'numquam';
    $request->zone = 'quia';

    $requestSecurity = new ComputeInstanceGroupsGetSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroups->computeInstanceGroupsGet($request, $requestSecurity);

    if ($response->instanceGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupsInsert

Creates an instance group in the specified project using the parameters that are included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroup;
use \OpenAPI\OpenAPI\Models\Shared\NamedPort;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroup = new InstanceGroup();
    $request->instanceGroup->creationTimestamp = 'blanditiis';
    $request->instanceGroup->description = 'ut';
    $request->instanceGroup->fingerprint = 'eius';
    $request->instanceGroup->id = 'cupiditate';
    $request->instanceGroup->kind = 'nisi';
    $request->instanceGroup->name = 'Garry Schultz';
    $request->instanceGroup->namedPorts = [
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroup->network = 'reiciendis';
    $request->instanceGroup->region = 'ex';
    $request->instanceGroup->selfLink = 'tempore';
    $request->instanceGroup->selfLinkWithId = 'provident';
    $request->instanceGroup->size = 589414;
    $request->instanceGroup->subnetwork = 'soluta';
    $request->instanceGroup->zone = 'maxime';
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'nisi';
    $request->key = 'aspernatur';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->project = 'tempore';
    $request->quotaUser = 'asperiores';
    $request->requestId = 'temporibus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'ipsam';
    $request->zone = 'porro';

    $requestSecurity = new ComputeInstanceGroupsInsertSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroups->computeInstanceGroupsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupsList

Retrieves the list of zonal instance group resources contained within the specified zone. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'porro';
    $request->fields = 'eaque';
    $request->filter = 'ea';
    $request->key = 'consequatur';
    $request->maxResults = 747577;
    $request->oauthToken = 'accusantium';
    $request->orderBy = 'ea';
    $request->pageToken = 'laborum';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'fugit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'molestiae';
    $request->userIp = 'voluptate';
    $request->zone = 'autem';

    $requestSecurity = new ComputeInstanceGroupsListSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroups->computeInstanceGroupsList($request, $requestSecurity);

    if ($response->instanceGroupList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupsListInstances

Lists the instances in the specified instance group. The orderBy query parameter is not supported. The filter query parameter is supported, but only for expressions that use `eq` (equal) or `ne` (not equal) operators.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsListInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupsListInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupsListInstancesRequestInstanceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsListInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsListInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsListInstancesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsListInstancesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupsListInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupsListInstancesRequest = new InstanceGroupsListInstancesRequest();
    $request->instanceGroupsListInstancesRequest->instanceState = InstanceGroupsListInstancesRequestInstanceStateEnum::RUNNING;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'suscipit';
    $request->fields = 'assumenda';
    $request->filter = 'doloremque';
    $request->instanceGroup = 'porro';
    $request->key = 'suscipit';
    $request->maxResults = 837590;
    $request->oauthToken = 'vel';
    $request->orderBy = 'itaque';
    $request->pageToken = 'nulla';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'quod';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'in';
    $request->uploadProtocol = 'nesciunt';
    $request->userIp = 'temporibus';
    $request->zone = 'temporibus';

    $requestSecurity = new ComputeInstanceGroupsListInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupsListInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroups->computeInstanceGroupsListInstances($request, $requestSecurity);

    if ($response->instanceGroupsListInstances !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupsRemoveInstances

Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsRemoveInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupsRemoveInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsRemoveInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsRemoveInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsRemoveInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupsRemoveInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupsRemoveInstancesRequest = new InstanceGroupsRemoveInstancesRequest();
    $request->instanceGroupsRemoveInstancesRequest->instances = [
        new InstanceReference(),
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dignissimos';
    $request->fields = 'illo';
    $request->instanceGroup = 'corporis';
    $request->key = 'ipsa';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'blanditiis';
    $request->requestId = 'recusandae';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'doloremque';
    $request->zone = 'quibusdam';

    $requestSecurity = new ComputeInstanceGroupsRemoveInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupsRemoveInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroups->computeInstanceGroupsRemoveInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupsSetNamedPorts

Sets the named ports for the specified instance group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsSetNamedPortsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupsSetNamedPortsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NamedPort;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsSetNamedPortsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsSetNamedPortsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsSetNamedPortsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupsSetNamedPortsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupsSetNamedPortsRequest = new InstanceGroupsSetNamedPortsRequest();
    $request->instanceGroupsSetNamedPortsRequest->fingerprint = 'minus';
    $request->instanceGroupsSetNamedPortsRequest->namedPorts = [
        new NamedPort(),
        new NamedPort(),
    ];
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'perspiciatis';
    $request->instanceGroup = 'quod';
    $request->key = 'magni';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'fugit';
    $request->quotaUser = 'quisquam';
    $request->requestId = 'odio';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'iure';
    $request->userIp = 'aliquid';
    $request->zone = 'culpa';

    $requestSecurity = new ComputeInstanceGroupsSetNamedPortsSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupsSetNamedPortsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroups->computeInstanceGroupsSetNamedPorts($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'ipsum',
        'doloremque',
        'quod',
        'dignissimos',
    ];
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repellat';
    $request->fields = 'exercitationem';
    $request->key = 'quidem';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'vitae';
    $request->resource = 'excepturi';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'eaque';
    $request->zone = 'reiciendis';

    $requestSecurity = new ComputeInstanceGroupsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroups->computeInstanceGroupsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
