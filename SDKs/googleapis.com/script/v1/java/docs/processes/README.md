# processes

### Available Operations

* [scriptProcessesList](#scriptprocesseslist) - List information about processes made by or on behalf of a user, such as process type and current status.
* [scriptProcessesListScriptProcesses](#scriptprocesseslistscriptprocesses) - List information about a script's executed processes, such as process type and current status.

## scriptProcessesList

List information about processes made by or on behalf of a user, such as process type and current status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProcessesListRequest;
import org.openapis.openapi.models.operations.ScriptProcessesListResponse;
import org.openapis.openapi.models.operations.ScriptProcessesListSecurity;
import org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterStatusesEnum;
import org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterTypesEnum;
import org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterUserAccessLevelsEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProcessesListRequest req = new ScriptProcessesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                key = "at";
                oauthToken = "at";
                pageSize = 978619L;
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "quod";
                uploadProtocol = "esse";
                userProcessFilterDeploymentId = "totam";
                userProcessFilterEndTime = "porro";
                userProcessFilterFunctionName = "dolorum";
                userProcessFilterProjectName = "dicta";
                userProcessFilterScriptId = "nam";
                userProcessFilterStartTime = "officia";
                userProcessFilterStatuses = new org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterStatusesEnum[]{{
                    add(ScriptProcessesListUserProcessFilterStatusesEnum.RUNNING),
                    add(ScriptProcessesListUserProcessFilterStatusesEnum.CANCELED),
                    add(ScriptProcessesListUserProcessFilterStatusesEnum.DELAYED),
                }};
                userProcessFilterTypes = new org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterTypesEnum[]{{
                    add(ScriptProcessesListUserProcessFilterTypesEnum.WEBAPP),
                    add(ScriptProcessesListUserProcessFilterTypesEnum.ADD_ON),
                    add(ScriptProcessesListUserProcessFilterTypesEnum.TRIGGER),
                    add(ScriptProcessesListUserProcessFilterTypesEnum.TRIGGER),
                }};
                userProcessFilterUserAccessLevels = new org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterUserAccessLevelsEnum[]{{
                    add(ScriptProcessesListUserProcessFilterUserAccessLevelsEnum.USER_ACCESS_LEVEL_UNSPECIFIED),
                    add(ScriptProcessesListUserProcessFilterUserAccessLevelsEnum.WRITE),
                }};
            }};            

            ScriptProcessesListResponse res = sdk.processes.scriptProcessesList(req, new ScriptProcessesListSecurity("cum", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listUserProcessesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scriptProcessesListScriptProcesses

List information about a script's executed processes, such as process type and current status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptProcessesListScriptProcessesRequest;
import org.openapis.openapi.models.operations.ScriptProcessesListScriptProcessesResponse;
import org.openapis.openapi.models.operations.ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum;
import org.openapis.openapi.models.operations.ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum;
import org.openapis.openapi.models.operations.ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum;
import org.openapis.openapi.models.operations.ScriptProcessesListScriptProcessesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProcessesListScriptProcessesRequest req = new ScriptProcessesListScriptProcessesRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "ad";
                key = "natus";
                oauthToken = "sed";
                pageSize = 612096L;
                pageToken = "dolor";
                prettyPrint = false;
                quotaUser = "natus";
                scriptId = "laboriosam";
                scriptProcessFilterDeploymentId = "hic";
                scriptProcessFilterEndTime = "saepe";
                scriptProcessFilterFunctionName = "fuga";
                scriptProcessFilterStartTime = "in";
                scriptProcessFilterStatuses = new org.openapis.openapi.models.operations.ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum[]{{
                    add(ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum.FAILED),
                    add(ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum.COMPLETED),
                }};
                scriptProcessFilterTypes = new org.openapis.openapi.models.operations.ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum[]{{
                    add(ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum.EDITOR),
                    add(ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum.PROCESS_TYPE_UNSPECIFIED),
                    add(ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum.PROCESS_TYPE_UNSPECIFIED),
                    add(ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum.BATCH_TASK),
                }};
                scriptProcessFilterUserAccessLevels = new org.openapis.openapi.models.operations.ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum[]{{
                    add(ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum.WRITE),
                    add(ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum.WRITE),
                    add(ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum.USER_ACCESS_LEVEL_UNSPECIFIED),
                }};
                uploadType = "dolorem";
                uploadProtocol = "corporis";
            }};            

            ScriptProcessesListScriptProcessesResponse res = sdk.processes.scriptProcessesListScriptProcesses(req, new ScriptProcessesListScriptProcessesSecurity("explicabo", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listScriptProcessesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
