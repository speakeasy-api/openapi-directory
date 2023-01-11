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
                    parent = "autem";
                }};
                queryParams = new RedisProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "ullam";
                    alt = "json";
                    callback = "est";
                    fields = "assumenda";
                    instanceId = "ducimus";
                    key = "alias";
                    oauthToken = "quia";
                    prettyPrint = false;
                    quotaUser = "incidunt";
                    uploadType = "molestiae";
                    uploadProtocol = "neque";
                }};
                request = new InstanceInput() {{
                    alternativeLocationId = "eveniet";
                    authEnabled = false;
                    authorizedNetwork = "velit";
                    connectMode = "PRIVATE_SERVICE_ACCESS";
                    customerManagedKey = "beatae";
                    displayName = "dolorum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("vitae", "repellendus");
                        put("quo", "ut");
                        put("dolorem", "vero");
                    }};
                    locationId = "quibusdam";
                    maintenancePolicy = new MaintenancePolicyInput() {{
                        description = "sit";
                        weeklyMaintenanceWindow = new openapisdk.models.shared.WeeklyMaintenanceWindowInput[]() {{
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "MONDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 4032401011156607157;
                                    minutes = 9194445725500678612;
                                    nanos = 8174079580386278772;
                                    seconds = 3817978110620240451;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "MONDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 6434504875265327838;
                                    minutes = 4579559369643762091;
                                    nanos = 1180977213558432540;
                                    seconds = 5798214365305417866;
                                }};
                            }}),
                        }};
                    }};
                    maintenanceSchedule = new MaintenanceScheduleInput() {{
                        canReschedule = false;
                    }};
                    memorySizeGb = 1183606026256225858;
                    name = "ut";
                    persistenceConfig = new PersistenceConfigInput() {{
                        persistenceMode = "PERSISTENCE_MODE_UNSPECIFIED";
                        rdbSnapshotPeriod = "TWELVE_HOURS";
                        rdbSnapshotStartTime = "eveniet";
                    }};
                    readReplicasMode = "READ_REPLICAS_DISABLED";
                    redisConfigs = new java.util.HashMap<String, String>() {{
                        put("molestiae", "accusantium");
                        put("saepe", "harum");
                        put("ipsum", "voluptatem");
                    }};
                    redisVersion = "nemo";
                    replicaCount = 5792688215492355036;
                    reservedIpRange = "aliquid";
                    secondaryIpRange = "nesciunt";
                    suspensionReasons = new openapisdk.models.shared.InstanceSuspensionReasonsEnum[]() {{
                        add("CUSTOMER_MANAGED_KEY_ISSUE"),
                    }};
                    tier = "BASIC";
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