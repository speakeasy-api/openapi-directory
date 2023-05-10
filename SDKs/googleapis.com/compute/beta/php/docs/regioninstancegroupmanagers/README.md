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
* [computeRegionInstanceGroupManagersSetAutoHealingPolicies](#computeregioninstancegroupmanagerssetautohealingpolicies) - Modifies the autohealing policy for the instances in this managed instance group. [Deprecated] This method is deprecated. Use regionInstanceGroupManagers.patch instead.
* [computeRegionInstanceGroupManagersSetInstanceTemplate](#computeregioninstancegroupmanagerssetinstancetemplate) - Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
* [computeRegionInstanceGroupManagersSetTargetPools](#computeregioninstancegroupmanagerssettargetpools) - Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
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
        'dolor',
    ];
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ut';
    $request->fields = 'exercitationem';
    $request->instanceGroupManager = 'sit';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->project = 'accusantium';
    $request->quotaUser = 'voluptates';
    $request->region = 'consectetur';
    $request->requestId = 'occaecati';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'quam';
    $request->userIp = 'saepe';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagersApplyUpdatesRequest = new RegionInstanceGroupManagersApplyUpdatesRequest();
    $request->regionInstanceGroupManagersApplyUpdatesRequest->allInstances = false;
    $request->regionInstanceGroupManagersApplyUpdatesRequest->instances = [
        'itaque',
    ];
    $request->regionInstanceGroupManagersApplyUpdatesRequest->minimalAction = RegionInstanceGroupManagersApplyUpdatesRequestMinimalActionEnum::RESTART;
    $request->regionInstanceGroupManagersApplyUpdatesRequest->mostDisruptiveAllowedAction = RegionInstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum::REPLACE;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'numquam';
    $request->instanceGroupManager = 'nisi';
    $request->key = 'voluptas';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'magni';
    $request->region = 'ipsum';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'nulla';

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
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reprehenderit';
    $request->fields = 'vero';
    $request->instanceGroupManager = 'unde';
    $request->key = 'quibusdam';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'rem';
    $request->quotaUser = 'earum';
    $request->region = 'molestiae';
    $request->requestId = 'hic';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'sed';

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
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'ex';
    $request->instanceGroupManager = 'dolorum';
    $request->key = 'officia';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'at';
    $request->region = 'neque';
    $request->requestId = 'animi';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'repellendus';
    $request->userIp = 'ratione';

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
        'dolores',
    ];
    $request->regionInstanceGroupManagersDeleteInstancesRequest->skipInstancesOnValidationError = false;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ut';
    $request->fields = 'ullam';
    $request->instanceGroupManager = 'rem';
    $request->key = 'ipsum';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->project = 'eveniet';
    $request->quotaUser = 'atque';
    $request->region = 'reiciendis';
    $request->requestId = 'qui';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'laboriosam';

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
        'inventore',
        'aut',
        'debitis',
    ];
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsam';
    $request->fields = 'reiciendis';
    $request->instanceGroupManager = 'repellendus';
    $request->key = 'cumque';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'ipsa';
    $request->region = 'assumenda';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'necessitatibus';
    $request->userIp = 'adipisci';

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
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'dignissimos';
    $request->instanceGroupManager = 'exercitationem';
    $request->key = 'quod';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'sapiente';
    $request->quotaUser = 'quae';
    $request->region = 'blanditiis';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'molestias';
    $request->userIp = 'nostrum';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceGroupManager = new InstanceGroupManager();
    $request->instanceGroupManager->allInstancesConfig = new InstanceGroupManagerAllInstancesConfig();
    $request->instanceGroupManager->allInstancesConfig->properties = new InstancePropertiesPatch();
    $request->instanceGroupManager->allInstancesConfig->properties->labels = [
        'ducimus' => 'officiis',
        'deleniti' => 'fugit',
        'eligendi' => 'facere',
    ];
    $request->instanceGroupManager->allInstancesConfig->properties->metadata = [
        'omnis' => 'assumenda',
        'voluptatem' => 'a',
        'cumque' => 'fugit',
        'deleniti' => 'magni',
    ];
    $request->instanceGroupManager->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager->baseInstanceName = 'aliquid';
    $request->instanceGroupManager->creationTimestamp = 'ea';
    $request->instanceGroupManager->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager->currentActions->abandoning = 423566;
    $request->instanceGroupManager->currentActions->creating = 665503;
    $request->instanceGroupManager->currentActions->creatingWithoutRetries = 959885;
    $request->instanceGroupManager->currentActions->deleting = 198804;
    $request->instanceGroupManager->currentActions->none = 763693;
    $request->instanceGroupManager->currentActions->recreating = 191844;
    $request->instanceGroupManager->currentActions->refreshing = 951802;
    $request->instanceGroupManager->currentActions->restarting = 340262;
    $request->instanceGroupManager->currentActions->resuming = 342429;
    $request->instanceGroupManager->currentActions->starting = 519441;
    $request->instanceGroupManager->currentActions->stopping = 590476;
    $request->instanceGroupManager->currentActions->suspending = 716527;
    $request->instanceGroupManager->currentActions->verifying = 882689;
    $request->instanceGroupManager->description = 'est';
    $request->instanceGroupManager->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::ANY_SINGLE_ZONE;
    $request->instanceGroupManager->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager->failoverAction = InstanceGroupManagerFailoverActionEnum::NO_FAILOVER;
    $request->instanceGroupManager->fingerprint = 'vel';
    $request->instanceGroupManager->id = 'eius';
    $request->instanceGroupManager->instanceGroup = 'voluptates';
    $request->instanceGroupManager->instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy();
    $request->instanceGroupManager->instanceLifecyclePolicy->forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum::NO;
    $request->instanceGroupManager->instanceTemplate = 'beatae';
    $request->instanceGroupManager->kind = 'necessitatibus';
    $request->instanceGroupManager->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGELESS;
    $request->instanceGroupManager->name = 'Blake Lowe';
    $request->instanceGroupManager->namedPorts = [
        new NamedPort(),
    ];
    $request->instanceGroupManager->region = 'consequuntur';
    $request->instanceGroupManager->selfLink = 'officiis';
    $request->instanceGroupManager->serviceAccount = 'veniam';
    $request->instanceGroupManager->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager->statefulPolicy->preservedState->disks = [
        'neque' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager->statefulPolicy->preservedState->externalIPs = [
        'autem' => new StatefulPolicyPreservedStateNetworkIp(),
        'nulla' => new StatefulPolicyPreservedStateNetworkIp(),
        'excepturi' => new StatefulPolicyPreservedStateNetworkIp(),
        'at' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager->statefulPolicy->preservedState->internalIPs = [
        'similique' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager->status->allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig();
    $request->instanceGroupManager->status->allInstancesConfig->currentRevision = 'possimus';
    $request->instanceGroupManager->status->allInstancesConfig->effective = false;
    $request->instanceGroupManager->status->autoscaler = 'dolor';
    $request->instanceGroupManager->status->isStable = false;
    $request->instanceGroupManager->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager->status->stateful->isStateful = false;
    $request->instanceGroupManager->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager->status->versionTarget->isReached = false;
    $request->instanceGroupManager->targetPools = [
        'quod',
        'dolorem',
    ];
    $request->instanceGroupManager->targetSize = 53800;
    $request->instanceGroupManager->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::PROACTIVE;
    $request->instanceGroupManager->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager->updatePolicy->maxSurge->calculated = 582115;
    $request->instanceGroupManager->updatePolicy->maxSurge->fixed = 32836;
    $request->instanceGroupManager->updatePolicy->maxSurge->percent = 439160;
    $request->instanceGroupManager->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager->updatePolicy->maxUnavailable->calculated = 457558;
    $request->instanceGroupManager->updatePolicy->maxUnavailable->fixed = 750407;
    $request->instanceGroupManager->updatePolicy->maxUnavailable->percent = 64001;
    $request->instanceGroupManager->updatePolicy->minReadySec = 23768;
    $request->instanceGroupManager->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REPLACE;
    $request->instanceGroupManager->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::REFRESH;
    $request->instanceGroupManager->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::SUBSTITUTE;
    $request->instanceGroupManager->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::OPPORTUNISTIC;
    $request->instanceGroupManager->versions = [
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager->zone = 'sed';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'amet';
    $request->fields = 'eveniet';
    $request->key = 'autem';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'non';
    $request->region = 'rem';
    $request->requestId = 'voluptatum';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'quae';
    $request->userIp = 'quis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'officia';
    $request->filter = 'adipisci';
    $request->key = 'sit';
    $request->maxResults = 286519;
    $request->oauthToken = 'excepturi';
    $request->orderBy = 'quisquam';
    $request->pageToken = 'ipsum';
    $request->prettyPrint = false;
    $request->project = 'quod';
    $request->quotaUser = 'voluptatibus';
    $request->region = 'voluptas';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'sit';
    $request->userIp = 'explicabo';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'libero';
    $request->filter = 'qui';
    $request->instanceGroupManager = 'illo';
    $request->key = 'facilis';
    $request->maxResults = 678999;
    $request->oauthToken = 'quibusdam';
    $request->orderBy = 'provident';
    $request->pageToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'aspernatur';
    $request->region = 'nihil';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'velit';
    $request->userIp = 'doloribus';

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
    $request->accessToken = 'ex';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magni';
    $request->fields = 'animi';
    $request->filter = 'sunt';
    $request->instanceGroupManager = 'voluptatem';
    $request->key = 'saepe';
    $request->maxResults = 408698;
    $request->oauthToken = 'placeat';
    $request->orderBy = 'odit';
    $request->pageToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'quam';
    $request->quotaUser = 'atque';
    $request->region = 'saepe';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'eos';
    $request->userIp = 'enim';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cum';
    $request->fields = 'voluptatem';
    $request->filter = 'sint';
    $request->instanceGroupManager = 'consequuntur';
    $request->key = 'magni';
    $request->maxResults = 437822;
    $request->oauthToken = 'doloribus';
    $request->orderBy = 'quod';
    $request->pageToken = 'placeat';
    $request->prettyPrint = false;
    $request->project = 'numquam';
    $request->quotaUser = 'dignissimos';
    $request->region = 'natus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'nisi';
    $request->userIp = 'optio';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManager1 = new InstanceGroupManager();
    $request->instanceGroupManager1->allInstancesConfig = new InstanceGroupManagerAllInstancesConfig();
    $request->instanceGroupManager1->allInstancesConfig->properties = new InstancePropertiesPatch();
    $request->instanceGroupManager1->allInstancesConfig->properties->labels = [
        'in' => 'cum',
        'soluta' => 'impedit',
    ];
    $request->instanceGroupManager1->allInstancesConfig->properties->metadata = [
        'esse' => 'sapiente',
        'ratione' => 'praesentium',
    ];
    $request->instanceGroupManager1->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager1->baseInstanceName = 'eos';
    $request->instanceGroupManager1->creationTimestamp = 'quos';
    $request->instanceGroupManager1->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager1->currentActions->abandoning = 665056;
    $request->instanceGroupManager1->currentActions->creating = 500494;
    $request->instanceGroupManager1->currentActions->creatingWithoutRetries = 389014;
    $request->instanceGroupManager1->currentActions->deleting = 58582;
    $request->instanceGroupManager1->currentActions->none = 52016;
    $request->instanceGroupManager1->currentActions->recreating = 777563;
    $request->instanceGroupManager1->currentActions->refreshing = 319467;
    $request->instanceGroupManager1->currentActions->restarting = 538708;
    $request->instanceGroupManager1->currentActions->resuming = 848358;
    $request->instanceGroupManager1->currentActions->starting = 430651;
    $request->instanceGroupManager1->currentActions->stopping = 483363;
    $request->instanceGroupManager1->currentActions->suspending = 814893;
    $request->instanceGroupManager1->currentActions->verifying = 406701;
    $request->instanceGroupManager1->description = 'sequi';
    $request->instanceGroupManager1->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager1->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::EVEN;
    $request->instanceGroupManager1->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager1->failoverAction = InstanceGroupManagerFailoverActionEnum::UNKNOWN;
    $request->instanceGroupManager1->fingerprint = 'officia';
    $request->instanceGroupManager1->id = 'exercitationem';
    $request->instanceGroupManager1->instanceGroup = 'laboriosam';
    $request->instanceGroupManager1->instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy();
    $request->instanceGroupManager1->instanceLifecyclePolicy->forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum::YES;
    $request->instanceGroupManager1->instanceTemplate = 'aliquam';
    $request->instanceGroupManager1->kind = 'vel';
    $request->instanceGroupManager1->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGELESS;
    $request->instanceGroupManager1->name = 'Lydia Moen';
    $request->instanceGroupManager1->namedPorts = [
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager1->region = 'suscipit';
    $request->instanceGroupManager1->selfLink = 'quisquam';
    $request->instanceGroupManager1->serviceAccount = 'eaque';
    $request->instanceGroupManager1->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager1->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager1->statefulPolicy->preservedState->disks = [
        'corporis' => new StatefulPolicyPreservedStateDiskDevice(),
        'eaque' => new StatefulPolicyPreservedStateDiskDevice(),
        'dolor' => new StatefulPolicyPreservedStateDiskDevice(),
        'maiores' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->externalIPs = [
        'vel' => new StatefulPolicyPreservedStateNetworkIp(),
        'praesentium' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->internalIPs = [
        'illo' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager1->status->allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig();
    $request->instanceGroupManager1->status->allInstancesConfig->currentRevision = 'reiciendis';
    $request->instanceGroupManager1->status->allInstancesConfig->effective = false;
    $request->instanceGroupManager1->status->autoscaler = 'et';
    $request->instanceGroupManager1->status->isStable = false;
    $request->instanceGroupManager1->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager1->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager1->status->stateful->isStateful = false;
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager1->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager1->status->versionTarget->isReached = false;
    $request->instanceGroupManager1->targetPools = [
        'molestias',
        'itaque',
        'at',
        'rem',
    ];
    $request->instanceGroupManager1->targetSize = 465405;
    $request->instanceGroupManager1->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager1->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::PROACTIVE;
    $request->instanceGroupManager1->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxSurge->calculated = 185898;
    $request->instanceGroupManager1->updatePolicy->maxSurge->fixed = 519464;
    $request->instanceGroupManager1->updatePolicy->maxSurge->percent = 927771;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->calculated = 539450;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->fixed = 645115;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->percent = 951501;
    $request->instanceGroupManager1->updatePolicy->minReadySec = 632521;
    $request->instanceGroupManager1->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REPLACE;
    $request->instanceGroupManager1->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::RESTART;
    $request->instanceGroupManager1->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::SUBSTITUTE;
    $request->instanceGroupManager1->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::PROACTIVE;
    $request->instanceGroupManager1->versions = [
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager1->zone = 'necessitatibus';
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dicta';
    $request->fields = 'earum';
    $request->instanceGroupManagerPathParameter = 'magnam';
    $request->key = 'dolorem';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'ratione';
    $request->region = 'ut';
    $request->requestId = 'explicabo';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'inventore';
    $request->userIp = 'molestiae';

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
    ];
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nesciunt';
    $request->fields = 'sapiente';
    $request->instanceGroupManager = 'nisi';
    $request->key = 'explicabo';
    $request->oauthToken = 'similique';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'cupiditate';
    $request->region = 'culpa';
    $request->requestId = 'recusandae';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'necessitatibus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagersRecreateRequest = new RegionInstanceGroupManagersRecreateRequest();
    $request->regionInstanceGroupManagersRecreateRequest->instances = [
        'expedita',
        'numquam',
        'id',
    ];
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolore';
    $request->fields = 'sint';
    $request->instanceGroupManager = 'quia';
    $request->key = 'maxime';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'deleniti';
    $request->region = 'quidem';
    $request->requestId = 'mollitia';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'repellendus';
    $request->userIp = 'incidunt';

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
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'similique';
    $request->fields = 'veniam';
    $request->instanceGroupManager = 'sit';
    $request->key = 'quas';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'dolor';
    $request->region = 'rem';
    $request->requestId = 'eaque';
    $request->size = 760841;
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'animi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagersResizeAdvancedRequest = new RegionInstanceGroupManagersResizeAdvancedRequest();
    $request->regionInstanceGroupManagersResizeAdvancedRequest->noCreationRetries = false;
    $request->regionInstanceGroupManagersResizeAdvancedRequest->targetSize = 523055;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iure';
    $request->fields = 'beatae';
    $request->instanceGroupManager = 'quidem';
    $request->key = 'assumenda';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'mollitia';
    $request->region = 'ipsum';
    $request->requestId = 'quae';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'odio';
    $request->userIp = 'cum';

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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersSetAutoHealingPoliciesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagersSetAutoHealingRequest = new RegionInstanceGroupManagersSetAutoHealingRequest();
    $request->regionInstanceGroupManagersSetAutoHealingRequest->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'officia';
    $request->instanceGroupManager = 'saepe';
    $request->key = 'suscipit';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'perferendis';
    $request->region = 'deleniti';
    $request->requestId = 'totam';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'labore';
    $request->userIp = 'vitae';

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
    $request->regionInstanceGroupManagersSetTemplateRequest->instanceTemplate = 'tempore';
    $request->accessToken = 'libero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->fields = 'totam';
    $request->instanceGroupManager = 'accusantium';
    $request->key = 'ut';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'dolores';
    $request->region = 'ratione';
    $request->requestId = 'pariatur';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'adipisci';

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
    $request->regionInstanceGroupManagersSetTargetPoolsRequest->fingerprint = 'ratione';
    $request->regionInstanceGroupManagersSetTargetPoolsRequest->targetPools = [
        'delectus',
        'ratione',
    ];
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'quisquam';
    $request->instanceGroupManager = 'voluptas';
    $request->key = 'impedit';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'ducimus';
    $request->region = 'officiis';
    $request->requestId = 'iste';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'nam';
    $request->userIp = 'suscipit';

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
        'optio',
    ];
    $request->accessToken = 'minima';
    $request->alt = AltEnum::JSON;
    $request->callback = 'amet';
    $request->fields = 'quasi';
    $request->key = 'doloremque';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'iusto';
    $request->region = 'impedit';
    $request->resource = 'dolor';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'deserunt';

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
        'voluptates' => 'optio',
    ];
    $request->instanceGroupManager1->allInstancesConfig->properties->metadata = [
        'voluptatum' => 'beatae',
        'explicabo' => 'est',
        'laboriosam' => 'ea',
    ];
    $request->instanceGroupManager1->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager1->baseInstanceName = 'eius';
    $request->instanceGroupManager1->creationTimestamp = 'atque';
    $request->instanceGroupManager1->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager1->currentActions->abandoning = 601952;
    $request->instanceGroupManager1->currentActions->creating = 281164;
    $request->instanceGroupManager1->currentActions->creatingWithoutRetries = 302190;
    $request->instanceGroupManager1->currentActions->deleting = 684224;
    $request->instanceGroupManager1->currentActions->none = 530856;
    $request->instanceGroupManager1->currentActions->recreating = 927316;
    $request->instanceGroupManager1->currentActions->refreshing = 575977;
    $request->instanceGroupManager1->currentActions->restarting = 41917;
    $request->instanceGroupManager1->currentActions->resuming = 529067;
    $request->instanceGroupManager1->currentActions->starting = 333890;
    $request->instanceGroupManager1->currentActions->stopping = 10686;
    $request->instanceGroupManager1->currentActions->suspending = 468654;
    $request->instanceGroupManager1->currentActions->verifying = 348739;
    $request->instanceGroupManager1->description = 'nam';
    $request->instanceGroupManager1->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager1->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::EVEN;
    $request->instanceGroupManager1->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager1->failoverAction = InstanceGroupManagerFailoverActionEnum::NO_FAILOVER;
    $request->instanceGroupManager1->fingerprint = 'dolorem';
    $request->instanceGroupManager1->id = 'praesentium';
    $request->instanceGroupManager1->instanceGroup = 'sed';
    $request->instanceGroupManager1->instanceLifecyclePolicy = new InstanceGroupManagerInstanceLifecyclePolicy();
    $request->instanceGroupManager1->instanceLifecyclePolicy->forceUpdateOnRepair = InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum::NO;
    $request->instanceGroupManager1->instanceTemplate = 'ratione';
    $request->instanceGroupManager1->kind = 'nesciunt';
    $request->instanceGroupManager1->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGELESS;
    $request->instanceGroupManager1->name = 'Miss Ollie Rohan';
    $request->instanceGroupManager1->namedPorts = [
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager1->region = 'autem';
    $request->instanceGroupManager1->selfLink = 'autem';
    $request->instanceGroupManager1->serviceAccount = 'earum';
    $request->instanceGroupManager1->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager1->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager1->statefulPolicy->preservedState->disks = [
        'tempora' => new StatefulPolicyPreservedStateDiskDevice(),
        'nihil' => new StatefulPolicyPreservedStateDiskDevice(),
        'exercitationem' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->externalIPs = [
        'praesentium' => new StatefulPolicyPreservedStateNetworkIp(),
        'fugiat' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->statefulPolicy->preservedState->internalIPs = [
        'voluptate' => new StatefulPolicyPreservedStateNetworkIp(),
    ];
    $request->instanceGroupManager1->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager1->status->allInstancesConfig = new InstanceGroupManagerStatusAllInstancesConfig();
    $request->instanceGroupManager1->status->allInstancesConfig->currentRevision = 'et';
    $request->instanceGroupManager1->status->allInstancesConfig->effective = false;
    $request->instanceGroupManager1->status->autoscaler = 'recusandae';
    $request->instanceGroupManager1->status->isStable = false;
    $request->instanceGroupManager1->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager1->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager1->status->stateful->isStateful = false;
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager1->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager1->status->versionTarget->isReached = false;
    $request->instanceGroupManager1->targetPools = [
        'natus',
    ];
    $request->instanceGroupManager1->targetSize = 261868;
    $request->instanceGroupManager1->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager1->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::NONE;
    $request->instanceGroupManager1->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxSurge->calculated = 518593;
    $request->instanceGroupManager1->updatePolicy->maxSurge->fixed = 67982;
    $request->instanceGroupManager1->updatePolicy->maxSurge->percent = 535167;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->calculated = 982315;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->fixed = 763013;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->percent = 399359;
    $request->instanceGroupManager1->updatePolicy->minReadySec = 450405;
    $request->instanceGroupManager1->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REPLACE;
    $request->instanceGroupManager1->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::REPLACE;
    $request->instanceGroupManager1->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::RECREATE;
    $request->instanceGroupManager1->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::PROACTIVE;
    $request->instanceGroupManager1->versions = [
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager1->zone = 'delectus';
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'corporis';
    $request->instanceGroupManagerPathParameter = 'omnis';
    $request->key = 'quidem';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'minima';
    $request->region = 'assumenda';
    $request->requestId = 'aperiam';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'quidem';

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
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'praesentium';
    $request->instanceGroupManager = 'dolor';
    $request->key = 'dolorum';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'molestias';
    $request->quotaUser = 'similique';
    $request->region = 'atque';
    $request->requestId = 'mollitia';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'molestias';
    $request->userIp = 'quo';

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
