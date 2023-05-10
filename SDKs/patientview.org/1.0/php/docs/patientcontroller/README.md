# patientController

## Overview

Patient Controller

### Available Operations

* [getBasicPatientDetails](#getbasicpatientdetails) - Get Basic Patient Information

## getBasicPatientDetails

Given a User ID, get basic patient information for a user from clinical data stored in FHIR

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBasicPatientDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBasicPatientDetailsRequest();
    $request->userId = 528895;

    $response = $sdk->patientController->getBasicPatientDetails($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
