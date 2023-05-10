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

Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/secret-scanning#get-a-secret-scanning-alert>

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
    $request->alertNumber = 830477;
    $request->owner = 'nesciunt';
    $request->repo = 'ipsa';

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
To use this endpoint, you must be a member of the enterprise, and you must use an access token with the `repo` scope or `security_events` scope. Alerts are only returned for organizations in the enterprise for which you are an organization owner or a [security manager](https://docs.github.com/enterprise-server@3.4/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-enterprise>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretScanningListAlertsForEnterpriseRequest;
use \OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretScanningListAlertsForEnterpriseRequest();
    $request->after = 'sint';
    $request->before = 'dolore';
    $request->enterprise = 'esse';
    $request->perPage = 38044;
    $request->resolution = 'distinctio';
    $request->secretType = 'sapiente';
    $request->state = SecretScanningAlertStateEnum::OPEN;

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

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretScanningListAlertsForOrgRequest;
use \OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretScanningListAlertsForOrgRequest();
    $request->org = 'est';
    $request->page = 307306;
    $request->perPage = 964201;
    $request->resolution = 'culpa';
    $request->secretType = 'voluptatum';
    $request->state = SecretScanningAlertStateEnum::OPEN;

    $response = $sdk->secretScanning->secretScanningListAlertsForOrg($request);

    if ($response->organizationSecretScanningAlerts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretScanningListAlertsForRepo

Lists secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SecretScanningListAlertsForRepoRequest;
use \OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SecretScanningListAlertsForRepoRequest();
    $request->owner = 'quod';
    $request->page = 977583;
    $request->perPage = 374414;
    $request->repo = 'non';
    $request->resolution = 'ullam';
    $request->secretType = 'laborum';
    $request->state = SecretScanningAlertStateEnum::OPEN;

    $response = $sdk->secretScanning->secretScanningListAlertsForRepo($request);

    if ($response->secretScanningAlerts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretScanningListLocationsForAlert

Lists all locations for a given secret scanning alert for a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert>

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
    $request->alertNumber = 987371;
    $request->owner = 'animi';
    $request->page = 925994;
    $request->perPage = 359453;
    $request->repo = 'non';

    $response = $sdk->secretScanning->secretScanningListLocationsForAlert($request);

    if ($response->secretScanningLocations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## secretScanningUpdateAlert

Updates the status of a secret scanning alert in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/secret-scanning#update-a-secret-scanning-alert>

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
    $request->requestBody->resolution = SecretScanningAlertResolutionEnum::USED_IN_TESTS;
    $request->requestBody->state = SchemassecretScanningAlertStateEnum::RESOLVED;
    $request->alertNumber = 983275;
    $request->owner = 'laboriosam';
    $request->repo = 'voluptatem';

    $response = $sdk->secretScanning->secretScanningUpdateAlert($request);

    if ($response->secretScanningAlert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
