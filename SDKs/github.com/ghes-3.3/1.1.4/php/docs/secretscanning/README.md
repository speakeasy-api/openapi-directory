# secretScanning

## Overview

Retrieve secret scanning alerts from a repository.

### Available Operations

* [secretScanningGetAlert](#secretscanninggetalert) - Get a secret scanning alert
* [secretScanningListAlertsForOrg](#secretscanninglistalertsfororg) - List secret scanning alerts for an organization
* [secretScanningListAlertsForRepo](#secretscanninglistalertsforrepo) - List secret scanning alerts for a repository
* [secretScanningListLocationsForAlert](#secretscanninglistlocationsforalert) - List locations for a secret scanning alert
* [secretScanningUpdateAlert](#secretscanningupdatealert) - Update a secret scanning alert

## secretScanningGetAlert

Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#get-a-secret-scanning-alert>

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
    $request->alertNumber = 156098;
    $request->owner = 'officiis';
    $request->repo = 'mollitia';

    $response = $sdk->secretScanning->secretScanningGetAlert($request);

    if ($response->secretScanningAlert !== null) {
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
<https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization>

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
    $request->org = 'cumque';
    $request->page = 337081;
    $request->perPage = 313590;
    $request->resolution = 'eum';
    $request->secretType = 'nemo';
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

Lists secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository>

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
    $request->owner = 'nesciunt';
    $request->page = 22331;
    $request->perPage = 487148;
    $request->repo = 'minus';
    $request->resolution = 'asperiores';
    $request->secretType = 'recusandae';
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

Lists all locations for a given secret scanning alert for a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert>

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
    $request->alertNumber = 506250;
    $request->owner = 'dicta';
    $request->page = 144179;
    $request->perPage = 25190;
    $request->repo = 'aliquid';

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
<https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#update-a-secret-scanning-alert>

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
    $request->requestBody->state = SchemassecretScanningAlertStateEnum::OPEN;
    $request->alertNumber = 537170;
    $request->owner = 'sunt';
    $request->repo = 'nesciunt';

    $response = $sdk->secretScanning->secretScanningUpdateAlert($request);

    if ($response->secretScanningAlert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
