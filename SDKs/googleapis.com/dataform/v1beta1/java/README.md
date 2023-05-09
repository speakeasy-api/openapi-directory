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
import org.openapis.openapi.models.operations.DataformProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsListRequest req = new DataformProjectsLocationsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            DataformProjectsLocationsListResponse res = sdk.projects.dataformProjectsLocationsList(req, new DataformProjectsLocationsListSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
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


### [projects](docs/projects/README.md)

* [dataformProjectsLocationsList](docs/projects/README.md#dataformprojectslocationslist) - Lists information about the supported locations for this service.
* [dataformProjectsLocationsRepositoriesCompilationResultsCreate](docs/projects/README.md#dataformprojectslocationsrepositoriescompilationresultscreate) - Creates a new CompilationResult in a given project and location.
* [dataformProjectsLocationsRepositoriesCompilationResultsList](docs/projects/README.md#dataformprojectslocationsrepositoriescompilationresultslist) - Lists CompilationResults in a given Repository.
* [dataformProjectsLocationsRepositoriesCreate](docs/projects/README.md#dataformprojectslocationsrepositoriescreate) - Creates a new Repository in a given project and location.
* [dataformProjectsLocationsRepositoriesFetchRemoteBranches](docs/projects/README.md#dataformprojectslocationsrepositoriesfetchremotebranches) - Fetches a Repository's remote branches.
* [dataformProjectsLocationsRepositoriesList](docs/projects/README.md#dataformprojectslocationsrepositorieslist) - Lists Repositories in a given project and location.
* [dataformProjectsLocationsRepositoriesReleaseConfigsCreate](docs/projects/README.md#dataformprojectslocationsrepositoriesreleaseconfigscreate) - Creates a new ReleaseConfig in a given Repository.
* [dataformProjectsLocationsRepositoriesReleaseConfigsList](docs/projects/README.md#dataformprojectslocationsrepositoriesreleaseconfigslist) - Lists ReleaseConfigs in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowConfigsCreate](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowconfigscreate) - Creates a new WorkflowConfig in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowConfigsList](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowconfigslist) - Lists WorkflowConfigs in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowConfigsPatch](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowconfigspatch) - Updates a single WorkflowConfig.
* [dataformProjectsLocationsRepositoriesWorkflowInvocationsCancel](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowinvocationscancel) - Requests cancellation of a running WorkflowInvocation.
* [dataformProjectsLocationsRepositoriesWorkflowInvocationsCreate](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowinvocationscreate) - Creates a new WorkflowInvocation in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowInvocationsList](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowinvocationslist) - Lists WorkflowInvocations in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowInvocationsQuery](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowinvocationsquery) - Returns WorkflowInvocationActions in a given WorkflowInvocation.
* [dataformProjectsLocationsRepositoriesWorkspacesCommit](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacescommit) - Applies a Git commit for uncommitted files in a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesCreate](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacescreate) - Creates a new Workspace in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkspacesDelete](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesdelete) - Deletes a single Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesFetchFileDiff](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesfetchfilediff) - Fetches Git diff for an uncommitted file in a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatuses](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesfetchfilegitstatuses) - Fetches Git statuses for the files in a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehind](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesfetchgitaheadbehind) - Fetches Git ahead/behind against a remote branch.
* [dataformProjectsLocationsRepositoriesWorkspacesGet](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesget) - Fetches a single Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesGetIamPolicy](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [dataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackages](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesinstallnpmpackages) - Installs dependency NPM packages (inside a Workspace).
* [dataformProjectsLocationsRepositoriesWorkspacesList](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspaceslist) - Lists Workspaces in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkspacesMakeDirectory](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesmakedirectory) - Creates a directory inside a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesMoveDirectory](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesmovedirectory) - Moves a directory (inside a Workspace), and all of its contents, to a new location.
* [dataformProjectsLocationsRepositoriesWorkspacesMoveFile](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesmovefile) - Moves a file (inside a Workspace) to a new location.
* [dataformProjectsLocationsRepositoriesWorkspacesPull](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacespull) - Pulls Git commits from the Repository's remote into a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesPush](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacespush) - Pushes Git commits from a Workspace to the Repository's remote.
* [dataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContents](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesquerydirectorycontents) - Returns the contents of a given Workspace directory.
* [dataformProjectsLocationsRepositoriesWorkspacesReadFile](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesreadfile) - Returns the contents of a file (inside a Workspace).
* [dataformProjectsLocationsRepositoriesWorkspacesRemoveDirectory](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesremovedirectory) - Deletes a directory (inside a Workspace) and all of its contents.
* [dataformProjectsLocationsRepositoriesWorkspacesRemoveFile](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesremovefile) - Deletes a file (inside a Workspace).
* [dataformProjectsLocationsRepositoriesWorkspacesReset](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesreset) - Performs a Git reset for uncommitted files in a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesSetIamPolicy](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [dataformProjectsLocationsRepositoriesWorkspacesTestIamPermissions](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [dataformProjectsLocationsRepositoriesWorkspacesWriteFile](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspaceswritefile) - Writes to a file (inside a Workspace).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
