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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [processes](docs/processes/README.md)

* [scriptProcessesList](docs/processes/README.md#scriptprocesseslist) - List information about processes made by or on behalf of a user, such as process type and current status.
* [scriptProcessesListScriptProcesses](docs/processes/README.md#scriptprocesseslistscriptprocesses) - List information about a script's executed processes, such as process type and current status.

### [projects](docs/projects/README.md)

* [scriptProjectsCreate](docs/projects/README.md#scriptprojectscreate) - Creates a new, empty script project with no script files and a base manifest file.
* [scriptProjectsDeploymentsCreate](docs/projects/README.md#scriptprojectsdeploymentscreate) - Creates a deployment of an Apps Script project.
* [scriptProjectsDeploymentsDelete](docs/projects/README.md#scriptprojectsdeploymentsdelete) - Deletes a deployment of an Apps Script project.
* [scriptProjectsDeploymentsGet](docs/projects/README.md#scriptprojectsdeploymentsget) - Gets a deployment of an Apps Script project.
* [scriptProjectsDeploymentsList](docs/projects/README.md#scriptprojectsdeploymentslist) - Lists the deployments of an Apps Script project.
* [scriptProjectsDeploymentsUpdate](docs/projects/README.md#scriptprojectsdeploymentsupdate) - Updates a deployment of an Apps Script project.
* [scriptProjectsGet](docs/projects/README.md#scriptprojectsget) - Gets a script project's metadata.
* [scriptProjectsGetContent](docs/projects/README.md#scriptprojectsgetcontent) - Gets the content of the script project, including the code source and metadata for each script file.
* [scriptProjectsGetMetrics](docs/projects/README.md#scriptprojectsgetmetrics) - Get metrics data for scripts, such as number of executions and active users.
* [scriptProjectsUpdateContent](docs/projects/README.md#scriptprojectsupdatecontent) - Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
* [scriptProjectsVersionsCreate](docs/projects/README.md#scriptprojectsversionscreate) - Creates a new immutable version using the current code, with a unique version number.
* [scriptProjectsVersionsGet](docs/projects/README.md#scriptprojectsversionsget) - Gets a version of a script project.
* [scriptProjectsVersionsList](docs/projects/README.md#scriptprojectsversionslist) - List the versions of a script project.

### [scripts](docs/scripts/README.md)

* [scriptScriptsRun](docs/scripts/README.md#scriptscriptsrun) - Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
