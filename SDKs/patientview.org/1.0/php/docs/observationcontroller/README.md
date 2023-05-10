# observationController

## Overview

Observation Controller

### Available Operations

* [getObservationsByCode](#getobservationsbycode) - Get Observations of a Certain Type For a User
* [getObservationsByCodes](#getobservationsbycodes) - Get Observations of Multiple Types For a User
* [getPatientEnteredObservationsByCode](#getpatiententeredobservationsbycode) - Get patient entered Observations of a Certain Type For a User

## getObservationsByCode

Given a User ID and observation code, retrieve all observations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetObservationsByCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetObservationsByCodeRequest();
    $request->code = 'error';
    $request->userId = 645894;

    $response = $sdk->observationController->getObservationsByCode($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObservationsByCodes

Given a User ID and search parameters, retrieve a page of observations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetObservationsByCodesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetObservationsByCodesRequest();
    $request->code = [
        'iure',
        'magnam',
    ];
    $request->limit = 891773;
    $request->offset = 56713;
    $request->orderDirection = 'delectus';
    $request->userId = 272656;

    $response = $sdk->observationController->getObservationsByCodes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPatientEnteredObservationsByCode

Given a User ID and observation code, retrieve patient entered observations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPatientEnteredObservationsByCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPatientEnteredObservationsByCodeRequest();
    $request->code = 'suscipit';
    $request->userId = 477665;

    $response = $sdk->observationController->getPatientEnteredObservationsByCode($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
