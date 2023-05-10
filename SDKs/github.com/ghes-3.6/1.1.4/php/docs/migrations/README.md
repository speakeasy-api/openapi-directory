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
<https://docs.github.com/enterprise-server@3.6/rest/migrations/orgs#delete-an-organization-migration-archive>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsDeleteArchiveForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationsDeleteArchiveForOrgRequest();
    $request->migrationId = 2677;
    $request->org = 'nisi';

    $response = $sdk->migrations->migrationsDeleteArchiveForOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationsDownloadArchiveForOrg

Fetches the URL to a migration archive.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/migrations/orgs#download-an-organization-migration-archive>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsDownloadArchiveForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationsDownloadArchiveForOrgRequest();
    $request->migrationId = 931505;
    $request->org = 'velit';

    $response = $sdk->migrations->migrationsDownloadArchiveForOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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
<https://docs.github.com/enterprise-server@3.6/rest/migrations/users#download-a-user-migration-archive>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsGetArchiveForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationsGetArchiveForAuthenticatedUserRequest();
    $request->migrationId = 673838;

    $response = $sdk->migrations->migrationsGetArchiveForAuthenticatedUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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
<https://docs.github.com/enterprise-server@3.6/rest/migrations/orgs#get-an-organization-migration-status>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsGetStatusForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsGetStatusForOrgExcludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationsGetStatusForOrgRequest();
    $request->exclude = [
        MigrationsGetStatusForOrgExcludeEnum::REPOSITORIES,
        MigrationsGetStatusForOrgExcludeEnum::REPOSITORIES,
    ];
    $request->migrationId = 224467;
    $request->org = 'iusto';

    $response = $sdk->migrations->migrationsGetStatusForOrg($request);

    if ($response->migration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationsListForAuthenticatedUser

Lists all migrations a user has started.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/migrations/users#list-user-migrations>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsListForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationsListForAuthenticatedUserRequest();
    $request->page = 24753;
    $request->perPage = 39992;

    $response = $sdk->migrations->migrationsListForAuthenticatedUser($request);

    if ($response->migrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationsListForOrg

Lists the most recent migrations, including both exports (which can be started through the REST API) and imports (which cannot be started using the REST API).

A list of `repositories` is only returned for export migrations.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/migrations/orgs#list-organization-migrations>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsListForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsListForOrgExcludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationsListForOrgRequest();
    $request->exclude = [
        MigrationsListForOrgExcludeEnum::REPOSITORIES,
    ];
    $request->org = 'officia';
    $request->page = 927403;
    $request->perPage = 408303;

    $response = $sdk->migrations->migrationsListForOrg($request);

    if ($response->migrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationsListReposForAuthenticatedUser

Lists all the repositories for this user migration.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/migrations/users#list-repositories-for-a-user-migration>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsListReposForAuthenticatedUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationsListReposForAuthenticatedUserRequest();
    $request->migrationId = 693153;
    $request->page = 377406;
    $request->perPage = 705148;

    $response = $sdk->migrations->migrationsListReposForAuthenticatedUser($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationsListReposForOrg

List all the repositories for this organization migration.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/migrations/orgs#list-repositories-in-an-organization-migration>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsListReposForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationsListReposForOrgRequest();
    $request->migrationId = 809365;
    $request->org = 'perspiciatis';
    $request->page = 709036;
    $request->perPage = 537236;

    $response = $sdk->migrations->migrationsListReposForOrg($request);

    if ($response->minimalRepositories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationsStartForAuthenticatedUser

Initiates the generation of a user migration archive.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/migrations/users#start-a-user-migration>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsStartForAuthenticatedUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationsStartForAuthenticatedUserRequestBody();
    $request->exclude = [
        MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum::REPOSITORIES,
        MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum::REPOSITORIES,
        MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum::REPOSITORIES,
        MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum::REPOSITORIES,
    ];
    $request->excludeAttachments = true;
    $request->excludeGitData = true;
    $request->excludeMetadata = true;
    $request->excludeOwnerProjects = true;
    $request->excludeReleases = true;
    $request->lockRepositories = true;
    $request->orgMetadataOnly = true;
    $request->repositories = [
        'acme/widgets',
        'acme/widgets',
    ];

    $response = $sdk->migrations->migrationsStartForAuthenticatedUser($request);

    if ($response->migration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationsStartForOrg

Initiates the generation of a migration archive.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/migrations/orgs#start-an-organization-migration>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsStartForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsStartForOrgRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsStartForOrgRequestBodyExcludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationsStartForOrgRequest();
    $request->requestBody = new MigrationsStartForOrgRequestBody();
    $request->requestBody->exclude = [
        MigrationsStartForOrgRequestBodyExcludeEnum::REPOSITORIES,
        MigrationsStartForOrgRequestBodyExcludeEnum::REPOSITORIES,
    ];
    $request->requestBody->excludeAttachments = true;
    $request->requestBody->excludeGitData = false;
    $request->requestBody->excludeMetadata = false;
    $request->requestBody->excludeOwnerProjects = true;
    $request->requestBody->excludeReleases = true;
    $request->requestBody->lockRepositories = true;
    $request->requestBody->orgMetadataOnly = true;
    $request->requestBody->repositories = [
        'necessitatibus',
        'animi',
        'impedit',
    ];
    $request->org = 'ipsam';

    $response = $sdk->migrations->migrationsStartForOrg($request);

    if ($response->migration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrationsUnlockRepoForOrg

Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/enterprise-server@3.6/rest/repos/repos#delete-a-repository) when the migration is complete and you no longer need the source data.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/migrations/orgs#unlock-an-organization-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationsUnlockRepoForOrgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationsUnlockRepoForOrgRequest();
    $request->migrationId = 357425;
    $request->org = 'est';
    $request->repoName = 'error';

    $response = $sdk->migrations->migrationsUnlockRepoForOrg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
