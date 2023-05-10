# observationHeadingController

## Overview

Observation Heading Controller

### Available Operations

* [getAvailableObservationHeadings](#getavailableobservationheadings) - Get Available Observations Types For a User
* [getPatientEnteredObservationHeadings](#getpatiententeredobservationheadings) - Get Available Patient Entered Observations Types For a User

## getAvailableObservationHeadings

Given a User ID retrieve a list of available observation types for that user (where they have observation data).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAvailableObservationHeadingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAvailableObservationHeadingsRequest();
    $request->userId = 791725;

    $response = $sdk->observationHeadingController->getAvailableObservationHeadings($request);

    if ($response->observationHeadings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPatientEnteredObservationHeadings

Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPatientEnteredObservationHeadingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPatientEnteredObservationHeadingsRequest();
    $request->userId = 812169;

    $response = $sdk->observationHeadingController->getPatientEnteredObservationHeadings($request);

    if ($response->observationHeadings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
