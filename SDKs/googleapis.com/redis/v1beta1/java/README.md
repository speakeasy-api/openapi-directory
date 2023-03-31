# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreatePathParams;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateQueryParams;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.shared.InstanceConnectModeEnum;
import org.openapis.openapi.models.shared.InstanceReadReplicasModeEnum;
import org.openapis.openapi.models.shared.InstanceSuspensionReasonsEnum;
import org.openapis.openapi.models.shared.InstanceTierEnum;
import org.openapis.openapi.models.shared.InstanceTransitEncryptionModeEnum;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.PersistenceConfigPersistenceModeEnum;
import org.openapis.openapi.models.shared.PersistenceConfigRdbSnapshotPeriodEnum;
import org.openapis.openapi.models.shared.PersistenceConfigInput;
import org.openapis.openapi.models.shared.MaintenanceScheduleInput;
import org.openapis.openapi.models.shared.MaintenancePolicyInput;
import org.openapis.openapi.models.shared.WeeklyMaintenanceWindowDayEnum;
import org.openapis.openapi.models.shared.WeeklyMaintenanceWindowInput;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsInstancesCreateRequest req = new RedisProjectsLocationsInstancesCreateRequest() {{
                security = new RedisProjectsLocationsInstancesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RedisProjectsLocationsInstancesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new RedisProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    instanceId = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new InstanceInput() {{
                    alternativeLocationId = "iure";
                    authEnabled = false;
                    authorizedNetwork = "magnam";
                    availableMaintenanceVersions = new String[]{{
                        add("ipsa"),
                        add("delectus"),
                        add("tempora"),
                        add("suscipit"),
                    }};
                    connectMode = "DIRECT_PEERING";
                    customerManagedKey = "minus";
                    displayName = "placeat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iusto", "excepturi");
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                    }};
                    locationId = "quis";
                    maintenancePolicy = new MaintenancePolicyInput() {{
                        description = "veritatis";
                        weeklyMaintenanceWindow = new org.openapis.openapi.models.shared.WeeklyMaintenanceWindowInput[]{{
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "DAY_OF_WEEK_UNSPECIFIED";
                                startTime = new TimeOfDay() {{
                                    hours = 368241;
                                    minutes = 832620;
                                    nanos = 957156;
                                    seconds = 778157;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "MONDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 870013;
                                    minutes = 870088;
                                    nanos = 978619;
                                    seconds = 473608;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "SATURDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 800911;
                                    minutes = 461479;
                                    nanos = 520478;
                                    seconds = 780529;
                                }};
                            }}),
                        }};
                    }};
                    maintenanceSchedule = new MaintenanceScheduleInput() {{
                        canReschedule = false;
                    }};
                    maintenanceVersion = "dolorum";
                    memorySizeGb = 118274;
                    name = "nam";
                    persistenceConfig = new PersistenceConfigInput() {{
                        persistenceMode = "DISABLED";
                        rdbSnapshotPeriod = "SIX_HOURS";
                        rdbSnapshotStartTime = "fugit";
                    }};
                    readReplicasMode = "READ_REPLICAS_DISABLED";
                    redisConfigs = new java.util.HashMap<String, String>() {{
                        put("optio", "totam");
                        put("beatae", "commodi");
                        put("molestiae", "modi");
                        put("qui", "impedit");
                    }};
                    redisVersion = "cum";
                    replicaCount = 456150;
                    reservedIpRange = "ipsum";
                    secondaryIpRange = "excepturi";
                    suspensionReasons = new org.openapis.openapi.models.shared.InstanceSuspensionReasonsEnum[]{{
                        add("SUSPENSION_REASON_UNSPECIFIED"),
                    }};
                    tier = "TIER_UNSPECIFIED";
                    transitEncryptionMode = "SERVER_AUTHENTICATION";
                }};
            }};            

            RedisProjectsLocationsInstancesCreateResponse res = sdk.projects.redisProjectsLocationsInstancesCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `redisProjectsLocationsInstancesCreate` - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. The completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
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
