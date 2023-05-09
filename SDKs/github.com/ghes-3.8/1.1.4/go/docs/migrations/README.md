# Migrations

## Overview

Move projects to or from GitHub.

### Available Operations

* [MigrationsDeleteArchiveForOrg](#migrationsdeletearchivefororg) - Delete an organization migration archive
* [MigrationsDownloadArchiveForOrg](#migrationsdownloadarchivefororg) - Download an organization migration archive
* [MigrationsGetArchiveForAuthenticatedUser](#migrationsgetarchiveforauthenticateduser) - Download a user migration archive
* [MigrationsGetStatusForOrg](#migrationsgetstatusfororg) - Get an organization migration status
* [MigrationsListForAuthenticatedUser](#migrationslistforauthenticateduser) - List user migrations
* [MigrationsListForOrg](#migrationslistfororg) - List organization migrations
* [MigrationsListReposForAuthenticatedUser](#migrationslistreposforauthenticateduser) - List repositories for a user migration
* [MigrationsListReposForOrg](#migrationslistreposfororg) - List repositories in an organization migration
* [MigrationsStartForAuthenticatedUser](#migrationsstartforauthenticateduser) - Start a user migration
* [MigrationsStartForOrg](#migrationsstartfororg) - Start an organization migration
* [MigrationsUnlockRepoForOrg](#migrationsunlockrepofororg) - Unlock an organization repository

## MigrationsDeleteArchiveForOrg

Deletes a previous migration archive. Migration archives are automatically deleted after seven days.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/migrations/orgs#delete-an-organization-migration-archive>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Migrations.MigrationsDeleteArchiveForOrg(ctx, operations.MigrationsDeleteArchiveForOrgRequest{
        MigrationID: 43975,
        Org: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MigrationsDownloadArchiveForOrg

Fetches the URL to a migration archive.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/migrations/orgs#download-an-organization-migration-archive>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Migrations.MigrationsDownloadArchiveForOrg(ctx, operations.MigrationsDownloadArchiveForOrgRequest{
        MigrationID: 879522,
        Org: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MigrationsGetArchiveForAuthenticatedUser

Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:

*   attachments
*   bases
*   commit\_comments
*   issue\_comments
*   issue\_events
*   issues
*   milestones
*   organizations
*   projects
*   protected\_branches
*   pull\_request\_reviews
*   pull\_requests
*   releases
*   repositories
*   review\_comments
*   schema
*   users

The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/migrations/users#download-a-user-migration-archive>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Migrations.MigrationsGetArchiveForAuthenticatedUser(ctx, operations.MigrationsGetArchiveForAuthenticatedUserRequest{
        MigrationID: 520081,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MigrationsGetStatusForOrg

Fetches the status of a migration.

The `state` of a migration can be one of the following values:

*   `pending`, which means the migration hasn't started yet.
*   `exporting`, which means the migration is in progress.
*   `exported`, which means the migration finished successfully.
*   `failed`, which means the migration failed.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/migrations/orgs#get-an-organization-migration-status>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Migrations.MigrationsGetStatusForOrg(ctx, operations.MigrationsGetStatusForOrgRequest{
        Exclude: []MigrationsGetStatusForOrgExcludeEnum{
            operations.MigrationsGetStatusForOrgExcludeEnumRepositories,
        },
        MigrationID: 30661,
        Org: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Migration != nil {
        // handle response
    }
}
```

## MigrationsListForAuthenticatedUser

Lists all migrations a user has started.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/migrations/users#list-user-migrations>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Migrations.MigrationsListForAuthenticatedUser(ctx, operations.MigrationsListForAuthenticatedUserRequest{
        Page: sdk.Int64(224413),
        PerPage: sdk.Int64(124289),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Migrations != nil {
        // handle response
    }
}
```

## MigrationsListForOrg

Lists the most recent migrations, including both exports (which can be started through the REST API) and imports (which cannot be started using the REST API).

A list of `repositories` is only returned for export migrations.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/migrations/orgs#list-organization-migrations>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Migrations.MigrationsListForOrg(ctx, operations.MigrationsListForOrgRequest{
        Exclude: []MigrationsListForOrgExcludeEnum{
            operations.MigrationsListForOrgExcludeEnumRepositories,
            operations.MigrationsListForOrgExcludeEnumRepositories,
            operations.MigrationsListForOrgExcludeEnumRepositories,
            operations.MigrationsListForOrgExcludeEnumRepositories,
        },
        Org: "dolor",
        Page: sdk.Int64(582320),
        PerPage: sdk.Int64(539813),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Migrations != nil {
        // handle response
    }
}
```

## MigrationsListReposForAuthenticatedUser

Lists all the repositories for this user migration.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/migrations/users#list-repositories-for-a-user-migration>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Migrations.MigrationsListReposForAuthenticatedUser(ctx, operations.MigrationsListReposForAuthenticatedUserRequest{
        MigrationID: 107472,
        Page: sdk.Int64(868255),
        PerPage: sdk.Int64(287544),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## MigrationsListReposForOrg

List all the repositories for this organization migration.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/migrations/orgs#list-repositories-in-an-organization-migration>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Migrations.MigrationsListReposForOrg(ctx, operations.MigrationsListReposForOrgRequest{
        MigrationID: 794988,
        Org: "esse",
        Page: sdk.Int64(32356),
        PerPage: sdk.Int64(20950),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MinimalRepositories != nil {
        // handle response
    }
}
```

## MigrationsStartForAuthenticatedUser

Initiates the generation of a user migration archive.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/migrations/users#start-a-user-migration>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Migrations.MigrationsStartForAuthenticatedUser(ctx, operations.MigrationsStartForAuthenticatedUserRequestBody{
        Exclude: []MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum{
            operations.MigrationsStartForAuthenticatedUserRequestBodyExcludeEnumRepositories,
            operations.MigrationsStartForAuthenticatedUserRequestBodyExcludeEnumRepositories,
            operations.MigrationsStartForAuthenticatedUserRequestBodyExcludeEnumRepositories,
        },
        ExcludeAttachments: sdk.Bool(true),
        ExcludeGitData: sdk.Bool(true),
        ExcludeMetadata: sdk.Bool(true),
        ExcludeOwnerProjects: sdk.Bool(true),
        ExcludeReleases: sdk.Bool(true),
        LockRepositories: sdk.Bool(true),
        OrgMetadataOnly: sdk.Bool(true),
        Repositories: []string{
            "acme/widgets",
            "acme/widgets",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Migration != nil {
        // handle response
    }
}
```

## MigrationsStartForOrg

Initiates the generation of a migration archive.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/migrations/orgs#start-an-organization-migration>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Migrations.MigrationsStartForOrg(ctx, operations.MigrationsStartForOrgRequest{
        RequestBody: operations.MigrationsStartForOrgRequestBody{
            Exclude: []MigrationsStartForOrgRequestBodyExcludeEnum{
                operations.MigrationsStartForOrgRequestBodyExcludeEnumRepositories,
            },
            ExcludeAttachments: sdk.Bool(true),
            ExcludeGitData: sdk.Bool(false),
            ExcludeMetadata: sdk.Bool(false),
            ExcludeOwnerProjects: sdk.Bool(true),
            ExcludeReleases: sdk.Bool(true),
            LockRepositories: sdk.Bool(true),
            OrgMetadataOnly: sdk.Bool(true),
            Repositories: []string{
                "repellat",
                "velit",
            },
        },
        Org: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Migration != nil {
        // handle response
    }
}
```

## MigrationsUnlockRepoForOrg

Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/enterprise-server@3.8/rest/repos/repos#delete-a-repository) when the migration is complete and you no longer need the source data.

API method documentation
<https://docs.github.com/enterprise-server@3.8/rest/migrations/orgs#unlock-an-organization-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Migrations.MigrationsUnlockRepoForOrg(ctx, operations.MigrationsUnlockRepoForOrgRequest{
        MigrationID: 588639,
        Org: "consectetur",
        RepoName: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
