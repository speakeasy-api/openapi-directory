# secretScanning

## Overview

Retrieve secret scanning alerts from a repository.

### Available Operations

* [secretScanningGetAlert](#secretscanninggetalert) - Get a secret scanning alert
* [secretScanningListAlertsForRepo](#secretscanninglistalertsforrepo) - List secret scanning alerts for a repository
* [secretScanningUpdateAlert](#secretscanningupdatealert) - Update a secret scanning alert

## secretScanningGetAlert

Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/secret-scanning#get-a-secret-scanning-alert>

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
    $request->alertNumber = 457150;
    $request->owner = 'hic';
    $request->repo = 'maxime';

    $response = $sdk->secretScanning->secretScanningGetAlert($request);

    if ($response->secretScanningAlert !== null) {
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository>

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
    $request->owner = 'accusantium';
    $request->page = 743531;
    $request->perPage = 147400;
    $request->repo = 'pariatur';
    $request->resolution = 'eligendi';
    $request->secretType = 'recusandae';
    $request->state = SecretScanningAlertStateEnum::OPEN;

    $response = $sdk->secretScanning->secretScanningListAlertsForRepo($request);

    if ($response->secretScanningAlerts !== null) {
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
<https://docs.github.com/enterprise-server@3.2/rest/reference/secret-scanning#update-a-secret-scanning-alert>

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
    $request->requestBody->state = SchemassecretScanningAlertStateEnum::RESOLVED;
    $request->alertNumber = 480421;
    $request->owner = 'dolor';
    $request->repo = 'voluptates';

    $response = $sdk->secretScanning->secretScanningUpdateAlert($request);

    if ($response->secretScanningAlert !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
