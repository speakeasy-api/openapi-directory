# projects

### Available Operations

* [sqlProjectsInstancesGetDiskShrinkConfig](#sqlprojectsinstancesgetdiskshrinkconfig) - Get Disk Shrink Config for a given instance.
* [sqlProjectsInstancesPerformDiskShrink](#sqlprojectsinstancesperformdiskshrink) - Perform Disk Shrink on primary instance.
* [sqlProjectsInstancesRescheduleMaintenance](#sqlprojectsinstancesreschedulemaintenance) - Reschedules the maintenance on the given instance.
* [sqlProjectsInstancesResetReplicaSize](#sqlprojectsinstancesresetreplicasize) - Reset Replica Size to primary instance disk size.
* [sqlProjectsInstancesStartExternalSync](#sqlprojectsinstancesstartexternalsync) - Start External primary instance migration.
* [sqlProjectsInstancesVerifyExternalSyncSettings](#sqlprojectsinstancesverifyexternalsyncsettings) - Verify External primary instance external sync settings.

## sqlProjectsInstancesGetDiskShrinkConfig

Get Disk Shrink Config for a given instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlProjectsInstancesGetDiskShrinkConfigRequest;
import org.openapis.openapi.models.operations.SqlProjectsInstancesGetDiskShrinkConfigResponse;
import org.openapis.openapi.models.operations.SqlProjectsInstancesGetDiskShrinkConfigSecurity;
import org.openapis.openapi.models.operations.SqlProjectsInstancesGetDiskShrinkConfigSecurityOption1;
import org.openapis.openapi.models.operations.SqlProjectsInstancesGetDiskShrinkConfigSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlProjectsInstancesGetDiskShrinkConfigRequest req = new SqlProjectsInstancesGetDiskShrinkConfigRequest("recusandae", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "provident";
                key = "aspernatur";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "animi";
                uploadProtocol = "nostrum";
            }};            

            SqlProjectsInstancesGetDiskShrinkConfigResponse res = sdk.projects.sqlProjectsInstancesGetDiskShrinkConfig(req, new SqlProjectsInstancesGetDiskShrinkConfigSecurity() {{
                option1 = new SqlProjectsInstancesGetDiskShrinkConfigSecurityOption1("mollitia", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sqlInstancesGetDiskShrinkConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlProjectsInstancesPerformDiskShrink

Perform Disk Shrink on primary instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlProjectsInstancesPerformDiskShrinkRequest;
import org.openapis.openapi.models.operations.SqlProjectsInstancesPerformDiskShrinkResponse;
import org.openapis.openapi.models.operations.SqlProjectsInstancesPerformDiskShrinkSecurity;
import org.openapis.openapi.models.operations.SqlProjectsInstancesPerformDiskShrinkSecurityOption1;
import org.openapis.openapi.models.operations.SqlProjectsInstancesPerformDiskShrinkSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PerformDiskShrinkContext;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlProjectsInstancesPerformDiskShrinkRequest req = new SqlProjectsInstancesPerformDiskShrinkRequest("possimus", "animi") {{
                dollarXgafv = XgafvEnum.ONE;
                performDiskShrinkContext = new PerformDiskShrinkContext() {{
                    targetSizeGb = "aliquid";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "ullam";
                key = "in";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "officia";
                uploadProtocol = "laborum";
            }};            

            SqlProjectsInstancesPerformDiskShrinkResponse res = sdk.projects.sqlProjectsInstancesPerformDiskShrink(req, new SqlProjectsInstancesPerformDiskShrinkSecurity() {{
                option1 = new SqlProjectsInstancesPerformDiskShrinkSecurityOption1("placeat", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlProjectsInstancesRescheduleMaintenance

Reschedules the maintenance on the given instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlProjectsInstancesRescheduleMaintenanceRequest;
import org.openapis.openapi.models.operations.SqlProjectsInstancesRescheduleMaintenanceResponse;
import org.openapis.openapi.models.operations.SqlProjectsInstancesRescheduleMaintenanceSecurity;
import org.openapis.openapi.models.operations.SqlProjectsInstancesRescheduleMaintenanceSecurityOption1;
import org.openapis.openapi.models.operations.SqlProjectsInstancesRescheduleMaintenanceSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Reschedule;
import org.openapis.openapi.models.shared.RescheduleRescheduleTypeEnum;
import org.openapis.openapi.models.shared.SqlInstancesRescheduleMaintenanceRequestBody;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlProjectsInstancesRescheduleMaintenanceRequest req = new SqlProjectsInstancesRescheduleMaintenanceRequest("voluptatibus", "molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                sqlInstancesRescheduleMaintenanceRequestBody = new SqlInstancesRescheduleMaintenanceRequestBody() {{
                    reschedule = new Reschedule() {{
                        rescheduleType = RescheduleRescheduleTypeEnum.SPECIFIC_TIME;
                        scheduleTime = "cumque";
                    }};;
                }};;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "quis";
                key = "inventore";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "quae";
                uploadProtocol = "perferendis";
            }};            

            SqlProjectsInstancesRescheduleMaintenanceResponse res = sdk.projects.sqlProjectsInstancesRescheduleMaintenance(req, new SqlProjectsInstancesRescheduleMaintenanceSecurity() {{
                option1 = new SqlProjectsInstancesRescheduleMaintenanceSecurityOption1("velit", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlProjectsInstancesResetReplicaSize

Reset Replica Size to primary instance disk size.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlProjectsInstancesResetReplicaSizeRequest;
import org.openapis.openapi.models.operations.SqlProjectsInstancesResetReplicaSizeResponse;
import org.openapis.openapi.models.operations.SqlProjectsInstancesResetReplicaSizeSecurity;
import org.openapis.openapi.models.operations.SqlProjectsInstancesResetReplicaSizeSecurityOption1;
import org.openapis.openapi.models.operations.SqlProjectsInstancesResetReplicaSizeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlProjectsInstancesResetReplicaSizeRequest req = new SqlProjectsInstancesResetReplicaSizeRequest("eum", "eius") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("impedit", "eos");
                    put("sapiente", "eum");
                    put("dicta", "minima");
                    put("beatae", "cupiditate");
                }};
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "hic";
                key = "illum";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "perspiciatis";
                uploadProtocol = "maiores";
            }};            

            SqlProjectsInstancesResetReplicaSizeResponse res = sdk.projects.sqlProjectsInstancesResetReplicaSize(req, new SqlProjectsInstancesResetReplicaSizeSecurity() {{
                option1 = new SqlProjectsInstancesResetReplicaSizeSecurityOption1("debitis", "aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlProjectsInstancesStartExternalSync

Start External primary instance migration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlProjectsInstancesStartExternalSyncRequest;
import org.openapis.openapi.models.operations.SqlProjectsInstancesStartExternalSyncResponse;
import org.openapis.openapi.models.operations.SqlProjectsInstancesStartExternalSyncSecurity;
import org.openapis.openapi.models.operations.SqlProjectsInstancesStartExternalSyncSecurityOption1;
import org.openapis.openapi.models.operations.SqlProjectsInstancesStartExternalSyncSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MySqlSyncConfig;
import org.openapis.openapi.models.shared.SqlInstancesStartExternalSyncRequest;
import org.openapis.openapi.models.shared.SqlInstancesStartExternalSyncRequestSyncModeEnum;
import org.openapis.openapi.models.shared.SyncFlags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlProjectsInstancesStartExternalSyncRequest req = new SqlProjectsInstancesStartExternalSyncRequest("porro", "suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                sqlInstancesStartExternalSyncRequest = new SqlInstancesStartExternalSyncRequest() {{
                    mysqlSyncConfig = new MySqlSyncConfig() {{
                        initialSyncFlags = new org.openapis.openapi.models.shared.SyncFlags[]{{
                            add(new SyncFlags() {{
                                name = "Grant Dickens";
                                value = "nulla";
                            }}),
                        }};
                    }};;
                    skipVerification = false;
                    syncMode = SqlInstancesStartExternalSyncRequestSyncModeEnum.EXTERNAL_SYNC_MODE_UNSPECIFIED;
                }};;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "ducimus";
                fields = "natus";
                key = "occaecati";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "quasi";
                uploadProtocol = "magni";
            }};            

            SqlProjectsInstancesStartExternalSyncResponse res = sdk.projects.sqlProjectsInstancesStartExternalSync(req, new SqlProjectsInstancesStartExternalSyncSecurity() {{
                option1 = new SqlProjectsInstancesStartExternalSyncSecurityOption1("doloribus", "nulla") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlProjectsInstancesVerifyExternalSyncSettings

Verify External primary instance external sync settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlProjectsInstancesVerifyExternalSyncSettingsRequest;
import org.openapis.openapi.models.operations.SqlProjectsInstancesVerifyExternalSyncSettingsResponse;
import org.openapis.openapi.models.operations.SqlProjectsInstancesVerifyExternalSyncSettingsSecurity;
import org.openapis.openapi.models.operations.SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1;
import org.openapis.openapi.models.operations.SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MySqlSyncConfig;
import org.openapis.openapi.models.shared.SqlInstancesVerifyExternalSyncSettingsRequest;
import org.openapis.openapi.models.shared.SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum;
import org.openapis.openapi.models.shared.SyncFlags;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlProjectsInstancesVerifyExternalSyncSettingsRequest req = new SqlProjectsInstancesVerifyExternalSyncSettingsRequest("necessitatibus", "ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                sqlInstancesVerifyExternalSyncSettingsRequest = new SqlInstancesVerifyExternalSyncSettingsRequest() {{
                    mysqlSyncConfig = new MySqlSyncConfig() {{
                        initialSyncFlags = new org.openapis.openapi.models.shared.SyncFlags[]{{
                            add(new SyncFlags() {{
                                name = "Jean Kris";
                                value = "maiores";
                            }}),
                            add(new SyncFlags() {{
                                name = "Ben Bradtke Sr.";
                                value = "odio";
                            }}),
                        }};
                    }};;
                    syncMode = SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum.EXTERNAL_SYNC_MODE_UNSPECIFIED;
                    verifyConnectionOnly = false;
                    verifyReplicationOnly = false;
                }};;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "aliquid";
                key = "ipsa";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "nostrum";
                uploadProtocol = "fugiat";
            }};            

            SqlProjectsInstancesVerifyExternalSyncSettingsResponse res = sdk.projects.sqlProjectsInstancesVerifyExternalSyncSettings(req, new SqlProjectsInstancesVerifyExternalSyncSettingsSecurity() {{
                option1 = new SqlProjectsInstancesVerifyExternalSyncSettingsSecurityOption1("expedita", "aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sqlInstancesVerifyExternalSyncSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
