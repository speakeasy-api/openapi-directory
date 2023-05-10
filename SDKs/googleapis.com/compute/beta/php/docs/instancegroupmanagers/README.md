# instanceGroupManagers

### Available Operations

* [computeInstanceGroupManagersAbandonInstances](#computeinstancegroupmanagersabandoninstances) - Flags the specified instances to be removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersAggregatedList](#computeinstancegroupmanagersaggregatedlist) - Retrieves the list of managed instance groups and groups them by zone.
* [computeInstanceGroupManagersApplyUpdatesToInstances](#computeinstancegroupmanagersapplyupdatestoinstances) - Applies changes to selected instances on the managed instance group. This method can be used to apply new overrides and/or new versions.
* [computeInstanceGroupManagersCreateInstances](#computeinstancegroupmanagerscreateinstances) - Creates instances with per-instance configurations in this managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.
* [computeInstanceGroupManagersDelete](#computeinstancegroupmanagersdelete) - Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read Deleting an instance group for more information.
* [computeInstanceGroupManagersDeleteInstances](#computeinstancegroupmanagersdeleteinstances) - Flags the specified instances in the managed instance group for immediate deletion. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersDeletePerInstanceConfigs](#computeinstancegroupmanagersdeleteperinstanceconfigs) - Deletes selected per-instance configurations for the managed instance group.
* [computeInstanceGroupManagersGet](#computeinstancegroupmanagersget) - Returns all of the details about the specified managed instance group.
* [computeInstanceGroupManagersInsert](#computeinstancegroupmanagersinsert) - Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A managed instance group can have up to 1000 VM instances per group. Please contact Cloud Support if you need an increase in this limit.
* [computeInstanceGroupManagersList](#computeinstancegroupmanagerslist) - Retrieves a list of managed instance groups that are contained within the specified project and zone.
* [computeInstanceGroupManagersListErrors](#computeinstancegroupmanagerslisterrors) - Lists all errors thrown by actions on instances for a given managed instance group. The filter and orderBy query parameters are not supported.
* [computeInstanceGroupManagersListManagedInstances](#computeinstancegroupmanagerslistmanagedinstances) - Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.
* [computeInstanceGroupManagersListPerInstanceConfigs](#computeinstancegroupmanagerslistperinstanceconfigs) - Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.
* [computeInstanceGroupManagersPatch](#computeinstancegroupmanagerspatch) - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listManagedInstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* [computeInstanceGroupManagersPatchPerInstanceConfigs](#computeinstancegroupmanagerspatchperinstanceconfigs) - Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.
* [computeInstanceGroupManagersRecreateInstances](#computeinstancegroupmanagersrecreateinstances) - Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersResize](#computeinstancegroupmanagersresize) - Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. When resizing down, the instance group arbitrarily chooses the order in which VMs are deleted. The group takes into account some VM attributes when making the selection including: + The status of the VM instance. + The health of the VM instance. + The instance template version the VM is based on. + For regional managed instance groups, the location of the VM instance. This list is subject to change. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* [computeInstanceGroupManagersResizeAdvanced](#computeinstancegroupmanagersresizeadvanced) - Resizes the managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size of the instance group, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating, creatingWithoutRetries, or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* [computeInstanceGroupManagersSetAutoHealingPolicies](#computeinstancegroupmanagerssetautohealingpolicies) - Motifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use instanceGroupManagers.patch instead.
* [computeInstanceGroupManagersSetInstanceTemplate](#computeinstancegroupmanagerssetinstancetemplate) - Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.
* [computeInstanceGroupManagersSetTargetPools](#computeinstancegroupmanagerssettargetpools) - Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
* [computeInstanceGroupManagersTestIamPermissions](#computeinstancegroupmanagerstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeInstanceGroupManagersUpdate](#computeinstancegroupmanagersupdate) - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listManagedInstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* [computeInstanceGroupManagersUpdatePerInstanceConfigs](#computeinstancegroupmanagersupdateperinstanceconfigs) - Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

## computeInstanceGroupManagersAbandonInstances

Flags the specified instances to be removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersAbandonInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersAbandonInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersAbandonInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersAbandonInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersAbandonInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersAbandonInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersAbandonInstancesRequest = new InstanceGroupManagersAbandonInstancesRequest();
    $request->instanceGroupManagersAbandonInstancesRequest->instances = [
        'sapiente',
    ];
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->fields = 'consectetur';
    $request->instanceGroupManager = 'asperiores';
    $request->key = 'architecto';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'possimus';
    $request->quotaUser = 'tempore';
    $request->requestId = 'asperiores';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'consequuntur';
    $request->userIp = 'nemo';
    $request->zone = 'nobis';

    $requestSecurity = new ComputeInstanceGroupManagersAbandonInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersAbandonInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersAbandonInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersAggregatedList

Retrieves the list of managed instance groups and groups them by zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minima';
    $request->fields = 'magni';
    $request->filter = 'itaque';
    $request->includeAllScopes = false;
    $request->key = 'error';
    $request->maxResults = 712523;
    $request->oauthToken = 'error';
    $request->orderBy = 'placeat';
    $request->pageToken = 'temporibus';
    $request->prettyPrint = false;
    $request->project = 'voluptate';
    $request->quotaUser = 'earum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'odit';

    $requestSecurity = new ComputeInstanceGroupManagersAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersAggregatedList($request, $requestSecurity);

    if ($response->instanceGroupManagerAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersApplyUpdatesToInstances

Applies changes to selected instances on the managed instance group. This method can be used to apply new overrides and/or new versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersApplyUpdatesToInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersApplyUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersApplyUpdatesRequestMinimalActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersApplyUpdatesToInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersApplyUpdatesRequest = new InstanceGroupManagersApplyUpdatesRequest();
    $request->instanceGroupManagersApplyUpdatesRequest->allInstances = false;
    $request->instanceGroupManagersApplyUpdatesRequest->instances = [
        'vel',
        'dolorum',
        'alias',
    ];
    $request->instanceGroupManagersApplyUpdatesRequest->minimalAction = InstanceGroupManagersApplyUpdatesRequestMinimalActionEnum::RESTART;
    $request->instanceGroupManagersApplyUpdatesRequest->mostDisruptiveAllowedAction = InstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum::NONE;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cum';
    $request->fields = 'iusto';
    $request->instanceGroupManager = 'corrupti';
    $request->key = 'non';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'vero';
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'omnis';
    $request->userIp = 'recusandae';
    $request->zone = 'architecto';

    $requestSecurity = new ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersApplyUpdatesToInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersApplyUpdatesToInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersCreateInstances

Creates instances with per-instance configurations in this managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersCreateInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersCreateInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PerInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\PreservedState;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedDisk;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedDiskAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedDiskModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedNetworkIp;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedNetworkIpAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedNetworkIpIpAddress;
use \OpenAPI\OpenAPI\Models\Shared\PerInstanceConfigStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersCreateInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersCreateInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersCreateInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersCreateInstancesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManagersCreateInstancesRequest = new InstanceGroupManagersCreateInstancesRequest();
    $request->instanceGroupManagersCreateInstancesRequest->instances = [
        new PerInstanceConfig(),
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'cumque';
    $request->instanceGroupManager = 'dolore';
    $request->key = 'optio';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->project = 'repudiandae';
    $request->quotaUser = 'tempora';
    $request->requestId = 'libero';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'illum';
    $request->userIp = 'iusto';
    $request->zone = 'aliquid';

    $requestSecurity = new ComputeInstanceGroupManagersCreateInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersCreateInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersCreateInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersDelete

Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read Deleting an instance group for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'consectetur';
    $request->instanceGroupManager = 'eligendi';
    $request->key = 'ullam';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'eius';
    $request->quotaUser = 'dignissimos';
    $request->requestId = 'corporis';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'architecto';
    $request->userIp = 'amet';
    $request->zone = 'corporis';

    $requestSecurity = new ComputeInstanceGroupManagersDeleteSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersDeleteInstances

Flags the specified instances in the managed instance group for immediate deletion. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersDeleteInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersDeleteInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersDeleteInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersDeleteInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersDeleteInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersDeleteInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersDeleteInstancesRequest = new InstanceGroupManagersDeleteInstancesRequest();
    $request->instanceGroupManagersDeleteInstancesRequest->instances = [
        'dolore',
        'magnam',
        'maiores',
        'ipsam',
    ];
    $request->instanceGroupManagersDeleteInstancesRequest->skipInstancesOnValidationError = false;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'praesentium';
    $request->fields = 'libero';
    $request->instanceGroupManager = 'consequatur';
    $request->key = 'totam';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'dolor';
    $request->requestId = 'sunt';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'quam';
    $request->userIp = 'officiis';
    $request->zone = 'dicta';

    $requestSecurity = new ComputeInstanceGroupManagersDeleteInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersDeleteInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersDeleteInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersDeletePerInstanceConfigs

Deletes selected per-instance configurations for the managed instance group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersDeletePerInstanceConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersDeletePerInstanceConfigsReq;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersDeletePerInstanceConfigsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManagersDeletePerInstanceConfigsReq = new InstanceGroupManagersDeletePerInstanceConfigsReq();
    $request->instanceGroupManagersDeletePerInstanceConfigsReq->names = [
        'deserunt',
    ];
    $request->accessToken = 'odit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'quaerat';
    $request->instanceGroupManager = 'suscipit';
    $request->key = 'ducimus';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'modi';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'nihil';
    $request->userIp = 'eius';
    $request->zone = 'placeat';

    $requestSecurity = new ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersDeletePerInstanceConfigs($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersGet

Returns all of the details about the specified managed instance group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'porro';
    $request->instanceGroupManager = 'labore';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'qui';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'saepe';
    $request->zone = 'iure';

    $requestSecurity = new ComputeInstanceGroupManagersGetSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersGet($request, $requestSecurity);

    if ($response->instanceGroupManager !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersInsert

Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A managed instance group can have up to 1000 VM instances per group. Please contact Cloud Support if you need an increase in this limit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManager;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAllInstancesConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstancePropertiesPatch;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerActionsSummary;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyTargetShapeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyZoneConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerFailoverActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerListManagedInstancesResultsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamedPort;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicy;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedState;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateDiskDevice;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateNetworkIp;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatus;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatusAllInstancesConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatusStateful;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatusStatefulPerInstanceConfigs;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatusVersionTarget;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyMinimalActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyReplacementMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerVersion;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManager = new InstanceGroupManager();
    $request->instanceGroupManager->allInstancesConfig = new InstanceGroupManagerAllInstancesConfig();
    $request->instanceGroupManager->allInstancesConfig->properties = new InstancePropertiesPatch();
    $request->instanceGroupManager->allInstancesConfig->properties->labels = [
        'fugiat' => 'rem',
        'voluptatibus' => 'officiis',
        'corporis' => 'repellendus',
    ];
    $request->instanceGroupManager->allInstancesConfig->properties->metadata = [
        'voluptatem' => 'libero',
    ];
    $request->instanceGroupManager->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager->baseInstanceName = 'odio';
    $request->instanceGroupManager->creationTimestamp = 'omnis';
    $request->instanceGroupManager->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager->currentActions->abandoning = 887422;
    $request->instanceGroupManager->currentActions->creating = 961576;
    $request->instanceGroupManager->currentActions->creatingWithoutRetries = 169229;
    $request->instanceGroupManager->currentActions->deleting = 23236;
    $request->instanceGroupManager->currentActions->none = 243247;
    $request->instanceGroupManager->currentActions->recreating = 531104;
    $request->instanceGroupManager->currentActions->refreshing = 471642;
    $request->instanceGroupManager->currentActions->restarting = 204781;
    $request->instanceGroupManager->currentActions->resuming = 135775;
    $request->instanceGroupManager->currentActions->starting = 53662;
    $request->instanceGroupManager->currentActions->stopping = 360334;
    $request->instanceGroupManager->currentActions->suspending = 587489;
    $request->instanceGroupManager->currentActions->verifying = 15563;
    $request->instanceGroupManager->description = 'impedit';
    $request->instanceGroupManager->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::EVEN;
    $request->instanceGroupManager->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager->failoverAction = InstanceGroupManagerFailoverActionEnum::NO_FAILOVER;
    $request->instanceGroupManager->fingerprint = 'voluptatem';
    $request->instanceGroupManager->id = 'perspiciatis';
    $request->instanceGroupManager->instanceGroup = 'ea';
    $request->instanceGroupManager->instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy();
    $request->instanceGroupManager->instanceLifecyclePolicy->forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum::NO;
    $request->instanceGroupManager->instanceTemplate = 'aperiam';
    $request->instanceGroupManager->kind = 'voluptatem';
    $request->instanceGroupManager->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGELESS;
    $request->instanceGroupManager->name = 'Annie Price';
    $request->instanceGroupManager->namedPorts = [
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager->region = 'eaque';
    $request->instanceGroupManager->selfLink = 'incidunt';
    $request->instanceGroupManager->serviceAccount = 'ut';
    $request->instanceGroupManager->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager->statefulPolicy->preservedState->disks = [
        'aliquid' => new StatefulPolicyPreservedStateDiskDevice(),
        'ullam' => new StatefulPolicyPreservedStateDiskDevice(),
        'maiores' => new StatefulPolicyPreservedStateDiskDevice(),
        'debitis' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager->statefulPolicy->preservedState->externalIPs = [
        'eos' => new StatefulPolicyPreservedStateNetworkIp(),
        'assumenda' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager->statefulPolicy->preservedState->internalIPs = [
        'ut' => new StatefulPolicyPreservedStateNetworkIp(),
        'quae' => new StatefulPolicyPreservedStateNetworkIp(),
        'nihil' => new StatefulPolicyPreservedStateNetworkIp(),
        'quam' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager->status->allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig();
    $request->instanceGroupManager->status->allInstancesConfig->currentRevision = 'assumenda';
    $request->instanceGroupManager->status->allInstancesConfig->effective = false;
    $request->instanceGroupManager->status->autoscaler = 'consequatur';
    $request->instanceGroupManager->status->isStable = false;
    $request->instanceGroupManager->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager->status->stateful->isStateful = false;
    $request->instanceGroupManager->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager->status->versionTarget->isReached = false;
    $request->instanceGroupManager->targetPools = [
        'placeat',
        'adipisci',
        'tenetur',
        'non',
    ];
    $request->instanceGroupManager->targetSize = 35107;
    $request->instanceGroupManager->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::PROACTIVE;
    $request->instanceGroupManager->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager->updatePolicy->maxSurge->calculated = 933847;
    $request->instanceGroupManager->updatePolicy->maxSurge->fixed = 938015;
    $request->instanceGroupManager->updatePolicy->maxSurge->percent = 773854;
    $request->instanceGroupManager->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager->updatePolicy->maxUnavailable->calculated = 119928;
    $request->instanceGroupManager->updatePolicy->maxUnavailable->fixed = 358861;
    $request->instanceGroupManager->updatePolicy->maxUnavailable->percent = 772062;
    $request->instanceGroupManager->updatePolicy->minReadySec = 908877;
    $request->instanceGroupManager->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REPLACE;
    $request->instanceGroupManager->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::REFRESH;
    $request->instanceGroupManager->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::SUBSTITUTE;
    $request->instanceGroupManager->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::OPPORTUNISTIC;
    $request->instanceGroupManager->versions = [
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager->zone = 'quasi';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'voluptatem';
    $request->key = 'maiores';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'veniam';
    $request->quotaUser = 'fuga';
    $request->requestId = 'itaque';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'tenetur';
    $request->userIp = 'sed';
    $request->zone = 'deserunt';

    $requestSecurity = new ComputeInstanceGroupManagersInsertSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersList

Retrieves a list of managed instance groups that are contained within the specified project and zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corporis';
    $request->fields = 'quas';
    $request->filter = 'soluta';
    $request->key = 'cupiditate';
    $request->maxResults = 602561;
    $request->oauthToken = 'et';
    $request->orderBy = 'quisquam';
    $request->pageToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'sed';
    $request->quotaUser = 'suscipit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'pariatur';
    $request->userIp = 'nam';
    $request->zone = 'quaerat';

    $requestSecurity = new ComputeInstanceGroupManagersListSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersList($request, $requestSecurity);

    if ($response->instanceGroupManagerList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersListErrors

Lists all errors thrown by actions on instances for a given managed instance group. The filter and orderBy query parameters are not supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListErrorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListErrorsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListErrorsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListErrorsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListErrorsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersListErrorsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'quasi';
    $request->filter = 'vero';
    $request->instanceGroupManager = 'odio';
    $request->key = 'numquam';
    $request->maxResults = 144621;
    $request->oauthToken = 'inventore';
    $request->orderBy = 'optio';
    $request->pageToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'commodi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'veniam';
    $request->zone = 'sit';

    $requestSecurity = new ComputeInstanceGroupManagersListErrorsSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersListErrorsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersListErrors($request, $requestSecurity);

    if ($response->instanceGroupManagersListErrorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersListManagedInstances

Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListManagedInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListManagedInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListManagedInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListManagedInstancesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListManagedInstancesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersListManagedInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'a';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vero';
    $request->fields = 'id';
    $request->filter = 'error';
    $request->instanceGroupManager = 'ratione';
    $request->key = 'perferendis';
    $request->maxResults = 716555;
    $request->oauthToken = 'voluptas';
    $request->orderBy = 'sint';
    $request->pageToken = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'fuga';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'consequuntur';
    $request->userIp = 'maiores';
    $request->zone = 'esse';

    $requestSecurity = new ComputeInstanceGroupManagersListManagedInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersListManagedInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersListManagedInstances($request, $requestSecurity);

    if ($response->instanceGroupManagersListManagedInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersListPerInstanceConfigs

Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListPerInstanceConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListPerInstanceConfigsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListPerInstanceConfigsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListPerInstanceConfigsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersListPerInstanceConfigsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersListPerInstanceConfigsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deleniti';
    $request->fields = 'enim';
    $request->filter = 'sit';
    $request->instanceGroupManager = 'voluptatem';
    $request->key = 'natus';
    $request->maxResults = 29346;
    $request->oauthToken = 'tempora';
    $request->orderBy = 'occaecati';
    $request->pageToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'veritatis';
    $request->quotaUser = 'ex';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'dolores';
    $request->zone = 'perferendis';

    $requestSecurity = new ComputeInstanceGroupManagersListPerInstanceConfigsSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersListPerInstanceConfigsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersListPerInstanceConfigs($request, $requestSecurity);

    if ($response->instanceGroupManagersListPerInstanceConfigsResp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersPatch

Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listManagedInstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManager;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAllInstancesConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstancePropertiesPatch;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerActionsSummary;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyTargetShapeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyZoneConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerFailoverActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerListManagedInstancesResultsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamedPort;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicy;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedState;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateDiskDevice;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateNetworkIp;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatus;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatusAllInstancesConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatusStateful;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatusStatefulPerInstanceConfigs;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatusVersionTarget;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyMinimalActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyReplacementMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerVersion;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManager1 = new InstanceGroupManager();
    $request->instanceGroupManager1->allInstancesConfig = new InstanceGroupManagerAllInstancesConfig();
    $request->instanceGroupManager1->allInstancesConfig->properties = new InstancePropertiesPatch();
    $request->instanceGroupManager1->allInstancesConfig->properties->labels = [
        'blanditiis' => 'laudantium',
        'voluptates' => 'minus',
        'autem' => 'vel',
    ];
    $request->instanceGroupManager1->allInstancesConfig->properties->metadata = [
        'quos' => 'consectetur',
    ];
    $request->instanceGroupManager1->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager1->baseInstanceName = 'tenetur';
    $request->instanceGroupManager1->creationTimestamp = 'necessitatibus';
    $request->instanceGroupManager1->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager1->currentActions->abandoning = 595152;
    $request->instanceGroupManager1->currentActions->creating = 380034;
    $request->instanceGroupManager1->currentActions->creatingWithoutRetries = 355342;
    $request->instanceGroupManager1->currentActions->deleting = 601634;
    $request->instanceGroupManager1->currentActions->none = 892712;
    $request->instanceGroupManager1->currentActions->recreating = 694611;
    $request->instanceGroupManager1->currentActions->refreshing = 300574;
    $request->instanceGroupManager1->currentActions->restarting = 43270;
    $request->instanceGroupManager1->currentActions->resuming = 881095;
    $request->instanceGroupManager1->currentActions->starting = 800761;
    $request->instanceGroupManager1->currentActions->stopping = 121133;
    $request->instanceGroupManager1->currentActions->suspending = 377430;
    $request->instanceGroupManager1->currentActions->verifying = 938230;
    $request->instanceGroupManager1->description = 'est';
    $request->instanceGroupManager1->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager1->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::EVEN;
    $request->instanceGroupManager1->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager1->failoverAction = InstanceGroupManagerFailoverActionEnum::NO_FAILOVER;
    $request->instanceGroupManager1->fingerprint = 'rerum';
    $request->instanceGroupManager1->id = 'perferendis';
    $request->instanceGroupManager1->instanceGroup = 'nam';
    $request->instanceGroupManager1->instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy();
    $request->instanceGroupManager1->instanceLifecyclePolicy->forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum::NO;
    $request->instanceGroupManager1->instanceTemplate = 'ratione';
    $request->instanceGroupManager1->kind = 'eos';
    $request->instanceGroupManager1->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGINATED;
    $request->instanceGroupManager1->name = 'Antonia Muller';
    $request->instanceGroupManager1->namedPorts = [
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager1->region = 'cum';
    $request->instanceGroupManager1->selfLink = 'culpa';
    $request->instanceGroupManager1->serviceAccount = 'culpa';
    $request->instanceGroupManager1->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager1->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager1->statefulPolicy->preservedState->disks = [
        'magnam' => new StatefulPolicyPreservedStateDiskDevice(),
        'eius' => new StatefulPolicyPreservedStateDiskDevice(),
        'ad' => new StatefulPolicyPreservedStateDiskDevice(),
        'quia' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->externalIPs = [
        'quaerat' => new StatefulPolicyPreservedStateNetworkIp(),
        'voluptatum' => new StatefulPolicyPreservedStateNetworkIp(),
        'numquam' => new StatefulPolicyPreservedStateNetworkIp(),
        'explicabo' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->internalIPs = [
        'cupiditate' => new StatefulPolicyPreservedStateNetworkIp(),
        'tempore' => new StatefulPolicyPreservedStateNetworkIp(),
        'odit' => new StatefulPolicyPreservedStateNetworkIp(),
        'est' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager1->status->allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig();
    $request->instanceGroupManager1->status->allInstancesConfig->currentRevision = 'at';
    $request->instanceGroupManager1->status->allInstancesConfig->effective = false;
    $request->instanceGroupManager1->status->autoscaler = 'ipsum';
    $request->instanceGroupManager1->status->isStable = false;
    $request->instanceGroupManager1->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager1->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager1->status->stateful->isStateful = false;
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager1->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager1->status->versionTarget->isReached = false;
    $request->instanceGroupManager1->targetPools = [
        'nulla',
    ];
    $request->instanceGroupManager1->targetSize = 669408;
    $request->instanceGroupManager1->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager1->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::PROACTIVE;
    $request->instanceGroupManager1->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxSurge->calculated = 896811;
    $request->instanceGroupManager1->updatePolicy->maxSurge->fixed = 531606;
    $request->instanceGroupManager1->updatePolicy->maxSurge->percent = 98123;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->calculated = 649373;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->fixed = 530232;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->percent = 500692;
    $request->instanceGroupManager1->updatePolicy->minReadySec = 958091;
    $request->instanceGroupManager1->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REFRESH;
    $request->instanceGroupManager1->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::REFRESH;
    $request->instanceGroupManager1->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::RECREATE;
    $request->instanceGroupManager1->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::OPPORTUNISTIC;
    $request->instanceGroupManager1->versions = [
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager1->zone = 'nihil';
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'quod';
    $request->instanceGroupManagerPathParameter = 'nulla';
    $request->key = 'tempora';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'nemo';
    $request->requestId = 'nesciunt';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'eum';
    $request->userIp = 'dolor';
    $request->zone = 'placeat';

    $requestSecurity = new ComputeInstanceGroupManagersPatchSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersPatchPerInstanceConfigs

Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersPatchPerInstanceConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersPatchPerInstanceConfigsReq;
use \OpenAPI\OpenAPI\Models\Shared\PerInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\PreservedState;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedDisk;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedDiskAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedDiskModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedNetworkIp;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedNetworkIpAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedNetworkIpIpAddress;
use \OpenAPI\OpenAPI\Models\Shared\PerInstanceConfigStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersPatchPerInstanceConfigsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManagersPatchPerInstanceConfigsReq = new InstanceGroupManagersPatchPerInstanceConfigsReq();
    $request->instanceGroupManagersPatchPerInstanceConfigsReq->perInstanceConfigs = [
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ratione';
    $request->fields = 'nihil';
    $request->instanceGroupManager = 'unde';
    $request->key = 'deserunt';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'occaecati';
    $request->requestId = 'optio';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'asperiores';
    $request->zone = 'nam';

    $requestSecurity = new ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersPatchPerInstanceConfigs($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersRecreateInstances

Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersRecreateInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersRecreateInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersRecreateInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersRecreateInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersRecreateInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersRecreateInstancesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManagersRecreateInstancesRequest = new InstanceGroupManagersRecreateInstancesRequest();
    $request->instanceGroupManagersRecreateInstancesRequest->instances = [
        'quam',
        'occaecati',
        'repellendus',
        'culpa',
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fuga';
    $request->fields = 'odio';
    $request->instanceGroupManager = 'totam';
    $request->key = 'magni';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->project = 'harum';
    $request->quotaUser = 'voluptatibus';
    $request->requestId = 'omnis';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'quos';
    $request->userIp = 'natus';
    $request->zone = 'aliquam';

    $requestSecurity = new ComputeInstanceGroupManagersRecreateInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersRecreateInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersRecreateInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersResize

Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. When resizing down, the instance group arbitrarily chooses the order in which VMs are deleted. The group takes into account some VM attributes when making the selection including: + The status of the VM instance. + The health of the VM instance. + The instance template version the VM is based on. + For regional managed instance groups, the location of the VM instance. This list is subject to change. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersResizeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersResizeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersResizeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersResizeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eum';
    $request->fields = 'vitae';
    $request->instanceGroupManager = 'animi';
    $request->key = 'possimus';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->project = 'ullam';
    $request->quotaUser = 'quaerat';
    $request->requestId = 'maiores';
    $request->size = 614737;
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'ipsam';
    $request->userIp = 'fugiat';
    $request->zone = 'odio';

    $requestSecurity = new ComputeInstanceGroupManagersResizeSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersResizeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersResize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersResizeAdvanced

Resizes the managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size of the instance group, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating, creatingWithoutRetries, or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersResizeAdvancedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersResizeAdvancedRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersResizeAdvancedSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersResizeAdvancedSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersResizeAdvancedSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersResizeAdvancedRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersResizeAdvancedRequest = new InstanceGroupManagersResizeAdvancedRequest();
    $request->instanceGroupManagersResizeAdvancedRequest->noCreationRetries = false;
    $request->instanceGroupManagersResizeAdvancedRequest->targetSize = 81917;
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'necessitatibus';
    $request->instanceGroupManager = 'rem';
    $request->key = 'a';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'veniam';
    $request->quotaUser = 'aut';
    $request->requestId = 'magni';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'nulla';
    $request->zone = 'quod';

    $requestSecurity = new ComputeInstanceGroupManagersResizeAdvancedSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersResizeAdvancedSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersResizeAdvanced($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersSetAutoHealingPolicies

Motifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use instanceGroupManagers.patch instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSetAutoHealingPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersSetAutoHealingRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersSetAutoHealingPoliciesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersSetAutoHealingRequest = new InstanceGroupManagersSetAutoHealingRequest();
    $request->instanceGroupManagersSetAutoHealingRequest->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'blanditiis';
    $request->fields = 'modi';
    $request->instanceGroupManager = 'illo';
    $request->key = 'a';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'autem';
    $request->requestId = 'dolore';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'nostrum';
    $request->userIp = 'ex';
    $request->zone = 'amet';

    $requestSecurity = new ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersSetAutoHealingPoliciesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersSetAutoHealingPolicies($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersSetInstanceTemplate

Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSetInstanceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersSetInstanceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSetInstanceTemplateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSetInstanceTemplateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSetInstanceTemplateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersSetInstanceTemplateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersSetInstanceTemplateRequest = new InstanceGroupManagersSetInstanceTemplateRequest();
    $request->instanceGroupManagersSetInstanceTemplateRequest->instanceTemplate = 'molestias';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'hic';
    $request->fields = 'quidem';
    $request->instanceGroupManager = 'odit';
    $request->key = 'molestiae';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'quia';
    $request->quotaUser = 'inventore';
    $request->requestId = 'doloribus';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'consequuntur';
    $request->zone = 'laboriosam';

    $requestSecurity = new ComputeInstanceGroupManagersSetInstanceTemplateSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersSetInstanceTemplateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersSetInstanceTemplate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersSetTargetPools

Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSetTargetPoolsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersSetTargetPoolsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSetTargetPoolsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSetTargetPoolsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSetTargetPoolsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersSetTargetPoolsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersSetTargetPoolsRequest = new InstanceGroupManagersSetTargetPoolsRequest();
    $request->instanceGroupManagersSetTargetPoolsRequest->fingerprint = 'reprehenderit';
    $request->instanceGroupManagersSetTargetPoolsRequest->targetPools = [
        'ipsum',
        'vel',
        'delectus',
    ];
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'cupiditate';
    $request->instanceGroupManager = 'hic';
    $request->key = 'quis';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'quod';
    $request->requestId = 'saepe';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'nostrum';
    $request->zone = 'minus';

    $requestSecurity = new ComputeInstanceGroupManagersSetTargetPoolsSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersSetTargetPoolsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersSetTargetPools($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'ea',
        'numquam',
    ];
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'velit';
    $request->key = 'quasi';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->quotaUser = 'veniam';
    $request->resource = 'quae';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'in';
    $request->userIp = 'libero';
    $request->zone = 'ut';

    $requestSecurity = new ComputeInstanceGroupManagersTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersUpdate

Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listManagedInstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManager;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAllInstancesConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstancePropertiesPatch;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerActionsSummary;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyTargetShapeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyZoneConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerFailoverActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerListManagedInstancesResultsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamedPort;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicy;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedState;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateDiskDevice;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateNetworkIp;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateNetworkIpAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatus;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatusAllInstancesConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatusStateful;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatusStatefulPerInstanceConfigs;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatusVersionTarget;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyMinimalActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyReplacementMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerVersion;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManager1 = new InstanceGroupManager();
    $request->instanceGroupManager1->allInstancesConfig = new InstanceGroupManagerAllInstancesConfig();
    $request->instanceGroupManager1->allInstancesConfig->properties = new InstancePropertiesPatch();
    $request->instanceGroupManager1->allInstancesConfig->properties->labels = [
        'beatae' => 'porro',
    ];
    $request->instanceGroupManager1->allInstancesConfig->properties->metadata = [
        'distinctio' => 'numquam',
        'fugit' => 'amet',
        'culpa' => 'facilis',
        'minus' => 'vero',
    ];
    $request->instanceGroupManager1->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager1->baseInstanceName = 'omnis';
    $request->instanceGroupManager1->creationTimestamp = 'et';
    $request->instanceGroupManager1->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager1->currentActions->abandoning = 939131;
    $request->instanceGroupManager1->currentActions->creating = 685513;
    $request->instanceGroupManager1->currentActions->creatingWithoutRetries = 665427;
    $request->instanceGroupManager1->currentActions->deleting = 716024;
    $request->instanceGroupManager1->currentActions->none = 854646;
    $request->instanceGroupManager1->currentActions->recreating = 862167;
    $request->instanceGroupManager1->currentActions->refreshing = 520622;
    $request->instanceGroupManager1->currentActions->restarting = 508044;
    $request->instanceGroupManager1->currentActions->resuming = 885721;
    $request->instanceGroupManager1->currentActions->starting = 461094;
    $request->instanceGroupManager1->currentActions->stopping = 115148;
    $request->instanceGroupManager1->currentActions->suspending = 965117;
    $request->instanceGroupManager1->currentActions->verifying = 386401;
    $request->instanceGroupManager1->description = 'minus';
    $request->instanceGroupManager1->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager1->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::ANY_SINGLE_ZONE;
    $request->instanceGroupManager1->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager1->failoverAction = InstanceGroupManagerFailoverActionEnum::NO_FAILOVER;
    $request->instanceGroupManager1->fingerprint = 'veniam';
    $request->instanceGroupManager1->id = 'sed';
    $request->instanceGroupManager1->instanceGroup = 'quibusdam';
    $request->instanceGroupManager1->instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy();
    $request->instanceGroupManager1->instanceLifecyclePolicy->forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum::NO;
    $request->instanceGroupManager1->instanceTemplate = 'voluptate';
    $request->instanceGroupManager1->kind = 'reprehenderit';
    $request->instanceGroupManager1->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGELESS;
    $request->instanceGroupManager1->name = 'Karl Weissnat III';
    $request->instanceGroupManager1->namedPorts = [
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager1->region = 'aut';
    $request->instanceGroupManager1->selfLink = 'consequatur';
    $request->instanceGroupManager1->serviceAccount = 'iste';
    $request->instanceGroupManager1->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager1->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager1->statefulPolicy->preservedState->disks = [
        'repellat' => new StatefulPolicyPreservedStateDiskDevice(),
        'voluptatum' => new StatefulPolicyPreservedStateDiskDevice(),
        'facere' => new StatefulPolicyPreservedStateDiskDevice(),
        'consequuntur' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->externalIPs = [
        'repellendus' => new StatefulPolicyPreservedStateNetworkIp(),
        'voluptates' => new StatefulPolicyPreservedStateNetworkIp(),
        'illo' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->internalIPs = [
        'fugiat' => new StatefulPolicyPreservedStateNetworkIp(),
        'ducimus' => new StatefulPolicyPreservedStateNetworkIp(),
        'aut' => new StatefulPolicyPreservedStateNetworkIp(),
        'provident' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager1->status->allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig();
    $request->instanceGroupManager1->status->allInstancesConfig->currentRevision = 'voluptate';
    $request->instanceGroupManager1->status->allInstancesConfig->effective = false;
    $request->instanceGroupManager1->status->autoscaler = 'tempore';
    $request->instanceGroupManager1->status->isStable = false;
    $request->instanceGroupManager1->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager1->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager1->status->stateful->isStateful = false;
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager1->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager1->status->versionTarget->isReached = false;
    $request->instanceGroupManager1->targetPools = [
        'illum',
        'mollitia',
    ];
    $request->instanceGroupManager1->targetSize = 58176;
    $request->instanceGroupManager1->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager1->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::PROACTIVE;
    $request->instanceGroupManager1->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxSurge->calculated = 774804;
    $request->instanceGroupManager1->updatePolicy->maxSurge->fixed = 353806;
    $request->instanceGroupManager1->updatePolicy->maxSurge->percent = 447503;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->calculated = 986059;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->fixed = 660799;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->percent = 429344;
    $request->instanceGroupManager1->updatePolicy->minReadySec = 764633;
    $request->instanceGroupManager1->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REFRESH;
    $request->instanceGroupManager1->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::REPLACE;
    $request->instanceGroupManager1->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::SUBSTITUTE;
    $request->instanceGroupManager1->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::OPPORTUNISTIC;
    $request->instanceGroupManager1->versions = [
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager1->zone = 'ea';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'harum';
    $request->instanceGroupManagerPathParameter = 'laborum';
    $request->key = 'a';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->project = 'minus';
    $request->quotaUser = 'officia';
    $request->requestId = 'laboriosam';
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'cupiditate';
    $request->userIp = 'veritatis';
    $request->zone = 'aliquam';

    $requestSecurity = new ComputeInstanceGroupManagersUpdateSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersUpdatePerInstanceConfigs

Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersUpdatePerInstanceConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersUpdatePerInstanceConfigsReq;
use \OpenAPI\OpenAPI\Models\Shared\PerInstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\PreservedState;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedDisk;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedDiskAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedDiskModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedNetworkIp;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedNetworkIpAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreservedStatePreservedNetworkIpIpAddress;
use \OpenAPI\OpenAPI\Models\Shared\PerInstanceConfigStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersUpdatePerInstanceConfigsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManagersUpdatePerInstanceConfigsReq = new InstanceGroupManagersUpdatePerInstanceConfigsReq();
    $request->instanceGroupManagersUpdatePerInstanceConfigsReq->perInstanceConfigs = [
        new PerInstanceConfig(),
        new PerInstanceConfig(),
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'cum';
    $request->instanceGroupManager = 'suscipit';
    $request->key = 'eius';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'quos';
    $request->requestId = 'id';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'ab';
    $request->userIp = 'voluptate';
    $request->zone = 'consequatur';

    $requestSecurity = new ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersUpdatePerInstanceConfigs($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
