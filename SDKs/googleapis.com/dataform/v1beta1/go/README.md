# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/dataform/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DataformProjectsLocationsList(ctx, operations.DataformProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        Name: "Ben Mueller",
        OauthToken: sdk.String("iure"),
        PageSize: sdk.Int64(297534),
        PageToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.DataformProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [DataformProjectsLocationsList](docs/projects/README.md#dataformprojectslocationslist) - Lists information about the supported locations for this service.
* [DataformProjectsLocationsRepositoriesCompilationResultsCreate](docs/projects/README.md#dataformprojectslocationsrepositoriescompilationresultscreate) - Creates a new CompilationResult in a given project and location.
* [DataformProjectsLocationsRepositoriesCompilationResultsList](docs/projects/README.md#dataformprojectslocationsrepositoriescompilationresultslist) - Lists CompilationResults in a given Repository.
* [DataformProjectsLocationsRepositoriesCreate](docs/projects/README.md#dataformprojectslocationsrepositoriescreate) - Creates a new Repository in a given project and location.
* [DataformProjectsLocationsRepositoriesFetchRemoteBranches](docs/projects/README.md#dataformprojectslocationsrepositoriesfetchremotebranches) - Fetches a Repository's remote branches.
* [DataformProjectsLocationsRepositoriesList](docs/projects/README.md#dataformprojectslocationsrepositorieslist) - Lists Repositories in a given project and location.
* [DataformProjectsLocationsRepositoriesReleaseConfigsCreate](docs/projects/README.md#dataformprojectslocationsrepositoriesreleaseconfigscreate) - Creates a new ReleaseConfig in a given Repository.
* [DataformProjectsLocationsRepositoriesReleaseConfigsList](docs/projects/README.md#dataformprojectslocationsrepositoriesreleaseconfigslist) - Lists ReleaseConfigs in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkflowConfigsCreate](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowconfigscreate) - Creates a new WorkflowConfig in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkflowConfigsList](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowconfigslist) - Lists WorkflowConfigs in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkflowConfigsPatch](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowconfigspatch) - Updates a single WorkflowConfig.
* [DataformProjectsLocationsRepositoriesWorkflowInvocationsCancel](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowinvocationscancel) - Requests cancellation of a running WorkflowInvocation.
* [DataformProjectsLocationsRepositoriesWorkflowInvocationsCreate](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowinvocationscreate) - Creates a new WorkflowInvocation in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkflowInvocationsList](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowinvocationslist) - Lists WorkflowInvocations in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkflowInvocationsQuery](docs/projects/README.md#dataformprojectslocationsrepositoriesworkflowinvocationsquery) - Returns WorkflowInvocationActions in a given WorkflowInvocation.
* [DataformProjectsLocationsRepositoriesWorkspacesCommit](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacescommit) - Applies a Git commit for uncommitted files in a Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesCreate](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacescreate) - Creates a new Workspace in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkspacesDelete](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesdelete) - Deletes a single Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiff](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesfetchfilediff) - Fetches Git diff for an uncommitted file in a Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatuses](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesfetchfilegitstatuses) - Fetches Git statuses for the files in a Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehind](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesfetchgitaheadbehind) - Fetches Git ahead/behind against a remote branch.
* [DataformProjectsLocationsRepositoriesWorkspacesGet](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesget) - Fetches a single Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicy](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackages](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesinstallnpmpackages) - Installs dependency NPM packages (inside a Workspace).
* [DataformProjectsLocationsRepositoriesWorkspacesList](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspaceslist) - Lists Workspaces in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkspacesMakeDirectory](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesmakedirectory) - Creates a directory inside a Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesMoveDirectory](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesmovedirectory) - Moves a directory (inside a Workspace), and all of its contents, to a new location.
* [DataformProjectsLocationsRepositoriesWorkspacesMoveFile](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesmovefile) - Moves a file (inside a Workspace) to a new location.
* [DataformProjectsLocationsRepositoriesWorkspacesPull](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacespull) - Pulls Git commits from the Repository's remote into a Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesPush](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacespush) - Pushes Git commits from a Workspace to the Repository's remote.
* [DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContents](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesquerydirectorycontents) - Returns the contents of a given Workspace directory.
* [DataformProjectsLocationsRepositoriesWorkspacesReadFile](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesreadfile) - Returns the contents of a file (inside a Workspace).
* [DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectory](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesremovedirectory) - Deletes a directory (inside a Workspace) and all of its contents.
* [DataformProjectsLocationsRepositoriesWorkspacesRemoveFile](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesremovefile) - Deletes a file (inside a Workspace).
* [DataformProjectsLocationsRepositoriesWorkspacesReset](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacesreset) - Performs a Git reset for uncommitted files in a Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicy](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissions](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspacestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DataformProjectsLocationsRepositoriesWorkspacesWriteFile](docs/projects/README.md#dataformprojectslocationsrepositoriesworkspaceswritefile) - Writes to a file (inside a Workspace).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
