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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DataformProjectsLocationsListRequest{
        Security: operations.DataformProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DataformProjectsLocationsListPathParams{
            Name: "unde",
        },
        QueryParams: operations.DataformProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Filter: "perspiciatis",
            IncludeUnrevealedLocations: false,
            Key: "nulla",
            OauthToken: "nihil",
            PageSize: 623564,
            PageToken: "facilis",
            PrettyPrint: false,
            QuotaUser: "eum",
            UploadType: "iusto",
            UploadProtocol: "ullam",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DataformProjectsLocationsList(ctx, req)
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
## SDK Available Operations


### Projects

* `DataformProjectsLocationsList` - Lists information about the supported locations for this service.
* `DataformProjectsLocationsRepositoriesCompilationResultsCreate` - Creates a new CompilationResult in a given project and location.
* `DataformProjectsLocationsRepositoriesCompilationResultsList` - Lists CompilationResults in a given Repository.
* `DataformProjectsLocationsRepositoriesCreate` - Creates a new Repository in a given project and location.
* `DataformProjectsLocationsRepositoriesFetchRemoteBranches` - Fetches a Repository's remote branches.
* `DataformProjectsLocationsRepositoriesList` - Lists Repositories in a given project and location.
* `DataformProjectsLocationsRepositoriesReleaseConfigsCreate` - Creates a new ReleaseConfig in a given Repository.
* `DataformProjectsLocationsRepositoriesReleaseConfigsList` - Lists ReleaseConfigs in a given Repository.
* `DataformProjectsLocationsRepositoriesWorkflowConfigsCreate` - Creates a new WorkflowConfig in a given Repository.
* `DataformProjectsLocationsRepositoriesWorkflowConfigsList` - Lists WorkflowConfigs in a given Repository.
* `DataformProjectsLocationsRepositoriesWorkflowConfigsPatch` - Updates a single WorkflowConfig.
* `DataformProjectsLocationsRepositoriesWorkflowInvocationsCancel` - Requests cancellation of a running WorkflowInvocation.
* `DataformProjectsLocationsRepositoriesWorkflowInvocationsCreate` - Creates a new WorkflowInvocation in a given Repository.
* `DataformProjectsLocationsRepositoriesWorkflowInvocationsList` - Lists WorkflowInvocations in a given Repository.
* `DataformProjectsLocationsRepositoriesWorkflowInvocationsQuery` - Returns WorkflowInvocationActions in a given WorkflowInvocation.
* `DataformProjectsLocationsRepositoriesWorkspacesCommit` - Applies a Git commit for uncommitted files in a Workspace.
* `DataformProjectsLocationsRepositoriesWorkspacesCreate` - Creates a new Workspace in a given Repository.
* `DataformProjectsLocationsRepositoriesWorkspacesDelete` - Deletes a single Workspace.
* `DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiff` - Fetches Git diff for an uncommitted file in a Workspace.
* `DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatuses` - Fetches Git statuses for the files in a Workspace.
* `DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehind` - Fetches Git ahead/behind against a remote branch.
* `DataformProjectsLocationsRepositoriesWorkspacesGet` - Fetches a single Workspace.
* `DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackages` - Installs dependency NPM packages (inside a Workspace).
* `DataformProjectsLocationsRepositoriesWorkspacesList` - Lists Workspaces in a given Repository.
* `DataformProjectsLocationsRepositoriesWorkspacesMakeDirectory` - Creates a directory inside a Workspace.
* `DataformProjectsLocationsRepositoriesWorkspacesMoveDirectory` - Moves a directory (inside a Workspace), and all of its contents, to a new location.
* `DataformProjectsLocationsRepositoriesWorkspacesMoveFile` - Moves a file (inside a Workspace) to a new location.
* `DataformProjectsLocationsRepositoriesWorkspacesPull` - Pulls Git commits from the Repository's remote into a Workspace.
* `DataformProjectsLocationsRepositoriesWorkspacesPush` - Pushes Git commits from a Workspace to the Repository's remote.
* `DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContents` - Returns the contents of a given Workspace directory.
* `DataformProjectsLocationsRepositoriesWorkspacesReadFile` - Returns the contents of a file (inside a Workspace).
* `DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectory` - Deletes a directory (inside a Workspace) and all of its contents.
* `DataformProjectsLocationsRepositoriesWorkspacesRemoveFile` - Deletes a file (inside a Workspace).
* `DataformProjectsLocationsRepositoriesWorkspacesReset` - Performs a Git reset for uncommitted files in a Workspace.
* `DataformProjectsLocationsRepositoriesWorkspacesWriteFile` - Writes to a file (inside a Workspace).
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
