# projects

### Available Operations

* [redisProjectsLocationsInstancesCreate](#redisprojectslocationsinstancescreate) - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [redisProjectsLocationsInstancesExport](#redisprojectslocationsinstancesexport) - Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [redisProjectsLocationsInstancesFailover](#redisprojectslocationsinstancesfailover) - Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
* [redisProjectsLocationsInstancesGetAuthString](#redisprojectslocationsinstancesgetauthstring) - Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.
* [redisProjectsLocationsInstancesImport](#redisprojectslocationsinstancesimport) - Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [redisProjectsLocationsInstancesList](#redisprojectslocationsinstanceslist) - Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
* [redisProjectsLocationsInstancesPatch](#redisprojectslocationsinstancespatch) - Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [redisProjectsLocationsInstancesRescheduleMaintenance](#redisprojectslocationsinstancesreschedulemaintenance) - Reschedule maintenance for a given instance in a given project and location.
* [redisProjectsLocationsInstancesUpgrade](#redisprojectslocationsinstancesupgrade) - Upgrades Redis instance to the newer Redis version specified in the request.
* [redisProjectsLocationsList](#redisprojectslocationslist) - Lists information about the supported locations for this service.
* [redisProjectsLocationsOperationsCancel](#redisprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [redisProjectsLocationsOperationsDelete](#redisprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [redisProjectsLocationsOperationsGet](#redisprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [redisProjectsLocationsOperationsList](#redisprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## redisProjectsLocationsInstancesCreate

Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->alternativeLocationId = 'deleniti';
    $request->instanceInput->authEnabled = false;
    $request->instanceInput->authorizedNetwork = 'hic';
    $request->instanceInput->availableMaintenanceVersions = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->instanceInput->connectMode = InstanceConnectModeEnum::CONNECT_MODE_UNSPECIFIED;
    $request->instanceInput->customerManagedKey = 'qui';
    $request->instanceInput->displayName = 'impedit';
    $request->instanceInput->labels = [
        'esse' => 'ipsum',
        'excepturi' => 'aspernatur',
        'perferendis' => 'ad',
    ];
    $request->instanceInput->locationId = 'natus';
    $request->instanceInput->maintenancePolicy = new MaintenancePolicyInput();
    $request->instanceInput->maintenancePolicy->description = 'sed';
    $request->instanceInput->maintenancePolicy->weeklyMaintenanceWindow = [
        new WeeklyMaintenanceWindowInput(),
        new WeeklyMaintenanceWindowInput(),
        new WeeklyMaintenanceWindowInput(),
    ];
    $request->instanceInput->maintenanceSchedule = new MaintenanceScheduleInput();
    $request->instanceInput->maintenanceSchedule->canReschedule = false;
    $request->instanceInput->maintenanceVersion = 'dolor';
    $request->instanceInput->memorySizeGb = 616934;
    $request->instanceInput->name = 'May Turcotte';
    $request->instanceInput->persistenceConfig = new PersistenceConfigInput();
    $request->instanceInput->persistenceConfig->persistenceMode = PersistenceConfigPersistenceModeEnum::DISABLED;
    $request->instanceInput->persistenceConfig->rdbSnapshotPeriod = PersistenceConfigRdbSnapshotPeriodEnum::TWELVE_HOURS;
    $request->instanceInput->persistenceConfig->rdbSnapshotStartTime = 'iure';
    $request->instanceInput->readReplicasMode = InstanceReadReplicasModeEnum::READ_REPLICAS_ENABLED;
    $request->instanceInput->redisConfigs = [
        'architecto' => 'ipsa',
        'reiciendis' => 'est',
        'mollitia' => 'laborum',
    ];
    $request->instanceInput->redisVersion = 'dolores';
    $request->instanceInput->replicaCount = 210382;
    $request->instanceInput->reservedIpRange = 'corporis';
    $request->instanceInput->secondaryIpRange = 'explicabo';
    $request->instanceInput->suspensionReasons = [
        InstanceSuspensionReasonsEnum::SUSPENSION_REASON_UNSPECIFIED,
        InstanceSuspensionReasonsEnum::CUSTOMER_MANAGED_KEY_ISSUE,
        InstanceSuspensionReasonsEnum::SUSPENSION_REASON_UNSPECIFIED,
        InstanceSuspensionReasonsEnum::SUSPENSION_REASON_UNSPECIFIED,
    ];
    $request->instanceInput->tier = InstanceTierEnum::BASIC;
    $request->instanceInput->transitEncryptionMode = InstanceTransitEncryptionModeEnum::TRANSIT_ENCRYPTION_MODE_UNSPECIFIED;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->instanceId = 'architecto';
    $request->key = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->parent = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

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

## redisProjectsLocationsInstancesExport

Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExportInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesExportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsInstancesExportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->exportInstanceRequest = new ExportInstanceRequest();
    $request->exportInstanceRequest->outputConfig = new OutputConfig();
    $request->exportInstanceRequest->outputConfig->gcsDestination = new GcsDestination();
    $request->exportInstanceRequest->outputConfig->gcsDestination->uri = 'http://immediate-instructor.info';
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->fields = 'quis';
    $request->key = 'vitae';
    $request->name = 'Matt Hamill';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new RedisProjectsLocationsInstancesExportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsInstancesExport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redisProjectsLocationsInstancesFailover

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesFailoverRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FailoverInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\FailoverInstanceRequestDataProtectionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesFailoverSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsInstancesFailoverRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->failoverInstanceRequest = new FailoverInstanceRequest();
    $request->failoverInstanceRequest->dataProtectionMode = FailoverInstanceRequestDataProtectionModeEnum::DATA_PROTECTION_MODE_UNSPECIFIED;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'laborum';
    $request->key = 'quasi';
    $request->name = 'Jan Thiel';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new RedisProjectsLocationsInstancesFailoverSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsInstancesFailover($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redisProjectsLocationsInstancesGetAuthString

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesGetAuthStringRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesGetAuthStringSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsInstancesGetAuthStringRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reprehenderit';
    $request->fields = 'ut';
    $request->key = 'maiores';
    $request->name = 'Stacy Gulgowski MD';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new RedisProjectsLocationsInstancesGetAuthStringSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsInstancesGetAuthString($request, $requestSecurity);

    if ($response->instanceAuthString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redisProjectsLocationsInstancesImport

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsInstancesImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->importInstanceRequest = new ImportInstanceRequest();
    $request->importInstanceRequest->inputConfig = new InputConfig();
    $request->importInstanceRequest->inputConfig->gcsSource = new GcsSource();
    $request->importInstanceRequest->inputConfig->gcsSource->uri = 'http://repentant-minnow.name';
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'rem';
    $request->key = 'voluptates';
    $request->name = 'Dr. Casey Mayer';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new RedisProjectsLocationsInstancesImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsInstancesImport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redisProjectsLocationsInstancesList

Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'labore';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->pageSize = 397821;
    $request->pageToken = 'cupiditate';
    $request->parent = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new RedisProjectsLocationsInstancesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsInstancesList($request, $requestSecurity);

    if ($response->listInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redisProjectsLocationsInstancesPatch

Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsInstancesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceInput = new InstanceInput();
    $request->instanceInput->alternativeLocationId = 'alias';
    $request->instanceInput->authEnabled = false;
    $request->instanceInput->authorizedNetwork = 'fugit';
    $request->instanceInput->availableMaintenanceVersions = [
        'excepturi',
        'tempora',
        'facilis',
    ];
    $request->instanceInput->connectMode = InstanceConnectModeEnum::PRIVATE_SERVICE_ACCESS;
    $request->instanceInput->customerManagedKey = 'labore';
    $request->instanceInput->displayName = 'delectus';
    $request->instanceInput->labels = [
        'non' => 'eligendi',
        'sint' => 'aliquid',
    ];
    $request->instanceInput->locationId = 'provident';
    $request->instanceInput->maintenancePolicy = new MaintenancePolicyInput();
    $request->instanceInput->maintenancePolicy->description = 'necessitatibus';
    $request->instanceInput->maintenancePolicy->weeklyMaintenanceWindow = [
        new WeeklyMaintenanceWindowInput(),
        new WeeklyMaintenanceWindowInput(),
        new WeeklyMaintenanceWindowInput(),
    ];
    $request->instanceInput->maintenanceSchedule = new MaintenanceScheduleInput();
    $request->instanceInput->maintenanceSchedule->canReschedule = false;
    $request->instanceInput->maintenanceVersion = 'officia';
    $request->instanceInput->memorySizeGb = 223081;
    $request->instanceInput->name = 'Randal Parisian';
    $request->instanceInput->persistenceConfig = new PersistenceConfigInput();
    $request->instanceInput->persistenceConfig->persistenceMode = PersistenceConfigPersistenceModeEnum::RDB;
    $request->instanceInput->persistenceConfig->rdbSnapshotPeriod = PersistenceConfigRdbSnapshotPeriodEnum::TWENTY_FOUR_HOURS;
    $request->instanceInput->persistenceConfig->rdbSnapshotStartTime = 'rerum';
    $request->instanceInput->readReplicasMode = InstanceReadReplicasModeEnum::READ_REPLICAS_MODE_UNSPECIFIED;
    $request->instanceInput->redisConfigs = [
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];
    $request->instanceInput->redisVersion = 'laborum';
    $request->instanceInput->replicaCount = 881104;
    $request->instanceInput->reservedIpRange = 'non';
    $request->instanceInput->secondaryIpRange = 'occaecati';
    $request->instanceInput->suspensionReasons = [
        InstanceSuspensionReasonsEnum::CUSTOMER_MANAGED_KEY_ISSUE,
        InstanceSuspensionReasonsEnum::CUSTOMER_MANAGED_KEY_ISSUE,
    ];
    $request->instanceInput->tier = InstanceTierEnum::STANDARD_HA;
    $request->instanceInput->transitEncryptionMode = InstanceTransitEncryptionModeEnum::SERVER_AUTHENTICATION;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->fields = 'deleniti';
    $request->key = 'sapiente';
    $request->name = 'Sandy Huels';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->updateMask = 'perferendis';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new RedisProjectsLocationsInstancesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsInstancesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redisProjectsLocationsInstancesRescheduleMaintenance

Reschedule maintenance for a given instance in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesRescheduleMaintenanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RescheduleMaintenanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RescheduleMaintenanceRequestRescheduleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesRescheduleMaintenanceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsInstancesRescheduleMaintenanceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->rescheduleMaintenanceRequest = new RescheduleMaintenanceRequest();
    $request->rescheduleMaintenanceRequest->rescheduleType = RescheduleMaintenanceRequestRescheduleTypeEnum::NEXT_AVAILABLE_WINDOW;
    $request->rescheduleMaintenanceRequest->scheduleTime = 'labore';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'nobis';
    $request->key = 'eum';
    $request->name = 'Brandon Brakus V';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new RedisProjectsLocationsInstancesRescheduleMaintenanceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsInstancesRescheduleMaintenance($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redisProjectsLocationsInstancesUpgrade

Upgrades Redis instance to the newer Redis version specified in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesUpgradeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpgradeInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsInstancesUpgradeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsInstancesUpgradeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->upgradeInstanceRequest = new UpgradeInstanceRequest();
    $request->upgradeInstanceRequest->redisVersion = 'mollitia';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'eum';
    $request->key = 'dolor';
    $request->name = 'Ms. Fred Hilll';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new RedisProjectsLocationsInstancesUpgradeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsInstancesUpgrade($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redisProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'repudiandae';
    $request->filter = 'ullam';
    $request->key = 'expedita';
    $request->name = 'Kristie Spencer';
    $request->oauthToken = 'pariatur';
    $request->pageSize = 37559;
    $request->pageToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new RedisProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redisProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'maxime';
    $request->key = 'ea';
    $request->name = 'Mr. Harry Jaskolski';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new RedisProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redisProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nemo';
    $request->fields = 'voluptatibus';
    $request->key = 'perferendis';
    $request->name = 'Vincent Anderson';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new RedisProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redisProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->fields = 'quis';
    $request->key = 'nesciunt';
    $request->name = 'Dorothy Dach';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new RedisProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## redisProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RedisProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RedisProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perspiciatis';
    $request->fields = 'voluptatem';
    $request->filter = 'porro';
    $request->key = 'consequuntur';
    $request->name = 'Jeremiah Beatty';
    $request->oauthToken = 'adipisci';
    $request->pageSize = 992397;
    $request->pageToken = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new RedisProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->redisProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
