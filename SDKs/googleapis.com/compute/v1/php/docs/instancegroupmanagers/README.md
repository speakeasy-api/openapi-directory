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
* [computeInstanceGroupManagersSetInstanceTemplate](#computeinstancegroupmanagerssetinstancetemplate) - Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you run recreateInstances, run applyUpdatesToInstances, or set the group's updatePolicy.type to PROACTIVE.
* [computeInstanceGroupManagersSetTargetPools](#computeinstancegroupmanagerssettargetpools) - Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
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
        'facilis',
        'deserunt',
        'nisi',
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illo';
    $request->fields = 'iure';
    $request->instanceGroupManager = 'incidunt';
    $request->key = 'eveniet';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'asperiores';
    $request->requestId = 'veniam';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'eum';
    $request->zone = 'deserunt';

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
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'architecto';
    $request->fields = 'expedita';
    $request->filter = 'quisquam';
    $request->includeAllScopes = false;
    $request->key = 'praesentium';
    $request->maxResults = 708075;
    $request->oauthToken = 'assumenda';
    $request->orderBy = 'repudiandae';
    $request->pageToken = 'maiores';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'commodi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'nam';

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
        'quod',
    ];
    $request->instanceGroupManagersApplyUpdatesRequest->minimalAction = InstanceGroupManagersApplyUpdatesRequestMinimalActionEnum::NONE;
    $request->instanceGroupManagersApplyUpdatesRequest->mostDisruptiveAllowedAction = InstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum::NONE;
    $request->accessToken = 'ad';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'id';
    $request->instanceGroupManager = 'atque';
    $request->key = 'quaerat';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->quotaUser = 'quam';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'iure';
    $request->zone = 'deleniti';

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
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'illum';
    $request->instanceGroupManager = 'sit';
    $request->key = 'molestias';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'voluptas';
    $request->requestId = 'maiores';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'vel';
    $request->userIp = 'delectus';
    $request->zone = 'accusamus';

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
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusantium';
    $request->fields = 'voluptates';
    $request->instanceGroupManager = 'provident';
    $request->key = 'maiores';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->project = 'numquam';
    $request->quotaUser = 'non';
    $request->requestId = 'cum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'dolores';
    $request->userIp = 'enim';
    $request->zone = 'nihil';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManagersDeleteInstancesRequest = new InstanceGroupManagersDeleteInstancesRequest();
    $request->instanceGroupManagersDeleteInstancesRequest->instances = [
        'excepturi',
        'eos',
        'quisquam',
    ];
    $request->instanceGroupManagersDeleteInstancesRequest->skipInstancesOnValidationError = false;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'quibusdam';
    $request->instanceGroupManager = 'est';
    $request->key = 'commodi';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'dicta';
    $request->requestId = 'recusandae';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'id';
    $request->userIp = 'odit';
    $request->zone = 'inventore';

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
        'explicabo',
        'ullam',
        'atque',
    ];
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'similique';
    $request->instanceGroupManager = 'iste';
    $request->key = 'eveniet';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->project = 'animi';
    $request->quotaUser = 'labore';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'quam';
    $request->zone = 'nulla';

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
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'quaerat';
    $request->instanceGroupManager = 'excepturi';
    $request->key = 'aliquid';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->project = 'voluptatem';
    $request->quotaUser = 'illum';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'culpa';
    $request->userIp = 'dicta';
    $request->zone = 'atque';

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
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerActionsSummary;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyTargetShapeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyZoneConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerListManagedInstancesResultsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamedPort;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicy;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedState;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateDiskDevice;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatus;
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
    $request->instanceGroupManager->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager->baseInstanceName = 'quisquam';
    $request->instanceGroupManager->creationTimestamp = 'atque';
    $request->instanceGroupManager->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager->currentActions->abandoning = 472190;
    $request->instanceGroupManager->currentActions->creating = 631904;
    $request->instanceGroupManager->currentActions->creatingWithoutRetries = 837739;
    $request->instanceGroupManager->currentActions->deleting = 955913;
    $request->instanceGroupManager->currentActions->none = 322849;
    $request->instanceGroupManager->currentActions->recreating = 585051;
    $request->instanceGroupManager->currentActions->refreshing = 383196;
    $request->instanceGroupManager->currentActions->restarting = 967401;
    $request->instanceGroupManager->currentActions->resuming = 832135;
    $request->instanceGroupManager->currentActions->starting = 961607;
    $request->instanceGroupManager->currentActions->stopping = 67631;
    $request->instanceGroupManager->currentActions->suspending = 650200;
    $request->instanceGroupManager->currentActions->verifying = 820423;
    $request->instanceGroupManager->description = 'praesentium';
    $request->instanceGroupManager->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::ANY;
    $request->instanceGroupManager->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager->fingerprint = 'animi';
    $request->instanceGroupManager->id = 'debitis';
    $request->instanceGroupManager->instanceGroup = 'voluptatum';
    $request->instanceGroupManager->instanceTemplate = 'voluptatem';
    $request->instanceGroupManager->kind = 'quisquam';
    $request->instanceGroupManager->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGELESS;
    $request->instanceGroupManager->name = 'Juan Mayer';
    $request->instanceGroupManager->namedPorts = [
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager->region = 'tempore';
    $request->instanceGroupManager->selfLink = 'officia';
    $request->instanceGroupManager->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager->statefulPolicy->preservedState->disks = [
        'unde' => new StatefulPolicyPreservedStateDiskDevice(),
        'quas' => new StatefulPolicyPreservedStateDiskDevice(),
        'laboriosam' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager->status->autoscaler = 'ducimus';
    $request->instanceGroupManager->status->isStable = false;
    $request->instanceGroupManager->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager->status->versionTarget->isReached = false;
    $request->instanceGroupManager->targetPools = [
        'sapiente',
        'deserunt',
        'dolor',
    ];
    $request->instanceGroupManager->targetSize = 940951;
    $request->instanceGroupManager->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::NONE;
    $request->instanceGroupManager->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager->updatePolicy->maxSurge->calculated = 575634;
    $request->instanceGroupManager->updatePolicy->maxSurge->fixed = 418787;
    $request->instanceGroupManager->updatePolicy->maxSurge->percent = 614368;
    $request->instanceGroupManager->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager->updatePolicy->maxUnavailable->calculated = 586556;
    $request->instanceGroupManager->updatePolicy->maxUnavailable->fixed = 67855;
    $request->instanceGroupManager->updatePolicy->maxUnavailable->percent = 683783;
    $request->instanceGroupManager->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::RESTART;
    $request->instanceGroupManager->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::NONE;
    $request->instanceGroupManager->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::SUBSTITUTE;
    $request->instanceGroupManager->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::PROACTIVE;
    $request->instanceGroupManager->versions = [
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager->zone = 'repudiandae';
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'autem';
    $request->fields = 'vitae';
    $request->key = 'numquam';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'quos';
    $request->requestId = 'minus';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'error';
    $request->userIp = 'reprehenderit';
    $request->zone = 'reprehenderit';

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
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->fields = 'qui';
    $request->filter = 'delectus';
    $request->key = 'exercitationem';
    $request->maxResults = 217552;
    $request->oauthToken = 'laboriosam';
    $request->orderBy = 'doloremque';
    $request->pageToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'voluptatum';
    $request->quotaUser = 'debitis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'a';
    $request->uploadProtocol = 'itaque';
    $request->userIp = 'eveniet';
    $request->zone = 'repellat';

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
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illo';
    $request->fields = 'veniam';
    $request->filter = 'sed';
    $request->instanceGroupManager = 'necessitatibus';
    $request->key = 'possimus';
    $request->maxResults = 491784;
    $request->oauthToken = 'itaque';
    $request->orderBy = 'explicabo';
    $request->pageToken = 'ullam';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'delectus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'sunt';
    $request->zone = 'ullam';

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
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'est';
    $request->filter = 'in';
    $request->instanceGroupManager = 'illo';
    $request->key = 'voluptate';
    $request->maxResults = 5494;
    $request->oauthToken = 'delectus';
    $request->orderBy = 'incidunt';
    $request->pageToken = 'dolore';
    $request->prettyPrint = false;
    $request->project = 'nemo';
    $request->quotaUser = 'est';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'maxime';
    $request->userIp = 'delectus';
    $request->zone = 'laboriosam';

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
    $request->accessToken = 'quam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'repellat';
    $request->filter = 'cupiditate';
    $request->instanceGroupManager = 'soluta';
    $request->key = 'tempore';
    $request->maxResults = 636190;
    $request->oauthToken = 'fugiat';
    $request->orderBy = 'inventore';
    $request->pageToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'sapiente';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'ut';
    $request->userIp = 'nesciunt';
    $request->zone = 'ab';

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
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerAutoHealingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerActionsSummary;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyTargetShapeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DistributionPolicyZoneConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerListManagedInstancesResultsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NamedPort;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicy;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedState;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateDiskDevice;
use \OpenAPI\OpenAPI\Models\Shared\StatefulPolicyPreservedStateDiskDeviceAutoDeleteEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceGroupManagerStatus;
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManager1 = new InstanceGroupManager();
    $request->instanceGroupManager1->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager1->baseInstanceName = 'quidem';
    $request->instanceGroupManager1->creationTimestamp = 'delectus';
    $request->instanceGroupManager1->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager1->currentActions->abandoning = 366324;
    $request->instanceGroupManager1->currentActions->creating = 763934;
    $request->instanceGroupManager1->currentActions->creatingWithoutRetries = 529174;
    $request->instanceGroupManager1->currentActions->deleting = 196892;
    $request->instanceGroupManager1->currentActions->none = 542807;
    $request->instanceGroupManager1->currentActions->recreating = 979706;
    $request->instanceGroupManager1->currentActions->refreshing = 714054;
    $request->instanceGroupManager1->currentActions->restarting = 702418;
    $request->instanceGroupManager1->currentActions->resuming = 516556;
    $request->instanceGroupManager1->currentActions->starting = 799236;
    $request->instanceGroupManager1->currentActions->stopping = 133076;
    $request->instanceGroupManager1->currentActions->suspending = 53869;
    $request->instanceGroupManager1->currentActions->verifying = 773455;
    $request->instanceGroupManager1->description = 'nam';
    $request->instanceGroupManager1->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager1->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::BALANCED;
    $request->instanceGroupManager1->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager1->fingerprint = 'delectus';
    $request->instanceGroupManager1->id = 'minus';
    $request->instanceGroupManager1->instanceGroup = 'ut';
    $request->instanceGroupManager1->instanceTemplate = 'distinctio';
    $request->instanceGroupManager1->kind = 'eius';
    $request->instanceGroupManager1->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGELESS;
    $request->instanceGroupManager1->name = 'Elvira Marquardt';
    $request->instanceGroupManager1->namedPorts = [
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager1->region = 'eos';
    $request->instanceGroupManager1->selfLink = 'amet';
    $request->instanceGroupManager1->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager1->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager1->statefulPolicy->preservedState->disks = [
        'porro' => new StatefulPolicyPreservedStateDiskDevice(),
        'occaecati' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager1->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager1->status->autoscaler = 'reiciendis';
    $request->instanceGroupManager1->status->isStable = false;
    $request->instanceGroupManager1->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager1->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager1->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager1->status->versionTarget->isReached = false;
    $request->instanceGroupManager1->targetPools = [
        'tempore',
        'in',
    ];
    $request->instanceGroupManager1->targetSize = 609864;
    $request->instanceGroupManager1->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager1->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::PROACTIVE;
    $request->instanceGroupManager1->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxSurge->calculated = 950337;
    $request->instanceGroupManager1->updatePolicy->maxSurge->fixed = 923879;
    $request->instanceGroupManager1->updatePolicy->maxSurge->percent = 711572;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->calculated = 481307;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->fixed = 456473;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->percent = 687352;
    $request->instanceGroupManager1->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REFRESH;
    $request->instanceGroupManager1->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::RESTART;
    $request->instanceGroupManager1->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::RECREATE;
    $request->instanceGroupManager1->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::PROACTIVE;
    $request->instanceGroupManager1->versions = [
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager1->zone = 'dolore';
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maiores';
    $request->fields = 'cupiditate';
    $request->instanceGroupManagerPathParameter = 'illo';
    $request->key = 'saepe';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'eaque';
    $request->quotaUser = 'ex';
    $request->requestId = 'eveniet';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'deleniti';
    $request->userIp = 'provident';
    $request->zone = 'aut';

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
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'odio';
    $request->instanceGroupManager = 'nostrum';
    $request->key = 'maiores';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'earum';
    $request->requestId = 'minima';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'nesciunt';
    $request->zone = 'corrupti';

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
        'sequi',
        'maxime',
        'numquam',
    ];
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'autem';
    $request->fields = 'adipisci';
    $request->instanceGroupManager = 'sunt';
    $request->key = 'rerum';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'provident';
    $request->quotaUser = 'necessitatibus';
    $request->requestId = 'fugit';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'optio';
    $request->userIp = 'eveniet';
    $request->zone = 'fugiat';

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
    $request->accessToken = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'repellendus';
    $request->instanceGroupManager = 'facilis';
    $request->key = 'molestias';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'accusantium';
    $request->requestId = 'maiores';
    $request->size = 390230;
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'expedita';
    $request->zone = 'hic';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManagersSetInstanceTemplateRequest = new InstanceGroupManagersSetInstanceTemplateRequest();
    $request->instanceGroupManagersSetInstanceTemplateRequest->instanceTemplate = 'vitae';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'molestiae';
    $request->instanceGroupManager = 'nam';
    $request->key = 'aperiam';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'asperiores';
    $request->requestId = 'at';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'quam';
    $request->userIp = 'deleniti';
    $request->zone = 'rem';

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
    $request->instanceGroupManagersSetTargetPoolsRequest->fingerprint = 'eos';
    $request->instanceGroupManagersSetTargetPoolsRequest->targetPools = [
        'sunt',
        'blanditiis',
    ];
    $request->accessToken = 'iste';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'distinctio';
    $request->fields = 'incidunt';
    $request->instanceGroupManager = 'labore';
    $request->key = 'blanditiis';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'sapiente';
    $request->requestId = 'quis';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'consectetur';
    $request->zone = 'asperiores';

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
        new PerInstanceConfig(),
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'asperiores';
    $request->fields = 'quasi';
    $request->instanceGroupManager = 'consequuntur';
    $request->key = 'nemo';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'labore';
    $request->requestId = 'veritatis';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'itaque';
    $request->zone = 'error';

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
