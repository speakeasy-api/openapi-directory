<!-- Start SDK Example Usage -->
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
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                pageSize = 847252L;
                pageToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
                userProcessFilterDeploymentId = "iure";
                userProcessFilterEndTime = "magnam";
                userProcessFilterFunctionName = "debitis";
                userProcessFilterProjectName = "ipsa";
                userProcessFilterScriptId = "delectus";
                userProcessFilterStartTime = "tempora";
                userProcessFilterStatuses = new org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterStatusesEnum[]{{
                    add(ScriptProcessesListUserProcessFilterStatusesEnum.CANCELED),
                    add(ScriptProcessesListUserProcessFilterStatusesEnum.UNKNOWN),
                }};
                userProcessFilterTypes = new org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterTypesEnum[]{{
                    add(ScriptProcessesListUserProcessFilterTypesEnum.WEBAPP),
                    add(ScriptProcessesListUserProcessFilterTypesEnum.TRIGGER),
                    add(ScriptProcessesListUserProcessFilterTypesEnum.WEBAPP),
                    add(ScriptProcessesListUserProcessFilterTypesEnum.TIME_DRIVEN),
                }};
                userProcessFilterUserAccessLevels = new org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterUserAccessLevelsEnum[]{{
                    add(ScriptProcessesListUserProcessFilterUserAccessLevelsEnum.OWNER),
                    add(ScriptProcessesListUserProcessFilterUserAccessLevelsEnum.USER_ACCESS_LEVEL_UNSPECIFIED),
                    add(ScriptProcessesListUserProcessFilterUserAccessLevelsEnum.NONE),
                    add(ScriptProcessesListUserProcessFilterUserAccessLevelsEnum.USER_ACCESS_LEVEL_UNSPECIFIED),
                }};
            }};            

            ScriptProcessesListResponse res = sdk.processes.scriptProcessesList(req, new ScriptProcessesListSecurity("deserunt", "perferendis") {{
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
<!-- End SDK Example Usage -->