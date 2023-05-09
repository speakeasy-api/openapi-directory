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
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceConnectModeEnum;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.InstanceReadReplicasModeEnum;
import org.openapis.openapi.models.shared.InstanceSuspensionReasonsEnum;
import org.openapis.openapi.models.shared.InstanceTierEnum;
import org.openapis.openapi.models.shared.InstanceTransitEncryptionModeEnum;
import org.openapis.openapi.models.shared.MaintenancePolicyInput;
import org.openapis.openapi.models.shared.MaintenanceScheduleInput;
import org.openapis.openapi.models.shared.PersistenceConfigInput;
import org.openapis.openapi.models.shared.PersistenceConfigPersistenceModeEnum;
import org.openapis.openapi.models.shared.PersistenceConfigRdbSnapshotPeriodEnum;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.WeeklyMaintenanceWindowDayEnum;
import org.openapis.openapi.models.shared.WeeklyMaintenanceWindowInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsInstancesCreateRequest req = new RedisProjectsLocationsInstancesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceInput = new InstanceInput() {{
                    alternativeLocationId = "distinctio";
                    authEnabled = false;
                    authorizedNetwork = "quibusdam";
                    availableMaintenanceVersions = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    connectMode = InstanceConnectModeEnum.DIRECT_PEERING;
                    customerManagedKey = "error";
                    displayName = "deserunt";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    locationId = "delectus";
                    maintenancePolicy = new MaintenancePolicyInput() {{
                        description = "tempora";
                        weeklyMaintenanceWindow = new org.openapis.openapi.models.shared.WeeklyMaintenanceWindowInput[]{{
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = WeeklyMaintenanceWindowDayEnum.WEDNESDAY;
                                startTime = new TimeOfDay() {{
                                    hours = 791725;
                                    minutes = 812169;
                                    nanos = 528895;
                                    seconds = 479977;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = WeeklyMaintenanceWindowDayEnum.THURSDAY;
                                startTime = new TimeOfDay() {{
                                    hours = 392785;
                                    minutes = 925597;
                                    nanos = 836079;
                                    seconds = 71036;
                                }};
                            }}),
                        }};
                    }};;
                    maintenanceSchedule = new MaintenanceScheduleInput() {{
                        canReschedule = false;
                    }};;
                    maintenanceVersion = "quis";
                    memorySizeGb = 87129;
                    name = "Christopher Hills";
                    persistenceConfig = new PersistenceConfigInput() {{
                        persistenceMode = PersistenceConfigPersistenceModeEnum.RDB;
                        rdbSnapshotPeriod = PersistenceConfigRdbSnapshotPeriodEnum.SNAPSHOT_PERIOD_UNSPECIFIED;
                        rdbSnapshotStartTime = "at";
                    }};;
                    readReplicasMode = InstanceReadReplicasModeEnum.READ_REPLICAS_ENABLED;
                    redisConfigs = new java.util.HashMap<String, String>() {{
                        put("molestiae", "quod");
                        put("quod", "esse");
                        put("totam", "porro");
                        put("dolorum", "dicta");
                    }};
                    redisVersion = "nam";
                    replicaCount = 639921;
                    reservedIpRange = "occaecati";
                    secondaryIpRange = "fugit";
                    suspensionReasons = new org.openapis.openapi.models.shared.InstanceSuspensionReasonsEnum[]{{
                        add(InstanceSuspensionReasonsEnum.CUSTOMER_MANAGED_KEY_ISSUE),
                        add(InstanceSuspensionReasonsEnum.CUSTOMER_MANAGED_KEY_ISSUE),
                        add(InstanceSuspensionReasonsEnum.CUSTOMER_MANAGED_KEY_ISSUE),
                    }};
                    tier = InstanceTierEnum.TIER_UNSPECIFIED;
                    transitEncryptionMode = InstanceTransitEncryptionModeEnum.SERVER_AUTHENTICATION;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "impedit";
                instanceId = "cum";
                key = "esse";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            RedisProjectsLocationsInstancesCreateResponse res = sdk.projects.redisProjectsLocationsInstancesCreate(req, new RedisProjectsLocationsInstancesCreateSecurity("ad", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [redisProjectsLocationsInstancesCreate](docs/projects/README.md#redisprojectslocationsinstancescreate) - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. The completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
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
