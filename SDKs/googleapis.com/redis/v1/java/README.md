# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new RedisProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    instanceId = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new InstanceInput() {{
                    alternativeLocationId = "debitis";
                    authEnabled = true;
                    authorizedNetwork = "et";
                    connectMode = "PRIVATE_SERVICE_ACCESS";
                    customerManagedKey = "dolorem";
                    displayName = "et";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iste", "vitae");
                    }};
                    locationId = "totam";
                    maintenancePolicy = new MaintenancePolicyInput() {{
                        description = "dolores";
                        weeklyMaintenanceWindow = new openapisdk.models.shared.WeeklyMaintenanceWindowInput[]() {{
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "TUESDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 3706853784096366226;
                                    minutes = 2627038740284806767;
                                    nanos = 6303220950515014660;
                                    seconds = 4035568504096476779;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "FRIDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 2914295034816259174;
                                    minutes = 1395437218309923052;
                                    nanos = 6745438398739480977;
                                    seconds = 2897681629866238117;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "MONDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 5974317550424871033;
                                    minutes = 3317123977833389635;
                                    nanos = 5001958211167890979;
                                    seconds = 167566062957544642;
                                }};
                            }}),
                        }};
                    }};
                    maintenanceSchedule = new MaintenanceScheduleInput() {{
                        canReschedule = true;
                    }};
                    memorySizeGb = 1059542851699319360;
                    name = "illo";
                    persistenceConfig = new PersistenceConfigInput() {{
                        persistenceMode = "RDB";
                        rdbSnapshotPeriod = "TWENTY_FOUR_HOURS";
                        rdbSnapshotStartTime = "autem";
                    }};
                    readReplicasMode = "READ_REPLICAS_MODE_UNSPECIFIED";
                    redisConfigs = new java.util.HashMap<String, String>() {{
                        put("odio", "qui");
                    }};
                    redisVersion = "recusandae";
                    replicaCount = 7561811714888168464;
                    reservedIpRange = "ipsum";
                    secondaryIpRange = "eveniet";
                    suspensionReasons = new openapisdk.models.shared.InstanceSuspensionReasonsEnum[]() {{
                        add("SUSPENSION_REASON_UNSPECIFIED"),
                        add("CUSTOMER_MANAGED_KEY_ISSUE"),
                    }};
                    tier = "STANDARD_HA";
                    transitEncryptionMode = "DISABLED";
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
* `redisProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
