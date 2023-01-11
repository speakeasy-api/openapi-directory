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