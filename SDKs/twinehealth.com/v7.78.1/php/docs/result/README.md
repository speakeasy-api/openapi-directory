# result

## Overview

A patient health result is a quantitative result for a patient.

### Available Operations

* [fetchPatientHealthResult](#fetchpatienthealthresult) - Get a patient health result
* [fetchPatientHealthResults](#fetchpatienthealthresults) - List patient health results

## fetchPatientHealthResult

Get patient health result by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPatientHealthResultRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPatientHealthResultRequest();
    $request->id = '5bb8a720-2611-4435-a139-dbc2259b1abd';

    $response = $sdk->result->fetchPatientHealthResult($request);

    if ($response->fetchPatientHealthResultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPatientHealthResults

Get a list of patient health results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPatientHealthResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPatientHealthResultsRequest();
    $request->filterActions = 'officia';
    $request->filterCreatedAt = 'quos';
    $request->filterEndAt = 'placeat';
    $request->filterPatient = 'sit';
    $request->filterStartAt = 'iusto';
    $request->filterThreads = 'ipsa';
    $request->filterUpdatedAt = 'voluptates';
    $request->pageAfter = 'inventore';
    $request->pageLimit = 49348;
    $request->pageNumber = 517137;
    $request->pageSize = 292888;

    $response = $sdk->result->fetchPatientHealthResults($request);

    if ($response->fetchPatientHealthResultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
