<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreatePathParams;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateQueryParams;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.RedisProjectsLocationsInstancesCreateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new RedisProjectsLocationsInstancesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    instanceId = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new InstanceInput() {{
                    alternativeLocationId = "iure";
                    authEnabled = false;
                    authorizedNetwork = "magnam";
                    availableMaintenanceVersions = new String[]{{
                        add("ipsa"),
                        add("delectus"),
                        add("tempora"),
                        add("suscipit"),
                    }};
                    connectMode = "DIRECT_PEERING";
                    customerManagedKey = "minus";
                    displayName = "placeat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iusto", "excepturi");
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                    }};
                    locationId = "quis";
                    maintenancePolicy = new MaintenancePolicyInput() {{
                        description = "veritatis";
                        weeklyMaintenanceWindow = new org.openapis.openapi.models.shared.WeeklyMaintenanceWindowInput[]{{
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "DAY_OF_WEEK_UNSPECIFIED";
                                startTime = new TimeOfDay() {{
                                    hours = 368241;
                                    minutes = 832620;
                                    nanos = 957156;
                                    seconds = 778157;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "MONDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 870013;
                                    minutes = 870088;
                                    nanos = 978619;
                                    seconds = 473608;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindowInput() {{
                                day = "SATURDAY";
                                startTime = new TimeOfDay() {{
                                    hours = 800911;
                                    minutes = 461479;
                                    nanos = 520478;
                                    seconds = 780529;
                                }};
                            }}),
                        }};
                    }};
                    maintenanceSchedule = new MaintenanceScheduleInput() {{
                        canReschedule = false;
                    }};
                    maintenanceVersion = "dolorum";
                    memorySizeGb = 118274;
                    name = "nam";
                    persistenceConfig = new PersistenceConfigInput() {{
                        persistenceMode = "DISABLED";
                        rdbSnapshotPeriod = "SIX_HOURS";
                        rdbSnapshotStartTime = "fugit";
                    }};
                    readReplicasMode = "READ_REPLICAS_DISABLED";
                    redisConfigs = new java.util.HashMap<String, String>() {{
                        put("optio", "totam");
                        put("beatae", "commodi");
                        put("molestiae", "modi");
                        put("qui", "impedit");
                    }};
                    redisVersion = "cum";
                    replicaCount = 456150;
                    reservedIpRange = "ipsum";
                    secondaryIpRange = "excepturi";
                    suspensionReasons = new org.openapis.openapi.models.shared.InstanceSuspensionReasonsEnum[]{{
                        add("SUSPENSION_REASON_UNSPECIFIED"),
                    }};
                    tier = "TIER_UNSPECIFIED";
                    transitEncryptionMode = "SERVER_AUTHENTICATION";
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