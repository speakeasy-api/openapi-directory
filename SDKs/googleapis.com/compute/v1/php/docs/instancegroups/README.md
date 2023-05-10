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
    ];
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'earum';
    $request->instanceGroup = 'minima';
    $request->key = 'odit';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->project = 'eius';
    $request->quotaUser = 'error';
    $request->requestId = 'vel';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'itaque';
    $request->zone = 'ab';

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
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iusto';
    $request->fields = 'corrupti';
    $request->filter = 'non';
    $request->includeAllScopes = false;
    $request->key = 'esse';
    $request->maxResults = 876682;
    $request->oauthToken = 'eligendi';
    $request->orderBy = 'minima';
    $request->pageToken = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'architecto';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'in';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolore';
    $request->fields = 'optio';
    $request->instanceGroup = 'quo';
    $request->key = 'repudiandae';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'libero';
    $request->quotaUser = 'suscipit';
    $request->requestId = 'illum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'sint';
    $request->zone = 'aliquid';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->fields = 'ullam';
    $request->instanceGroup = 'nihil';
    $request->key = 'eius';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'corporis';
    $request->zone = 'nihil';

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
    $request->instanceGroup->creationTimestamp = 'dolore';
    $request->instanceGroup->description = 'magnam';
    $request->instanceGroup->fingerprint = 'maiores';
    $request->instanceGroup->id = 'ipsam';
    $request->instanceGroup->kind = 'dicta';
    $request->instanceGroup->name = 'Ms. Clayton Rempel';
    $request->instanceGroup->namedPorts = [
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroup->network = 'dolor';
    $request->instanceGroup->region = 'sunt';
    $request->instanceGroup->selfLink = 'omnis';
    $request->instanceGroup->size = 464490;
    $request->instanceGroup->subnetwork = 'officiis';
    $request->instanceGroup->zone = 'dicta';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'odit';
    $request->key = 'incidunt';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'quaerat';
    $request->quotaUser = 'suscipit';
    $request->requestId = 'ducimus';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'modi';
    $request->zone = 'corrupti';

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
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fugit';
    $request->fields = 'facere';
    $request->filter = 'ipsam';
    $request->key = 'nobis';
    $request->maxResults = 784120;
    $request->oauthToken = 'labore';
    $request->orderBy = 'perspiciatis';
    $request->pageToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'qui';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'saepe';
    $request->zone = 'iure';

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
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'officiis';
    $request->filter = 'corporis';
    $request->instanceGroup = 'repellendus';
    $request->key = 'aut';
    $request->maxResults = 31605;
    $request->oauthToken = 'libero';
    $request->orderBy = 'excepturi';
    $request->pageToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'omnis';
    $request->quotaUser = 'officiis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'sit';
    $request->zone = 'velit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupsRemoveInstancesRequest = new InstanceGroupsRemoveInstancesRequest();
    $request->instanceGroupsRemoveInstancesRequest->instances = [
        new InstanceReference(),
        new InstanceReference(),
    ];
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eaque';
    $request->fields = 'corporis';
    $request->instanceGroup = 'cupiditate';
    $request->key = 'aut';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'quod';
    $request->quotaUser = 'quo';
    $request->requestId = 'architecto';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'ea';
    $request->zone = 'eius';

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
    $request->instanceGroupsSetNamedPortsRequest->fingerprint = 'voluptatem';
    $request->instanceGroupsSetNamedPortsRequest->namedPorts = [
        new NamedPort(),
    ];
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rerum';
    $request->fields = 'ipsum';
    $request->instanceGroup = 'debitis';
    $request->key = 'quis';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'ut';
    $request->requestId = 'delectus';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'maiores';
    $request->zone = 'debitis';

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
