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
* [computeInstanceGroupManagersResumeInstances](#computeinstancegroupmanagersresumeinstances) - Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersSetAutoHealingPolicies](#computeinstancegroupmanagerssetautohealingpolicies) - Motifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use instanceGroupManagers.patch instead.
* [computeInstanceGroupManagersSetInstanceTemplate](#computeinstancegroupmanagerssetinstancetemplate) - Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.
* [computeInstanceGroupManagersSetTargetPools](#computeinstancegroupmanagerssettargetpools) - Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
* [computeInstanceGroupManagersStartInstances](#computeinstancegroupmanagersstartinstances) - Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersStopInstances](#computeinstancegroupmanagersstopinstances) - Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.
* [computeInstanceGroupManagersSuspendInstances](#computeinstancegroupmanagerssuspendinstances) - Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManagersAbandonInstancesRequest = new InstanceGroupManagersAbandonInstancesRequest();
    $request->instanceGroupManagersAbandonInstancesRequest->instances = [
        'illo',
        'cupiditate',
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'atque';
    $request->instanceGroupManager = 'dicta';
    $request->key = 'magnam';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->project = 'cum';
    $request->quotaUser = 'suscipit';
    $request->requestId = 'eius';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'quos';
    $request->zone = 'id';

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
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequatur';
    $request->fields = 'itaque';
    $request->filter = 'repellat';
    $request->includeAllScopes = false;
    $request->key = 'voluptatem';
    $request->maxResults = 220505;
    $request->oauthToken = 'distinctio';
    $request->orderBy = 'quaerat';
    $request->pageToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'neque';
    $request->quotaUser = 'nihil';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'numquam';
    $request->userIp = 'mollitia';

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
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersApplyUpdatesRequestMaximalActionEnum;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManagersApplyUpdatesRequest = new InstanceGroupManagersApplyUpdatesRequest();
    $request->instanceGroupManagersApplyUpdatesRequest->allInstances = false;
    $request->instanceGroupManagersApplyUpdatesRequest->instances = [
        'suscipit',
        'quas',
        'quis',
    ];
    $request->instanceGroupManagersApplyUpdatesRequest->maximalAction = InstanceGroupManagersApplyUpdatesRequestMaximalActionEnum::REFRESH;
    $request->instanceGroupManagersApplyUpdatesRequest->minimalAction = InstanceGroupManagersApplyUpdatesRequestMinimalActionEnum::REFRESH;
    $request->instanceGroupManagersApplyUpdatesRequest->mostDisruptiveAllowedAction = InstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum::REPLACE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'nesciunt';
    $request->instanceGroupManager = 'magni';
    $request->key = 'animi';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->project = 'voluptas';
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'commodi';
    $request->zone = 'autem';

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
    ];
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'eaque';
    $request->instanceGroupManager = 'delectus';
    $request->key = 'blanditiis';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->project = 'tenetur';
    $request->quotaUser = 'assumenda';
    $request->requestId = 'exercitationem';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'laboriosam';
    $request->zone = 'earum';

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
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'laborum';
    $request->instanceGroupManager = 'molestias';
    $request->key = 'a';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'laudantium';
    $request->requestId = 'dolore';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'aspernatur';
    $request->zone = 'quod';

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
        'ipsa',
    ];
    $request->instanceGroupManagersDeleteInstancesRequest->skipInstancesOnValidationError = false;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'soluta';
    $request->fields = 'aut';
    $request->instanceGroupManager = 'ullam';
    $request->key = 'amet';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'sint';
    $request->requestId = 'voluptates';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'eligendi';
    $request->zone = 'fuga';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersDeletePerInstanceConfigsReq = new InstanceGroupManagersDeletePerInstanceConfigsReq();
    $request->instanceGroupManagersDeletePerInstanceConfigsReq->names = [
        'iure',
    ];
    $request->accessToken = 'earum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'omnis';
    $request->instanceGroupManager = 'sed';
    $request->key = 'quo';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'illo';
    $request->quotaUser = 'est';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'veniam';
    $request->userIp = 'est';
    $request->zone = 'rem';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sunt';
    $request->fields = 'maiores';
    $request->instanceGroupManager = 'excepturi';
    $request->key = 'ducimus';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'molestias';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'at';
    $request->userIp = 'unde';
    $request->zone = 'laborum';

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
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerActionsSummary;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyTargetShapeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyZoneConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerFailoverActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceFlexibilityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerListManagedInstancesResultsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamedPort;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStandbyPolicy;
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
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerTargetSizeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManager = new InstanceGroupManager();
    $request->instanceGroupManager->allInstancesConfig = new InstanceGroupManagerAllInstancesConfig();
    $request->instanceGroupManager->allInstancesConfig->properties = new InstancePropertiesPatch();
    $request->instanceGroupManager->allInstancesConfig->properties->labels = [
        'corrupti' => 'soluta',
        'earum' => 'praesentium',
        'explicabo' => 'odit',
        'illo' => 'architecto',
    ];
    $request->instanceGroupManager->allInstancesConfig->properties->metadata = [
        'ad' => 'velit',
    ];
    $request->instanceGroupManager->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager->baseInstanceName = 'provident';
    $request->instanceGroupManager->creationTimestamp = 'possimus';
    $request->instanceGroupManager->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager->currentActions->abandoning = 612425;
    $request->instanceGroupManager->currentActions->creating = 503598;
    $request->instanceGroupManager->currentActions->creatingAtomically = 232602;
    $request->instanceGroupManager->currentActions->creatingWithoutRetries = 520824;
    $request->instanceGroupManager->currentActions->deleting = 489225;
    $request->instanceGroupManager->currentActions->none = 997180;
    $request->instanceGroupManager->currentActions->queuing = 482062;
    $request->instanceGroupManager->currentActions->recreating = 633956;
    $request->instanceGroupManager->currentActions->refreshing = 453111;
    $request->instanceGroupManager->currentActions->restarting = 583142;
    $request->instanceGroupManager->currentActions->resuming = 803546;
    $request->instanceGroupManager->currentActions->starting = 828267;
    $request->instanceGroupManager->currentActions->stopping = 471693;
    $request->instanceGroupManager->currentActions->suspending = 152052;
    $request->instanceGroupManager->currentActions->verifying = 758366;
    $request->instanceGroupManager->description = 'nulla';
    $request->instanceGroupManager->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::ANY;
    $request->instanceGroupManager->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager->failoverAction = InstanceGroupManagerFailoverActionEnum::UNKNOWN;
    $request->instanceGroupManager->fingerprint = 'dolore';
    $request->instanceGroupManager->id = 'possimus';
    $request->instanceGroupManager->instanceFlexibilityPolicy = new InstanceGroupManagerInstanceFlexibilityPolicy();
    $request->instanceGroupManager->instanceFlexibilityPolicy->instanceSelectionLists = [
        'eos' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
        'sunt' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
        'quam' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
    ];
    $request->instanceGroupManager->instanceGroup = 'eos';
    $request->instanceGroupManager->instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy();
    $request->instanceGroupManager->instanceLifecyclePolicy->defaultActionOnFailure = InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum::REPAIR;
    $request->instanceGroupManager->instanceLifecyclePolicy->forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum::YES;
    $request->instanceGroupManager->instanceLifecyclePolicy->metadataBasedReadinessSignal = new InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal();
    $request->instanceGroupManager->instanceLifecyclePolicy->metadataBasedReadinessSignal->timeoutSec = 184774;
    $request->instanceGroupManager->instanceTemplate = 'similique';
    $request->instanceGroupManager->kind = 'eligendi';
    $request->instanceGroupManager->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGELESS;
    $request->instanceGroupManager->name = 'Kelley West';
    $request->instanceGroupManager->namedPorts = [
        new NamedPort(),
    ];
    $request->instanceGroupManager->region = 'quis';
    $request->instanceGroupManager->selfLink = 'maiores';
    $request->instanceGroupManager->selfLinkWithId = 'dicta';
    $request->instanceGroupManager->serviceAccount = 'dicta';
    $request->instanceGroupManager->standbyPolicy = new InstanceGroupManagerStandbyPolicy();
    $request->instanceGroupManager->standbyPolicy->initialDelaySec = 432597;
    $request->instanceGroupManager->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager->statefulPolicy->preservedState->disks = [
        'id' => new StatefulPolicyPreservedStateDiskDevice(),
        'nobis' => new StatefulPolicyPreservedStateDiskDevice(),
        'quasi' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager->statefulPolicy->preservedState->externalIPs = [
        'aliquam' => new StatefulPolicyPreservedStateNetworkIp(),
        'vitae' => new StatefulPolicyPreservedStateNetworkIp(),
        'temporibus' => new StatefulPolicyPreservedStateNetworkIp(),
        'voluptatum' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager->statefulPolicy->preservedState->internalIPs = [
        'aspernatur' => new StatefulPolicyPreservedStateNetworkIp(),
        'neque' => new StatefulPolicyPreservedStateNetworkIp(),
        'impedit' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager->status->allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig();
    $request->instanceGroupManager->status->allInstancesConfig->currentRevision = 'consequuntur';
    $request->instanceGroupManager->status->allInstancesConfig->effective = false;
    $request->instanceGroupManager->status->autoscaler = 'neque';
    $request->instanceGroupManager->status->isStable = false;
    $request->instanceGroupManager->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager->status->stateful->isStateful = false;
    $request->instanceGroupManager->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager->status->versionTarget->isReached = false;
    $request->instanceGroupManager->targetPools = [
        'amet',
        'labore',
        'repellat',
        'eos',
    ];
    $request->instanceGroupManager->targetSize = 845191;
    $request->instanceGroupManager->targetSizeUnit = InstanceGroupManagerTargetSizeUnitEnum::VM;
    $request->instanceGroupManager->targetStoppedSize = 650538;
    $request->instanceGroupManager->targetSuspendedSize = 309192;
    $request->instanceGroupManager->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::PROACTIVE;
    $request->instanceGroupManager->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager->updatePolicy->maxSurge->calculated = 124740;
    $request->instanceGroupManager->updatePolicy->maxSurge->fixed = 598066;
    $request->instanceGroupManager->updatePolicy->maxSurge->percent = 461758;
    $request->instanceGroupManager->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager->updatePolicy->maxUnavailable->calculated = 952106;
    $request->instanceGroupManager->updatePolicy->maxUnavailable->fixed = 434345;
    $request->instanceGroupManager->updatePolicy->maxUnavailable->percent = 858750;
    $request->instanceGroupManager->updatePolicy->minReadySec = 926803;
    $request->instanceGroupManager->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REPLACE;
    $request->instanceGroupManager->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::NONE;
    $request->instanceGroupManager->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::RECREATE;
    $request->instanceGroupManager->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::OPPORTUNISTIC;
    $request->instanceGroupManager->versions = [
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager->zone = 'et';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sunt';
    $request->fields = 'in';
    $request->key = 'architecto';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'voluptatem';
    $request->quotaUser = 'perspiciatis';
    $request->requestId = 'error';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'nesciunt';
    $request->zone = 'saepe';

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
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'modi';
    $request->fields = 'adipisci';
    $request->filter = 'pariatur';
    $request->key = 'praesentium';
    $request->maxResults = 364679;
    $request->oauthToken = 'dolore';
    $request->orderBy = 'numquam';
    $request->pageToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'perspiciatis';
    $request->quotaUser = 'accusamus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'quia';
    $request->userIp = 'aspernatur';
    $request->zone = 'ut';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'aliquam';
    $request->filter = 'dolorem';
    $request->instanceGroupManager = 'expedita';
    $request->key = 'impedit';
    $request->maxResults = 102734;
    $request->oauthToken = 'minima';
    $request->orderBy = 'magnam';
    $request->pageToken = 'vitae';
    $request->prettyPrint = false;
    $request->project = 'quos';
    $request->quotaUser = 'atque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'asperiores';
    $request->zone = 'corporis';

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
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsam';
    $request->fields = 'at';
    $request->filter = 'culpa';
    $request->instanceGroupManager = 'nihil';
    $request->key = 'laudantium';
    $request->maxResults = 213860;
    $request->oauthToken = 'odit';
    $request->orderBy = 'officiis';
    $request->pageToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'libero';
    $request->quotaUser = 'fugiat';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'et';
    $request->userIp = 'odio';
    $request->zone = 'eligendi';

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
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'pariatur';
    $request->fields = 'ad';
    $request->filter = 'architecto';
    $request->instanceGroupManager = 'culpa';
    $request->key = 'aliquam';
    $request->maxResults = 282720;
    $request->oauthToken = 'quidem';
    $request->orderBy = 'doloribus';
    $request->pageToken = 'sit';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'tempore';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'corrupti';
    $request->zone = 'voluptate';

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
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerActionsSummary;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyTargetShapeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyZoneConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerFailoverActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceFlexibilityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerListManagedInstancesResultsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamedPort;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStandbyPolicy;
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
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerTargetSizeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum;
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
        'temporibus' => 'incidunt',
        'ea' => 'alias',
    ];
    $request->instanceGroupManager1->allInstancesConfig->properties->metadata = [
        'qui' => 'libero',
        'maiores' => 'nam',
        'pariatur' => 'quod',
    ];
    $request->instanceGroupManager1->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager1->baseInstanceName = 'vitae';
    $request->instanceGroupManager1->creationTimestamp = 'delectus';
    $request->instanceGroupManager1->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager1->currentActions->abandoning = 965384;
    $request->instanceGroupManager1->currentActions->creating = 367712;
    $request->instanceGroupManager1->currentActions->creatingAtomically = 870187;
    $request->instanceGroupManager1->currentActions->creatingWithoutRetries = 297585;
    $request->instanceGroupManager1->currentActions->deleting = 885132;
    $request->instanceGroupManager1->currentActions->none = 152807;
    $request->instanceGroupManager1->currentActions->queuing = 651136;
    $request->instanceGroupManager1->currentActions->recreating = 901611;
    $request->instanceGroupManager1->currentActions->refreshing = 289373;
    $request->instanceGroupManager1->currentActions->restarting = 986993;
    $request->instanceGroupManager1->currentActions->resuming = 704054;
    $request->instanceGroupManager1->currentActions->starting = 327411;
    $request->instanceGroupManager1->currentActions->stopping = 773241;
    $request->instanceGroupManager1->currentActions->suspending = 703431;
    $request->instanceGroupManager1->currentActions->verifying = 229246;
    $request->instanceGroupManager1->description = 'quis';
    $request->instanceGroupManager1->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager1->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::EVEN;
    $request->instanceGroupManager1->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager1->failoverAction = InstanceGroupManagerFailoverActionEnum::NO_FAILOVER;
    $request->instanceGroupManager1->fingerprint = 'nisi';
    $request->instanceGroupManager1->id = 'consectetur';
    $request->instanceGroupManager1->instanceFlexibilityPolicy = new InstanceGroupManagerInstanceFlexibilityPolicy();
    $request->instanceGroupManager1->instanceFlexibilityPolicy->instanceSelectionLists = [
        'delectus' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
        'sunt' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
        'repudiandae' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
    ];
    $request->instanceGroupManager1->instanceGroup = 'facere';
    $request->instanceGroupManager1->instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy();
    $request->instanceGroupManager1->instanceLifecyclePolicy->defaultActionOnFailure = InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum::REPAIR;
    $request->instanceGroupManager1->instanceLifecyclePolicy->forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum::NO;
    $request->instanceGroupManager1->instanceLifecyclePolicy->metadataBasedReadinessSignal = new InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal();
    $request->instanceGroupManager1->instanceLifecyclePolicy->metadataBasedReadinessSignal->timeoutSec = 540416;
    $request->instanceGroupManager1->instanceTemplate = 'consectetur';
    $request->instanceGroupManager1->kind = 'nemo';
    $request->instanceGroupManager1->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGINATED;
    $request->instanceGroupManager1->name = 'Kim Rutherford';
    $request->instanceGroupManager1->namedPorts = [
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager1->region = 'praesentium';
    $request->instanceGroupManager1->selfLink = 'vel';
    $request->instanceGroupManager1->selfLinkWithId = 'doloremque';
    $request->instanceGroupManager1->serviceAccount = 'delectus';
    $request->instanceGroupManager1->standbyPolicy = new InstanceGroupManagerStandbyPolicy();
    $request->instanceGroupManager1->standbyPolicy->initialDelaySec = 558201;
    $request->instanceGroupManager1->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager1->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager1->statefulPolicy->preservedState->disks = [
        'illum' => new StatefulPolicyPreservedStateDiskDevice(),
        'ullam' => new StatefulPolicyPreservedStateDiskDevice(),
        'praesentium' => new StatefulPolicyPreservedStateDiskDevice(),
        'perferendis' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->externalIPs = [
        'animi' => new StatefulPolicyPreservedStateNetworkIp(),
        'molestiae' => new StatefulPolicyPreservedStateNetworkIp(),
        'nesciunt' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->internalIPs = [
        'sunt' => new StatefulPolicyPreservedStateNetworkIp(),
        'aperiam' => new StatefulPolicyPreservedStateNetworkIp(),
        'itaque' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager1->status->allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig();
    $request->instanceGroupManager1->status->allInstancesConfig->currentRevision = 'quaerat';
    $request->instanceGroupManager1->status->allInstancesConfig->effective = false;
    $request->instanceGroupManager1->status->autoscaler = 'repellat';
    $request->instanceGroupManager1->status->isStable = false;
    $request->instanceGroupManager1->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager1->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager1->status->stateful->isStateful = false;
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager1->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager1->status->versionTarget->isReached = false;
    $request->instanceGroupManager1->targetPools = [
        'tempora',
        'quaerat',
        'magnam',
        'voluptate',
    ];
    $request->instanceGroupManager1->targetSize = 164989;
    $request->instanceGroupManager1->targetSizeUnit = InstanceGroupManagerTargetSizeUnitEnum::VM;
    $request->instanceGroupManager1->targetStoppedSize = 457685;
    $request->instanceGroupManager1->targetSuspendedSize = 765463;
    $request->instanceGroupManager1->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager1->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::PROACTIVE;
    $request->instanceGroupManager1->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxSurge->calculated = 248131;
    $request->instanceGroupManager1->updatePolicy->maxSurge->fixed = 701506;
    $request->instanceGroupManager1->updatePolicy->maxSurge->percent = 72677;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->calculated = 846332;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->fixed = 859740;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->percent = 228481;
    $request->instanceGroupManager1->updatePolicy->minReadySec = 714187;
    $request->instanceGroupManager1->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REPLACE;
    $request->instanceGroupManager1->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::RESTART;
    $request->instanceGroupManager1->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::SUBSTITUTE;
    $request->instanceGroupManager1->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::OPPORTUNISTIC;
    $request->instanceGroupManager1->versions = [
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager1->zone = 'nihil';
    $request->accessToken = 'harum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'blanditiis';
    $request->instanceGroupManagerPathParameter = 'labore';
    $request->key = 'repudiandae';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'exercitationem';
    $request->requestId = 'voluptatem';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'laboriosam';
    $request->zone = 'temporibus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersPatchPerInstanceConfigsReq = new InstanceGroupManagersPatchPerInstanceConfigsReq();
    $request->instanceGroupManagersPatchPerInstanceConfigsReq->perInstanceConfigs = [
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tenetur';
    $request->fields = 'facilis';
    $request->instanceGroupManager = 'facere';
    $request->key = 'aut';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'molestiae';
    $request->requestId = 'quaerat';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'quaerat';
    $request->zone = 'odit';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersRecreateInstancesRequest = new InstanceGroupManagersRecreateInstancesRequest();
    $request->instanceGroupManagersRecreateInstancesRequest->instances = [
        'nemo',
        'dolorem',
        'rerum',
    ];
    $request->accessToken = 'ut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'nulla';
    $request->instanceGroupManager = 'nesciunt';
    $request->key = 'quisquam';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'veritatis';
    $request->requestId = 'veniam';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'assumenda';
    $request->userIp = 'adipisci';
    $request->zone = 'velit';

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
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->fields = 'dolor';
    $request->instanceGroupManager = 'quod';
    $request->key = 'consequatur';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'illo';
    $request->requestId = 'amet';
    $request->size = 578452;
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'sequi';
    $request->zone = 'culpa';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManagersResizeAdvancedRequest = new InstanceGroupManagersResizeAdvancedRequest();
    $request->instanceGroupManagersResizeAdvancedRequest->noCreationRetries = false;
    $request->instanceGroupManagersResizeAdvancedRequest->targetSize = 266461;
    $request->accessToken = 'et';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'optio';
    $request->instanceGroupManager = 'adipisci';
    $request->key = 'ab';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'explicabo';
    $request->requestId = 'reiciendis';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'hic';
    $request->userIp = 'porro';
    $request->zone = 'tempore';

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

## computeInstanceGroupManagersResumeInstances

Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersResumeInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersResumeInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersResumeInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersResumeInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersResumeInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersResumeInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersResumeInstancesRequest = new InstanceGroupManagersResumeInstancesRequest();
    $request->instanceGroupManagersResumeInstancesRequest->instances = [
        'quisquam',
    ];
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ut';
    $request->fields = 'et';
    $request->instanceGroupManager = 'reiciendis';
    $request->key = 'reiciendis';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->project = 'itaque';
    $request->quotaUser = 'iste';
    $request->requestId = 'quod';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'temporibus';
    $request->userIp = 'iure';
    $request->zone = 'natus';

    $requestSecurity = new ComputeInstanceGroupManagersResumeInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersResumeInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersResumeInstances($request, $requestSecurity);

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
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
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
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->accessToken = 'earum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'debitis';
    $request->instanceGroupManager = 'doloremque';
    $request->key = 'esse';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'quisquam';
    $request->requestId = 'molestiae';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'delectus';
    $request->zone = 'eum';

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
    $request->instanceGroupManagersSetInstanceTemplateRequest->instanceTemplate = 'suscipit';
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsam';
    $request->fields = 'porro';
    $request->instanceGroupManager = 'molestiae';
    $request->key = 'inventore';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'dicta';
    $request->requestId = 'provident';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'soluta';
    $request->zone = 'occaecati';

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
    $request->instanceGroupManagersSetTargetPoolsRequest->fingerprint = 'asperiores';
    $request->instanceGroupManagersSetTargetPoolsRequest->targetPools = [
        'officiis',
    ];
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'ab';
    $request->instanceGroupManager = 'natus';
    $request->key = 'possimus';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'cumque';
    $request->requestId = 'explicabo';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'earum';
    $request->zone = 'fugit';

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

## computeInstanceGroupManagersStartInstances

Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersStartInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersStartInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersStartInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersStartInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersStartInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersStartInstancesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManagersStartInstancesRequest = new InstanceGroupManagersStartInstancesRequest();
    $request->instanceGroupManagersStartInstancesRequest->instances = [
        'consequatur',
    ];
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'numquam';
    $request->instanceGroupManager = 'tempore';
    $request->key = 'molestias';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'enim';
    $request->quotaUser = 'illum';
    $request->requestId = 'sed';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'reprehenderit';
    $request->userIp = 'id';
    $request->zone = 'ducimus';

    $requestSecurity = new ComputeInstanceGroupManagersStartInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersStartInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersStartInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersStopInstances

Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersStopInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersStopInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersStopInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersStopInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersStopInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersStopInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersStopInstancesRequest = new InstanceGroupManagersStopInstancesRequest();
    $request->instanceGroupManagersStopInstancesRequest->forceStop = false;
    $request->instanceGroupManagersStopInstancesRequest->instances = [
        'occaecati',
        'doloremque',
        'blanditiis',
        'magnam',
    ];
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laboriosam';
    $request->fields = 'id';
    $request->instanceGroupManager = 'itaque';
    $request->key = 'assumenda';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->project = 'id';
    $request->quotaUser = 'eveniet';
    $request->requestId = 'optio';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'nemo';
    $request->zone = 'neque';

    $requestSecurity = new ComputeInstanceGroupManagersStopInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersStopInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersStopInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInstanceGroupManagersSuspendInstances

Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSuspendInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagersSuspendInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSuspendInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSuspendInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInstanceGroupManagersSuspendInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInstanceGroupManagersSuspendInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersSuspendInstancesRequest = new InstanceGroupManagersSuspendInstancesRequest();
    $request->instanceGroupManagersSuspendInstancesRequest->forceSuspend = false;
    $request->instanceGroupManagersSuspendInstancesRequest->instances = [
        'at',
        'excepturi',
        'eos',
        'odit',
    ];
    $request->accessToken = 'quia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'sapiente';
    $request->instanceGroupManager = 'maiores';
    $request->key = 'exercitationem';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'dolore';
    $request->quotaUser = 'iste';
    $request->requestId = 'inventore';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'id';
    $request->userIp = 'harum';
    $request->zone = 'sapiente';

    $requestSecurity = new ComputeInstanceGroupManagersSuspendInstancesSecurity();
    $requestSecurity->option1 = new ComputeInstanceGroupManagersSuspendInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->instanceGroupManagers->computeInstanceGroupManagersSuspendInstances($request, $requestSecurity);

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'vero',
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'tenetur';
    $request->key = 'accusantium';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->project = 'id';
    $request->quotaUser = 'tempora';
    $request->resource = 'pariatur';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'quis';
    $request->userIp = 'aliquid';
    $request->zone = 'vero';

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
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerActionsSummary;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyTargetShapeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyZoneConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerFailoverActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceFlexibilityPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerListManagedInstancesResultsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamedPort;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStandbyPolicy;
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
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerTargetSizeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum;
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
        'sit' => 'adipisci',
    ];
    $request->instanceGroupManager1->allInstancesConfig->properties->metadata = [
        'saepe' => 'iure',
    ];
    $request->instanceGroupManager1->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager1->baseInstanceName = 'perspiciatis';
    $request->instanceGroupManager1->creationTimestamp = 'omnis';
    $request->instanceGroupManager1->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager1->currentActions->abandoning = 940141;
    $request->instanceGroupManager1->currentActions->creating = 38018;
    $request->instanceGroupManager1->currentActions->creatingAtomically = 794431;
    $request->instanceGroupManager1->currentActions->creatingWithoutRetries = 128390;
    $request->instanceGroupManager1->currentActions->deleting = 38173;
    $request->instanceGroupManager1->currentActions->none = 55790;
    $request->instanceGroupManager1->currentActions->queuing = 97138;
    $request->instanceGroupManager1->currentActions->recreating = 905001;
    $request->instanceGroupManager1->currentActions->refreshing = 154363;
    $request->instanceGroupManager1->currentActions->restarting = 134795;
    $request->instanceGroupManager1->currentActions->resuming = 796601;
    $request->instanceGroupManager1->currentActions->starting = 849673;
    $request->instanceGroupManager1->currentActions->stopping = 330765;
    $request->instanceGroupManager1->currentActions->suspending = 351035;
    $request->instanceGroupManager1->currentActions->verifying = 798934;
    $request->instanceGroupManager1->description = 'quod';
    $request->instanceGroupManager1->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager1->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::ANY;
    $request->instanceGroupManager1->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager1->failoverAction = InstanceGroupManagerFailoverActionEnum::UNKNOWN;
    $request->instanceGroupManager1->fingerprint = 'modi';
    $request->instanceGroupManager1->id = 'similique';
    $request->instanceGroupManager1->instanceFlexibilityPolicy = new InstanceGroupManagerInstanceFlexibilityPolicy();
    $request->instanceGroupManager1->instanceFlexibilityPolicy->instanceSelectionLists = [
        'laudantium' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
    ];
    $request->instanceGroupManager1->instanceGroup = 'ut';
    $request->instanceGroupManager1->instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy();
    $request->instanceGroupManager1->instanceLifecyclePolicy->defaultActionOnFailure = InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum::REPAIR;
    $request->instanceGroupManager1->instanceLifecyclePolicy->forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum::NO;
    $request->instanceGroupManager1->instanceLifecyclePolicy->metadataBasedReadinessSignal = new InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal();
    $request->instanceGroupManager1->instanceLifecyclePolicy->metadataBasedReadinessSignal->timeoutSec = 375877;
    $request->instanceGroupManager1->instanceTemplate = 'facere';
    $request->instanceGroupManager1->kind = 'omnis';
    $request->instanceGroupManager1->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGELESS;
    $request->instanceGroupManager1->name = 'Johanna Runolfsson Jr.';
    $request->instanceGroupManager1->namedPorts = [
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager1->region = 'commodi';
    $request->instanceGroupManager1->selfLink = 'enim';
    $request->instanceGroupManager1->selfLinkWithId = 'harum';
    $request->instanceGroupManager1->serviceAccount = 'aut';
    $request->instanceGroupManager1->standbyPolicy = new InstanceGroupManagerStandbyPolicy();
    $request->instanceGroupManager1->standbyPolicy->initialDelaySec = 234291;
    $request->instanceGroupManager1->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager1->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager1->statefulPolicy->preservedState->disks = [
        'rerum' => new StatefulPolicyPreservedStateDiskDevice(),
        'distinctio' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->externalIPs = [
        'saepe' => new StatefulPolicyPreservedStateNetworkIp(),
        'sit' => new StatefulPolicyPreservedStateNetworkIp(),
        'optio' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->internalIPs = [
        'corrupti' => new StatefulPolicyPreservedStateNetworkIp(),
        'quas' => new StatefulPolicyPreservedStateNetworkIp(),
        'ullam' => new StatefulPolicyPreservedStateNetworkIp(),
        'veritatis' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager1->status->allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig();
    $request->instanceGroupManager1->status->allInstancesConfig->currentRevision = 'quas';
    $request->instanceGroupManager1->status->allInstancesConfig->effective = false;
    $request->instanceGroupManager1->status->autoscaler = 'molestiae';
    $request->instanceGroupManager1->status->isStable = false;
    $request->instanceGroupManager1->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager1->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager1->status->stateful->isStateful = false;
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager1->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager1->status->versionTarget->isReached = false;
    $request->instanceGroupManager1->targetPools = [
        'labore',
        'nulla',
        'accusamus',
        'consequatur',
    ];
    $request->instanceGroupManager1->targetSize = 284927;
    $request->instanceGroupManager1->targetSizeUnit = InstanceGroupManagerTargetSizeUnitEnum::VM;
    $request->instanceGroupManager1->targetStoppedSize = 941688;
    $request->instanceGroupManager1->targetSuspendedSize = 153131;
    $request->instanceGroupManager1->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager1->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::PROACTIVE;
    $request->instanceGroupManager1->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxSurge->calculated = 803763;
    $request->instanceGroupManager1->updatePolicy->maxSurge->fixed = 323614;
    $request->instanceGroupManager1->updatePolicy->maxSurge->percent = 845013;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->calculated = 813545;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->fixed = 863508;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->percent = 697401;
    $request->instanceGroupManager1->updatePolicy->minReadySec = 290593;
    $request->instanceGroupManager1->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REFRESH;
    $request->instanceGroupManager1->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::REPLACE;
    $request->instanceGroupManager1->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::SUBSTITUTE;
    $request->instanceGroupManager1->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::OPPORTUNISTIC;
    $request->instanceGroupManager1->versions = [
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager1->zone = 'voluptatibus';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facere';
    $request->fields = 'corrupti';
    $request->instanceGroupManagerPathParameter = 'magni';
    $request->key = 'blanditiis';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'ipsa';
    $request->requestId = 'inventore';
    $request->uploadType = 'nesciunt';
    $request->uploadProtocol = 'et';
    $request->userIp = 'error';
    $request->zone = 'inventore';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManagersUpdatePerInstanceConfigsReq = new InstanceGroupManagersUpdatePerInstanceConfigsReq();
    $request->instanceGroupManagersUpdatePerInstanceConfigsReq->perInstanceConfigs = [
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'unde';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->fields = 'aliquid';
    $request->instanceGroupManager = 'eum';
    $request->key = 'quaerat';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'ab';
    $request->requestId = 'quibusdam';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'et';
    $request->userIp = 'delectus';
    $request->zone = 'explicabo';

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
