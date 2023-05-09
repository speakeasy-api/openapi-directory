# projects

### Available Operations

* [redisProjectsLocationsInstancesCreate](#redisprojectslocationsinstancescreate) - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. The completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
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

Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. The completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

### Example Usage

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

            RedisProjectsLocationsInstancesCreateRequest req = new RedisProjectsLocationsInstancesCreateRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceInput = new InstanceInput() {{
                    alternativeLocationId = "dolor";
                    authEnabled = false;
                    authorizedNetwork = "natus";
                    availableMaintenanceVersions = new String[]{{
                        add("hic"),
                        add("saepe"),
                    }};
                    connectMode = InstanceConnectModeEnum.PRIVATE_SERVICE_ACCESS;
                    customerManagedKey = "in";
                    displayName = "corporis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "saepe");
                        put("quidem", "architecto");
                        put("ipsa", "reiciendis");
                    }};
                    locationId = "est";
                    maintenancePolicy = new MaintenancePolicyInput() {{
                        description = "mollitia";
                        weeklyMaintenanceWindow = new org.openapis.openapi.models.shared.WeeklyMaintenanceWindowInput[]{{
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = WeeklyMaintenanceWindowDayEnum.MONDAY;
                                startTime = new TimeOfDay() {{
                                    hours = 210382;
                                    minutes = 358152;
                                    nanos = 128926;
                                    seconds = 750686;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = WeeklyMaintenanceWindowDayEnum.TUESDAY;
                                startTime = new TimeOfDay() {{
                                    hours = 607831;
                                    minutes = 363711;
                                    nanos = 325047;
                                    seconds = 570197;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = WeeklyMaintenanceWindowDayEnum.DAY_OF_WEEK_UNSPECIFIED;
                                startTime = new TimeOfDay() {{
                                    hours = 438601;
                                    minutes = 634274;
                                    nanos = 988374;
                                    seconds = 958950;
                                }};
                            }}),
                        }};
                    }};;
                    maintenanceSchedule = new MaintenanceScheduleInput() {{
                        canReschedule = false;
                    }};;
                    maintenanceVersion = "architecto";
                    memorySizeGb = 652790;
                    name = "Cecilia Crooks";
                    persistenceConfig = new PersistenceConfigInput() {{
                        persistenceMode = PersistenceConfigPersistenceModeEnum.DISABLED;
                        rdbSnapshotPeriod = PersistenceConfigRdbSnapshotPeriodEnum.ONE_HOUR;
                        rdbSnapshotStartTime = "commodi";
                    }};;
                    readReplicasMode = InstanceReadReplicasModeEnum.READ_REPLICAS_DISABLED;
                    redisConfigs = new java.util.HashMap<String, String>() {{
                        put("velit", "error");
                        put("quia", "quis");
                    }};
                    redisVersion = "vitae";
                    replicaCount = 674752;
                    reservedIpRange = "animi";
                    secondaryIpRange = "enim";
                    suspensionReasons = new org.openapis.openapi.models.shared.InstanceSuspensionReasonsEnum[]{{
                        add(InstanceSuspensionReasonsEnum.CUSTOMER_MANAGED_KEY_ISSUE),
                    }};
                    tier = InstanceTierEnum.TIER_UNSPECIFIED;
                    transitEncryptionMode = InstanceTransitEncryptionModeEnum.DISABLED;
                }};;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "aut";
                instanceId = "quasi";
                key = "error";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "quasi";
                uploadProtocol = "reiciendis";
            }};            

            RedisProjectsLocationsInstancesCreateResponse res = sdk.projects.redisProjectsLocationsInstancesCreate(req, new RedisProjectsLocationsInstancesCreateSecurity("voluptatibus", "vero") {{
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

## redisProjectsLocationsInstancesExport

Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesExportRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesExportResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesExportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExportInstanceRequest;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsInstancesExportRequest req = new RedisProjectsLocationsInstancesExportRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                exportInstanceRequest = new ExportInstanceRequest() {{
                    outputConfig = new OutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            uri = "https://aware-objection.info";
                        }};;
                    }};;
                }};;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "corporis";
                uploadProtocol = "dolore";
            }};            

            RedisProjectsLocationsInstancesExportResponse res = sdk.projects.redisProjectsLocationsInstancesExport(req, new RedisProjectsLocationsInstancesExportSecurity("iusto", "dicta") {{
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

## redisProjectsLocationsInstancesFailover

Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesFailoverRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesFailoverResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesFailoverSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FailoverInstanceRequest;
import org.openapis.openapi.models.shared.FailoverInstanceRequestDataProtectionModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsInstancesFailoverRequest req = new RedisProjectsLocationsInstancesFailoverRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                failoverInstanceRequest = new FailoverInstanceRequest() {{
                    dataProtectionMode = FailoverInstanceRequestDataProtectionModeEnum.FORCE_DATA_LOSS;
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "ipsum";
                key = "quidem";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
            }};            

            RedisProjectsLocationsInstancesFailoverResponse res = sdk.projects.redisProjectsLocationsInstancesFailover(req, new RedisProjectsLocationsInstancesFailoverSecurity("praesentium", "rem") {{
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

## redisProjectsLocationsInstancesGetAuthString

Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesGetAuthStringRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesGetAuthStringResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesGetAuthStringSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsInstancesGetAuthStringRequest req = new RedisProjectsLocationsInstancesGetAuthStringRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "itaque";
                key = "incidunt";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "est";
                uploadProtocol = "quibusdam";
            }};            

            RedisProjectsLocationsInstancesGetAuthStringResponse res = sdk.projects.redisProjectsLocationsInstancesGetAuthString(req, new RedisProjectsLocationsInstancesGetAuthStringSecurity("explicabo", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.instanceAuthString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## redisProjectsLocationsInstancesImport

Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesImportRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesImportResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GcsSource;
import org.openapis.openapi.models.shared.ImportInstanceRequest;
import org.openapis.openapi.models.shared.InputConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsInstancesImportRequest req = new RedisProjectsLocationsInstancesImportRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                importInstanceRequest = new ImportInstanceRequest() {{
                    inputConfig = new InputConfig() {{
                        gcsSource = new GcsSource() {{
                            uri = "http://familiar-combination.info";
                        }};;
                    }};;
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "magni";
                key = "assumenda";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "fugit";
                uploadProtocol = "dolorum";
            }};            

            RedisProjectsLocationsInstancesImportResponse res = sdk.projects.redisProjectsLocationsInstancesImport(req, new RedisProjectsLocationsInstancesImportSecurity("excepturi", "tempora") {{
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

## redisProjectsLocationsInstancesList

Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesListRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesListResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsInstancesListRequest req = new RedisProjectsLocationsInstancesListRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "non";
                key = "eligendi";
                oauthToken = "sint";
                pageSize = 396098L;
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "sint";
                uploadProtocol = "officia";
            }};            

            RedisProjectsLocationsInstancesListResponse res = sdk.projects.redisProjectsLocationsInstancesList(req, new RedisProjectsLocationsInstancesListSecurity("dolor", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## redisProjectsLocationsInstancesPatch

Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesPatchRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesPatchResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesPatchSecurity;
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

            RedisProjectsLocationsInstancesPatchRequest req = new RedisProjectsLocationsInstancesPatchRequest("a") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceInput = new InstanceInput() {{
                    alternativeLocationId = "in";
                    authEnabled = false;
                    authorizedNetwork = "in";
                    availableMaintenanceVersions = new String[]{{
                        add("maiores"),
                        add("rerum"),
                        add("dicta"),
                        add("magnam"),
                    }};
                    connectMode = InstanceConnectModeEnum.PRIVATE_SERVICE_ACCESS;
                    customerManagedKey = "facere";
                    displayName = "ea";
                    labels = new java.util.HashMap<String, String>() {{
                        put("laborum", "accusamus");
                        put("non", "occaecati");
                    }};
                    locationId = "enim";
                    maintenancePolicy = new MaintenancePolicyInput() {{
                        description = "accusamus";
                        weeklyMaintenanceWindow = new org.openapis.openapi.models.shared.WeeklyMaintenanceWindowInput[]{{
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = WeeklyMaintenanceWindowDayEnum.FRIDAY;
                                startTime = new TimeOfDay() {{
                                    hours = 588465;
                                    minutes = 725255;
                                    nanos = 659669;
                                    seconds = 501324;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = WeeklyMaintenanceWindowDayEnum.THURSDAY;
                                startTime = new TimeOfDay() {{
                                    hours = 956084;
                                    minutes = 230533;
                                    nanos = 643990;
                                    seconds = 394869;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = WeeklyMaintenanceWindowDayEnum.WEDNESDAY;
                                startTime = new TimeOfDay() {{
                                    hours = 618809;
                                    minutes = 606393;
                                    nanos = 474867;
                                    seconds = 19193;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = WeeklyMaintenanceWindowDayEnum.WEDNESDAY;
                                startTime = new TimeOfDay() {{
                                    hours = 301575;
                                    minutes = 716075;
                                    nanos = 660174;
                                    seconds = 287991;
                                }};
                            }}),
                        }};
                    }};;
                    maintenanceSchedule = new MaintenanceScheduleInput() {{
                        canReschedule = false;
                    }};;
                    maintenanceVersion = "labore";
                    memorySizeGb = 383462;
                    name = "Robin Keebler";
                    persistenceConfig = new PersistenceConfigInput() {{
                        persistenceMode = PersistenceConfigPersistenceModeEnum.PERSISTENCE_MODE_UNSPECIFIED;
                        rdbSnapshotPeriod = PersistenceConfigRdbSnapshotPeriodEnum.ONE_HOUR;
                        rdbSnapshotStartTime = "et";
                    }};;
                    readReplicasMode = InstanceReadReplicasModeEnum.READ_REPLICAS_DISABLED;
                    redisConfigs = new java.util.HashMap<String, String>() {{
                        put("provident", "quos");
                        put("sint", "accusantium");
                    }};
                    redisVersion = "mollitia";
                    replicaCount = 968962;
                    reservedIpRange = "mollitia";
                    secondaryIpRange = "ad";
                    suspensionReasons = new org.openapis.openapi.models.shared.InstanceSuspensionReasonsEnum[]{{
                        add(InstanceSuspensionReasonsEnum.SUSPENSION_REASON_UNSPECIFIED),
                        add(InstanceSuspensionReasonsEnum.CUSTOMER_MANAGED_KEY_ISSUE),
                    }};
                    tier = InstanceTierEnum.TIER_UNSPECIFIED;
                    transitEncryptionMode = InstanceTransitEncryptionModeEnum.SERVER_AUTHENTICATION;
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "debitis";
                key = "eius";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "deleniti";
                updateMask = "facilis";
                uploadType = "in";
                uploadProtocol = "architecto";
            }};            

            RedisProjectsLocationsInstancesPatchResponse res = sdk.projects.redisProjectsLocationsInstancesPatch(req, new RedisProjectsLocationsInstancesPatchSecurity("architecto", "repudiandae") {{
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

## redisProjectsLocationsInstancesRescheduleMaintenance

Reschedule maintenance for a given instance in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesRescheduleMaintenanceRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesRescheduleMaintenanceResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesRescheduleMaintenanceSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RescheduleMaintenanceRequest;
import org.openapis.openapi.models.shared.RescheduleMaintenanceRequestRescheduleTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsInstancesRescheduleMaintenanceRequest req = new RedisProjectsLocationsInstancesRescheduleMaintenanceRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                rescheduleMaintenanceRequest = new RescheduleMaintenanceRequest() {{
                    rescheduleType = RescheduleMaintenanceRequestRescheduleTypeEnum.IMMEDIATE;
                    scheduleTime = "repellat";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "pariatur";
                key = "accusantium";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "natus";
                uploadProtocol = "magni";
            }};            

            RedisProjectsLocationsInstancesRescheduleMaintenanceResponse res = sdk.projects.redisProjectsLocationsInstancesRescheduleMaintenance(req, new RedisProjectsLocationsInstancesRescheduleMaintenanceSecurity("sunt", "quo") {{
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

## redisProjectsLocationsInstancesUpgrade

Upgrades Redis instance to the newer Redis version specified in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesUpgradeRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesUpgradeResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesUpgradeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UpgradeInstanceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsInstancesUpgradeRequest req = new RedisProjectsLocationsInstancesUpgradeRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                upgradeInstanceRequest = new UpgradeInstanceRequest() {{
                    redisVersion = "maxime";
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "ea";
                key = "accusantium";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "quidem";
                uploadProtocol = "ipsam";
            }};            

            RedisProjectsLocationsInstancesUpgradeResponse res = sdk.projects.redisProjectsLocationsInstancesUpgrade(req, new RedisProjectsLocationsInstancesUpgradeSecurity("voluptate", "autem") {{
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

## redisProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsListRequest req = new RedisProjectsLocationsListRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "perferendis";
                filter = "fugiat";
                key = "amet";
                oauthToken = "aut";
                pageSize = 764912L;
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "libero";
                uploadProtocol = "nobis";
            }};            

            RedisProjectsLocationsListResponse res = sdk.projects.redisProjectsLocationsList(req, new RedisProjectsLocationsListSecurity("dolores", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## redisProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsOperationsCancelRequest req = new RedisProjectsLocationsOperationsCancelRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "nesciunt";
                fields = "eos";
                key = "perferendis";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "quam";
                uploadProtocol = "dolor";
            }};            

            RedisProjectsLocationsOperationsCancelResponse res = sdk.projects.redisProjectsLocationsOperationsCancel(req, new RedisProjectsLocationsOperationsCancelSecurity("vero", "nostrum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## redisProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsOperationsDeleteRequest req = new RedisProjectsLocationsOperationsDeleteRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.PROTO;
                callback = "perspiciatis";
                fields = "voluptatem";
                key = "porro";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "error";
                uploadProtocol = "eaque";
            }};            

            RedisProjectsLocationsOperationsDeleteResponse res = sdk.projects.redisProjectsLocationsOperationsDelete(req, new RedisProjectsLocationsOperationsDeleteSecurity("occaecati", "rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## redisProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsOperationsGetRequest req = new RedisProjectsLocationsOperationsGetRequest("adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolorum";
                key = "deleniti";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "nobis";
                uploadProtocol = "libero";
            }};            

            RedisProjectsLocationsOperationsGetResponse res = sdk.projects.redisProjectsLocationsOperationsGet(req, new RedisProjectsLocationsOperationsGetSecurity("delectus", "quaerat") {{
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

## redisProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedisProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.RedisProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsOperationsListRequest req = new RedisProjectsLocationsOperationsListRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "qui";
                filter = "ipsum";
                key = "hic";
                oauthToken = "excepturi";
                pageSize = 739551L;
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "reiciendis";
                uploadProtocol = "amet";
            }};            

            RedisProjectsLocationsOperationsListResponse res = sdk.projects.redisProjectsLocationsOperationsList(req, new RedisProjectsLocationsOperationsListSecurity("dolorum", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
