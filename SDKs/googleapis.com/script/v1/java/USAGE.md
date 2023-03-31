<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ScriptProcessesListSecurity;
import org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterStatusesEnum;
import org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterTypesEnum;
import org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterUserAccessLevelsEnum;
import org.openapis.openapi.models.operations.ScriptProcessesListQueryParams;
import org.openapis.openapi.models.operations.ScriptProcessesListRequest;
import org.openapis.openapi.models.operations.ScriptProcessesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptProcessesListRequest req = new ScriptProcessesListRequest() {{
                security = new ScriptProcessesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new ScriptProcessesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    pageSize = 847252;
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
                        add("CANCELED"),
                        add("UNKNOWN"),
                    }};
                    userProcessFilterTypes = new org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterTypesEnum[]{{
                        add("WEBAPP"),
                        add("TRIGGER"),
                        add("WEBAPP"),
                        add("TIME_DRIVEN"),
                    }};
                    userProcessFilterUserAccessLevels = new org.openapis.openapi.models.operations.ScriptProcessesListUserProcessFilterUserAccessLevelsEnum[]{{
                        add("OWNER"),
                        add("USER_ACCESS_LEVEL_UNSPECIFIED"),
                        add("NONE"),
                        add("USER_ACCESS_LEVEL_UNSPECIFIED"),
                    }};
                }};
            }};            

            ScriptProcessesListResponse res = sdk.processes.scriptProcessesList(req);

            if (res.listUserProcessesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->