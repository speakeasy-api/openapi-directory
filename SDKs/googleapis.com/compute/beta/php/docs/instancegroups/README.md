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
        new InstanceReference(),
        new InstanceReference(),
        new InstanceReference(),
    ];
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->fields = 'quaerat';
    $request->instanceGroup = 'a';
    $request->key = 'neque';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'numquam';
    $request->requestId = 'mollitia';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'suscipit';
    $request->zone = 'quas';

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
    $request->accessToken = 'enim';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'ea';
    $request->filter = 'autem';
    $request->includeAllScopes = false;
    $request->key = 'voluptate';
    $request->maxResults = 199228;
    $request->oauthToken = 'magni';
    $request->orderBy = 'animi';
    $request->pageToken = 'dolorum';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'temporibus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'commodi';

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
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'expedita';
    $request->instanceGroup = 'in';
    $request->key = 'eaque';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'blanditiis';
    $request->quotaUser = 'minus';
    $request->requestId = 'tenetur';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'a';
    $request->zone = 'tempore';

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
    $request->accessToken = 'earum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->fields = 'quidem';
    $request->instanceGroup = 'omnis';
    $request->key = 'laborum';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'laudantium';
    $request->userIp = 'dolore';
    $request->zone = 'aliquid';

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
    $request->instanceGroup->creationTimestamp = 'aspernatur';
    $request->instanceGroup->description = 'quod';
    $request->instanceGroup->fingerprint = 'dolorem';
    $request->instanceGroup->id = 'neque';
    $request->instanceGroup->kind = 'ipsa';
    $request->instanceGroup->name = 'Mrs. Levi Rodriguez';
    $request->instanceGroup->namedPorts = [
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroup->network = 'quibusdam';
    $request->instanceGroup->region = 'sint';
    $request->instanceGroup->selfLink = 'voluptates';
    $request->instanceGroup->size = 467109;
    $request->instanceGroup->subnetwork = 'ad';
    $request->instanceGroup->zone = 'eligendi';
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sit';
    $request->fields = 'iure';
    $request->key = 'earum';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'omnis';
    $request->requestId = 'sed';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'et';
    $request->userIp = 'illo';
    $request->zone = 'est';

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
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'cum';
    $request->filter = 'maiores';
    $request->key = 'provident';
    $request->maxResults = 125083;
    $request->oauthToken = 'maiores';
    $request->orderBy = 'excepturi';
    $request->pageToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'dolore';
    $request->quotaUser = 'aspernatur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'at';
    $request->zone = 'unde';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupsListInstancesRequest = new InstanceGroupsListInstancesRequest();
    $request->instanceGroupsListInstancesRequest->instanceState = InstanceGroupsListInstancesRequestInstanceStateEnum::RUNNING;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'soluta';
    $request->fields = 'earum';
    $request->filter = 'praesentium';
    $request->instanceGroup = 'explicabo';
    $request->key = 'odit';
    $request->maxResults = 73197;
    $request->oauthToken = 'architecto';
    $request->orderBy = 'quia';
    $request->pageToken = 'ad';
    $request->prettyPrint = false;
    $request->project = 'velit';
    $request->quotaUser = 'ullam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'iste';
    $request->zone = 'blanditiis';

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
        new InstanceReference(),
        new InstanceReference(),
    ];
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iusto';
    $request->fields = 'culpa';
    $request->instanceGroup = 'voluptate';
    $request->key = 'cupiditate';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->project = 'assumenda';
    $request->quotaUser = 'nihil';
    $request->requestId = 'sed';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'magni';
    $request->zone = 'modi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupsSetNamedPortsRequest = new InstanceGroupsSetNamedPortsRequest();
    $request->instanceGroupsSetNamedPortsRequest->fingerprint = 'dolore';
    $request->instanceGroupsSetNamedPortsRequest->namedPorts = [
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
    ];
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'quam';
    $request->instanceGroup = 'eos';
    $request->key = 'omnis';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'similique';
    $request->requestId = 'eligendi';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'inventore';
    $request->userIp = 'necessitatibus';
    $request->zone = 'tenetur';

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
        'quia',
        'quis',
    ];
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dicta';
    $request->fields = 'eum';
    $request->key = 'sint';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->project = 'nobis';
    $request->quotaUser = 'quasi';
    $request->resource = 'itaque';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'temporibus';
    $request->zone = 'voluptatum';

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
