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
                    parent = "rerum";
                }};
                queryParams = new RedisProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "nobis";
                    alt = "media";
                    callback = "itaque";
                    fields = "magni";
                    instanceId = "aut";
                    key = "voluptatem";
                    oauthToken = "numquam";
                    prettyPrint = true;
                    quotaUser = "modi";
                    uploadType = "quo";
                    uploadProtocol = "qui";
                }};
                request = new InstanceInput() {{
                    alternativeLocationId = "earum";
                    authEnabled = false;
                    authorizedNetwork = "dicta";
                    availableMaintenanceVersions = new String[]() {{
                        add("autem"),
                        add("nesciunt"),
                    }};
                    connectMode = "CONNECT_MODE_UNSPECIFIED";
                    customerManagedKey = "cum";
                    displayName = "dolor";
                    labels = new java.util.HashMap<String, String>() {{
                        put("odit", "eaque");
                        put("dolorem", "dolor");
                        put("pariatur", "harum");
                    }};
                    locationId = "occaecati";
                    maintenancePolicy = new MaintenancePolicyInput() {{
                        description = "delectus";
                        weeklyMaintenanceWindow = new openapisdk.models.shared.WeeklyMaintenanceWindowInput[]() {{
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "MONDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 8433984482815583947;
                                    minutes = 162448567943149512;
                                    nanos = 625033401366000321;
                                    seconds = 3061790687917347231;
                                }};
                            }}),
                        }};
                    }};
                    maintenanceSchedule = new MaintenanceScheduleInput() {{
                        canReschedule = true;
                    }};
                    maintenanceVersion = "laborum";
                    memorySizeGb = 2493316080611463997;
                    name = "similique";
                    persistenceConfig = new PersistenceConfigInput() {{
                        persistenceMode = "RDB";
                        rdbSnapshotPeriod = "ONE_HOUR";
                        rdbSnapshotStartTime = "iusto";
                    }};
                    readReplicasMode = "READ_REPLICAS_ENABLED";
                    redisConfigs = new java.util.HashMap<String, String>() {{
                        put("inventore", "quam");
                    }};
                    redisVersion = "sit";
                    replicaCount = 7425103542181944246;
                    reservedIpRange = "est";
                    secondaryIpRange = "possimus";
                    suspensionReasons = new openapisdk.models.shared.InstanceSuspensionReasonsEnum[]() {{
                        add("SUSPENSION_REASON_UNSPECIFIED"),
                    }};
                    tier = "STANDARD_HA";
                    transitEncryptionMode = "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED";
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
* `redisProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
