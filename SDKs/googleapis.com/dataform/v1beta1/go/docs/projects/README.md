# Projects

### Available Operations

* [DataformProjectsLocationsList](#dataformprojectslocationslist) - Lists information about the supported locations for this service.
* [DataformProjectsLocationsRepositoriesCompilationResultsCreate](#dataformprojectslocationsrepositoriescompilationresultscreate) - Creates a new CompilationResult in a given project and location.
* [DataformProjectsLocationsRepositoriesCompilationResultsList](#dataformprojectslocationsrepositoriescompilationresultslist) - Lists CompilationResults in a given Repository.
* [DataformProjectsLocationsRepositoriesCreate](#dataformprojectslocationsrepositoriescreate) - Creates a new Repository in a given project and location.
* [DataformProjectsLocationsRepositoriesFetchRemoteBranches](#dataformprojectslocationsrepositoriesfetchremotebranches) - Fetches a Repository's remote branches.
* [DataformProjectsLocationsRepositoriesList](#dataformprojectslocationsrepositorieslist) - Lists Repositories in a given project and location.
* [DataformProjectsLocationsRepositoriesReleaseConfigsCreate](#dataformprojectslocationsrepositoriesreleaseconfigscreate) - Creates a new ReleaseConfig in a given Repository.
* [DataformProjectsLocationsRepositoriesReleaseConfigsList](#dataformprojectslocationsrepositoriesreleaseconfigslist) - Lists ReleaseConfigs in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkflowConfigsCreate](#dataformprojectslocationsrepositoriesworkflowconfigscreate) - Creates a new WorkflowConfig in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkflowConfigsList](#dataformprojectslocationsrepositoriesworkflowconfigslist) - Lists WorkflowConfigs in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkflowConfigsPatch](#dataformprojectslocationsrepositoriesworkflowconfigspatch) - Updates a single WorkflowConfig.
* [DataformProjectsLocationsRepositoriesWorkflowInvocationsCancel](#dataformprojectslocationsrepositoriesworkflowinvocationscancel) - Requests cancellation of a running WorkflowInvocation.
* [DataformProjectsLocationsRepositoriesWorkflowInvocationsCreate](#dataformprojectslocationsrepositoriesworkflowinvocationscreate) - Creates a new WorkflowInvocation in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkflowInvocationsList](#dataformprojectslocationsrepositoriesworkflowinvocationslist) - Lists WorkflowInvocations in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkflowInvocationsQuery](#dataformprojectslocationsrepositoriesworkflowinvocationsquery) - Returns WorkflowInvocationActions in a given WorkflowInvocation.
* [DataformProjectsLocationsRepositoriesWorkspacesCommit](#dataformprojectslocationsrepositoriesworkspacescommit) - Applies a Git commit for uncommitted files in a Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesCreate](#dataformprojectslocationsrepositoriesworkspacescreate) - Creates a new Workspace in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkspacesDelete](#dataformprojectslocationsrepositoriesworkspacesdelete) - Deletes a single Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiff](#dataformprojectslocationsrepositoriesworkspacesfetchfilediff) - Fetches Git diff for an uncommitted file in a Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatuses](#dataformprojectslocationsrepositoriesworkspacesfetchfilegitstatuses) - Fetches Git statuses for the files in a Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehind](#dataformprojectslocationsrepositoriesworkspacesfetchgitaheadbehind) - Fetches Git ahead/behind against a remote branch.
* [DataformProjectsLocationsRepositoriesWorkspacesGet](#dataformprojectslocationsrepositoriesworkspacesget) - Fetches a single Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicy](#dataformprojectslocationsrepositoriesworkspacesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackages](#dataformprojectslocationsrepositoriesworkspacesinstallnpmpackages) - Installs dependency NPM packages (inside a Workspace).
* [DataformProjectsLocationsRepositoriesWorkspacesList](#dataformprojectslocationsrepositoriesworkspaceslist) - Lists Workspaces in a given Repository.
* [DataformProjectsLocationsRepositoriesWorkspacesMakeDirectory](#dataformprojectslocationsrepositoriesworkspacesmakedirectory) - Creates a directory inside a Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesMoveDirectory](#dataformprojectslocationsrepositoriesworkspacesmovedirectory) - Moves a directory (inside a Workspace), and all of its contents, to a new location.
* [DataformProjectsLocationsRepositoriesWorkspacesMoveFile](#dataformprojectslocationsrepositoriesworkspacesmovefile) - Moves a file (inside a Workspace) to a new location.
* [DataformProjectsLocationsRepositoriesWorkspacesPull](#dataformprojectslocationsrepositoriesworkspacespull) - Pulls Git commits from the Repository's remote into a Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesPush](#dataformprojectslocationsrepositoriesworkspacespush) - Pushes Git commits from a Workspace to the Repository's remote.
* [DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContents](#dataformprojectslocationsrepositoriesworkspacesquerydirectorycontents) - Returns the contents of a given Workspace directory.
* [DataformProjectsLocationsRepositoriesWorkspacesReadFile](#dataformprojectslocationsrepositoriesworkspacesreadfile) - Returns the contents of a file (inside a Workspace).
* [DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectory](#dataformprojectslocationsrepositoriesworkspacesremovedirectory) - Deletes a directory (inside a Workspace) and all of its contents.
* [DataformProjectsLocationsRepositoriesWorkspacesRemoveFile](#dataformprojectslocationsrepositoriesworkspacesremovefile) - Deletes a file (inside a Workspace).
* [DataformProjectsLocationsRepositoriesWorkspacesReset](#dataformprojectslocationsrepositoriesworkspacesreset) - Performs a Git reset for uncommitted files in a Workspace.
* [DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicy](#dataformprojectslocationsrepositoriesworkspacessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissions](#dataformprojectslocationsrepositoriesworkspacestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DataformProjectsLocationsRepositoriesWorkspacesWriteFile](#dataformprojectslocationsrepositoriesworkspaceswritefile) - Writes to a file (inside a Workspace).

## DataformProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        Name: "Mrs. Sophie Smith MD",
        OauthToken: sdk.String("perferendis"),
        PageSize: sdk.Int64(368241),
        PageToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
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

## DataformProjectsLocationsRepositoriesCompilationResultsCreate

Creates a new CompilationResult in a given project and location.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesCompilationResultsCreate(ctx, operations.DataformProjectsLocationsRepositoriesCompilationResultsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CompilationResultInput: &shared.CompilationResultInput{
            CodeCompilationConfig: &shared.CodeCompilationConfig{
                AssertionSchema: sdk.String("at"),
                DatabaseSuffix: sdk.String("maiores"),
                DefaultDatabase: sdk.String("molestiae"),
                DefaultLocation: sdk.String("quod"),
                DefaultSchema: sdk.String("quod"),
                SchemaSuffix: sdk.String("esse"),
                TablePrefix: sdk.String("totam"),
                Vars: map[string]string{
                    "dolorum": "dicta",
                    "nam": "officia",
                    "occaecati": "fugit",
                    "deleniti": "hic",
                },
            },
            GitCommitish: sdk.String("optio"),
            ReleaseConfig: sdk.String("totam"),
            Workspace: sdk.String("beatae"),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("cum"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.DataformProjectsLocationsRepositoriesCompilationResultsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompilationResult != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesCompilationResultsList

Lists CompilationResults in a given Repository.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesCompilationResultsList(ctx, operations.DataformProjectsLocationsRepositoriesCompilationResultsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("iste"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(386489),
        PageToken: sdk.String("hic"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.DataformProjectsLocationsRepositoriesCompilationResultsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCompilationResultsResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesCreate

Creates a new Repository in a given project and location.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesCreate(ctx, operations.DataformProjectsLocationsRepositoriesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RepositoryInput: &shared.RepositoryInput{
            GitRemoteSettings: &shared.GitRemoteSettingsInput{
                AuthenticationTokenSecretVersion: sdk.String("iure"),
                DefaultBranch: sdk.String("saepe"),
                URL: sdk.String("quidem"),
            },
            NpmrcEnvironmentVariablesSecretVersion: sdk.String("architecto"),
            WorkspaceCompilationOverrides: &shared.WorkspaceCompilationOverrides{
                DefaultDatabase: sdk.String("ipsa"),
                SchemaSuffix: sdk.String("reiciendis"),
                TablePrefix: sdk.String("est"),
            },
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("explicabo"),
        Parent: "nobis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        RepositoryID: sdk.String("omnis"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("minima"),
    }, operations.DataformProjectsLocationsRepositoriesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Repository != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesFetchRemoteBranches

Fetches a Repository's remote branches.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesFetchRemoteBranches(ctx, operations.DataformProjectsLocationsRepositoriesFetchRemoteBranchesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("sapiente"),
        Name: "Angie Durgan",
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.DataformProjectsLocationsRepositoriesFetchRemoteBranchesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchRemoteBranchesResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesList

Lists Repositories in a given project and location.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesList(ctx, operations.DataformProjectsLocationsRepositoriesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Filter: sdk.String("quia"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("vitae"),
        OrderBy: sdk.String("laborum"),
        PageSize: sdk.Int64(656330),
        PageToken: sdk.String("enim"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.DataformProjectsLocationsRepositoriesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRepositoriesResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesReleaseConfigsCreate

Creates a new ReleaseConfig in a given Repository.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesReleaseConfigsCreate(ctx, operations.DataformProjectsLocationsRepositoriesReleaseConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReleaseConfigInput: &shared.ReleaseConfigInput{
            CodeCompilationConfig: &shared.CodeCompilationConfig{
                AssertionSchema: sdk.String("id"),
                DatabaseSuffix: sdk.String("possimus"),
                DefaultDatabase: sdk.String("aut"),
                DefaultLocation: sdk.String("quasi"),
                DefaultSchema: sdk.String("error"),
                SchemaSuffix: sdk.String("temporibus"),
                TablePrefix: sdk.String("laborum"),
                Vars: map[string]string{
                    "reiciendis": "voluptatibus",
                },
            },
            CronSchedule: sdk.String("vero"),
            GitCommitish: sdk.String("nihil"),
            ReleaseCompilationResult: sdk.String("praesentium"),
            TimeZone: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("cum"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("doloremque"),
        Parent: "reprehenderit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        ReleaseConfigID: sdk.String("maiores"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.DataformProjectsLocationsRepositoriesReleaseConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseConfig != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesReleaseConfigsList

Lists ReleaseConfigs in a given Repository.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesReleaseConfigsList(ctx, operations.DataformProjectsLocationsRepositoriesReleaseConfigsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("commodi"),
        PageSize: sdk.Int64(918236),
        PageToken: sdk.String("quae"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.DataformProjectsLocationsRepositoriesReleaseConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReleaseConfigsResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkflowConfigsCreate

Creates a new WorkflowConfig in a given Repository.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkflowConfigsCreate(ctx, operations.DataformProjectsLocationsRepositoriesWorkflowConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WorkflowConfigInput: &shared.WorkflowConfigInput{
            CronSchedule: sdk.String("modi"),
            InvocationConfig: &shared.InvocationConfig{
                FullyRefreshIncrementalTablesEnabled: sdk.Bool(false),
                IncludedTags: []string{
                    "rem",
                    "voluptates",
                    "quasi",
                },
                IncludedTargets: []shared.Target{
                    shared.Target{
                        Database: sdk.String("sint"),
                        Name: sdk.String("Patti Gottlieb MD"),
                        Schema: sdk.String("quibusdam"),
                    },
                    shared.Target{
                        Database: sdk.String("explicabo"),
                        Name: sdk.String("Rudy Spencer"),
                        Schema: sdk.String("qui"),
                    },
                    shared.Target{
                        Database: sdk.String("aliquid"),
                        Name: sdk.String("Isaac Aufderhar"),
                        Schema: sdk.String("ipsam"),
                    },
                    shared.Target{
                        Database: sdk.String("alias"),
                        Name: sdk.String("Sonya Marks"),
                        Schema: sdk.String("tempore"),
                    },
                },
                TransitiveDependenciesIncluded: sdk.Bool(false),
                TransitiveDependentsIncluded: sdk.Bool(false),
            },
            ReleaseConfig: sdk.String("labore"),
            TimeZone: sdk.String("delectus"),
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("sint"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("provident"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("dolor"),
        WorkflowConfigID: sdk.String("debitis"),
    }, operations.DataformProjectsLocationsRepositoriesWorkflowConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowConfig != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkflowConfigsList

Lists WorkflowConfigs in a given Repository.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkflowConfigsList(ctx, operations.DataformProjectsLocationsRepositoriesWorkflowConfigsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("illum"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("rerum"),
        PageSize: sdk.Int64(116202),
        PageToken: sdk.String("magnam"),
        Parent: "cumque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.DataformProjectsLocationsRepositoriesWorkflowConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkflowConfigsResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkflowConfigsPatch

Updates a single WorkflowConfig.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkflowConfigsPatch(ctx, operations.DataformProjectsLocationsRepositoriesWorkflowConfigsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WorkflowConfigInput: &shared.WorkflowConfigInput{
            CronSchedule: sdk.String("accusamus"),
            InvocationConfig: &shared.InvocationConfig{
                FullyRefreshIncrementalTablesEnabled: sdk.Bool(false),
                IncludedTags: []string{
                    "occaecati",
                },
                IncludedTargets: []shared.Target{
                    shared.Target{
                        Database: sdk.String("accusamus"),
                        Name: sdk.String("Abraham McKenzie"),
                        Schema: sdk.String("blanditiis"),
                    },
                    shared.Target{
                        Database: sdk.String("deleniti"),
                        Name: sdk.String("Vincent Nolan"),
                        Schema: sdk.String("natus"),
                    },
                },
                TransitiveDependenciesIncluded: sdk.Bool(false),
                TransitiveDependentsIncluded: sdk.Bool(false),
            },
            ReleaseConfig: sdk.String("omnis"),
            TimeZone: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("id"),
        Name: "Jamie Hoppe",
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UpdateMask: sdk.String("aspernatur"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.DataformProjectsLocationsRepositoriesWorkflowConfigsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowConfig != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkflowInvocationsCancel

Requests cancellation of a running WorkflowInvocation.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkflowInvocationsCancel(ctx, operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "ullam": "provident",
            "quos": "sint",
            "accusantium": "mollitia",
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("eum"),
        Key: sdk.String("dolor"),
        Name: "Ms. Fred Hilll",
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkflowInvocationsCreate

Creates a new WorkflowInvocation in a given Repository.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkflowInvocationsCreate(ctx, operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WorkflowInvocationInput: &shared.WorkflowInvocationInput{
            CompilationResult: sdk.String("in"),
            InvocationConfig: &shared.InvocationConfig{
                FullyRefreshIncrementalTablesEnabled: sdk.Bool(false),
                IncludedTags: []string{
                    "architecto",
                },
                IncludedTargets: []shared.Target{
                    shared.Target{
                        Database: sdk.String("ullam"),
                        Name: sdk.String("Jessie Zulauf"),
                        Schema: sdk.String("saepe"),
                    },
                    shared.Target{
                        Database: sdk.String("pariatur"),
                        Name: sdk.String("Kathryn Lang"),
                        Schema: sdk.String("sunt"),
                    },
                    shared.Target{
                        Database: sdk.String("quo"),
                        Name: sdk.String("Ervin Schoen"),
                        Schema: sdk.String("odit"),
                    },
                    shared.Target{
                        Database: sdk.String("ea"),
                        Name: sdk.String("Virginia Wunsch"),
                        Schema: sdk.String("voluptate"),
                    },
                },
                TransitiveDependenciesIncluded: sdk.Bool(false),
                TransitiveDependentsIncluded: sdk.Bool(false),
            },
            InvocationTiming: &shared.Interval{
                EndTime: sdk.String("autem"),
                StartTime: sdk.String("nam"),
            },
            WorkflowConfig: sdk.String("eaque"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("amet"),
        Parent: "aut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("hic"),
    }, operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowInvocation != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkflowInvocationsList

Lists WorkflowInvocations in a given Repository.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkflowInvocationsList(ctx, operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("totam"),
        Filter: sdk.String("dignissimos"),
        Key: sdk.String("eaque"),
        OauthToken: sdk.String("quis"),
        OrderBy: sdk.String("nesciunt"),
        PageSize: sdk.Int64(179490),
        PageToken: sdk.String("perferendis"),
        Parent: "dolores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkflowInvocationsResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkflowInvocationsQuery

Returns WorkflowInvocationActions in a given WorkflowInvocation.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkflowInvocationsQuery(ctx, operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("facilis"),
        Name: "George Sawayn",
        OauthToken: sdk.String("error"),
        PageSize: sdk.Int64(50370),
        PageToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsQuerySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryWorkflowInvocationActionsResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesCommit

Applies a Git commit for uncommitted files in a Workspace.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesCommit(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesCommitRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CommitWorkspaceChangesRequest: &shared.CommitWorkspaceChangesRequest{
            Author: &shared.CommitAuthor{
                EmailAddress: sdk.String("modi"),
                Name: sdk.String("Omar Leuschke"),
            },
            CommitMessage: sdk.String("nobis"),
            Paths: []string{
                "delectus",
                "quaerat",
                "quos",
            },
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("qui"),
        Name: "Mindy Marks",
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesCommitSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesCreate

Creates a new Workspace in a given Repository.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesCreate(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("iure"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("quaerat"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("voluptas"),
        WorkspaceID: sdk.String("natus"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Workspace != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesDelete

Deletes a single Workspace.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesDelete(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("ab"),
        Force: sdk.Bool(false),
        Key: sdk.String("soluta"),
        Name: "Ted Kling",
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiff

Fetches Git diff for an uncommitted file in a Workspace.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiff(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("aspernatur"),
        Path: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("accusamus"),
        Workspace: "ad",
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchFileDiffResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatuses

Fetches Git statuses for the files in a Workspace.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatuses(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("minima"),
        Key: sdk.String("repellendus"),
        Name: "Donnie Abbott",
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchFileGitStatusesResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehind

Fetches Git ahead/behind against a remote branch.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehind(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("harum"),
        Key: sdk.String("iusto"),
        Name: "Rosalie White",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        RemoteBranch: sdk.String("enim"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchGitAheadBehindResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesGet

Fetches a single Workspace.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesGet(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("neque"),
        Key: sdk.String("sed"),
        Name: "Kelli Hintz",
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Workspace != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicy(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("incidunt"),
        OptionsRequestedPolicyVersion: sdk.Int64(132068),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        Resource: "distinctio",
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackages

Installs dependency NPM packages (inside a Workspace).

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackages(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "temporibus": "qui",
            "neque": "fugit",
            "magni": "odio",
        },
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("hic"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("et"),
        Workspace: "saepe",
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallNpmPackagesResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesList

Lists Workspaces in a given Repository.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesList(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("tempore"),
        Filter: sdk.String("cupiditate"),
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("delectus"),
        OrderBy: sdk.String("dolorem"),
        PageSize: sdk.Int64(292147),
        PageToken: sdk.String("labore"),
        Parent: "adipisci",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("quae"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkspacesResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesMakeDirectory

Creates a directory inside a Workspace.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesMakeDirectory(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesMakeDirectoryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MakeDirectoryRequest: &shared.MakeDirectoryRequest{
            Path: sdk.String("quas"),
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("cupiditate"),
        Workspace: "qui",
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesMakeDirectorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MakeDirectoryResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesMoveDirectory

Moves a directory (inside a Workspace), and all of its contents, to a new location.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesMoveDirectory(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesMoveDirectoryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MoveDirectoryRequest: &shared.MoveDirectoryRequest{
            NewPath: sdk.String("laudantium"),
            Path: sdk.String("odio"),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("vero"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("voluptate"),
        Workspace: "consectetur",
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesMoveDirectorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveDirectoryResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesMoveFile

Moves a file (inside a Workspace) to a new location.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesMoveFile(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesMoveFileRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        MoveFileRequest: &shared.MoveFileRequest{
            NewPath: sdk.String("tenetur"),
            Path: sdk.String("dignissimos"),
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("odio"),
        Key: sdk.String("similique"),
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("dolore"),
        Workspace: "quibusdam",
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesMoveFileSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveFileResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesPull

Pulls Git commits from the Repository's remote into a Workspace.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesPull(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesPullRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PullGitCommitsRequest: &shared.PullGitCommitsRequest{
            Author: &shared.CommitAuthor{
                EmailAddress: sdk.String("sequi"),
                Name: sdk.String("Edmund Ankunding"),
            },
            RemoteBranch: sdk.String("nulla"),
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("iusto"),
        Name: "Kurt Abernathy",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("vel"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesPullSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesPush

Pushes Git commits from a Workspace to the Repository's remote.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesPush(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesPushRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PushGitCommitsRequest: &shared.PushGitCommitsRequest{
            RemoteBranch: sdk.String("magnam"),
        },
        AccessToken: sdk.String("ratione"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("dolor"),
        Name: "Ryan Jaskolski",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesPushSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContents

Returns the contents of a given Workspace directory.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContents(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("inventore"),
        PageSize: sdk.Int64(301831),
        PageToken: sdk.String("ea"),
        Path: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("aspernatur"),
        Workspace: "minima",
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryDirectoryContentsResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesReadFile

Returns the contents of a file (inside a Workspace).

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesReadFile(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesReadFileRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("aut"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("impedit"),
        Path: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("inventore"),
        Workspace: "non",
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesReadFileSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReadFileResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectory

Deletes a directory (inside a Workspace) and all of its contents.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectory(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectoryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemoveDirectoryRequest: &shared.RemoveDirectoryRequest{
            Path: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("eum"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("nulla"),
        Workspace: "voluptas",
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesRemoveFile

Deletes a file (inside a Workspace).

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesRemoveFile(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesRemoveFileRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemoveFileRequest: &shared.RemoveFileRequest{
            Path: sdk.String("quasi"),
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("provident"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("eius"),
        Workspace: "esse",
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesRemoveFileSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesReset

Performs a Git reset for uncommitted files in a Workspace.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesReset(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesResetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ResetWorkspaceChangesRequest: &shared.ResetWorkspaceChangesRequest{
            Clean: sdk.Bool(false),
            Paths: []string{
                "fuga",
                "reprehenderit",
                "quidem",
            },
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("assumenda"),
        Name: "Mr. Irma Schaefer",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("illum"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesResetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicy(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("eius"),
                            Expression: sdk.String("eos"),
                            Location: sdk.String("voluptas"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "consequatur",
                            "tempora",
                            "debitis",
                        },
                        Role: sdk.String("ipsam"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("aspernatur"),
                            Expression: sdk.String("sequi"),
                            Location: sdk.String("quo"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "aperiam",
                            "distinctio",
                            "quod",
                            "dignissimos",
                        },
                        Role: sdk.String("inventore"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("nihil"),
                            Expression: sdk.String("totam"),
                            Location: sdk.String("accusamus"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "occaecati",
                            "commodi",
                        },
                        Role: sdk.String("sapiente"),
                    },
                },
                Etag: sdk.String("dolores"),
                Version: sdk.Int(645570),
            },
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("eum"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        Resource: "deleniti",
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissions(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "atque",
                "explicabo",
            },
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        Resource: "saepe",
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("atque"),
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## DataformProjectsLocationsRepositoriesWorkspacesWriteFile

Writes to a file (inside a Workspace).

### Example Usage

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
    res, err := s.Projects.DataformProjectsLocationsRepositoriesWorkspacesWriteFile(ctx, operations.DataformProjectsLocationsRepositoriesWorkspacesWriteFileRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WriteFileRequest: &shared.WriteFileRequest{
            Contents: sdk.String("esse"),
            Path: sdk.String("eveniet"),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("quod"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("saepe"),
        Workspace: "vel",
    }, operations.DataformProjectsLocationsRepositoriesWorkspacesWriteFileSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WriteFileResponse != nil {
        // handle response
    }
}
```
