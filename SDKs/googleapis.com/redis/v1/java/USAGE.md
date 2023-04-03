<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedisProjectsLocationsInstancesCreateRequest req = new RedisProjectsLocationsInstancesCreateRequest() {{
                dollarXgafv = "2";
                instanceInput = new InstanceInput() {{
                    alternativeLocationId = "provident";
                    authEnabled = false;
                    authorizedNetwork = "distinctio";
                    availableMaintenanceVersions = new String[]{{
                        add("unde"),
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    connectMode = "DIRECT_PEERING";
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
                                day = "WEDNESDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 791725;
                                    minutes = 812169;
                                    nanos = 528895;
                                    seconds = 479977;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "THURSDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 392785;
                                    minutes = 925597;
                                    nanos = 836079;
                                    seconds = 71036;
                                }};
                            }}),
                        }};
                    }};
                    maintenanceSchedule = new MaintenanceScheduleInput() {{
                        canReschedule = false;
                    }};
                    maintenanceVersion = "quis";
                    memorySizeGb = 87129;
                    name = "deserunt";
                    persistenceConfig = new PersistenceConfigInput() {{
                        persistenceMode = "PERSISTENCE_MODE_UNSPECIFIED";
                        rdbSnapshotPeriod = "ONE_HOUR";
                        rdbSnapshotStartTime = "repellendus";
                    }};
                    readReplicasMode = "READ_REPLICAS_ENABLED";
                    redisConfigs = new java.util.HashMap<String, String>() {{
                        put("odit", "at");
                        put("at", "maiores");
                        put("molestiae", "quod");
                        put("quod", "esse");
                    }};
                    redisVersion = "totam";
                    replicaCount = 780529;
                    reservedIpRange = "dolorum";
                    secondaryIpRange = "dicta";
                    suspensionReasons = new org.openapis.openapi.models.shared.InstanceSuspensionReasonsEnum[]{{
                        add("CUSTOMER_MANAGED_KEY_ISSUE"),
                        add("CUSTOMER_MANAGED_KEY_ISSUE"),
                        add("SUSPENSION_REASON_UNSPECIFIED"),
                    }};
                    tier = "BASIC";
                    transitEncryptionMode = "DISABLED";
                }};
                accessToken = "optio";
                alt = "media";
                callback = "beatae";
                fields = "commodi";
                instanceId = "molestiae";
                key = "modi";
                oauthToken = "qui";
                parent = "impedit";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "esse";
                uploadProtocol = "ipsum";
            }}            

            RedisProjectsLocationsInstancesCreateResponse res = sdk.projects.redisProjectsLocationsInstancesCreate(req, new RedisProjectsLocationsInstancesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->