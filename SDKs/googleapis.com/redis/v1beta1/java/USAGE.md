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