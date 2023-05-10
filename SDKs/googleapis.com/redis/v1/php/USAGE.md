<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConnectModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MaintenancePolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\WeeklyMaintenanceWindowInput;
use \OpenAPI\OpenAPI\Models\Shared\WeeklyMaintenanceWindowDayEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\MaintenanceScheduleInput;
use \OpenAPI\OpenAPI\Models\Shared\PersistenceConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\PersistenceConfigPersistenceModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PersistenceConfigRdbSnapshotPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceReadReplicasModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceSuspensionReasonsEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTransitEncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->alternativeLocationId = 'provident';
    $request->instanceInput->authEnabled = false;
    $request->instanceInput->authorizedNetwork = 'distinctio';
    $request->instanceInput->availableMaintenanceVersions = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->instanceInput->connectMode = InstanceConnectModeEnum::DIRECT_PEERING;
    $request->instanceInput->customerManagedKey = 'error';
    $request->instanceInput->displayName = 'deserunt';
    $request->instanceInput->labels = [
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->instanceInput->locationId = 'delectus';
    $request->instanceInput->maintenancePolicy = new MaintenancePolicyInput();
    $request->instanceInput->maintenancePolicy->description = 'tempora';
    $request->instanceInput->maintenancePolicy->weeklyMaintenanceWindow = [
        new WeeklyMaintenanceWindowInput(),
        new WeeklyMaintenanceWindowInput(),
    ];
    $request->instanceInput->maintenanceSchedule = new MaintenanceScheduleInput();
    $request->instanceInput->maintenanceSchedule->canReschedule = false;
    $request->instanceInput->maintenanceVersion = 'molestiae';
    $request->instanceInput->memorySizeGb = 791725;
    $request->instanceInput->name = 'Ken Kshlerin';
    $request->instanceInput->persistenceConfig = new PersistenceConfigInput();
    $request->instanceInput->persistenceConfig->persistenceMode = PersistenceConfigPersistenceModeEnum::RDB;
    $request->instanceInput->persistenceConfig->rdbSnapshotPeriod = PersistenceConfigRdbSnapshotPeriodEnum::TWENTY_FOUR_HOURS;
    $request->instanceInput->persistenceConfig->rdbSnapshotStartTime = 'ab';
    $request->instanceInput->readReplicasMode = InstanceReadReplicasModeEnum::READ_REPLICAS_DISABLED;
    $request->instanceInput->redisConfigs = [
        'deserunt' => 'perferendis',
    ];
    $request->instanceInput->redisVersion = 'ipsam';
    $request->instanceInput->replicaCount = 832620;
    $request->instanceInput->reservedIpRange = 'sapiente';
    $request->instanceInput->secondaryIpRange = 'quo';
    $request->instanceInput->suspensionReasons = [
        InstanceSuspensionReasonsEnum::CUSTOMER_MANAGED_KEY_ISSUE,
    ];
    $request->instanceInput->tier = InstanceTierEnum::STANDARD_HA;
    $request->instanceInput->transitEncryptionMode = InstanceTransitEncryptionModeEnum::DISABLED;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'esse';
    $request->instanceId = 'totam';
    $request->key = 'porro';
    $request->oauthToken = 'dolorum';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new RedisProjectsLocationsInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsInstancesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->