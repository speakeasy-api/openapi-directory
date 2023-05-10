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
* [computeRegionInstanceGroupManagersSetInstanceTemplate](#computeregioninstancegroupmanagerssetinstancetemplate) - Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
* [computeRegionInstanceGroupManagersSetTargetPools](#computeregioninstancegroupmanagerssettargetpools) - Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagersAbandonInstancesRequest = new RegionInstanceGroupManagersAbandonInstancesRequest();
    $request->regionInstanceGroupManagersAbandonInstancesRequest->instances = [
        'cupiditate',
    ];
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'similique';
    $request->fields = 'tenetur';
    $request->instanceGroupManager = 'error';
    $request->key = 'blanditiis';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'nulla';
    $request->quotaUser = 'culpa';
    $request->region = 'reprehenderit';
    $request->requestId = 'est';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'unde';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagersApplyUpdatesRequest = new RegionInstanceGroupManagersApplyUpdatesRequest();
    $request->regionInstanceGroupManagersApplyUpdatesRequest->allInstances = false;
    $request->regionInstanceGroupManagersApplyUpdatesRequest->instances = [
        'numquam',
        'ut',
        'fugiat',
        'facilis',
    ];
    $request->regionInstanceGroupManagersApplyUpdatesRequest->minimalAction = RegionInstanceGroupManagersApplyUpdatesRequestMinimalActionEnum::NONE;
    $request->regionInstanceGroupManagersApplyUpdatesRequest->mostDisruptiveAllowedAction = RegionInstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum::REFRESH;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'neque';
    $request->fields = 'ipsa';
    $request->instanceGroupManager = 'officiis';
    $request->key = 'ullam';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'in';
    $request->region = 'minus';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'aut';

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
use \OpenAPI\OpenAPI\Models\Shared\PerInstanceConfigStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersCreateInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersCreateInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersCreateInstancesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersCreateInstancesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagersCreateInstancesRequest = new RegionInstanceGroupManagersCreateInstancesRequest();
    $request->regionInstanceGroupManagersCreateInstancesRequest->instances = [
        new PerInstanceConfig(),
        new PerInstanceConfig(),
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repellendus';
    $request->fields = 'quo';
    $request->instanceGroupManager = 'possimus';
    $request->key = 'consectetur';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'facilis';
    $request->region = 'autem';
    $request->requestId = 'repellat';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'consectetur';

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
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'mollitia';
    $request->instanceGroupManager = 'facilis';
    $request->key = 'nostrum';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'voluptates';
    $request->region = 'recusandae';
    $request->requestId = 'quis';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'pariatur';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagersDeleteInstancesRequest = new RegionInstanceGroupManagersDeleteInstancesRequest();
    $request->regionInstanceGroupManagersDeleteInstancesRequest->instances = [
        'cum',
        'sint',
        'laborum',
    ];
    $request->regionInstanceGroupManagersDeleteInstancesRequest->skipInstancesOnValidationError = false;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'nulla';
    $request->instanceGroupManager = 'perferendis';
    $request->key = 'ullam';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'deleniti';
    $request->quotaUser = 'nisi';
    $request->region = 'repudiandae';
    $request->requestId = 'odio';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'aliquam';
    $request->userIp = 'quasi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagerDeleteInstanceConfigReq = new RegionInstanceGroupManagerDeleteInstanceConfigReq();
    $request->regionInstanceGroupManagerDeleteInstanceConfigReq->names = [
        'expedita',
        'saepe',
        'magni',
        'assumenda',
    ];
    $request->accessToken = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ea';
    $request->fields = 'assumenda';
    $request->instanceGroupManager = 'placeat';
    $request->key = 'illo';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->project = 'numquam';
    $request->quotaUser = 'adipisci';
    $request->region = 'pariatur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'doloremque';
    $request->userIp = 'doloribus';

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
    $request->accessToken = 'illo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'inventore';
    $request->fields = 'in';
    $request->instanceGroupManager = 'et';
    $request->key = 'veritatis';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'cumque';
    $request->region = 'tempore';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'itaque';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManager = new InstanceGroupManager();
    $request->instanceGroupManager->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager->baseInstanceName = 'hic';
    $request->instanceGroupManager->creationTimestamp = 'esse';
    $request->instanceGroupManager->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager->currentActions->abandoning = 167765;
    $request->instanceGroupManager->currentActions->creating = 93508;
    $request->instanceGroupManager->currentActions->creatingWithoutRetries = 93386;
    $request->instanceGroupManager->currentActions->deleting = 556233;
    $request->instanceGroupManager->currentActions->none = 299357;
    $request->instanceGroupManager->currentActions->recreating = 6540;
    $request->instanceGroupManager->currentActions->refreshing = 469043;
    $request->instanceGroupManager->currentActions->restarting = 459634;
    $request->instanceGroupManager->currentActions->resuming = 157014;
    $request->instanceGroupManager->currentActions->starting = 980411;
    $request->instanceGroupManager->currentActions->stopping = 241568;
    $request->instanceGroupManager->currentActions->suspending = 140424;
    $request->instanceGroupManager->currentActions->verifying = 933299;
    $request->instanceGroupManager->description = 'dolorem';
    $request->instanceGroupManager->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::EVEN;
    $request->instanceGroupManager->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager->fingerprint = 'perspiciatis';
    $request->instanceGroupManager->id = 'pariatur';
    $request->instanceGroupManager->instanceGroup = 'facilis';
    $request->instanceGroupManager->instanceTemplate = 'officiis';
    $request->instanceGroupManager->kind = 'alias';
    $request->instanceGroupManager->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGINATED;
    $request->instanceGroupManager->name = 'Ethel Pouros';
    $request->instanceGroupManager->namedPorts = [
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager->region = 'fugiat';
    $request->instanceGroupManager->selfLink = 'perspiciatis';
    $request->instanceGroupManager->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager->statefulPolicy->preservedState->disks = [
        'dolore' => new StatefulPolicyPreservedStateDiskDevice(),
        'quas' => new StatefulPolicyPreservedStateDiskDevice(),
        'assumenda' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager->status->autoscaler = 'aliquid';
    $request->instanceGroupManager->status->isStable = false;
    $request->instanceGroupManager->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager->status->versionTarget->isReached = false;
    $request->instanceGroupManager->targetPools = [
        'facere',
        'necessitatibus',
        'fugiat',
        'eius',
    ];
    $request->instanceGroupManager->targetSize = 451593;
    $request->instanceGroupManager->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::NONE;
    $request->instanceGroupManager->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager->updatePolicy->maxSurge->calculated = 375593;
    $request->instanceGroupManager->updatePolicy->maxSurge->fixed = 537851;
    $request->instanceGroupManager->updatePolicy->maxSurge->percent = 50405;
    $request->instanceGroupManager->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager->updatePolicy->maxUnavailable->calculated = 969926;
    $request->instanceGroupManager->updatePolicy->maxUnavailable->fixed = 792077;
    $request->instanceGroupManager->updatePolicy->maxUnavailable->percent = 437920;
    $request->instanceGroupManager->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::REPLACE;
    $request->instanceGroupManager->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::NONE;
    $request->instanceGroupManager->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::RECREATE;
    $request->instanceGroupManager->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::PROACTIVE;
    $request->instanceGroupManager->versions = [
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager->zone = 'dolores';
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vero';
    $request->fields = 'totam';
    $request->key = 'eos';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'consequuntur';
    $request->region = 'praesentium';
    $request->requestId = 'fugiat';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'perferendis';
    $request->userIp = 'quaerat';

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
    $request->accessToken = 'harum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'debitis';
    $request->fields = 'sint';
    $request->filter = 'beatae';
    $request->key = 'ratione';
    $request->maxResults = 609653;
    $request->oauthToken = 'qui';
    $request->orderBy = 'dolorum';
    $request->pageToken = 'distinctio';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'quaerat';
    $request->region = 'eligendi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'architecto';
    $request->userIp = 'totam';

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
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aperiam';
    $request->fields = 'blanditiis';
    $request->filter = 'reiciendis';
    $request->instanceGroupManager = 'eius';
    $request->key = 'suscipit';
    $request->maxResults = 78067;
    $request->oauthToken = 'quisquam';
    $request->orderBy = 'accusamus';
    $request->pageToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'necessitatibus';
    $request->region = 'excepturi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'ut';

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
    $request->accessToken = 'rem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'libero';
    $request->filter = 'deserunt';
    $request->instanceGroupManager = 'dolore';
    $request->key = 'nisi';
    $request->maxResults = 47255;
    $request->oauthToken = 'similique';
    $request->orderBy = 'nulla';
    $request->pageToken = 'pariatur';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'temporibus';
    $request->region = 'officiis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'non';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'doloremque';

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
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'culpa';
    $request->filter = 'animi';
    $request->instanceGroupManager = 'iste';
    $request->key = 'sunt';
    $request->maxResults = 535031;
    $request->oauthToken = 'consequuntur';
    $request->orderBy = 'laborum';
    $request->pageToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'natus';
    $request->quotaUser = 'fugiat';
    $request->region = 'sint';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'quis';

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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceGroupManager1 = new InstanceGroupManager();
    $request->instanceGroupManager1->autoHealingPolicies = [
        new InstanceGroupManagerAutoHealingPolicy(),
    ];
    $request->instanceGroupManager1->baseInstanceName = 'eligendi';
    $request->instanceGroupManager1->creationTimestamp = 'laborum';
    $request->instanceGroupManager1->currentActions = new InstanceGroupManagerActionsSummary();
    $request->instanceGroupManager1->currentActions->abandoning = 964370;
    $request->instanceGroupManager1->currentActions->creating = 968039;
    $request->instanceGroupManager1->currentActions->creatingWithoutRetries = 791743;
    $request->instanceGroupManager1->currentActions->deleting = 79349;
    $request->instanceGroupManager1->currentActions->none = 582521;
    $request->instanceGroupManager1->currentActions->recreating = 502727;
    $request->instanceGroupManager1->currentActions->refreshing = 917168;
    $request->instanceGroupManager1->currentActions->restarting = 902546;
    $request->instanceGroupManager1->currentActions->resuming = 654263;
    $request->instanceGroupManager1->currentActions->starting = 267578;
    $request->instanceGroupManager1->currentActions->stopping = 310130;
    $request->instanceGroupManager1->currentActions->suspending = 339036;
    $request->instanceGroupManager1->currentActions->verifying = 175503;
    $request->instanceGroupManager1->description = 'dignissimos';
    $request->instanceGroupManager1->distributionPolicy = new DistributionPolicy();
    $request->instanceGroupManager1->distributionPolicy->targetShape = DistributionPolicyTargetShapeEnum::BALANCED;
    $request->instanceGroupManager1->distributionPolicy->zones = [
        new DistributionPolicyZoneConfiguration(),
    ];
    $request->instanceGroupManager1->fingerprint = 'tempore';
    $request->instanceGroupManager1->id = 'maxime';
    $request->instanceGroupManager1->instanceGroup = 'possimus';
    $request->instanceGroupManager1->instanceTemplate = 'non';
    $request->instanceGroupManager1->kind = 'ut';
    $request->instanceGroupManager1->listManagedInstancesResults = InstanceGroupManagerListManagedInstancesResultsEnum::PAGELESS;
    $request->instanceGroupManager1->name = 'Rex Mayert';
    $request->instanceGroupManager1->namedPorts = [
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
    ];
    $request->instanceGroupManager1->region = 'placeat';
    $request->instanceGroupManager1->selfLink = 'porro';
    $request->instanceGroupManager1->statefulPolicy = new StatefulPolicy();
    $request->instanceGroupManager1->statefulPolicy->preservedState = new StatefulPolicyPreservedState();
    $request->instanceGroupManager1->statefulPolicy->preservedState->disks = [
        'accusantium' => new StatefulPolicyPreservedStateDiskDevice(),
        'labore' => new StatefulPolicyPreservedStateDiskDevice(),
        'voluptatum' => new StatefulPolicyPreservedStateDiskDevice(),
        'nisi' => new StatefulPolicyPreservedStateDiskDevice(),
    ];
    $request->instanceGroupManager1->status = new InstanceGroupManagerStatus();
    $request->instanceGroupManager1->status->autoscaler = 'pariatur';
    $request->instanceGroupManager1->status->isStable = false;
    $request->instanceGroupManager1->status->stateful = new InstanceGroupManagerStatusStateful();
    $request->instanceGroupManager1->status->stateful->hasStatefulConfig = false;
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs = new InstanceGroupManagerStatusStatefulPerInstanceConfigs();
    $request->instanceGroupManager1->status->stateful->perInstanceConfigs->allEffective = false;
    $request->instanceGroupManager1->status->versionTarget = new InstanceGroupManagerStatusVersionTarget();
    $request->instanceGroupManager1->status->versionTarget->isReached = false;
    $request->instanceGroupManager1->targetPools = [
        'perferendis',
        'repellendus',
        'ipsam',
        'aliquid',
    ];
    $request->instanceGroupManager1->targetSize = 833092;
    $request->instanceGroupManager1->updatePolicy = new InstanceGroupManagerUpdatePolicy();
    $request->instanceGroupManager1->updatePolicy->instanceRedistributionType = InstanceGroupManagerUpdatePolicyInstanceRedistributionTypeEnum::NONE;
    $request->instanceGroupManager1->updatePolicy->maxSurge = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxSurge->calculated = 249335;
    $request->instanceGroupManager1->updatePolicy->maxSurge->fixed = 717148;
    $request->instanceGroupManager1->updatePolicy->maxSurge->percent = 12181;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable = new FixedOrPercent();
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->calculated = 61249;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->fixed = 340572;
    $request->instanceGroupManager1->updatePolicy->maxUnavailable->percent = 367318;
    $request->instanceGroupManager1->updatePolicy->minimalAction = InstanceGroupManagerUpdatePolicyMinimalActionEnum::NONE;
    $request->instanceGroupManager1->updatePolicy->mostDisruptiveAllowedAction = InstanceGroupManagerUpdatePolicyMostDisruptiveAllowedActionEnum::NONE;
    $request->instanceGroupManager1->updatePolicy->replacementMethod = InstanceGroupManagerUpdatePolicyReplacementMethodEnum::SUBSTITUTE;
    $request->instanceGroupManager1->updatePolicy->type = InstanceGroupManagerUpdatePolicyTypeEnum::PROACTIVE;
    $request->instanceGroupManager1->versions = [
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
        new InstanceGroupManagerVersion(),
    ];
    $request->instanceGroupManager1->zone = 'impedit';
    $request->accessToken = 'autem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->fields = 'doloribus';
    $request->instanceGroupManagerPathParameter = 'maiores';
    $request->key = 'nihil';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'iure';
    $request->region = 'ullam';
    $request->requestId = 'aliquid';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'enim';
    $request->userIp = 'delectus';

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
use \OpenAPI\OpenAPI\Models\Shared\PerInstanceConfigStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersPatchPerInstanceConfigsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagerPatchInstanceConfigReq = new RegionInstanceGroupManagerPatchInstanceConfigReq();
    $request->regionInstanceGroupManagerPatchInstanceConfigReq->perInstanceConfigs = [
        new PerInstanceConfig(),
        new PerInstanceConfig(),
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'recusandae';
    $request->fields = 'consectetur';
    $request->instanceGroupManager = 'vero';
    $request->key = 'eius';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->project = 'sapiente';
    $request->quotaUser = 'porro';
    $request->region = 'impedit';
    $request->requestId = 'vel';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'cupiditate';
    $request->userIp = 'ab';

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
        'veniam',
        'qui',
        'aliquid',
        'sed',
    ];
    $request->accessToken = 'modi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'alias';
    $request->instanceGroupManager = 'aut';
    $request->key = 'quae';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'repudiandae';
    $request->quotaUser = 'hic';
    $request->region = 'non';
    $request->requestId = 'minima';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'animi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minus';
    $request->fields = 'minima';
    $request->instanceGroupManager = 'neque';
    $request->key = 'debitis';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'suscipit';
    $request->region = 'nostrum';
    $request->requestId = 'corrupti';
    $request->size = 487534;
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'eius';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionInstanceGroupManagersSetTemplateRequest = new RegionInstanceGroupManagersSetTemplateRequest();
    $request->regionInstanceGroupManagersSetTemplateRequest->instanceTemplate = 'magnam';
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'placeat';
    $request->fields = 'ipsam';
    $request->instanceGroupManager = 'cum';
    $request->key = 'sint';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'quod';
    $request->quotaUser = 'voluptates';
    $request->region = 'debitis';
    $request->requestId = 'non';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'perferendis';
    $request->userIp = 'mollitia';

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
    $request->regionInstanceGroupManagersSetTargetPoolsRequest->fingerprint = 'provident';
    $request->regionInstanceGroupManagersSetTargetPoolsRequest->targetPools = [
        'unde',
        'magni',
        'minus',
        'id',
    ];
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'ipsa';
    $request->instanceGroupManager = 'dolores';
    $request->key = 'nemo';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->project = 'architecto';
    $request->quotaUser = 'pariatur';
    $request->region = 'vitae';
    $request->requestId = 'magnam';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'voluptatum';

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
use \OpenAPI\OpenAPI\Models\Shared\PerInstanceConfigStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupManagersUpdatePerInstanceConfigsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupManagerUpdateInstanceConfigReq = new RegionInstanceGroupManagerUpdateInstanceConfigReq();
    $request->regionInstanceGroupManagerUpdateInstanceConfigReq->perInstanceConfigs = [
        new PerInstanceConfig(),
        new PerInstanceConfig(),
    ];
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'doloribus';
    $request->instanceGroupManager = 'mollitia';
    $request->key = 'quibusdam';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'accusantium';
    $request->region = 'commodi';
    $request->requestId = 'porro';
    $request->uploadType = 'veniam';
    $request->uploadProtocol = 'facere';
    $request->userIp = 'excepturi';

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
