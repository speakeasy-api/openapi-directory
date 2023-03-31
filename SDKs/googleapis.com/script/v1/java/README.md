# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### processes

* `scriptProcessesList` - List information about processes made by or on behalf of a user, such as process type and current status.
* `scriptProcessesListScriptProcesses` - List information about a script's executed processes, such as process type and current status.

### projects

* `scriptProjectsCreate` - Creates a new, empty script project with no script files and a base manifest file.
* `scriptProjectsDeploymentsCreate` - Creates a deployment of an Apps Script project.
* `scriptProjectsDeploymentsDelete` - Deletes a deployment of an Apps Script project.
* `scriptProjectsDeploymentsGet` - Gets a deployment of an Apps Script project.
* `scriptProjectsDeploymentsList` - Lists the deployments of an Apps Script project.
* `scriptProjectsDeploymentsUpdate` - Updates a deployment of an Apps Script project.
* `scriptProjectsGet` - Gets a script project's metadata.
* `scriptProjectsGetContent` - Gets the content of the script project, including the code source and metadata for each script file.
* `scriptProjectsGetMetrics` - Get metrics data for scripts, such as number of executions and active users.
* `scriptProjectsUpdateContent` - Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
* `scriptProjectsVersionsCreate` - Creates a new immutable version using the current code, with a unique version number.
* `scriptProjectsVersionsGet` - Gets a version of a script project.
* `scriptProjectsVersionsList` - List the versions of a script project.

### scripts

* `scriptScriptsRun` - Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
