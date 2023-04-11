# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/redis/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/redis/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  RedisProjectsLocationsInstancesCreateRequest,
  RedisProjectsLocationsInstancesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  InstanceConnectModeEnum,
  InstanceReadReplicasModeEnum,
  InstanceSuspensionReasonsEnum,
  InstanceTierEnum,
  InstanceTransitEncryptionModeEnum,
  PersistenceConfigPersistenceModeEnum,
  PersistenceConfigRdbSnapshotPeriodEnum,
  WeeklyMaintenanceWindowDayEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RedisProjectsLocationsInstancesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  instanceInput: {
    alternativeLocationId: "provident",
    authEnabled: false,
    authorizedNetwork: "distinctio",
    availableMaintenanceVersions: [
      "unde",
      "nulla",
      "corrupti",
      "illum",
    ],
    connectMode: InstanceConnectModeEnum.DirectPeering,
    customerManagedKey: "error",
    displayName: "deserunt",
    labels: {
      "iure": "magnam",
      "debitis": "ipsa",
    },
    locationId: "delectus",
    maintenancePolicy: {
      description: "tempora",
      weeklyMaintenanceWindow: [
        {
          day: WeeklyMaintenanceWindowDayEnum.Wednesday,
          startTime: {
            hours: 791725,
            minutes: 812169,
            nanos: 528895,
            seconds: 479977,
          },
        },
        {
          day: WeeklyMaintenanceWindowDayEnum.Thursday,
          startTime: {
            hours: 392785,
            minutes: 925597,
            nanos: 836079,
            seconds: 71036,
          },
        },
      ],
    },
    maintenanceSchedule: {
      canReschedule: false,
    },
    maintenanceVersion: "quis",
    memorySizeGb: 87129,
    name: "deserunt",
    persistenceConfig: {
      persistenceMode: PersistenceConfigPersistenceModeEnum.PersistenceModeUnspecified,
      rdbSnapshotPeriod: PersistenceConfigRdbSnapshotPeriodEnum.OneHour,
      rdbSnapshotStartTime: "repellendus",
    },
    readReplicasMode: InstanceReadReplicasModeEnum.ReadReplicasEnabled,
    redisConfigs: {
      "odit": "at",
      "at": "maiores",
      "molestiae": "quod",
      "quod": "esse",
    },
    redisVersion: "totam",
    replicaCount: 780529,
    reservedIpRange: "dolorum",
    secondaryIpRange: "dicta",
    suspensionReasons: [
      InstanceSuspensionReasonsEnum.CustomerManagedKeyIssue,
      InstanceSuspensionReasonsEnum.CustomerManagedKeyIssue,
      InstanceSuspensionReasonsEnum.SuspensionReasonUnspecified,
    ],
    tier: InstanceTierEnum.Basic,
    transitEncryptionMode: InstanceTransitEncryptionModeEnum.Disabled,
  },
  accessToken: "optio",
  alt: AltEnum.Media,
  callback: "beatae",
  fields: "commodi",
  instanceId: "molestiae",
  key: "modi",
  oauthToken: "qui",
  parent: "impedit",
  prettyPrint: false,
  quotaUser: "cum",
  uploadType: "esse",
  uploadProtocol: "ipsum",
};

sdk.projects.redisProjectsLocationsInstancesCreate(req).then((res: RedisProjectsLocationsInstancesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `redisProjectsLocationsInstancesCreate` - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `redisProjectsLocationsInstancesExport` - Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `redisProjectsLocationsInstancesFailover` - Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
* `redisProjectsLocationsInstancesGetAuthString` - Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.
* `redisProjectsLocationsInstancesImport` - Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `redisProjectsLocationsInstancesList` - Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
* `redisProjectsLocationsInstancesPatch` - Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `redisProjectsLocationsInstancesRescheduleMaintenance` - Reschedule maintenance for a given instance in a given project and location.
* `redisProjectsLocationsInstancesUpgrade` - Upgrades Redis instance to the newer Redis version specified in the request.
* `redisProjectsLocationsList` - Lists information about the supported locations for this service.
* `redisProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `redisProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `redisProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `redisProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

