# secretScanning

## Overview

Retrieve secret scanning alerts from a repository.

### Available Operations

* [secretScanningGetAlert](#secretscanninggetalert) - Get a secret scanning alert
* [secretScanningListAlertsForEnterprise](#secretscanninglistalertsforenterprise) - List secret scanning alerts for an enterprise
* [secretScanningListAlertsForOrg](#secretscanninglistalertsfororg) - List secret scanning alerts for an organization
* [secretScanningListAlertsForRepo](#secretscanninglistalertsforrepo) - List secret scanning alerts for a repository
* [secretScanningListLocationsForAlert](#secretscanninglistlocationsforalert) - List locations for a secret scanning alert
* [secretScanningUpdateAlert](#secretscanningupdatealert) - Update a secret scanning alert

## secretScanningGetAlert

Gets a single secret scanning alert detected in an eligible repository.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#get-a-secret-scanning-alert>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretScanningGetAlertRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretScanningGetAlertRequest();
    $request->alertNumber = 772628;
    $request->owner = 'quas';
    $request->repo = 'impedit';

    $response = $sdk->secretScanning->secretScanningGetAlert($request);

    if ($response->secretScanningAlert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretScanningListAlertsForEnterprise

Lists secret scanning alerts for eligible repositories in an enterprise, from newest to oldest.
To use this endpoint, you must be a member of the enterprise, and you must use an access token with the `repo` scope or `security_events` scope. Alerts are only returned for organizations in the enterprise for which you are an organization owner or a [security manager](https://docs.github.com/enterprise-server@3.6/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretScanningListAlertsForEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertSortEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretScanningListAlertsForEnterpriseRequest();
    $request->after = 'vel';
    $request->before = 'eligendi';
    $request->direction = DirectionEnum::DESC;
    $request->enterprise = 'ex';
    $request->perPage = 105094;
    $request->resolution = 'veritatis';
    $request->secretType = 'maiores';
    $request->sort = SecretScanningAlertSortEnum::UPDATED;
    $request->state = SecretScanningAlertStateEnum::RESOLVED;

    $response = $sdk->secretScanning->secretScanningListAlertsForEnterprise($request);

    if ($response->organizationSecretScanningAlerts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretScanningListAlertsForOrg

Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest.
To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretScanningListAlertsForOrgRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertSortEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretScanningListAlertsForOrgRequest();
    $request->direction = DirectionEnum::DESC;
    $request->org = 'illo';
    $request->page = 778242;
    $request->perPage = 490966;
    $request->resolution = 'minus';
    $request->secretType = 'distinctio';
    $request->sort = SecretScanningAlertSortEnum::UPDATED;
    $request->state = SecretScanningAlertStateEnum::RESOLVED;

    $response = $sdk->secretScanning->secretScanningListAlertsForOrg($request);

    if ($response->organizationSecretScanningAlerts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretScanningListAlertsForRepo

Lists secret scanning alerts for an eligible repository, from newest to oldest.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretScanningListAlertsForRepoRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertSortEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretScanningListAlertsForRepoRequest();
    $request->direction = DirectionEnum::ASC;
    $request->owner = 'saepe';
    $request->page = 934782;
    $request->perPage = 799866;
    $request->repo = 'nihil';
    $request->resolution = 'quaerat';
    $request->secretType = 'ipsum';
    $request->sort = SecretScanningAlertSortEnum::CREATED;
    $request->state = SecretScanningAlertStateEnum::RESOLVED;

    $response = $sdk->secretScanning->secretScanningListAlertsForRepo($request);

    if ($response->secretScanningAlerts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretScanningListLocationsForAlert

Lists all locations for a given secret scanning alert for an eligible repository.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretScanningListLocationsForAlertRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretScanningListLocationsForAlertRequest();
    $request->alertNumber = 701786;
    $request->owner = 'deserunt';
    $request->page = 138436;
    $request->perPage = 319419;
    $request->repo = 'sequi';

    $response = $sdk->secretScanning->secretScanningListLocationsForAlert($request);

    if ($response->secretScanningLocations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretScanningUpdateAlert

Updates the status of a secret scanning alert in an eligible repository.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#update-a-secret-scanning-alert>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretScanningUpdateAlertRequest;
use \OpenAPI\OpenAPI\Models\Operations\SecretScanningUpdateAlertRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertResolutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchemassecretScanningAlertStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretScanningUpdateAlertRequest();
    $request->requestBody = new SecretScanningUpdateAlertRequestBody();
    $request->requestBody->resolution = SecretScanningAlertResolutionEnum::LESS_THAN_NIL_GREATER_THAN;
    $request->requestBody->state = SchemassecretScanningAlertStateEnum::OPEN;
    $request->alertNumber = 456865;
    $request->owner = 'magnam';
    $request->repo = 'odio';

    $response = $sdk->secretScanning->secretScanningUpdateAlert($request);

    if ($response->secretScanningAlert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
