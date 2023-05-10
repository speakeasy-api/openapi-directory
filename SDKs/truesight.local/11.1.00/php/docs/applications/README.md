# applications

## Overview

API operations to interact with the monitored Applications.

### Available Operations

* [getApplications](#getapplications) - Gets summarized information about all monitored applications.
* [getOneApplication](#getoneapplication) - Gets detailed information for a specific application.

## getApplications

Lists all the available ApplicationSummary instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationsDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationsRequest();
    $request->direction = GetApplicationsDirectionEnum::DESC;
    $request->limit = 528895;
    $request->page = 'iusto';
    $request->sort = 'excepturi';

    $response = $sdk->applications->getApplications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOneApplication

You need to provide an <b>Application ID</b>:<br>- use the <b>hardware/applications</b> service to retrieve all available application IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOneApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOneApplicationRequest();
    $request->applicationId = 'nisi';

    $response = $sdk->applications->getOneApplication($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
