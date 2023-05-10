# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [redisProjectsLocationsInstancesCreate](docs/projects/README.md#redisprojectslocationsinstancescreate) - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [redisProjectsLocationsInstancesExport](docs/projects/README.md#redisprojectslocationsinstancesexport) - Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [redisProjectsLocationsInstancesFailover](docs/projects/README.md#redisprojectslocationsinstancesfailover) - Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
* [redisProjectsLocationsInstancesGetAuthString](docs/projects/README.md#redisprojectslocationsinstancesgetauthstring) - Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.
* [redisProjectsLocationsInstancesImport](docs/projects/README.md#redisprojectslocationsinstancesimport) - Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [redisProjectsLocationsInstancesList](docs/projects/README.md#redisprojectslocationsinstanceslist) - Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
* [redisProjectsLocationsInstancesPatch](docs/projects/README.md#redisprojectslocationsinstancespatch) - Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [redisProjectsLocationsInstancesRescheduleMaintenance](docs/projects/README.md#redisprojectslocationsinstancesreschedulemaintenance) - Reschedule maintenance for a given instance in a given project and location.
* [redisProjectsLocationsInstancesUpgrade](docs/projects/README.md#redisprojectslocationsinstancesupgrade) - Upgrades Redis instance to the newer Redis version specified in the request.
* [redisProjectsLocationsList](docs/projects/README.md#redisprojectslocationslist) - Lists information about the supported locations for this service.
* [redisProjectsLocationsOperationsCancel](docs/projects/README.md#redisprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [redisProjectsLocationsOperationsDelete](docs/projects/README.md#redisprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [redisProjectsLocationsOperationsGet](docs/projects/README.md#redisprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [redisProjectsLocationsOperationsList](docs/projects/README.md#redisprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
