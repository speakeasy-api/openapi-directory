# projects

### Available Operations

* [sqlProjectsInstancesGetDiskShrinkConfig](#sqlprojectsinstancesgetdiskshrinkconfig) - Get Disk Shrink Config for a given instance.
* [sqlProjectsInstancesPerformDiskShrink](#sqlprojectsinstancesperformdiskshrink) - Perform Disk Shrink on primary instance.
* [sqlProjectsInstancesRescheduleMaintenance](#sqlprojectsinstancesreschedulemaintenance) - Reschedules the maintenance on the given instance.
* [sqlProjectsInstancesResetReplicaSize](#sqlprojectsinstancesresetreplicasize) - Reset Replica Size to primary instance disk size.
* [sqlProjectsInstancesStartExternalSync](#sqlprojectsinstancesstartexternalsync) - Start External primary instance migration.
* [sqlProjectsInstancesVerifyExternalSyncSettings](#sqlprojectsinstancesverifyexternalsyncsettings) - Verify External primary instance external sync settings.

## sqlProjectsInstancesGetDiskShrinkConfig

Get Disk Shrink Config for a given instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesGetDiskShrinkConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesGetDiskShrinkConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesGetDiskShrinkConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesGetDiskShrinkConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlProjectsInstancesGetDiskShrinkConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'officiis';
    $request->instance = 'officiis';
    $request->key = 'accusamus';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->project = 'minima';
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new SqlProjectsInstancesGetDiskShrinkConfigSecurity();
    $requestSecurity->option1 = new SqlProjectsInstancesGetDiskShrinkConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->sqlProjectsInstancesGetDiskShrinkConfig($request, $requestSecurity);

    if ($response->sqlInstancesGetDiskShrinkConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlProjectsInstancesPerformDiskShrink

Perform Disk Shrink on primary instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesPerformDiskShrinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformDiskShrinkContext;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesPerformDiskShrinkSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesPerformDiskShrinkSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesPerformDiskShrinkSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlProjectsInstancesPerformDiskShrinkRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->performDiskShrinkContext = new PerformDiskShrinkContext();
    $request->performDiskShrinkContext->targetSizeGb = 'at';
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->fields = 'repudiandae';
    $request->instance = 'atque';
    $request->key = 'atque';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new SqlProjectsInstancesPerformDiskShrinkSecurity();
    $requestSecurity->option1 = new SqlProjectsInstancesPerformDiskShrinkSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->sqlProjectsInstancesPerformDiskShrink($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlProjectsInstancesRescheduleMaintenance

Reschedules the maintenance on the given instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesRescheduleMaintenanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlInstancesRescheduleMaintenanceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Reschedule;
use \OpenAPI\OpenAPI\Models\Shared\RescheduleRescheduleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesRescheduleMaintenanceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesRescheduleMaintenanceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesRescheduleMaintenanceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlProjectsInstancesRescheduleMaintenanceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sqlInstancesRescheduleMaintenanceRequestBody = new SqlInstancesRescheduleMaintenanceRequestBody();
    $request->sqlInstancesRescheduleMaintenanceRequestBody->reschedule = new Reschedule();
    $request->sqlInstancesRescheduleMaintenanceRequestBody->reschedule->rescheduleType = RescheduleRescheduleTypeEnum::RESCHEDULE_TYPE_UNSPECIFIED;
    $request->sqlInstancesRescheduleMaintenanceRequestBody->reschedule->scheduleTime = 'repudiandae';
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'beatae';
    $request->fields = 'dolores';
    $request->instance = 'enim';
    $request->key = 'laboriosam';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'molestias';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new SqlProjectsInstancesRescheduleMaintenanceSecurity();
    $requestSecurity->option1 = new SqlProjectsInstancesRescheduleMaintenanceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->sqlProjectsInstancesRescheduleMaintenance($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlProjectsInstancesResetReplicaSize

Reset Replica Size to primary instance disk size.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesResetReplicaSizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesResetReplicaSizeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesResetReplicaSizeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesResetReplicaSizeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlProjectsInstancesResetReplicaSizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'officiis' => 'perspiciatis',
        'in' => 'adipisci',
        'eveniet' => 'occaecati',
    ];
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->fields = 'quis';
    $request->instance = 'reprehenderit';
    $request->key = 'error';
    $request->oauthToken = 'illo';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'quidem';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'non';

    $requestSecurity = new SqlProjectsInstancesResetReplicaSizeSecurity();
    $requestSecurity->option1 = new SqlProjectsInstancesResetReplicaSizeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->sqlProjectsInstancesResetReplicaSize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlProjectsInstancesStartExternalSync

Start External primary instance migration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesStartExternalSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlInstancesStartExternalSyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\MySqlSyncConfig;
use \OpenAPI\OpenAPI\Models\Shared\SyncFlags;
use \OpenAPI\OpenAPI\Models\Shared\SqlInstancesStartExternalSyncRequestSyncModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesStartExternalSyncSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesStartExternalSyncSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesStartExternalSyncSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlProjectsInstancesStartExternalSyncRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sqlInstancesStartExternalSyncRequest = new SqlInstancesStartExternalSyncRequest();
    $request->sqlInstancesStartExternalSyncRequest->mysqlSyncConfig = new MySqlSyncConfig();
    $request->sqlInstancesStartExternalSyncRequest->mysqlSyncConfig->initialSyncFlags = [
        new SyncFlags(),
    ];
    $request->sqlInstancesStartExternalSyncRequest->skipVerification = false;
    $request->sqlInstancesStartExternalSyncRequest->syncMode = SqlInstancesStartExternalSyncRequestSyncModeEnum::ONLINE;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quae';
    $request->fields = 'molestiae';
    $request->instance = 'eveniet';
    $request->key = 'qui';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->project = 'iure';
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new SqlProjectsInstancesStartExternalSyncSecurity();
    $requestSecurity->option1 = new SqlProjectsInstancesStartExternalSyncSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->sqlProjectsInstancesStartExternalSync($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sqlProjectsInstancesVerifyExternalSyncSettings

Verify External primary instance external sync settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesVerifyExternalSyncSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlInstancesVerifyExternalSyncSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MySqlSyncConfig;
use \OpenAPI\OpenAPI\Models\Shared\SyncFlags;
use \OpenAPI\OpenAPI\Models\Shared\SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesVerifyExternalSyncSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SqlProjectsInstancesVerifyExternalSyncSettingsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sqlInstancesVerifyExternalSyncSettingsRequest = new SqlInstancesVerifyExternalSyncSettingsRequest();
    $request->sqlInstancesVerifyExternalSyncSettingsRequest->mysqlSyncConfig = new MySqlSyncConfig();
    $request->sqlInstancesVerifyExternalSyncSettingsRequest->mysqlSyncConfig->initialSyncFlags = [
        new SyncFlags(),
        new SyncFlags(),
        new SyncFlags(),
    ];
    $request->sqlInstancesVerifyExternalSyncSettingsRequest->syncMode = SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum::ONLINE;
    $request->sqlInstancesVerifyExternalSyncSettingsRequest->verifyConnectionOnly = false;
    $request->sqlInstancesVerifyExternalSyncSettingsRequest->verifyReplicationOnly = false;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellat';
    $request->fields = 'alias';
    $request->instance = 'corporis';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new SqlProjectsInstancesVerifyExternalSyncSettingsSecurity();
    $requestSecurity->option1 = new SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->sqlProjectsInstancesVerifyExternalSyncSettings($request, $requestSecurity);

    if ($response->sqlInstancesVerifyExternalSyncSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
