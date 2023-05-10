# regionInstanceGroupManagers

### Available Operations

* [computeRegionInstanceGroupManagersAbandonInstances](#computeregioninstancegroupmanagersabandoninstances) - Flags the specified instances to be immediately removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersApplyUpdatesToInstances](#computeregioninstancegroupmanagersapplyupdatestoinstances) - Apply updates to selected instances the managed instance group.
* [computeRegionInstanceGroupManagersCreateInstances](#computeregioninstancegroupmanagerscreateinstances) - Creates instances with per-instance configurations in this regional managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.
* [computeRegionInstanceGroupManagersDelete](#computeregioninstancegroupmanagersdelete) - Deletes the specified managed instance group and all of the instances in that group.
* [computeRegionInstanceGroupManagersDeleteInstances](#computeregioninstancegroupmanagersdeleteinstances) - Flags the specified instances in the managed instance group to be immediately deleted. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. The deleteInstances operation is marked DONE if the deleteInstances request is successful. The underlying actions take additional time. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersDeletePerInstanceConfigs](#computeregioninstancegroupmanagersdeleteperinstanceconfigs) - Deletes selected per-instance configurations for the managed instance group.
* [computeRegionInstanceGroupManagersGet](#computeregioninstancegroupmanagersget) - Returns all of the details about the specified managed instance group.
* [computeRegionInstanceGroupManagersInsert](#computeregioninstancegroupmanagersinsert) - Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A regional managed instance group can contain up to 2000 instances.
* [computeRegionInstanceGroupManagersList](#computeregioninstancegroupmanagerslist) - Retrieves the list of managed instance groups that are contained within the specified region.
* [computeRegionInstanceGroupManagersListErrors](#computeregioninstancegroupmanagerslisterrors) - Lists all errors thrown by actions on instances for a given regional managed instance group. The filter and orderBy query parameters are not supported.
* [computeRegionInstanceGroupManagersListManagedInstances](#computeregioninstancegroupmanagerslistmanagedinstances) - Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.
* [computeRegionInstanceGroupManagersListPerInstanceConfigs](#computeregioninstancegroupmanagerslistperinstanceconfigs) - Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.
* [computeRegionInstanceGroupManagersPatch](#computeregioninstancegroupmanagerspatch) - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listmanagedinstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* [computeRegionInstanceGroupManagersPatchPerInstanceConfigs](#computeregioninstancegroupmanagerspatchperinstanceconfigs) - Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.
* [computeRegionInstanceGroupManagersRecreateInstances](#computeregioninstancegroupmanagersrecreateinstances) - Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersResize](#computeregioninstancegroupmanagersresize) - Changes the intended size of the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* [computeRegionInstanceGroupManagersResizeAdvanced](#computeregioninstancegroupmanagersresizeadvanced) - Resizes the regional managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.
* [computeRegionInstanceGroupManagersResumeInstances](#computeregioninstancegroupmanagersresumeinstances) - Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersSetAutoHealingPolicies](#computeregioninstancegroupmanagerssetautohealingpolicies) - Modifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use regionInstanceGroupManagers.patch instead.
* [computeRegionInstanceGroupManagersSetInstanceTemplate](#computeregioninstancegroupmanagerssetinstancetemplate) - Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
* [computeRegionInstanceGroupManagersSetTargetPools](#computeregioninstancegroupmanagerssettargetpools) - Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
* [computeRegionInstanceGroupManagersStartInstances](#computeregioninstancegroupmanagersstartinstances) - Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersStopInstances](#computeregioninstancegroupmanagersstopinstances) - Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersSuspendInstances](#computeregioninstancegroupmanagerssuspendinstances) - Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.
* [computeRegionInstanceGroupManagersTestIamPermissions](#computeregioninstancegroupmanagerstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionInstanceGroupManagersUpdate](#computeregioninstancegroupmanagersupdate) - Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listmanagedinstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.
* [computeRegionInstanceGroupManagersUpdatePerInstanceConfigs](#computeregioninstancegroupmanagersupdateperinstanceconfigs) - Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

## computeRegionInstanceGroupManagersAbandonInstances

Flags the specified instances to be immediately removed from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersAbandonInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersAbandonInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersAbandonInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersAbandonInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersAbandonInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersAbandonInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagersAbandonInstancesRequest = new RegionInstanceGroupManagersAbandonInstancesRequest();
    $request->regionInstanceGroupManagersAbandonInstancesRequest->instances = [
        'consequuntur',
        'iure',
    ];
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'sequi';
    $request->instanceGroupManager = 'quae';
    $request->key = 'porro';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'at';
    $request->quotaUser = 'ex';
    $request->region = 'unde';
    $request->requestId = 'fugit';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'quisquam';

    $requestSecurity = new ComputeRegionInstanceGroupManagersAbandonInstancesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersAbandonInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersAbandonInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersApplyUpdatesToInstances

Apply updates to selected instances the managed instance group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersApplyUpdatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersApplyUpdatesRequestMaximalActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersApplyUpdatesRequestMinimalActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagersApplyUpdatesRequest = new RegionInstanceGroupManagersApplyUpdatesRequest();
    $request->regionInstanceGroupManagersApplyUpdatesRequest->allInstances = false;
    $request->regionInstanceGroupManagersApplyUpdatesRequest->instances = [
        'dolore',
        'nostrum',
    ];
    $request->regionInstanceGroupManagersApplyUpdatesRequest->maximalAction = RegionInstanceGroupManagersApplyUpdatesRequestMaximalActionEnum::NONE;
    $request->regionInstanceGroupManagersApplyUpdatesRequest->minimalAction = RegionInstanceGroupManagersApplyUpdatesRequestMinimalActionEnum::NONE;
    $request->regionInstanceGroupManagersApplyUpdatesRequest->mostDisruptiveAllowedAction = RegionInstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum::REFRESH;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'velit';
    $request->instanceGroupManager = 'temporibus';
    $request->key = 'excepturi';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'vero';
    $request->region = 'aperiam';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'commodi';
    $request->userIp = 'sapiente';

    $requestSecurity = new ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersApplyUpdatesToInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersApplyUpdatesToInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersCreateInstances

Creates instances with per-instance configurations in this regional managed instance group. Instances are created using the current instance template. The create instances operation is marked DONE if the createInstances request is successful. The underlying actions take additional time. You must separately verify the status of the creating or actions with the listmanagedinstances method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersCreateInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersCreateInstancesRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersCreateInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersCreateInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersCreateInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersCreateInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagersCreateInstancesRequest = new RegionInstanceGroupManagersCreateInstancesRequest();
    $request->regionInstanceGroupManagersCreateInstancesRequest->instances = [
        new PerInstanceConfig(),
        new PerInstanceConfig(),
        new PerInstanceConfig(),
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatum';
    $request->fields = 'ea';
    $request->instanceGroupManager = 'laboriosam';
    $request->key = 'numquam';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'error';
    $request->region = 'laudantium';
    $request->requestId = 'corporis';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'ipsum';
    $request->userIp = 'perferendis';

    $requestSecurity = new ComputeRegionInstanceGroupManagersCreateInstancesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersCreateInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersCreateInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersDelete

Deletes the specified managed instance group and all of the instances in that group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'similique';
    $request->instanceGroupManager = 'repudiandae';
    $request->key = 'assumenda';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'est';
    $request->region = 'tenetur';
    $request->requestId = 'atque';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'nesciunt';
    $request->userIp = 'impedit';

    $requestSecurity = new ComputeRegionInstanceGroupManagersDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersDeleteInstances

Flags the specified instances in the managed instance group to be immediately deleted. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. The deleteInstances operation is marked DONE if the deleteInstances request is successful. The underlying actions take additional time. You must separately verify the status of the deleting action with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersDeleteInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersDeleteInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersDeleteInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersDeleteInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersDeleteInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersDeleteInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagersDeleteInstancesRequest = new RegionInstanceGroupManagersDeleteInstancesRequest();
    $request->regionInstanceGroupManagersDeleteInstancesRequest->instances = [
        'illum',
        'eaque',
        'incidunt',
    ];
    $request->regionInstanceGroupManagersDeleteInstancesRequest->skipInapplicableInstances = false;
    $request->regionInstanceGroupManagersDeleteInstancesRequest->skipInstancesOnValidationError = false;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'perspiciatis';
    $request->instanceGroupManager = 'id';
    $request->key = 'amet';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->project = 'iste';
    $request->quotaUser = 'voluptatem';
    $request->region = 'voluptas';
    $request->requestId = 'hic';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'soluta';

    $requestSecurity = new ComputeRegionInstanceGroupManagersDeleteInstancesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersDeleteInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersDeleteInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersDeletePerInstanceConfigs

Deletes selected per-instance configurations for the managed instance group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagerDeleteInstanceConfigReq;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagerDeleteInstanceConfigReq = new RegionInstanceGroupManagerDeleteInstanceConfigReq();
    $request->regionInstanceGroupManagerDeleteInstanceConfigReq->names = [
        'officia',
        'fugiat',
    ];
    $request->accessToken = 'quam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'dignissimos';
    $request->instanceGroupManager = 'neque';
    $request->key = 'provident';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'dolores';
    $request->region = 'corporis';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'ratione';

    $requestSecurity = new ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersDeletePerInstanceConfigsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersDeletePerInstanceConfigs($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersGet

Returns all of the details about the specified managed instance group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quam';
    $request->fields = 'dolorem';
    $request->instanceGroupManager = 'accusantium';
    $request->key = 'ducimus';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'numquam';
    $request->quotaUser = 'itaque';
    $request->region = 'commodi';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'recusandae';
    $request->userIp = 'corrupti';

    $requestSecurity = new ComputeRegionInstanceGroupManagersGetSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersGet($request, $requestSecurity);

    if ($response->instanceGroupManager !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersInsert

Creates a managed instance group using the information that you specify in the request. After the group is created, instances in the group are created using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method. A regional managed instance group can contain up to 2000 instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManager = new InstanceGroupManager();
    $request->instanceGroupManager->allInstancesConfig = new InstanceGroupManagerAllInstancesConfig();
    $request->instanceGroupManager->allInstancesConfig->properties = new InstancePropertiesPatch();
    $request->instanceGroupManager->allInstancesConfig->properties->labels = [
        'debitis' => 'consequatur',
    ];
    $request->instanceGroupManager->allInstancesConfig->properties->metadata = [
        'impedit' => 'vel',
        'quaerat' => 'quibusdam',
        'dolorem' => 'aliquam',
    ];
    $request->instanceGroupManager->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager->baseInstanceName = 'dolorum';
    $request->instanceGroupManager->creationTimestamp = 'placeat';
    $request->instanceGroupManager->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager->currentActions->abandoning = 179977;
    $request->instanceGroupManager->currentActions->creating = 620633;
    $request->instanceGroupManager->currentActions->creatingAtomically = 590591;
    $request->instanceGroupManager->currentActions->creatingWithoutRetries = 641301;
    $request->instanceGroupManager->currentActions->deleting = 395974;
    $request->instanceGroupManager->currentActions->none = 925438;
    $request->instanceGroupManager->currentActions->queuing = 374975;
    $request->instanceGroupManager->currentActions->recreating = 891799;
    $request->instanceGroupManager->currentActions->refreshing = 461806;
    $request->instanceGroupManager->currentActions->restarting = 680461;
    $request->instanceGroupManager->currentActions->resuming = 934626;
    $request->instanceGroupManager->currentActions->starting = 961027;
    $request->instanceGroupManager->currentActions->stopping = 79187;
    $request->instanceGroupManager->currentActions->suspending = 228961;
    $request->instanceGroupManager->currentActions->verifying = 309962;
    $request->instanceGroupManager->description = 'perferendis';
    $request->instanceGroupManager->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::ANY;
    $request->instanceGroupManager->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager->failoverAction = InstanceGroupManagerFailoverActionEnum::UNKNOWN;
    $request->instanceGroupManager->fingerprint = 'modi';
    $request->instanceGroupManager->id = 'ullam';
    $request->instanceGroupManager->instanceFlexibilityPolicy = new InstanceGroupManagerInstanceFlexibilityPolicy();
    $request->instanceGroupManager->instanceFlexibilityPolicy->instanceSelectionLists = [
        'nemo' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
        'dolor' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
        'quam' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
        'incidunt' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
    ];
    $request->instanceGroupManager->instanceGroup = 'consectetur';
    $request->instanceGroupManager->instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy();
    $request->instanceGroupManager->instanceLifecyclePolicy->defaultActionOnFailure = InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum::REPAIR;
    $request->instanceGroupManager->instanceLifecyclePolicy->forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum::YES;
    $request->instanceGroupManager->instanceLifecyclePolicy->metadataBasedReadinessSignal = new InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal();
    $request->instanceGroupManager->instanceLifecyclePolicy->metadataBasedReadinessSignal->timeoutSec = 812655;
    $request->instanceGroupManager->instanceTemplate = 'repudiandae';
    $request->instanceGroupManager->kind = 'quasi';
    $request->instanceGroupManager->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGELESS;
    $request->instanceGroupManager->name = 'Hugh Crona DVM';
    $request->instanceGroupManager->namedPorts = [
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager->region = 'libero';
    $request->instanceGroupManager->selfLink = 'inventore';
    $request->instanceGroupManager->selfLinkWithId = 'tenetur';
    $request->instanceGroupManager->serviceAccount = 'nihil';
    $request->instanceGroupManager->standbyPolicy = new InstanceGroupManagerStandbyPolicy();
    $request->instanceGroupManager->standbyPolicy->initialDelaySec = 856190;
    $request->instanceGroupManager->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager->statefulPolicy->preservedState->disks = [
        'deserunt' => new StatefulPolicyPreservedStateDiskDevice(),
        'earum' => new StatefulPolicyPreservedStateDiskDevice(),
        'a' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager->statefulPolicy->preservedState->externalIPs = [
        'eum' => new StatefulPolicyPreservedStateNetworkIp(),
        'omnis' => new StatefulPolicyPreservedStateNetworkIp(),
        'aliquid' => new StatefulPolicyPreservedStateNetworkIp(),
        'blanditiis' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager->statefulPolicy->preservedState->internalIPs = [
        'mollitia' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager->status->allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig();
    $request->instanceGroupManager->status->allInstancesConfig->currentRevision = 'minus';
    $request->instanceGroupManager->status->allInstancesConfig->effective = false;
    $request->instanceGroupManager->status->autoscaler = 'recusandae';
    $request->instanceGroupManager->status->isStable = false;
    $request->instanceGroupManager->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager->status->stateful->isStateful = false;
    $request->instanceGroupManager->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager->status->versionTarget->isReached = false;
    $request->instanceGroupManager->targetPools = [
        'asperiores',
        'cum',
        'accusantium',
        'magnam',
    ];
    $request->instanceGroupManager->targetSize = 969553;
    $request->instanceGroupManager->targetSizeUnit = InstanceGroupManagerTargetSizeUnitEnum::VM;
    $request->instanceGroupManager->targetStoppedSize = 803186;
    $request->instanceGroupManager->targetSuspendedSize = 321948;
    $request->instanceGroupManager->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::NONE;
    $request->instanceGroupManager->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager->updatePolicy->maxSurge->calculated = 187265;
    $request->instanceGroupManager->updatePolicy->maxSurge->fixed = 800168;
    $request->instanceGroupManager->updatePolicy->maxSurge->percent = 658625;
    $request->instanceGroupManager->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager->updatePolicy->maxUnavailable->calculated = 662633;
    $request->instanceGroupManager->updatePolicy->maxUnavailable->fixed = 724355;
    $request->instanceGroupManager->updatePolicy->maxUnavailable->percent = 905738;
    $request->instanceGroupManager->updatePolicy->minReadySec = 652412;
    $request->instanceGroupManager->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REFRESH;
    $request->instanceGroupManager->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::NONE;
    $request->instanceGroupManager->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::SUBSTITUTE;
    $request->instanceGroupManager->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::PROACTIVE;
    $request->instanceGroupManager->versions = [
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager->zone = 'corporis';
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'facere';
    $request->key = 'velit';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'veniam';
    $request->quotaUser = 'illum';
    $request->region = 'labore';
    $request->requestId = 'ea';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'ullam';
    $request->userIp = 'cupiditate';

    $requestSecurity = new ComputeRegionInstanceGroupManagersInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersList

Retrieves the list of managed instance groups that are contained within the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'nesciunt';
    $request->filter = 'velit';
    $request->key = 'magnam';
    $request->maxResults = 586310;
    $request->oauthToken = 'nemo';
    $request->orderBy = 'dignissimos';
    $request->pageToken = 'eum';
    $request->prettyPrint = false;
    $request->project = 'facere';
    $request->quotaUser = 'minima';
    $request->region = 'ullam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'error';

    $requestSecurity = new ComputeRegionInstanceGroupManagersListSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersList($request, $requestSecurity);

    if ($response->regionInstanceGroupManagerList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersListErrors

Lists all errors thrown by actions on instances for a given regional managed instance group. The filter and orderBy query parameters are not supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListErrorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListErrorsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListErrorsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListErrorsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListErrorsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersListErrorsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eos';
    $request->fields = 'qui';
    $request->filter = 'corporis';
    $request->instanceGroupManager = 'neque';
    $request->key = 'facilis';
    $request->maxResults = 398200;
    $request->oauthToken = 'possimus';
    $request->orderBy = 'molestiae';
    $request->pageToken = 'nisi';
    $request->prettyPrint = false;
    $request->project = 'veniam';
    $request->quotaUser = 'praesentium';
    $request->region = 'laudantium';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'earum';

    $requestSecurity = new ComputeRegionInstanceGroupManagersListErrorsSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersListErrorsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersListErrors($request, $requestSecurity);

    if ($response->regionInstanceGroupManagersListErrorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersListManagedInstances

Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances. The orderBy query parameter is not supported. The `pageToken` query parameter is supported only in the alpha and beta API and only if the group's `listManagedInstancesResults` field is set to `PAGINATED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListManagedInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListManagedInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListManagedInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListManagedInstancesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListManagedInstancesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersListManagedInstancesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'nulla';
    $request->filter = 'dolore';
    $request->instanceGroupManager = 'quidem';
    $request->key = 'ipsum';
    $request->maxResults = 593724;
    $request->oauthToken = 'voluptatibus';
    $request->orderBy = 'totam';
    $request->pageToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'veritatis';
    $request->quotaUser = 'eius';
    $request->region = 'provident';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'in';

    $requestSecurity = new ComputeRegionInstanceGroupManagersListManagedInstancesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersListManagedInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersListManagedInstances($request, $requestSecurity);

    if ($response->regionInstanceGroupManagersListInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersListPerInstanceConfigs

Lists all of the per-instance configurations defined for the managed instance group. The orderBy query parameter is not supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListPerInstanceConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersListPerInstanceConfigsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'quisquam';
    $request->filter = 'commodi';
    $request->instanceGroupManager = 'laudantium';
    $request->key = 'laboriosam';
    $request->maxResults = 830931;
    $request->oauthToken = 'quos';
    $request->orderBy = 'neque';
    $request->pageToken = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'earum';
    $request->quotaUser = 'eligendi';
    $request->region = 'occaecati';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'illo';
    $request->userIp = 'esse';

    $requestSecurity = new ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersListPerInstanceConfigsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersListPerInstanceConfigs($request, $requestSecurity);

    if ($response->regionInstanceGroupManagersListInstanceConfigsResp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersPatch

Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is patched even if the instances in the group are still in the process of being patched. You must separately verify the status of the individual instances with the listmanagedinstances method. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManager1 = new InstanceGroupManager();
    $request->instanceGroupManager1->allInstancesConfig = new InstanceGroupManagerAllInstancesConfig();
    $request->instanceGroupManager1->allInstancesConfig->properties = new InstancePropertiesPatch();
    $request->instanceGroupManager1->allInstancesConfig->properties->labels = [
        'maiores' => 'similique',
        'iste' => 'consequatur',
        'autem' => 'similique',
        'voluptates' => 'enim',
    ];
    $request->instanceGroupManager1->allInstancesConfig->properties->metadata = [
        'error' => 'soluta',
        'nihil' => 'fugit',
    ];
    $request->instanceGroupManager1->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager1->baseInstanceName = 'quidem';
    $request->instanceGroupManager1->creationTimestamp = 'vel';
    $request->instanceGroupManager1->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager1->currentActions->abandoning = 491440;
    $request->instanceGroupManager1->currentActions->creating = 299207;
    $request->instanceGroupManager1->currentActions->creatingAtomically = 424629;
    $request->instanceGroupManager1->currentActions->creatingWithoutRetries = 36186;
    $request->instanceGroupManager1->currentActions->deleting = 231609;
    $request->instanceGroupManager1->currentActions->none = 26348;
    $request->instanceGroupManager1->currentActions->queuing = 987456;
    $request->instanceGroupManager1->currentActions->recreating = 881478;
    $request->instanceGroupManager1->currentActions->refreshing = 123619;
    $request->instanceGroupManager1->currentActions->restarting = 560561;
    $request->instanceGroupManager1->currentActions->resuming = 203492;
    $request->instanceGroupManager1->currentActions->starting = 439748;
    $request->instanceGroupManager1->currentActions->stopping = 377411;
    $request->instanceGroupManager1->currentActions->suspending = 756956;
    $request->instanceGroupManager1->currentActions->verifying = 131120;
    $request->instanceGroupManager1->description = 'expedita';
    $request->instanceGroupManager1->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager1->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::EVEN;
    $request->instanceGroupManager1->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager1->failoverAction = InstanceGroupManagerFailoverActionEnum::UNKNOWN;
    $request->instanceGroupManager1->fingerprint = 'vero';
    $request->instanceGroupManager1->id = 'iure';
    $request->instanceGroupManager1->instanceFlexibilityPolicy = new InstanceGroupManagerInstanceFlexibilityPolicy();
    $request->instanceGroupManager1->instanceFlexibilityPolicy->instanceSelectionLists = [
        'dignissimos' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
        'perspiciatis' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
    ];
    $request->instanceGroupManager1->instanceGroup = 'quae';
    $request->instanceGroupManager1->instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy();
    $request->instanceGroupManager1->instanceLifecyclePolicy->defaultActionOnFailure = InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum::REPAIR;
    $request->instanceGroupManager1->instanceLifecyclePolicy->forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum::YES;
    $request->instanceGroupManager1->instanceLifecyclePolicy->metadataBasedReadinessSignal = new InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal();
    $request->instanceGroupManager1->instanceLifecyclePolicy->metadataBasedReadinessSignal->timeoutSec = 41824;
    $request->instanceGroupManager1->instanceTemplate = 'porro';
    $request->instanceGroupManager1->kind = 'inventore';
    $request->instanceGroupManager1->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGELESS;
    $request->instanceGroupManager1->name = 'Clinton Pouros';
    $request->instanceGroupManager1->namedPorts = [
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager1->region = 'rem';
    $request->instanceGroupManager1->selfLink = 'tempora';
    $request->instanceGroupManager1->selfLinkWithId = 'alias';
    $request->instanceGroupManager1->serviceAccount = 'magnam';
    $request->instanceGroupManager1->standbyPolicy = new InstanceGroupManagerStandbyPolicy();
    $request->instanceGroupManager1->standbyPolicy->initialDelaySec = 281698;
    $request->instanceGroupManager1->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager1->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager1->statefulPolicy->preservedState->disks = [
        'unde' => new StatefulPolicyPreservedStateDiskDevice(),
        'repellat' => new StatefulPolicyPreservedStateDiskDevice(),
        'voluptas' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->externalIPs = [
        'dignissimos' => new StatefulPolicyPreservedStateNetworkIp(),
        'ipsa' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->internalIPs = [
        'earum' => new StatefulPolicyPreservedStateNetworkIp(),
        'ipsa' => new StatefulPolicyPreservedStateNetworkIp(),
        'aliquam' => new StatefulPolicyPreservedStateNetworkIp(),
        'praesentium' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager1->status->allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig();
    $request->instanceGroupManager1->status->allInstancesConfig->currentRevision = 'doloremque';
    $request->instanceGroupManager1->status->allInstancesConfig->effective = false;
    $request->instanceGroupManager1->status->autoscaler = 'occaecati';
    $request->instanceGroupManager1->status->isStable = false;
    $request->instanceGroupManager1->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager1->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager1->status->stateful->isStateful = false;
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager1->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager1->status->versionTarget->isReached = false;
    $request->instanceGroupManager1->targetPools = [
        'id',
    ];
    $request->instanceGroupManager1->targetSize = 171134;
    $request->instanceGroupManager1->targetSizeUnit = InstanceGroupManagerTargetSizeUnitEnum::VM;
    $request->instanceGroupManager1->targetStoppedSize = 634157;
    $request->instanceGroupManager1->targetSuspendedSize = 147597;
    $request->instanceGroupManager1->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager1->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::NONE;
    $request->instanceGroupManager1->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxSurge->calculated = 923003;
    $request->instanceGroupManager1->updatePolicy->maxSurge->fixed = 917300;
    $request->instanceGroupManager1->updatePolicy->maxSurge->percent = 413908;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->calculated = 793274;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->fixed = 488968;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->percent = 320837;
    $request->instanceGroupManager1->updatePolicy->minReadySec = 661941;
    $request->instanceGroupManager1->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::RESTART;
    $request->instanceGroupManager1->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::REPLACE;
    $request->instanceGroupManager1->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::SUBSTITUTE;
    $request->instanceGroupManager1->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::OPPORTUNISTIC;
    $request->instanceGroupManager1->versions = [
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager1->zone = 'laborum';
    $request->accessToken = 'quam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eveniet';
    $request->fields = 'dolor';
    $request->instanceGroupManagerPathParameter = 'dolore';
    $request->key = 'vel';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'iste';
    $request->region = 'esse';
    $request->requestId = 'cupiditate';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'nemo';
    $request->userIp = 'officia';

    $requestSecurity = new ComputeRegionInstanceGroupManagersPatchSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersPatchPerInstanceConfigs

Inserts or patches per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagerPatchInstanceConfigReq;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagerPatchInstanceConfigReq = new RegionInstanceGroupManagerPatchInstanceConfigReq();
    $request->regionInstanceGroupManagerPatchInstanceConfigReq->perInstanceConfigs = [
        new PerInstanceConfig(),
        new PerInstanceConfig(),
        new PerInstanceConfig(),
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'impedit';
    $request->instanceGroupManager = 'culpa';
    $request->key = 'quisquam';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'nisi';
    $request->quotaUser = 'aliquam';
    $request->region = 'nemo';
    $request->requestId = 'pariatur';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'atque';

    $requestSecurity = new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersPatchPerInstanceConfigs($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersRecreateInstances

Flags the specified VM instances in the managed instance group to be immediately recreated. Each instance is recreated using the group's current configuration. This operation is marked as DONE when the flag is set even if the instances have not yet been recreated. You must separately verify the status of each instance by checking its currentAction field; for more information, see Checking the status of managed instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersRecreateInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersRecreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersRecreateInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersRecreateInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersRecreateInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersRecreateInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagersRecreateRequest = new RegionInstanceGroupManagersRecreateRequest();
    $request->regionInstanceGroupManagersRecreateRequest->instances = [
        'ad',
        'veniam',
    ];
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'porro';
    $request->instanceGroupManager = 'porro';
    $request->key = 'eveniet';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'voluptates';
    $request->region = 'impedit';
    $request->requestId = 'sunt';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'odio';
    $request->userIp = 'occaecati';

    $requestSecurity = new ComputeRegionInstanceGroupManagersRecreateInstancesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersRecreateInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersRecreateInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersResize

Changes the intended size of the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersResizeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersResizeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersResizeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersResizeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fuga';
    $request->fields = 'officiis';
    $request->instanceGroupManager = 'ipsam';
    $request->key = 'fuga';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'assumenda';
    $request->quotaUser = 'nemo';
    $request->region = 'id';
    $request->requestId = 'laboriosam';
    $request->size = 344243;
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'fugiat';

    $requestSecurity = new ComputeRegionInstanceGroupManagersResizeSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersResizeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersResize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersResizeAdvanced

Resizes the regional managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes one or more instances. The resize operation is marked DONE if the resize request is successful. The underlying actions take additional time. You must separately verify the status of the creating or deleting actions with the get or listmanagedinstances method. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersResizeAdvancedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersResizeAdvancedRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersResizeAdvancedSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersResizeAdvancedSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersResizeAdvancedSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersResizeAdvancedRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagersResizeAdvancedRequest = new RegionInstanceGroupManagersResizeAdvancedRequest();
    $request->regionInstanceGroupManagersResizeAdvancedRequest->noCreationRetries = false;
    $request->regionInstanceGroupManagersResizeAdvancedRequest->targetSize = 333539;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'assumenda';
    $request->fields = 'cupiditate';
    $request->instanceGroupManager = 'expedita';
    $request->key = 'odio';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'recusandae';
    $request->region = 'eos';
    $request->requestId = 'facere';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'quod';

    $requestSecurity = new ComputeRegionInstanceGroupManagersResizeAdvancedSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersResizeAdvancedSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersResizeAdvanced($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersResumeInstances

Flags the specified instances in the managed instance group to be resumed. This method increases the targetSize and decreases the targetSuspendedSize of the managed instance group by the number of instances that you resume. The resumeInstances operation is marked DONE if the resumeInstances request is successful. The underlying actions take additional time. You must separately verify the status of the RESUMING action with the listmanagedinstances method. In this request, you can only specify instances that are suspended. For example, if an instance was previously suspended using the suspendInstances method, it can be resumed using the resumeInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are resumed. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersResumeInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersResumeInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersResumeInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersResumeInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersResumeInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersResumeInstancesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagersResumeInstancesRequest = new RegionInstanceGroupManagersResumeInstancesRequest();
    $request->regionInstanceGroupManagersResumeInstancesRequest->instances = [
        'ad',
        'esse',
    ];
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sint';
    $request->fields = 'nulla';
    $request->instanceGroupManager = 'harum';
    $request->key = 'corrupti';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'quisquam';
    $request->region = 'sequi';
    $request->requestId = 'culpa';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'perspiciatis';
    $request->userIp = 'sit';

    $requestSecurity = new ComputeRegionInstanceGroupManagersResumeInstancesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersResumeInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersResumeInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersSetAutoHealingPolicies

Modifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use regionInstanceGroupManagers.patch instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersSetAutoHealingRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicyAutoHealingTriggers;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicyAutoHealingTriggersOnHealthCheckEnum;
use \OpenAPI\OpenAPI\Models\Shared\FixedOrPercent;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagersSetAutoHealingRequest = new RegionInstanceGroupManagersSetAutoHealingRequest();
    $request->regionInstanceGroupManagersSetAutoHealingRequest->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'quasi';
    $request->instanceGroupManager = 'delectus';
    $request->key = 'magnam';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'sapiente';
    $request->region = 'iure';
    $request->requestId = 'molestiae';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'iure';
    $request->userIp = 'necessitatibus';

    $requestSecurity = new ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersSetAutoHealingPolicies($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersSetInstanceTemplate

Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetInstanceTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersSetTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersSetInstanceTemplateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagersSetTemplateRequest = new RegionInstanceGroupManagersSetTemplateRequest();
    $request->regionInstanceGroupManagersSetTemplateRequest->instanceTemplate = 'dolor';
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'numquam';
    $request->instanceGroupManager = 'placeat';
    $request->key = 'ab';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'ad';
    $request->region = 'rem';
    $request->requestId = 'beatae';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'laudantium';

    $requestSecurity = new ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersSetInstanceTemplateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersSetInstanceTemplate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersSetTargetPools

Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetTargetPoolsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersSetTargetPoolsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetTargetPoolsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetTargetPoolsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetTargetPoolsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersSetTargetPoolsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagersSetTargetPoolsRequest = new RegionInstanceGroupManagersSetTargetPoolsRequest();
    $request->regionInstanceGroupManagersSetTargetPoolsRequest->fingerprint = 'minus';
    $request->regionInstanceGroupManagersSetTargetPoolsRequest->targetPools = [
        'consectetur',
        'reiciendis',
        'esse',
        'sunt',
    ];
    $request->accessToken = 'autem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'aperiam';
    $request->instanceGroupManager = 'possimus';
    $request->key = 'culpa';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->quotaUser = 'dolor';
    $request->region = 'harum';
    $request->requestId = 'deserunt';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'optio';

    $requestSecurity = new ComputeRegionInstanceGroupManagersSetTargetPoolsSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersSetTargetPoolsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersSetTargetPools($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersStartInstances

Flags the specified instances in the managed instance group to be started. This method increases the targetSize and decreases the targetStoppedSize of the managed instance group by the number of instances that you start. The startInstances operation is marked DONE if the startInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STARTING action with the listmanagedinstances method. In this request, you can only specify instances that are stopped. For example, if an instance was previously stopped using the stopInstances method, it can be started using the startInstances method. If a health check is attached to the managed instance group, the specified instances will be verified as healthy after they are started. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersStartInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersStartInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersStartInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersStartInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersStartInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersStartInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagersStartInstancesRequest = new RegionInstanceGroupManagersStartInstancesRequest();
    $request->regionInstanceGroupManagersStartInstancesRequest->instances = [
        'earum',
        'alias',
        'sint',
        'assumenda',
    ];
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->fields = 'soluta';
    $request->instanceGroupManager = 'ad';
    $request->key = 'adipisci';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'eos';
    $request->region = 'placeat';
    $request->requestId = 'blanditiis';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'placeat';

    $requestSecurity = new ComputeRegionInstanceGroupManagersStartInstancesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersStartInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersStartInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersStopInstances

Flags the specified instances in the managed instance group to be immediately stopped. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetStoppedSize of the managed instance group by the number of instances that you stop. The stopInstances operation is marked DONE if the stopInstances request is successful. The underlying actions take additional time. You must separately verify the status of the STOPPING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays stopping the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is stopped. Stopped instances can be started using the startInstances method. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersStopInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersStopInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersStopInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersStopInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersStopInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersStopInstancesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagersStopInstancesRequest = new RegionInstanceGroupManagersStopInstancesRequest();
    $request->regionInstanceGroupManagersStopInstancesRequest->forceStop = false;
    $request->regionInstanceGroupManagersStopInstancesRequest->instances = [
        'esse',
        'quasi',
        'alias',
        'accusamus',
    ];
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'ipsum';
    $request->instanceGroupManager = 'at';
    $request->key = 'excepturi';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->project = 'nostrum';
    $request->quotaUser = 'quisquam';
    $request->region = 'expedita';
    $request->requestId = 'labore';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'recusandae';
    $request->userIp = 'illum';

    $requestSecurity = new ComputeRegionInstanceGroupManagersStopInstancesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersStopInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersStopInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersSuspendInstances

Flags the specified instances in the managed instance group to be immediately suspended. You can only specify instances that are running in this request. This method reduces the targetSize and increases the targetSuspendedSize of the managed instance group by the number of instances that you suspend. The suspendInstances operation is marked DONE if the suspendInstances request is successful. The underlying actions take additional time. You must separately verify the status of the SUSPENDING action with the listmanagedinstances method. If the standbyPolicy.initialDelaySec field is set, the group delays suspension of the instances until initialDelaySec have passed from instance.creationTimestamp (that is, when the instance was created). This delay gives your application time to set itself up and initialize on the instance. If more than initialDelaySec seconds have passed since instance.creationTimestamp when this method is called, there will be zero delay. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is suspended. Suspended instances can be resumed using the resumeInstances method. You can specify a maximum of 1000 instances with this method per request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSuspendInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagersSuspendInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSuspendInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSuspendInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSuspendInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersSuspendInstancesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagersSuspendInstancesRequest = new RegionInstanceGroupManagersSuspendInstancesRequest();
    $request->regionInstanceGroupManagersSuspendInstancesRequest->forceSuspend = false;
    $request->regionInstanceGroupManagersSuspendInstancesRequest->instances = [
        'amet',
        'quod',
        'inventore',
        'odit',
    ];
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'excepturi';
    $request->instanceGroupManager = 'aperiam';
    $request->key = 'molestias';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->project = 'quis';
    $request->quotaUser = 'veniam';
    $request->region = 'consequuntur';
    $request->requestId = 'blanditiis';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'ipsam';
    $request->userIp = 'ipsa';

    $requestSecurity = new ComputeRegionInstanceGroupManagersSuspendInstancesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersSuspendInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersSuspendInstances($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'nobis',
        'soluta',
        'eligendi',
        'fugiat',
    ];
    $request->accessToken = 'velit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'magni';
    $request->key = 'dicta';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'atque';
    $request->quotaUser = 'quas';
    $request->region = 'placeat';
    $request->resource = 'beatae';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'saepe';
    $request->userIp = 'minima';

    $requestSecurity = new ComputeRegionInstanceGroupManagersTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersUpdate

Updates a managed instance group using the information that you specify in the request. This operation is marked as DONE when the group is updated even if the instances in the group have not yet been updated. You must separately verify the status of the individual instances with the listmanagedinstances method. If you update your group to specify a new template or instance configuration, it's possible that your intended specification for each VM in the group is different from the current state of that VM. To learn how to apply an updated configuration to the VMs in a MIG, see Updating instances in a MIG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersUpdateRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManager1 = new InstanceGroupManager();
    $request->instanceGroupManager1->allInstancesConfig = new InstanceGroupManagerAllInstancesConfig();
    $request->instanceGroupManager1->allInstancesConfig->properties = new InstancePropertiesPatch();
    $request->instanceGroupManager1->allInstancesConfig->properties->labels = [
        'similique' => 'doloremque',
        'autem' => 'quasi',
    ];
    $request->instanceGroupManager1->allInstancesConfig->properties->metadata = [
        'excepturi' => 'quasi',
    ];
    $request->instanceGroupManager1->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager1->baseInstanceName = 'maxime';
    $request->instanceGroupManager1->creationTimestamp = 'laudantium';
    $request->instanceGroupManager1->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager1->currentActions->abandoning = 966754;
    $request->instanceGroupManager1->currentActions->creating = 647068;
    $request->instanceGroupManager1->currentActions->creatingAtomically = 14040;
    $request->instanceGroupManager1->currentActions->creatingWithoutRetries = 743263;
    $request->instanceGroupManager1->currentActions->deleting = 479361;
    $request->instanceGroupManager1->currentActions->none = 830289;
    $request->instanceGroupManager1->currentActions->queuing = 106035;
    $request->instanceGroupManager1->currentActions->recreating = 498103;
    $request->instanceGroupManager1->currentActions->refreshing = 418539;
    $request->instanceGroupManager1->currentActions->restarting = 283162;
    $request->instanceGroupManager1->currentActions->resuming = 580613;
    $request->instanceGroupManager1->currentActions->starting = 132813;
    $request->instanceGroupManager1->currentActions->stopping = 429101;
    $request->instanceGroupManager1->currentActions->suspending = 704193;
    $request->instanceGroupManager1->currentActions->verifying = 17223;
    $request->instanceGroupManager1->description = 'cumque';
    $request->instanceGroupManager1->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager1->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::EVEN;
    $request->instanceGroupManager1->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager1->failoverAction = InstanceGroupManagerFailoverActionEnum::UNKNOWN;
    $request->instanceGroupManager1->fingerprint = 'ex';
    $request->instanceGroupManager1->id = 'impedit';
    $request->instanceGroupManager1->instanceFlexibilityPolicy = new InstanceGroupManagerInstanceFlexibilityPolicy();
    $request->instanceGroupManager1->instanceFlexibilityPolicy->instanceSelectionLists = [
        'aliquid' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
        'necessitatibus' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
        'harum' => new InstanceGroupManagerInstanceFlexibilityPolicyInstanceSelection(),
    ];
    $request->instanceGroupManager1->instanceGroup = 'similique';
    $request->instanceGroupManager1->instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy();
    $request->instanceGroupManager1->instanceLifecyclePolicy->defaultActionOnFailure = InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum::REPAIR;
    $request->instanceGroupManager1->instanceLifecyclePolicy->forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum::YES;
    $request->instanceGroupManager1->instanceLifecyclePolicy->metadataBasedReadinessSignal = new InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal();
    $request->instanceGroupManager1->instanceLifecyclePolicy->metadataBasedReadinessSignal->timeoutSec = 340254;
    $request->instanceGroupManager1->instanceTemplate = 'accusamus';
    $request->instanceGroupManager1->kind = 'doloremque';
    $request->instanceGroupManager1->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGINATED;
    $request->instanceGroupManager1->name = 'Terrance White';
    $request->instanceGroupManager1->namedPorts = [
        new NamedPort(),
    ];
    $request->instanceGroupManager1->region = 'amet';
    $request->instanceGroupManager1->selfLink = 'enim';
    $request->instanceGroupManager1->selfLinkWithId = 'quas';
    $request->instanceGroupManager1->serviceAccount = 'nulla';
    $request->instanceGroupManager1->standbyPolicy = new InstanceGroupManagerStandbyPolicy();
    $request->instanceGroupManager1->standbyPolicy->initialDelaySec = 390215;
    $request->instanceGroupManager1->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager1->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager1->statefulPolicy->preservedState->disks = [
        'corrupti' => new StatefulPolicyPreservedStateDiskDevice(),
        'reprehenderit' => new StatefulPolicyPreservedStateDiskDevice(),
        'nam' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->externalIPs = [
        'odio' => new StatefulPolicyPreservedStateNetworkIp(),
        'est' => new StatefulPolicyPreservedStateNetworkIp(),
        'voluptates' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->internalIPs = [
        'harum' => new StatefulPolicyPreservedStateNetworkIp(),
        'recusandae' => new StatefulPolicyPreservedStateNetworkIp(),
        'ullam' => new StatefulPolicyPreservedStateNetworkIp(),
        'eum' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager1->status->allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig();
    $request->instanceGroupManager1->status->allInstancesConfig->currentRevision = 'iste';
    $request->instanceGroupManager1->status->allInstancesConfig->effective = false;
    $request->instanceGroupManager1->status->autoscaler = 'at';
    $request->instanceGroupManager1->status->isStable = false;
    $request->instanceGroupManager1->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager1->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager1->status->stateful->isStateful = false;
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager1->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager1->status->versionTarget->isReached = false;
    $request->instanceGroupManager1->targetPools = [
        'alias',
        'minus',
    ];
    $request->instanceGroupManager1->targetSize = 709152;
    $request->instanceGroupManager1->targetSizeUnit = InstanceGroupManagerTargetSizeUnitEnum::VCPU;
    $request->instanceGroupManager1->targetStoppedSize = 384078;
    $request->instanceGroupManager1->targetSuspendedSize = 585566;
    $request->instanceGroupManager1->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager1->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::PROACTIVE;
    $request->instanceGroupManager1->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxSurge->calculated = 23491;
    $request->instanceGroupManager1->updatePolicy->maxSurge->fixed = 490989;
    $request->instanceGroupManager1->updatePolicy->maxSurge->percent = 979335;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->calculated = 592403;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->fixed = 507533;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->percent = 609222;
    $request->instanceGroupManager1->updatePolicy->minReadySec = 278799;
    $request->instanceGroupManager1->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REFRESH;
    $request->instanceGroupManager1->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::NONE;
    $request->instanceGroupManager1->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::RECREATE;
    $request->instanceGroupManager1->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::OPPORTUNISTIC;
    $request->instanceGroupManager1->versions = [
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager1->zone = 'culpa';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'quasi';
    $request->instanceGroupManagerPathParameter = 'sapiente';
    $request->key = 'dolorem';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'eos';
    $request->region = 'cumque';
    $request->requestId = 'vel';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'debitis';

    $requestSecurity = new ComputeRegionInstanceGroupManagersUpdateSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupManagersUpdatePerInstanceConfigs

Inserts or updates per-instance configurations for the managed instance group. perInstanceConfig.name serves as a key used to distinguish whether to perform insert or patch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupManagerUpdateInstanceConfigReq;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagerUpdateInstanceConfigReq = new RegionInstanceGroupManagerUpdateInstanceConfigReq();
    $request->regionInstanceGroupManagerUpdateInstanceConfigReq->perInstanceConfigs = [
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'optio';
    $request->instanceGroupManager = 'nulla';
    $request->key = 'debitis';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'neque';
    $request->quotaUser = 'eos';
    $request->region = 'nam';
    $request->requestId = 'ea';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'eos';
    $request->userIp = 'laboriosam';

    $requestSecurity = new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroupManagers->computeRegionInstanceGroupManagersUpdatePerInstanceConfigs($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
