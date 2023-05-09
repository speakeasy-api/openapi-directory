# migrations

## Overview

Move projects to or from GitHub.

### Available Operations

* [migrationsDeleteArchiveForOrg](#migrationsdeletearchivefororg) - Delete an organization migration archive
* [migrationsDownloadArchiveForOrg](#migrationsdownloadarchivefororg) - Download an organization migration archive
* [migrationsGetArchiveForAuthenticatedUser](#migrationsgetarchiveforauthenticateduser) - Download a user migration archive
* [migrationsGetStatusForOrg](#migrationsgetstatusfororg) - Get an organization migration status
* [migrationsListForAuthenticatedUser](#migrationslistforauthenticateduser) - List user migrations
* [migrationsListForOrg](#migrationslistfororg) - List organization migrations
* [migrationsListReposForAuthenticatedUser](#migrationslistreposforauthenticateduser) - List repositories for a user migration
* [migrationsListReposForOrg](#migrationslistreposfororg) - List repositories in an organization migration
* [migrationsStartForAuthenticatedUser](#migrationsstartforauthenticateduser) - Start a user migration
* [migrationsStartForOrg](#migrationsstartfororg) - Start an organization migration
* [migrationsUnlockRepoForOrg](#migrationsunlockrepofororg) - Unlock an organization repository

## migrationsDeleteArchiveForOrg

Deletes a previous migration archive. Migration archives are automatically deleted after seven days.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/migrations/orgs#delete-an-organization-migration-archive>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationsDeleteArchiveForOrgRequest;
import org.openapis.openapi.models.operations.MigrationsDeleteArchiveForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationsDeleteArchiveForOrgRequest req = new MigrationsDeleteArchiveForOrgRequest(514054L, "incidunt");            

            MigrationsDeleteArchiveForOrgResponse res = sdk.migrations.migrationsDeleteArchiveForOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationsDownloadArchiveForOrg

Fetches the URL to a migration archive.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/migrations/orgs#download-an-organization-migration-archive>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationsDownloadArchiveForOrgRequest;
import org.openapis.openapi.models.operations.MigrationsDownloadArchiveForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationsDownloadArchiveForOrgRequest req = new MigrationsDownloadArchiveForOrgRequest(97493L, "rem");            

            MigrationsDownloadArchiveForOrgResponse res = sdk.migrations.migrationsDownloadArchiveForOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationsGetArchiveForAuthenticatedUser

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
<https://docs.github.com/enterprise-server@3.5/rest/migrations/users#download-a-user-migration-archive>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationsGetArchiveForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.MigrationsGetArchiveForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationsGetArchiveForAuthenticatedUserRequest req = new MigrationsGetArchiveForAuthenticatedUserRequest(851854L);            

            MigrationsGetArchiveForAuthenticatedUserResponse res = sdk.migrations.migrationsGetArchiveForAuthenticatedUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationsGetStatusForOrg

Fetches the status of a migration.

The `state` of a migration can be one of the following values:

*   `pending`, which means the migration hasn't started yet.
*   `exporting`, which means the migration is in progress.
*   `exported`, which means the migration finished successfully.
*   `failed`, which means the migration failed.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/migrations/orgs#get-an-organization-migration-status>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationsGetStatusForOrgExcludeEnum;
import org.openapis.openapi.models.operations.MigrationsGetStatusForOrgRequest;
import org.openapis.openapi.models.operations.MigrationsGetStatusForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationsGetStatusForOrgRequest req = new MigrationsGetStatusForOrgRequest(117380L, "nisi") {{
                exclude = new org.openapis.openapi.models.operations.MigrationsGetStatusForOrgExcludeEnum[]{{
                    add(MigrationsGetStatusForOrgExcludeEnum.REPOSITORIES),
                }};
            }};            

            MigrationsGetStatusForOrgResponse res = sdk.migrations.migrationsGetStatusForOrg(req);

            if (res.migration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationsListForAuthenticatedUser

Lists all migrations a user has started.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/migrations/users#list-user-migrations>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationsListForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.MigrationsListForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationsListForAuthenticatedUserRequest req = new MigrationsListForAuthenticatedUserRequest() {{
                page = 233078L;
                perPage = 46806L;
            }};            

            MigrationsListForAuthenticatedUserResponse res = sdk.migrations.migrationsListForAuthenticatedUser(req);

            if (res.migrations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationsListForOrg

Lists the most recent migrations, including both exports (which can be started through the REST API) and imports (which cannot be started using the REST API).

A list of `repositories` is only returned for export migrations.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/migrations/orgs#list-organization-migrations>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationsListForOrgExcludeEnum;
import org.openapis.openapi.models.operations.MigrationsListForOrgRequest;
import org.openapis.openapi.models.operations.MigrationsListForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationsListForOrgRequest req = new MigrationsListForOrgRequest("cupiditate") {{
                exclude = new org.openapis.openapi.models.operations.MigrationsListForOrgExcludeEnum[]{{
                    add(MigrationsListForOrgExcludeEnum.REPOSITORIES),
                    add(MigrationsListForOrgExcludeEnum.REPOSITORIES),
                    add(MigrationsListForOrgExcludeEnum.REPOSITORIES),
                    add(MigrationsListForOrgExcludeEnum.REPOSITORIES),
                }};
                page = 746837L;
                perPage = 3860L;
            }};            

            MigrationsListForOrgResponse res = sdk.migrations.migrationsListForOrg(req);

            if (res.migrations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationsListReposForAuthenticatedUser

Lists all the repositories for this user migration.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/migrations/users#list-repositories-for-a-user-migration>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationsListReposForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.MigrationsListReposForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationsListReposForAuthenticatedUserRequest req = new MigrationsListReposForAuthenticatedUserRequest(608989L) {{
                page = 178580L;
                perPage = 579011L;
            }};            

            MigrationsListReposForAuthenticatedUserResponse res = sdk.migrations.migrationsListReposForAuthenticatedUser(req);

            if (res.minimalRepositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationsListReposForOrg

List all the repositories for this organization migration.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/migrations/orgs#list-repositories-in-an-organization-migration>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationsListReposForOrgRequest;
import org.openapis.openapi.models.operations.MigrationsListReposForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationsListReposForOrgRequest req = new MigrationsListReposForOrgRequest(612867L, "magni") {{
                page = 81369L;
                perPage = 686362L;
            }};            

            MigrationsListReposForOrgResponse res = sdk.migrations.migrationsListReposForOrg(req);

            if (res.minimalRepositories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationsStartForAuthenticatedUser

Initiates the generation of a user migration archive.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/migrations/users#start-a-user-migration>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationsStartForAuthenticatedUserRequestBody;
import org.openapis.openapi.models.operations.MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum;
import org.openapis.openapi.models.operations.MigrationsStartForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationsStartForAuthenticatedUserRequestBody req = new MigrationsStartForAuthenticatedUserRequestBody(                new String[]{{
                                add("acme/widgets"),
                                add("acme/widgets"),
                                add("acme/widgets"),
                                add("acme/widgets"),
                            }}) {{
                exclude = new org.openapis.openapi.models.operations.MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum[]{{
                    add(MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum.REPOSITORIES),
                    add(MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum.REPOSITORIES),
                    add(MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum.REPOSITORIES),
                    add(MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum.REPOSITORIES),
                }};
                excludeAttachments = true;
                excludeGitData = true;
                excludeMetadata = true;
                excludeOwnerProjects = true;
                excludeReleases = true;
                lockRepositories = true;
                orgMetadataOnly = true;
            }};            

            MigrationsStartForAuthenticatedUserResponse res = sdk.migrations.migrationsStartForAuthenticatedUser(req);

            if (res.migration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationsStartForOrg

Initiates the generation of a migration archive.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/migrations/orgs#start-an-organization-migration>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationsStartForOrgRequest;
import org.openapis.openapi.models.operations.MigrationsStartForOrgRequestBody;
import org.openapis.openapi.models.operations.MigrationsStartForOrgRequestBodyExcludeEnum;
import org.openapis.openapi.models.operations.MigrationsStartForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationsStartForOrgRequest req = new MigrationsStartForOrgRequest(                new MigrationsStartForOrgRequestBody(                new String[]{{
                                                add("omnis"),
                                                add("delectus"),
                                                add("minima"),
                                            }}) {{
                                exclude = new org.openapis.openapi.models.operations.MigrationsStartForOrgRequestBodyExcludeEnum[]{{
                                    add(MigrationsStartForOrgRequestBodyExcludeEnum.REPOSITORIES),
                                    add(MigrationsStartForOrgRequestBodyExcludeEnum.REPOSITORIES),
                                    add(MigrationsStartForOrgRequestBodyExcludeEnum.REPOSITORIES),
                                }};
                                excludeAttachments = true;
                                excludeGitData = false;
                                excludeMetadata = false;
                                excludeOwnerProjects = true;
                                excludeReleases = true;
                                lockRepositories = true;
                                orgMetadataOnly = true;
                            }};, "maxime");            

            MigrationsStartForOrgResponse res = sdk.migrations.migrationsStartForOrg(req);

            if (res.migration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationsUnlockRepoForOrg

Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/enterprise-server@3.5/rest/repos/repos#delete-a-repository) when the migration is complete and you no longer need the source data.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/migrations/orgs#unlock-an-organization-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationsUnlockRepoForOrgRequest;
import org.openapis.openapi.models.operations.MigrationsUnlockRepoForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationsUnlockRepoForOrgRequest req = new MigrationsUnlockRepoForOrgRequest(300403L, "temporibus", "quos");            

            MigrationsUnlockRepoForOrgResponse res = sdk.migrations.migrationsUnlockRepoForOrg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
