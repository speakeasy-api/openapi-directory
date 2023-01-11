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
                    availableMaintenanceVersions = new String[]() {{
                        add("dolorem"),
                        add("et"),
                        add("voluptate"),
                    }};
                    connectMode = "PRIVATE_SERVICE_ACCESS";
                    customerManagedKey = "vitae";
                    displayName = "totam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("illum", "debitis");
                    }};
                    locationId = "vel";
                    maintenancePolicy = new MaintenancePolicyInput() {{
                        description = "odio";
                        weeklyMaintenanceWindow = new openapisdk.models.shared.WeeklyMaintenanceWindowInput[]() {{
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "THURSDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 959367522974354090;
                                    minutes = 2914295034816259174;
                                    nanos = 1395437218309923052;
                                    seconds = 6745438398739480977;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "SATURDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 3398579248012586914;
                                    minutes = 5974317550424871033;
                                    nanos = 3317123977833389635;
                                    seconds = 5001958211167890979;
                                }};
                            }}),
                        }};
                    }};
                    maintenanceSchedule = new MaintenanceScheduleInput() {{
                        canReschedule = false;
                    }};
                    maintenanceVersion = "omnis";
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