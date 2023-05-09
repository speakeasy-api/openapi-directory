# scripts

### Available Operations

* [scriptScriptsRun](#scriptscriptsrun) - Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.

## scriptScriptsRun

Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScriptScriptsRunRequest;
import org.openapis.openapi.models.operations.ScriptScriptsRunResponse;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurity;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurityOption10;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurityOption11;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurityOption12;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurityOption1;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurityOption2;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurityOption3;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurityOption4;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurityOption5;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurityOption6;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurityOption7;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurityOption8;
import org.openapis.openapi.models.operations.ScriptScriptsRunSecurityOption9;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExecutionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScriptScriptsRunRequest req = new ScriptScriptsRunRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                executionRequest = new ExecutionRequest() {{
                    devMode = false;
                    function = "sapiente";
                    parameters = new Object[]{{
                        add("nihil"),
                        add("sit"),
                        add("expedita"),
                    }};
                    sessionState = "neque";
                }};;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "voluptas";
                key = "deserunt";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "incidunt";
                uploadProtocol = "qui";
            }};            

            ScriptScriptsRunResponse res = sdk.scripts.scriptScriptsRun(req, new ScriptScriptsRunSecurity() {{
                option1 = new ScriptScriptsRunSecurityOption1("cupiditate", "maxime") {{
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
