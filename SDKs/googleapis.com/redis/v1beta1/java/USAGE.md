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