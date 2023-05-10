# projects

### Available Operations

* [baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch](#baremetalsolutionprojectslocationsinstanceprovisioningsettingsfetch) - Get instance provisioning settings for a given project. This is hidden method used by UI only.
* [baremetalsolutionProjectsLocationsInstancesCreate](#baremetalsolutionprojectslocationsinstancescreate) - Create an Instance.
* [baremetalsolutionProjectsLocationsInstancesDetachLun](#baremetalsolutionprojectslocationsinstancesdetachlun) - Detach LUN from Instance.
* [baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole](#baremetalsolutionprojectslocationsinstancesdisableinteractiveserialconsole) - Disable the interactive serial console feature on an instance.
* [baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole](#baremetalsolutionprojectslocationsinstancesenableinteractiveserialconsole) - Enable the interactive serial console feature on an instance.
* [baremetalsolutionProjectsLocationsInstancesList](#baremetalsolutionprojectslocationsinstanceslist) - List servers in a given project and location.
* [baremetalsolutionProjectsLocationsInstancesReset](#baremetalsolutionprojectslocationsinstancesreset) - Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
* [baremetalsolutionProjectsLocationsInstancesStart](#baremetalsolutionprojectslocationsinstancesstart) - Starts a server that was shutdown.
* [baremetalsolutionProjectsLocationsInstancesStop](#baremetalsolutionprojectslocationsinstancesstop) - Stop a running server.
* [baremetalsolutionProjectsLocationsList](#baremetalsolutionprojectslocationslist) - Lists information about the supported locations for this service.
* [baremetalsolutionProjectsLocationsNetworksList](#baremetalsolutionprojectslocationsnetworkslist) - List network in a given project and location.
* [baremetalsolutionProjectsLocationsNetworksListNetworkUsage](#baremetalsolutionprojectslocationsnetworkslistnetworkusage) - List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
* [baremetalsolutionProjectsLocationsNfsSharesCreate](#baremetalsolutionprojectslocationsnfssharescreate) - Create an NFS share.
* [baremetalsolutionProjectsLocationsNfsSharesList](#baremetalsolutionprojectslocationsnfsshareslist) - List NFS shares.
* [baremetalsolutionProjectsLocationsProvisioningConfigsCreate](#baremetalsolutionprojectslocationsprovisioningconfigscreate) - Create new ProvisioningConfig.
* [baremetalsolutionProjectsLocationsProvisioningConfigsSubmit](#baremetalsolutionprojectslocationsprovisioningconfigssubmit) - Submit a provisiong configuration for a given project.
* [baremetalsolutionProjectsLocationsProvisioningQuotasList](#baremetalsolutionprojectslocationsprovisioningquotaslist) - List the budget details to provision resources on a given project.
* [baremetalsolutionProjectsLocationsSshKeysCreate](#baremetalsolutionprojectslocationssshkeyscreate) - Register a public SSH key in the specified project for use with the interactive serial console feature.
* [baremetalsolutionProjectsLocationsSshKeysList](#baremetalsolutionprojectslocationssshkeyslist) - Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
* [baremetalsolutionProjectsLocationsVolumesList](#baremetalsolutionprojectslocationsvolumeslist) - List storage volumes in a given project and location.
* [baremetalsolutionProjectsLocationsVolumesLunsEvict](#baremetalsolutionprojectslocationsvolumeslunsevict) - Skips lun's cooloff and deletes it now. Lun must be in cooloff state.
* [baremetalsolutionProjectsLocationsVolumesLunsList](#baremetalsolutionprojectslocationsvolumeslunslist) - List storage volume luns for given storage volume.
* [baremetalsolutionProjectsLocationsVolumesPatch](#baremetalsolutionprojectslocationsvolumespatch) - Update details of a single storage volume.
* [baremetalsolutionProjectsLocationsVolumesRename](#baremetalsolutionprojectslocationsvolumesrename) - RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.
* [baremetalsolutionProjectsLocationsVolumesResize](#baremetalsolutionprojectslocationsvolumesresize) - Emergency Volume resize.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsCreate](#baremetalsolutionprojectslocationsvolumessnapshotscreate) - Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsDelete](#baremetalsolutionprojectslocationsvolumessnapshotsdelete) - Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsGet](#baremetalsolutionprojectslocationsvolumessnapshotsget) - Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsList](#baremetalsolutionprojectslocationsvolumessnapshotslist) - Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
* [baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot](#baremetalsolutionprojectslocationsvolumessnapshotsrestorevolumesnapshot) - Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

## baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch

Get instance provisioning settings for a given project. This is hidden method used by UI only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->location = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch($request, $requestSecurity);

    if ($response->fetchInstanceProvisioningSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsInstancesCreate

Create an Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBaremetalsolutionV2LogicalInterface;
use \OpenAPI\OpenAPI\Models\Shared\LogicalNetworkInterface;
use \OpenAPI\OpenAPI\Models\Shared\LogicalNetworkInterfaceNetworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LunInput;
use \OpenAPI\OpenAPI\Models\Shared\LunMultiprotocolTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LunStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\LunStorageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeInput;
use \OpenAPI\OpenAPI\Models\Shared\VolumePerformanceTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeSnapshotAutoDeleteBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotReservationDetail;
use \OpenAPI\OpenAPI\Models\Shared\VolumeStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeStorageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeWorkloadProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceWorkloadProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->hyperthreadingEnabled = false;
    $request->instanceInput->labels = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->instanceInput->logicalInterfaces = [
        new GoogleCloudBaremetalsolutionV2LogicalInterface(),
    ];
    $request->instanceInput->luns = [
        new LunInput(),
        new LunInput(),
    ];
    $request->instanceInput->machineType = 'veritatis';
    $request->instanceInput->name = 'Christopher Hills';
    $request->instanceInput->networkTemplate = 'quo';
    $request->instanceInput->osImage = 'odit';
    $request->instanceInput->pod = 'at';
    $request->instanceInput->volumes = [
        new VolumeInput(),
        new VolumeInput(),
        new VolumeInput(),
        new VolumeInput(),
    ];
    $request->instanceInput->workloadProfile = InstanceWorkloadProfileEnum::WORKLOAD_PROFILE_HANA;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new BaremetalsolutionProjectsLocationsInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsInstancesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsInstancesDetachLun

Detach LUN from Instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesDetachLunRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DetachLunRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsInstancesDetachLunRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->detachLunRequest = new DetachLunRequest();
    $request->detachLunRequest->lun = 'fugit';
    $request->detachLunRequest->skipReboot = false;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'totam';
    $request->instance = 'beatae';
    $request->key = 'commodi';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsInstancesDetachLun($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole

Disable the interactive serial console feature on an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
    ];
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'iste';
    $request->key = 'dolor';
    $request->name = 'Lester Welch';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole

Enable the interactive serial console feature on an instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'architecto' => 'ipsa',
        'reiciendis' => 'est',
        'mollitia' => 'laborum',
    ];
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'explicabo';
    $request->key = 'nobis';
    $request->name = 'Guadalupe Hickle';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsInstancesList

List servers in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'culpa';
    $request->filter = 'consequuntur';
    $request->key = 'repellat';
    $request->oauthToken = 'mollitia';
    $request->pageSize = 581850;
    $request->pageToken = 'numquam';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new BaremetalsolutionProjectsLocationsInstancesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsInstancesList($request, $requestSecurity);

    if ($response->listInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsInstancesReset

Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesResetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesResetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsInstancesResetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'quis' => 'vitae',
    ];
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'odit';
    $request->key = 'quo';
    $request->name = 'Mandy Hills';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new BaremetalsolutionProjectsLocationsInstancesResetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsInstancesReset($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsInstancesStart

Starts a server that was shutdown.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesStartRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesStartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsInstancesStartRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'reiciendis' => 'voluptatibus',
    ];
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->name = 'Mr. Jared Ritchie';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new BaremetalsolutionProjectsLocationsInstancesStartSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsInstancesStart($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsInstancesStop

Stop a running server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesStopRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsInstancesStopSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsInstancesStopRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'ipsum';
    $request->key = 'quidem';
    $request->name = 'Andy Streich';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new BaremetalsolutionProjectsLocationsInstancesStopSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsInstancesStop($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'enim';
    $request->filter = 'consequatur';
    $request->key = 'est';
    $request->name = 'Benjamin O'Connell';
    $request->oauthToken = 'labore';
    $request->pageSize = 264730;
    $request->pageToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new BaremetalsolutionProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsNetworksList

List network in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsNetworksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsNetworksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsNetworksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'alias';
    $request->filter = 'fugit';
    $request->key = 'dolorum';
    $request->oauthToken = 'excepturi';
    $request->pageSize = 270008;
    $request->pageToken = 'facilis';
    $request->parent = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new BaremetalsolutionProjectsLocationsNetworksListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsNetworksList($request, $requestSecurity);

    if ($response->listNetworksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsNetworksListNetworkUsage

List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'provident';
    $request->key = 'necessitatibus';
    $request->location = 'sint';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'a';

    $requestSecurity = new BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsNetworksListNetworkUsage($request, $requestSecurity);

    if ($response->listNetworkUsageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsNfsSharesCreate

Create an NFS share.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsNfsSharesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NfsShareInput;
use \OpenAPI\OpenAPI\Models\Shared\AllowedClientInput;
use \OpenAPI\OpenAPI\Models\Shared\AllowedClientMountPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\NfsShareStorageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsNfsSharesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsNfsSharesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->nfsShareInput = new NfsShareInput();
    $request->nfsShareInput->allowedClients = [
        new AllowedClientInput(),
        new AllowedClientInput(),
    ];
    $request->nfsShareInput->labels = [
        'illum' => 'maiores',
        'rerum' => 'dicta',
    ];
    $request->nfsShareInput->name = 'Blanca Schulist';
    $request->nfsShareInput->requestedSizeGib = 'laborum';
    $request->nfsShareInput->storageType = NfsShareStorageTypeEnum::HDD;
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'delectus';
    $request->oauthToken = 'quidem';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new BaremetalsolutionProjectsLocationsNfsSharesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsNfsSharesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsNfsSharesList

List NFS shares.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsNfsSharesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsNfsSharesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsNfsSharesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'nisi';
    $request->filter = 'vel';
    $request->key = 'natus';
    $request->oauthToken = 'omnis';
    $request->pageSize = 474867;
    $request->pageToken = 'perferendis';
    $request->parent = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'id';

    $requestSecurity = new BaremetalsolutionProjectsLocationsNfsSharesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsNfsSharesList($request, $requestSecurity);

    if ($response->listNfsSharesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsProvisioningConfigsCreate

Create new ProvisioningConfig.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAddress;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBaremetalsolutionV2LogicalInterface;
use \OpenAPI\OpenAPI\Models\Shared\LogicalNetworkInterface;
use \OpenAPI\OpenAPI\Models\Shared\LogicalNetworkInterfaceNetworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfigNetworkConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigBandwidthEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigServiceCidrEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntakeVlanAttachment;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\LunRange;
use \OpenAPI\OpenAPI\Models\Shared\NfsExport;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfigPerformanceTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfigProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->provisioningConfigInput = new ProvisioningConfigInput();
    $request->provisioningConfigInput->customId = 'labore';
    $request->provisioningConfigInput->email = 'Liana_Rohan@yahoo.com';
    $request->provisioningConfigInput->handoverServiceAccount = 'aspernatur';
    $request->provisioningConfigInput->instances = [
        new InstanceConfigInput(),
    ];
    $request->provisioningConfigInput->location = 'magnam';
    $request->provisioningConfigInput->networks = [
        new NetworkConfigInput(),
    ];
    $request->provisioningConfigInput->statusMessage = 'excepturi';
    $request->provisioningConfigInput->ticketId = 'ullam';
    $request->provisioningConfigInput->volumes = [
        new VolumeConfigInput(),
        new VolumeConfigInput(),
        new VolumeConfigInput(),
    ];
    $request->provisioningConfigInput->vpcScEnabled = false;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->email = 'Vivienne43@yahoo.com';
    $request->fields = 'dolor';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'odit';
    $request->parent = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsProvisioningConfigsCreate($request, $requestSecurity);

    if ($response->provisioningConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsProvisioningConfigsSubmit

Submit a provisiong configuration for a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubmitProvisioningConfigRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ProvisioningConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\NetworkAddress;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudBaremetalsolutionV2LogicalInterface;
use \OpenAPI\OpenAPI\Models\Shared\LogicalNetworkInterface;
use \OpenAPI\OpenAPI\Models\Shared\LogicalNetworkInterfaceNetworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfigNetworkConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigBandwidthEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigServiceCidrEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntakeVlanAttachment;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\LunRange;
use \OpenAPI\OpenAPI\Models\Shared\NfsExport;
use \OpenAPI\OpenAPI\Models\Shared\NfsExportPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfigPerformanceTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfigProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->submitProvisioningConfigRequestInput = new SubmitProvisioningConfigRequestInput();
    $request->submitProvisioningConfigRequestInput->email = 'Rachel.Lind10@gmail.com';
    $request->submitProvisioningConfigRequestInput->provisioningConfig = new ProvisioningConfigInput();
    $request->submitProvisioningConfigRequestInput->provisioningConfig->customId = 'architecto';
    $request->submitProvisioningConfigRequestInput->provisioningConfig->email = 'Felix_Ratke@hotmail.com';
    $request->submitProvisioningConfigRequestInput->provisioningConfig->handoverServiceAccount = 'quibusdam';
    $request->submitProvisioningConfigRequestInput->provisioningConfig->instances = [
        new InstanceConfigInput(),
    ];
    $request->submitProvisioningConfigRequestInput->provisioningConfig->location = 'saepe';
    $request->submitProvisioningConfigRequestInput->provisioningConfig->networks = [
        new NetworkConfigInput(),
        new NetworkConfigInput(),
        new NetworkConfigInput(),
        new NetworkConfigInput(),
    ];
    $request->submitProvisioningConfigRequestInput->provisioningConfig->statusMessage = 'accusantium';
    $request->submitProvisioningConfigRequestInput->provisioningConfig->ticketId = 'consequuntur';
    $request->submitProvisioningConfigRequestInput->provisioningConfig->volumes = [
        new VolumeConfigInput(),
        new VolumeConfigInput(),
        new VolumeConfigInput(),
    ];
    $request->submitProvisioningConfigRequestInput->provisioningConfig->vpcScEnabled = false;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'pariatur';
    $request->parent = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsProvisioningConfigsSubmit($request, $requestSecurity);

    if ($response->submitProvisioningConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsProvisioningQuotasList

List the budget details to provision resources on a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsProvisioningQuotasListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'quidem';
    $request->key = 'ipsam';
    $request->oauthToken = 'voluptate';
    $request->pageSize = 420075;
    $request->pageToken = 'nam';
    $request->parent = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new BaremetalsolutionProjectsLocationsProvisioningQuotasListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsProvisioningQuotasList($request, $requestSecurity);

    if ($response->listProvisioningQuotasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsSshKeysCreate

Register a public SSH key in the specified project for use with the interactive serial console feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsSshKeysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SSHKeyInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsSshKeysCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsSshKeysCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sshKeyInput = new SSHKeyInput();
    $request->sshKeyInput->publicKey = 'fugiat';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'corporis';
    $request->key = 'hic';
    $request->oauthToken = 'libero';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->sshKeyId = 'quis';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new BaremetalsolutionProjectsLocationsSshKeysCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsSshKeysCreate($request, $requestSecurity);

    if ($response->sshKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsSshKeysList

Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsSshKeysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsSshKeysListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsSshKeysListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eos';
    $request->fields = 'perferendis';
    $request->key = 'dolores';
    $request->oauthToken = 'minus';
    $request->pageSize = 463451;
    $request->pageToken = 'dolor';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new BaremetalsolutionProjectsLocationsSshKeysListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsSshKeysList($request, $requestSecurity);

    if ($response->listSSHKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsVolumesList

List storage volumes in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsVolumesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'porro';
    $request->filter = 'consequuntur';
    $request->key = 'blanditiis';
    $request->oauthToken = 'error';
    $request->pageSize = 50370;
    $request->pageToken = 'occaecati';
    $request->parent = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'earum';

    $requestSecurity = new BaremetalsolutionProjectsLocationsVolumesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsVolumesList($request, $requestSecurity);

    if ($response->listVolumesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsVolumesLunsEvict

Skips lun's cooloff and deletes it now. Lun must be in cooloff state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesLunsEvictRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesLunsEvictSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsVolumesLunsEvictRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'dolorum' => 'deleniti',
        'pariatur' => 'provident',
        'nobis' => 'libero',
    ];
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'aliquid';
    $request->key = 'dolorem';
    $request->name = 'Rosa Dibbert';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new BaremetalsolutionProjectsLocationsVolumesLunsEvictSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsVolumesLunsEvict($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsVolumesLunsList

List storage volume luns for given storage volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesLunsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesLunsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsVolumesLunsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'veritatis';
    $request->key = 'ipsa';
    $request->oauthToken = 'ipsa';
    $request->pageSize = 434417;
    $request->pageToken = 'odio';
    $request->parent = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new BaremetalsolutionProjectsLocationsVolumesLunsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsVolumesLunsList($request, $requestSecurity);

    if ($response->listLunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsVolumesPatch

Update details of a single storage volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeInput;
use \OpenAPI\OpenAPI\Models\Shared\VolumePerformanceTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeSnapshotAutoDeleteBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotReservationDetail;
use \OpenAPI\OpenAPI\Models\Shared\VolumeStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeStorageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeWorkloadProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsVolumesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->volumeInput = new VolumeInput();
    $request->volumeInput->autoGrownSizeGib = 'natus';
    $request->volumeInput->currentSizeGib = 'eos';
    $request->volumeInput->emergencySizeGib = 'atque';
    $request->volumeInput->id = '0d1ba77a-89eb-4f73-bae4-203ce5e6a95d';
    $request->volumeInput->labels = [
        'similique' => 'alias',
        'at' => 'quaerat',
        'tempora' => 'vel',
    ];
    $request->volumeInput->maxSizeGib = 'quod';
    $request->volumeInput->notes = 'officiis';
    $request->volumeInput->originallyRequestedSizeGib = 'qui';
    $request->volumeInput->performanceTier = VolumePerformanceTierEnum::VOLUME_PERFORMANCE_TIER_ASSIGNED;
    $request->volumeInput->pod = 'a';
    $request->volumeInput->remainingSpaceGib = 'esse';
    $request->volumeInput->requestedSizeGib = 'harum';
    $request->volumeInput->snapshotAutoDeleteBehavior = VolumeSnapshotAutoDeleteBehaviorEnum::DISABLED;
    $request->volumeInput->snapshotEnabled = false;
    $request->volumeInput->snapshotReservationDetail = new SnapshotReservationDetail();
    $request->volumeInput->snapshotReservationDetail->reservedSpaceGib = 'ipsum';
    $request->volumeInput->snapshotReservationDetail->reservedSpacePercent = 788740;
    $request->volumeInput->snapshotReservationDetail->reservedSpaceRemainingGib = 'tenetur';
    $request->volumeInput->snapshotReservationDetail->reservedSpaceUsedPercent = 229442;
    $request->volumeInput->snapshotSchedulePolicy = 'tempore';
    $request->volumeInput->state = VolumeStateEnum::COOL_OFF;
    $request->volumeInput->storageAggregatePool = 'numquam';
    $request->volumeInput->storageType = VolumeStorageTypeEnum::STORAGE_TYPE_UNSPECIFIED;
    $request->volumeInput->workloadProfile = VolumeWorkloadProfileEnum::WORKLOAD_PROFILE_UNSPECIFIED;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nihil';
    $request->fields = 'sit';
    $request->key = 'expedita';
    $request->name = 'Jane Kassulke';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->updateMask = 'ipsum';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new BaremetalsolutionProjectsLocationsVolumesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsVolumesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsVolumesRename

RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesRenameRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RenameVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesRenameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsVolumesRenameRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->renameVolumeRequest = new RenameVolumeRequest();
    $request->renameVolumeRequest->newVolumeId = 'maxime';
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'laborum';
    $request->key = 'totam';
    $request->name = 'Kelly Daniel';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'quam';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new BaremetalsolutionProjectsLocationsVolumesRenameSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsVolumesRename($request, $requestSecurity);

    if ($response->volume !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsVolumesResize

Emergency Volume resize.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesResizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResizeVolumeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesResizeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsVolumesResizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->resizeVolumeRequest = new ResizeVolumeRequest();
    $request->resizeVolumeRequest->sizeGib = 'neque';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->fields = 'sunt';
    $request->key = 'ullam';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'cumque';
    $request->volume = 'soluta';

    $requestSecurity = new BaremetalsolutionProjectsLocationsVolumesResizeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsVolumesResize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsVolumesSnapshotsCreate

Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VolumeSnapshotInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->volumeSnapshotInput = new VolumeSnapshotInput();
    $request->volumeSnapshotInput->description = 'et';
    $request->volumeSnapshotInput->name = 'Dale Boehm';
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'delectus';
    $request->key = 'dolorem';
    $request->oauthToken = 'dolore';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsVolumesSnapshotsCreate($request, $requestSecurity);

    if ($response->volumeSnapshot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsVolumesSnapshotsDelete

Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'itaque';
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->name = 'Sherman Wyman';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'laudantium';

    $requestSecurity = new BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsVolumesSnapshotsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsVolumesSnapshotsGet

Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesSnapshotsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesSnapshotsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsVolumesSnapshotsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quisquam';
    $request->fields = 'vero';
    $request->key = 'omnis';
    $request->name = 'Tiffany Willms';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new BaremetalsolutionProjectsLocationsVolumesSnapshotsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsVolumesSnapshotsGet($request, $requestSecurity);

    if ($response->volumeSnapshot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsVolumesSnapshotsList

Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'similique';
    $request->fields = 'facilis';
    $request->key = 'vero';
    $request->oauthToken = 'ducimus';
    $request->pageSize = 293020;
    $request->pageToken = 'quibusdam';
    $request->parent = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsVolumesSnapshotsList($request, $requestSecurity);

    if ($response->listVolumeSnapshotsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot

Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'exercitationem' => 'nulla',
        'fugit' => 'porro',
        'maiores' => 'doloribus',
        'iusto' => 'eligendi',
    ];
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officia';
    $request->fields = 'tempora';
    $request->key = 'ipsam';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'possimus';
    $request->volumeSnapshot = 'magnam';

    $requestSecurity = new BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->baremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
