# projects

### Available Operations

* [dataformProjectsLocationsList](#dataformprojectslocationslist) - Lists information about the supported locations for this service.
* [dataformProjectsLocationsRepositoriesCompilationResultsCreate](#dataformprojectslocationsrepositoriescompilationresultscreate) - Creates a new CompilationResult in a given project and location.
* [dataformProjectsLocationsRepositoriesCompilationResultsList](#dataformprojectslocationsrepositoriescompilationresultslist) - Lists CompilationResults in a given Repository.
* [dataformProjectsLocationsRepositoriesCreate](#dataformprojectslocationsrepositoriescreate) - Creates a new Repository in a given project and location.
* [dataformProjectsLocationsRepositoriesFetchRemoteBranches](#dataformprojectslocationsrepositoriesfetchremotebranches) - Fetches a Repository's remote branches.
* [dataformProjectsLocationsRepositoriesList](#dataformprojectslocationsrepositorieslist) - Lists Repositories in a given project and location.
* [dataformProjectsLocationsRepositoriesReleaseConfigsCreate](#dataformprojectslocationsrepositoriesreleaseconfigscreate) - Creates a new ReleaseConfig in a given Repository.
* [dataformProjectsLocationsRepositoriesReleaseConfigsList](#dataformprojectslocationsrepositoriesreleaseconfigslist) - Lists ReleaseConfigs in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowConfigsCreate](#dataformprojectslocationsrepositoriesworkflowconfigscreate) - Creates a new WorkflowConfig in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowConfigsList](#dataformprojectslocationsrepositoriesworkflowconfigslist) - Lists WorkflowConfigs in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowConfigsPatch](#dataformprojectslocationsrepositoriesworkflowconfigspatch) - Updates a single WorkflowConfig.
* [dataformProjectsLocationsRepositoriesWorkflowInvocationsCancel](#dataformprojectslocationsrepositoriesworkflowinvocationscancel) - Requests cancellation of a running WorkflowInvocation.
* [dataformProjectsLocationsRepositoriesWorkflowInvocationsCreate](#dataformprojectslocationsrepositoriesworkflowinvocationscreate) - Creates a new WorkflowInvocation in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowInvocationsList](#dataformprojectslocationsrepositoriesworkflowinvocationslist) - Lists WorkflowInvocations in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkflowInvocationsQuery](#dataformprojectslocationsrepositoriesworkflowinvocationsquery) - Returns WorkflowInvocationActions in a given WorkflowInvocation.
* [dataformProjectsLocationsRepositoriesWorkspacesCommit](#dataformprojectslocationsrepositoriesworkspacescommit) - Applies a Git commit for uncommitted files in a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesCreate](#dataformprojectslocationsrepositoriesworkspacescreate) - Creates a new Workspace in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkspacesDelete](#dataformprojectslocationsrepositoriesworkspacesdelete) - Deletes a single Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesFetchFileDiff](#dataformprojectslocationsrepositoriesworkspacesfetchfilediff) - Fetches Git diff for an uncommitted file in a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatuses](#dataformprojectslocationsrepositoriesworkspacesfetchfilegitstatuses) - Fetches Git statuses for the files in a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehind](#dataformprojectslocationsrepositoriesworkspacesfetchgitaheadbehind) - Fetches Git ahead/behind against a remote branch.
* [dataformProjectsLocationsRepositoriesWorkspacesGet](#dataformprojectslocationsrepositoriesworkspacesget) - Fetches a single Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesGetIamPolicy](#dataformprojectslocationsrepositoriesworkspacesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [dataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackages](#dataformprojectslocationsrepositoriesworkspacesinstallnpmpackages) - Installs dependency NPM packages (inside a Workspace).
* [dataformProjectsLocationsRepositoriesWorkspacesList](#dataformprojectslocationsrepositoriesworkspaceslist) - Lists Workspaces in a given Repository.
* [dataformProjectsLocationsRepositoriesWorkspacesMakeDirectory](#dataformprojectslocationsrepositoriesworkspacesmakedirectory) - Creates a directory inside a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesMoveDirectory](#dataformprojectslocationsrepositoriesworkspacesmovedirectory) - Moves a directory (inside a Workspace), and all of its contents, to a new location.
* [dataformProjectsLocationsRepositoriesWorkspacesMoveFile](#dataformprojectslocationsrepositoriesworkspacesmovefile) - Moves a file (inside a Workspace) to a new location.
* [dataformProjectsLocationsRepositoriesWorkspacesPull](#dataformprojectslocationsrepositoriesworkspacespull) - Pulls Git commits from the Repository's remote into a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesPush](#dataformprojectslocationsrepositoriesworkspacespush) - Pushes Git commits from a Workspace to the Repository's remote.
* [dataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContents](#dataformprojectslocationsrepositoriesworkspacesquerydirectorycontents) - Returns the contents of a given Workspace directory.
* [dataformProjectsLocationsRepositoriesWorkspacesReadFile](#dataformprojectslocationsrepositoriesworkspacesreadfile) - Returns the contents of a file (inside a Workspace).
* [dataformProjectsLocationsRepositoriesWorkspacesRemoveDirectory](#dataformprojectslocationsrepositoriesworkspacesremovedirectory) - Deletes a directory (inside a Workspace) and all of its contents.
* [dataformProjectsLocationsRepositoriesWorkspacesRemoveFile](#dataformprojectslocationsrepositoriesworkspacesremovefile) - Deletes a file (inside a Workspace).
* [dataformProjectsLocationsRepositoriesWorkspacesReset](#dataformprojectslocationsrepositoriesworkspacesreset) - Performs a Git reset for uncommitted files in a Workspace.
* [dataformProjectsLocationsRepositoriesWorkspacesSetIamPolicy](#dataformprojectslocationsrepositoriesworkspacessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [dataformProjectsLocationsRepositoriesWorkspacesTestIamPermissions](#dataformprojectslocationsrepositoriesworkspacestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [dataformProjectsLocationsRepositoriesWorkspacesWriteFile](#dataformprojectslocationsrepositoriesworkspaceswritefile) - Writes to a file (inside a Workspace).

## dataformProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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

            DataformProjectsLocationsListRequest req = new DataformProjectsLocationsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            DataformProjectsLocationsListResponse res = sdk.projects.dataformProjectsLocationsList(req, new DataformProjectsLocationsListSecurity("veritatis", "deserunt") {{
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

## dataformProjectsLocationsRepositoriesCompilationResultsCreate

Creates a new CompilationResult in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesCompilationResultsCreateRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesCompilationResultsCreateResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesCompilationResultsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CodeCompilationConfig;
import org.openapis.openapi.models.shared.CompilationResultInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesCompilationResultsCreateRequest req = new DataformProjectsLocationsRepositoriesCompilationResultsCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                compilationResultInput = new CompilationResultInput() {{
                    codeCompilationConfig = new CodeCompilationConfig() {{
                        assertionSchema = "repellendus";
                        databaseSuffix = "sapiente";
                        defaultDatabase = "quo";
                        defaultLocation = "odit";
                        defaultSchema = "at";
                        schemaSuffix = "at";
                        tablePrefix = "maiores";
                        vars = new java.util.HashMap<String, String>() {{
                            put("quod", "quod");
                            put("esse", "totam");
                        }};
                    }};;
                    gitCommitish = "porro";
                    releaseConfig = "dolorum";
                    workspace = "dicta";
                }};;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "fugit";
                key = "deleniti";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "totam";
                uploadProtocol = "beatae";
            }};            

            DataformProjectsLocationsRepositoriesCompilationResultsCreateResponse res = sdk.projects.dataformProjectsLocationsRepositoriesCompilationResultsCreate(req, new DataformProjectsLocationsRepositoriesCompilationResultsCreateSecurity("commodi", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.compilationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesCompilationResultsList

Lists CompilationResults in a given Repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesCompilationResultsListRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesCompilationResultsListResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesCompilationResultsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesCompilationResultsListRequest req = new DataformProjectsLocationsRepositoriesCompilationResultsListRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "ipsum";
                key = "excepturi";
                oauthToken = "aspernatur";
                pageSize = 18789L;
                pageToken = "ad";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "sed";
                uploadProtocol = "iste";
            }};            

            DataformProjectsLocationsRepositoriesCompilationResultsListResponse res = sdk.projects.dataformProjectsLocationsRepositoriesCompilationResultsList(req, new DataformProjectsLocationsRepositoriesCompilationResultsListSecurity("dolor", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCompilationResultsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesCreate

Creates a new Repository in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesCreateRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesCreateResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GitRemoteSettingsInput;
import org.openapis.openapi.models.shared.RepositoryInput;
import org.openapis.openapi.models.shared.WorkspaceCompilationOverrides;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesCreateRequest req = new DataformProjectsLocationsRepositoriesCreateRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                repositoryInput = new RepositoryInput() {{
                    gitRemoteSettings = new GitRemoteSettingsInput() {{
                        authenticationTokenSecretVersion = "saepe";
                        defaultBranch = "fuga";
                        url = "in";
                    }};;
                    npmrcEnvironmentVariablesSecretVersion = "corporis";
                    workspaceCompilationOverrides = new WorkspaceCompilationOverrides() {{
                        defaultDatabase = "iste";
                        schemaSuffix = "iure";
                        tablePrefix = "saepe";
                    }};;
                }};;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "reiciendis";
                key = "est";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "laborum";
                repositoryId = "dolores";
                uploadType = "dolorem";
                uploadProtocol = "corporis";
            }};            

            DataformProjectsLocationsRepositoriesCreateResponse res = sdk.projects.dataformProjectsLocationsRepositoriesCreate(req, new DataformProjectsLocationsRepositoriesCreateSecurity("explicabo", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.repository != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesFetchRemoteBranches

Fetches a Repository's remote branches.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesFetchRemoteBranchesRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesFetchRemoteBranchesResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesFetchRemoteBranchesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesFetchRemoteBranchesRequest req = new DataformProjectsLocationsRepositoriesFetchRemoteBranchesRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "accusantium";
                key = "iure";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "sapiente";
                uploadProtocol = "architecto";
            }};            

            DataformProjectsLocationsRepositoriesFetchRemoteBranchesResponse res = sdk.projects.dataformProjectsLocationsRepositoriesFetchRemoteBranches(req, new DataformProjectsLocationsRepositoriesFetchRemoteBranchesSecurity("mollitia", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fetchRemoteBranchesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesList

Lists Repositories in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesListRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesListResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesListRequest req = new DataformProjectsLocationsRepositoriesListRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "numquam";
                filter = "commodi";
                key = "quam";
                oauthToken = "molestiae";
                orderBy = "velit";
                pageSize = 623510L;
                pageToken = "quia";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "vitae";
                uploadProtocol = "laborum";
            }};            

            DataformProjectsLocationsRepositoriesListResponse res = sdk.projects.dataformProjectsLocationsRepositoriesList(req, new DataformProjectsLocationsRepositoriesListSecurity("animi", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRepositoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesReleaseConfigsCreate

Creates a new ReleaseConfig in a given Repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesReleaseConfigsCreateRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesReleaseConfigsCreateResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesReleaseConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CodeCompilationConfig;
import org.openapis.openapi.models.shared.ReleaseConfigInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesReleaseConfigsCreateRequest req = new DataformProjectsLocationsRepositoriesReleaseConfigsCreateRequest("odit") {{
                dollarXgafv = XgafvEnum.TWO;
                releaseConfigInput = new ReleaseConfigInput() {{
                    codeCompilationConfig = new CodeCompilationConfig() {{
                        assertionSchema = "sequi";
                        databaseSuffix = "tenetur";
                        defaultDatabase = "ipsam";
                        defaultLocation = "id";
                        defaultSchema = "possimus";
                        schemaSuffix = "aut";
                        tablePrefix = "quasi";
                        vars = new java.util.HashMap<String, String>() {{
                            put("temporibus", "laborum");
                            put("quasi", "reiciendis");
                            put("voluptatibus", "vero");
                        }};
                    }};;
                    cronSchedule = "nihil";
                    gitCommitish = "praesentium";
                    releaseCompilationResult = "voluptatibus";
                    timeZone = "ipsa";
                }};;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "perferendis";
                key = "doloremque";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "ut";
                releaseConfigId = "maiores";
                uploadType = "dicta";
                uploadProtocol = "corporis";
            }};            

            DataformProjectsLocationsRepositoriesReleaseConfigsCreateResponse res = sdk.projects.dataformProjectsLocationsRepositoriesReleaseConfigsCreate(req, new DataformProjectsLocationsRepositoriesReleaseConfigsCreateSecurity("dolore", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.releaseConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesReleaseConfigsList

Lists ReleaseConfigs in a given Repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesReleaseConfigsListRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesReleaseConfigsListResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesReleaseConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesReleaseConfigsListRequest req = new DataformProjectsLocationsRepositoriesReleaseConfigsListRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "repudiandae";
                key = "quae";
                oauthToken = "ipsum";
                pageSize = 692472L;
                pageToken = "molestias";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
            }};            

            DataformProjectsLocationsRepositoriesReleaseConfigsListResponse res = sdk.projects.dataformProjectsLocationsRepositoriesReleaseConfigsList(req, new DataformProjectsLocationsRepositoriesReleaseConfigsListSecurity("praesentium", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listReleaseConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkflowConfigsCreate

Creates a new WorkflowConfig in a given Repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowConfigsCreateRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowConfigsCreateResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InvocationConfig;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.WorkflowConfigInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkflowConfigsCreateRequest req = new DataformProjectsLocationsRepositoriesWorkflowConfigsCreateRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                workflowConfigInput = new WorkflowConfigInput() {{
                    cronSchedule = "repudiandae";
                    invocationConfig = new InvocationConfig() {{
                        fullyRefreshIncrementalTablesEnabled = false;
                        includedTags = new String[]{{
                            add("veritatis"),
                            add("itaque"),
                            add("incidunt"),
                        }};
                        includedTargets = new org.openapis.openapi.models.shared.Target[]{{
                            add(new Target() {{
                                database = "consequatur";
                                name = "Taylor Cole";
                                schema = "quibusdam";
                            }}),
                            add(new Target() {{
                                database = "labore";
                                name = "Tina Jacobi";
                                schema = "perferendis";
                            }}),
                        }};
                        transitiveDependenciesIncluded = false;
                        transitiveDependentsIncluded = false;
                    }};;
                    releaseConfig = "magni";
                    timeZone = "assumenda";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "dolorum";
                key = "excepturi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "labore";
                workflowConfigId = "delectus";
            }};            

            DataformProjectsLocationsRepositoriesWorkflowConfigsCreateResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkflowConfigsCreate(req, new DataformProjectsLocationsRepositoriesWorkflowConfigsCreateSecurity("eum", "non") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workflowConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkflowConfigsList

Lists WorkflowConfigs in a given Repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowConfigsListRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowConfigsListResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkflowConfigsListRequest req = new DataformProjectsLocationsRepositoriesWorkflowConfigsListRequest("eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "necessitatibus";
                fields = "sint";
                key = "officia";
                oauthToken = "dolor";
                pageSize = 891555L;
                pageToken = "a";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "in";
                uploadProtocol = "in";
            }};            

            DataformProjectsLocationsRepositoriesWorkflowConfigsListResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkflowConfigsList(req, new DataformProjectsLocationsRepositoriesWorkflowConfigsListSecurity("illum", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listWorkflowConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkflowConfigsPatch

Updates a single WorkflowConfig.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowConfigsPatchRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowConfigsPatchResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowConfigsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InvocationConfig;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.WorkflowConfigInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkflowConfigsPatchRequest req = new DataformProjectsLocationsRepositoriesWorkflowConfigsPatchRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                workflowConfigInput = new WorkflowConfigInput() {{
                    cronSchedule = "magnam";
                    invocationConfig = new InvocationConfig() {{
                        fullyRefreshIncrementalTablesEnabled = false;
                        includedTags = new String[]{{
                            add("facere"),
                            add("ea"),
                            add("aliquid"),
                            add("laborum"),
                        }};
                        includedTargets = new org.openapis.openapi.models.shared.Target[]{{
                            add(new Target() {{
                                database = "non";
                                name = "Jon Tillman";
                                schema = "provident";
                            }}),
                            add(new Target() {{
                                database = "nam";
                                name = "Nelson Lesch";
                                schema = "deserunt";
                            }}),
                            add(new Target() {{
                                database = "nisi";
                                name = "Ada Moen IV";
                                schema = "magnam";
                            }}),
                            add(new Target() {{
                                database = "distinctio";
                                name = "Leroy Greenfelder";
                                schema = "nobis";
                            }}),
                        }};
                        transitiveDependenciesIncluded = false;
                        transitiveDependentsIncluded = false;
                    }};;
                    releaseConfig = "eum";
                    timeZone = "vero";
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "et";
                key = "excepturi";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "provident";
                updateMask = "quos";
                uploadType = "sint";
                uploadProtocol = "accusantium";
            }};            

            DataformProjectsLocationsRepositoriesWorkflowConfigsPatchResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkflowConfigsPatch(req, new DataformProjectsLocationsRepositoriesWorkflowConfigsPatchSecurity("mollitia", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workflowConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkflowInvocationsCancel

Requests cancellation of a running WorkflowInvocation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelRequest req = new DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dolor", "necessitatibus");
                    put("odit", "nemo");
                }};
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "debitis";
                key = "eius";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "facilis";
                uploadProtocol = "in";
            }};            

            DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkflowInvocationsCancel(req, new DataformProjectsLocationsRepositoriesWorkflowInvocationsCancelSecurity("architecto", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkflowInvocationsCreate

Creates a new WorkflowInvocation in a given Repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Interval;
import org.openapis.openapi.models.shared.InvocationConfig;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.WorkflowInvocationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateRequest req = new DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                workflowInvocationInput = new WorkflowInvocationInput() {{
                    compilationResult = "expedita";
                    invocationConfig = new InvocationConfig() {{
                        fullyRefreshIncrementalTablesEnabled = false;
                        includedTags = new String[]{{
                            add("repellat"),
                            add("quibusdam"),
                        }};
                        includedTargets = new org.openapis.openapi.models.shared.Target[]{{
                            add(new Target() {{
                                database = "saepe";
                                name = "Edward Crooks";
                                schema = "magni";
                            }}),
                        }};
                        transitiveDependenciesIncluded = false;
                        transitiveDependentsIncluded = false;
                    }};;
                    invocationTiming = new Interval() {{
                        endTime = "sunt";
                        startTime = "quo";
                    }};;
                    workflowConfig = "illum";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "excepturi";
                key = "odit";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "ab";
                uploadProtocol = "maiores";
            }};            

            DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkflowInvocationsCreate(req, new DataformProjectsLocationsRepositoriesWorkflowInvocationsCreateSecurity("quidem", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workflowInvocation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkflowInvocationsList

Lists WorkflowInvocations in a given Repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsListRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsListResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkflowInvocationsListRequest req = new DataformProjectsLocationsRepositoriesWorkflowInvocationsListRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "nemo";
                filter = "voluptatibus";
                key = "perferendis";
                oauthToken = "fugiat";
                orderBy = "amet";
                pageSize = 11714L;
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "hic";
                uploadProtocol = "libero";
            }};            

            DataformProjectsLocationsRepositoriesWorkflowInvocationsListResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkflowInvocationsList(req, new DataformProjectsLocationsRepositoriesWorkflowInvocationsListSecurity("nobis", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listWorkflowInvocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkflowInvocationsQuery

Returns WorkflowInvocationActions in a given WorkflowInvocation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsQueryRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsQueryResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkflowInvocationsQuerySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkflowInvocationsQueryRequest req = new DataformProjectsLocationsRepositoriesWorkflowInvocationsQueryRequest("quis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "nesciunt";
                key = "eos";
                oauthToken = "perferendis";
                pageSize = 170986L;
                pageToken = "minus";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "dolor";
                uploadProtocol = "vero";
            }};            

            DataformProjectsLocationsRepositoriesWorkflowInvocationsQueryResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkflowInvocationsQuery(req, new DataformProjectsLocationsRepositoriesWorkflowInvocationsQuerySecurity("nostrum", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.queryWorkflowInvocationActionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesCommit

Applies a Git commit for uncommitted files in a Workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesCommitRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesCommitResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesCommitSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CommitAuthor;
import org.openapis.openapi.models.shared.CommitWorkspaceChangesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesCommitRequest req = new DataformProjectsLocationsRepositoriesWorkspacesCommitRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                commitWorkspaceChangesRequest = new CommitWorkspaceChangesRequest() {{
                    author = new CommitAuthor() {{
                        emailAddress = "facilis";
                        name = "George Sawayn";
                    }};;
                    commitMessage = "error";
                    paths = new String[]{{
                        add("occaecati"),
                    }};
                }};;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "earum";
                key = "modi";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "deleniti";
                uploadProtocol = "pariatur";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesCommitResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesCommit(req, new DataformProjectsLocationsRepositoriesWorkspacesCommitSecurity("provident", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesCreate

Creates a new Workspace in a given Repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesCreateRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesCreateResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesCreateRequest req = new DataformProjectsLocationsRepositoriesWorkspacesCreateRequest("libero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "dolorem";
                key = "dolorem";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "ipsum";
                uploadProtocol = "hic";
                workspaceId = "excepturi";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesCreateResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesCreate(req, new DataformProjectsLocationsRepositoriesWorkspacesCreateSecurity("cum", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workspace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesDelete

Deletes a single Workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesDeleteRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesDeleteResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesDeleteRequest req = new DataformProjectsLocationsRepositoriesWorkspacesDeleteRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "veritatis";
                force = false;
                key = "ipsa";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "odio";
                uploadProtocol = "quaerat";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesDeleteResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesDelete(req, new DataformProjectsLocationsRepositoriesWorkspacesDeleteSecurity("accusamus", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesFetchFileDiff

Fetches Git diff for an uncommitted file in a Workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffRequest req = new DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "atque";
                fields = "sit";
                key = "fugiat";
                oauthToken = "ab";
                path = "soluta";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "iusto";
                uploadProtocol = "voluptate";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesFetchFileDiff(req, new DataformProjectsLocationsRepositoriesWorkspacesFetchFileDiffSecurity("dolorum", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fetchFileDiffResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatuses

Fetches Git statuses for the files in a Workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesRequest req = new DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesRequest("omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "ipsum";
                key = "voluptate";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "eius";
                uploadProtocol = "aspernatur";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatuses(req, new DataformProjectsLocationsRepositoriesWorkspacesFetchFileGitStatusesSecurity("perferendis", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fetchFileGitStatusesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehind

Fetches Git ahead/behind against a remote branch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindRequest req = new DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "suscipit";
                fields = "deserunt";
                key = "provident";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "repellendus";
                remoteBranch = "totam";
                uploadType = "similique";
                uploadProtocol = "alias";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehind(req, new DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindSecurity("at", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fetchGitAheadBehindResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesGet

Fetches a single Workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesGetRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesGetResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesGetRequest req = new DataformProjectsLocationsRepositoriesWorkspacesGetRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "dolorum";
                key = "a";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "iusto";
                uploadProtocol = "ipsum";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesGetResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesGet(req, new DataformProjectsLocationsRepositoriesWorkspacesGetSecurity("quisquam", "tenetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.workspace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicyRequest req = new DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicyRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "dolorem";
                key = "sapiente";
                oauthToken = "totam";
                optionsRequestedPolicyVersion = 471752L;
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "expedita";
                uploadProtocol = "neque";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicyResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesGetIamPolicy(req, new DataformProjectsLocationsRepositoriesWorkspacesGetIamPolicySecurity("sed", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackages

Installs dependency NPM packages (inside a Workspace).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesRequest req = new DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quam", "ipsum");
                    put("incidunt", "qui");
                    put("cupiditate", "maxime");
                }};
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "laborum";
                key = "totam";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "dolores";
                uploadProtocol = "distinctio";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackages(req, new DataformProjectsLocationsRepositoriesWorkspacesInstallNpmPackagesSecurity("facilis", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.installNpmPackagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesList

Lists Workspaces in a given Repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesListRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesListResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesListRequest req = new DataformProjectsLocationsRepositoriesWorkspacesListRequest("quam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "neque";
                fields = "fugit";
                filter = "magni";
                key = "odio";
                oauthToken = "sunt";
                orderBy = "ullam";
                pageSize = 722081L;
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "cumque";
                uploadProtocol = "soluta";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesListResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesList(req, new DataformProjectsLocationsRepositoriesWorkspacesListSecurity("nobis", "et") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listWorkspacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesMakeDirectory

Creates a directory inside a Workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesMakeDirectoryRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesMakeDirectoryResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesMakeDirectorySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MakeDirectoryRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesMakeDirectoryRequest req = new DataformProjectsLocationsRepositoriesWorkspacesMakeDirectoryRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                makeDirectoryRequest = new MakeDirectoryRequest() {{
                    path = "veritatis";
                }};;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "cupiditate";
                key = "aperiam";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "dolore";
                uploadProtocol = "labore";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesMakeDirectoryResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesMakeDirectory(req, new DataformProjectsLocationsRepositoriesWorkspacesMakeDirectorySecurity("adipisci", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.makeDirectoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesMoveDirectory

Moves a directory (inside a Workspace), and all of its contents, to a new location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesMoveDirectoryRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesMoveDirectoryResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesMoveDirectorySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MoveDirectoryRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesMoveDirectoryRequest req = new DataformProjectsLocationsRepositoriesWorkspacesMoveDirectoryRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                moveDirectoryRequest = new MoveDirectoryRequest() {{
                    newPath = "aut";
                    path = "quas";
                }};;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "repellendus";
                key = "porro";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "facilis";
                uploadProtocol = "cupiditate";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesMoveDirectoryResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesMoveDirectory(req, new DataformProjectsLocationsRepositoriesWorkspacesMoveDirectorySecurity("qui", "quae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.moveDirectoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesMoveFile

Moves a file (inside a Workspace) to a new location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesMoveFileRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesMoveFileResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesMoveFileSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MoveFileRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesMoveFileRequest req = new DataformProjectsLocationsRepositoriesWorkspacesMoveFileRequest("laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                moveFileRequest = new MoveFileRequest() {{
                    newPath = "occaecati";
                    path = "voluptatibus";
                }};;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "quis";
                key = "ipsum";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "consectetur";
                uploadProtocol = "vero";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesMoveFileResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesMoveFile(req, new DataformProjectsLocationsRepositoriesWorkspacesMoveFileSecurity("tenetur", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.moveFileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesPull

Pulls Git commits from the Repository's remote into a Workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesPullRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesPullResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesPullSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CommitAuthor;
import org.openapis.openapi.models.shared.PullGitCommitsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesPullRequest req = new DataformProjectsLocationsRepositoriesWorkspacesPullRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                pullGitCommitsRequest = new PullGitCommitsRequest() {{
                    author = new CommitAuthor() {{
                        emailAddress = "quod";
                        name = "Harriet Quitzon";
                    }};;
                    remoteBranch = "dolore";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "natus";
                key = "impedit";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "exercitationem";
                uploadProtocol = "nulla";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesPullResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesPull(req, new DataformProjectsLocationsRepositoriesWorkspacesPullSecurity("fugit", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesPush

Pushes Git commits from a Workspace to the Repository's remote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesPushRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesPushResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesPushSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PushGitCommitsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesPushRequest req = new DataformProjectsLocationsRepositoriesWorkspacesPushRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                pushGitCommitsRequest = new PushGitCommitsRequest() {{
                    remoteBranch = "iusto";
                }};;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "officia";
                key = "tempora";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "aspernatur";
                uploadProtocol = "vel";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesPushResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesPush(req, new DataformProjectsLocationsRepositoriesWorkspacesPushSecurity("possimus", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContents

Returns the contents of a given Workspace directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsRequest req = new DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsRequest("ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "maiores";
                key = "quasi";
                oauthToken = "ex";
                pageSize = 862192L;
                pageToken = "excepturi";
                path = "voluptatibus";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "sapiente";
                uploadProtocol = "quisquam";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContents(req, new DataformProjectsLocationsRepositoriesWorkspacesQueryDirectoryContentsSecurity("saepe", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.queryDirectoryContentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesReadFile

Returns the contents of a file (inside a Workspace).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesReadFileRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesReadFileResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesReadFileSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesReadFileRequest req = new DataformProjectsLocationsRepositoriesWorkspacesReadFileRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "magnam";
                key = "ea";
                oauthToken = "quo";
                path = "consectetur";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "aspernatur";
                uploadProtocol = "minima";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesReadFileResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesReadFile(req, new DataformProjectsLocationsRepositoriesWorkspacesReadFileSecurity("eaque", "a") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.readFileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesRemoveDirectory

Deletes a directory (inside a Workspace) and all of its contents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectoryRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectoryResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectorySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveDirectoryRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectoryRequest req = new DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectoryRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                removeDirectoryRequest = new RemoveDirectoryRequest() {{
                    path = "aut";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "fugit";
                key = "accusamus";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "et";
                uploadProtocol = "dolorum";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectoryResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesRemoveDirectory(req, new DataformProjectsLocationsRepositoriesWorkspacesRemoveDirectorySecurity("laborum", "placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesRemoveFile

Deletes a file (inside a Workspace).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesRemoveFileRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesRemoveFileResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesRemoveFileSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveFileRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesRemoveFileRequest req = new DataformProjectsLocationsRepositoriesWorkspacesRemoveFileRequest("velit") {{
                dollarXgafv = XgafvEnum.ONE;
                removeFileRequest = new RemoveFileRequest() {{
                    path = "autem";
                }};;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "assumenda";
                fields = "nulla";
                key = "voluptas";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "tempora";
                uploadProtocol = "numquam";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesRemoveFileResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesRemoveFile(req, new DataformProjectsLocationsRepositoriesWorkspacesRemoveFileSecurity("explicabo", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesReset

Performs a Git reset for uncommitted files in a Workspace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesResetRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesResetResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesResetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResetWorkspaceChangesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesResetRequest req = new DataformProjectsLocationsRepositoriesWorkspacesResetRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                resetWorkspaceChangesRequest = new ResetWorkspaceChangesRequest() {{
                    clean = false;
                    paths = new String[]{{
                        add("odio"),
                        add("eius"),
                    }};
                }};;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "fuga";
                key = "reprehenderit";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "ut";
                uploadProtocol = "eum";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesResetResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesReset(req, new DataformProjectsLocationsRepositoriesWorkspacesResetSecurity("suscipit", "assumenda") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicyRequest req = new DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicyRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "veritatis";
                                    expression = "ipsa";
                                    location = "id";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("quo"),
                                }};
                                role = "illum";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "quo";
                                    expression = "fuga";
                                    location = "eius";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("ab"),
                                    add("cupiditate"),
                                }};
                                role = "consequatur";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "tempora";
                                    expression = "debitis";
                                    location = "ipsam";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("quo"),
                                }};
                                role = "esse";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "recusandae";
                                    expression = "aperiam";
                                    location = "distinctio";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("inventore"),
                                    add("nihil"),
                                }};
                                role = "totam";
                            }}),
                        }};
                        etag = "accusamus";
                        version = 306810;
                    }};;
                }};;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "sapiente";
                key = "dolores";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "accusantium";
                uploadProtocol = "porro";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicyResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesSetIamPolicy(req, new DataformProjectsLocationsRepositoriesWorkspacesSetIamPolicySecurity("eum", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsRequest req = new DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsRequest("praesentium") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("fugit"),
                        add("fuga"),
                        add("mollitia"),
                    }};
                }};;
                accessToken = "incidunt";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "minima";
                key = "nisi";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "consequuntur";
                uploadProtocol = "ratione";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesTestIamPermissions(req, new DataformProjectsLocationsRepositoriesWorkspacesTestIamPermissionsSecurity("explicabo", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataformProjectsLocationsRepositoriesWorkspacesWriteFile

Writes to a file (inside a Workspace).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesWriteFileRequest;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesWriteFileResponse;
import org.openapis.openapi.models.operations.DataformProjectsLocationsRepositoriesWorkspacesWriteFileSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WriteFileRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataformProjectsLocationsRepositoriesWorkspacesWriteFileRequest req = new DataformProjectsLocationsRepositoriesWorkspacesWriteFileRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                writeFileRequest = new WriteFileRequest() {{
                    contents = "et";
                    path = "esse";
                }};;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "esse";
                key = "quod";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "aliquid";
                uploadProtocol = "quasi";
            }};            

            DataformProjectsLocationsRepositoriesWorkspacesWriteFileResponse res = sdk.projects.dataformProjectsLocationsRepositoriesWorkspacesWriteFile(req, new DataformProjectsLocationsRepositoriesWorkspacesWriteFileSecurity("saepe", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.writeFileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
