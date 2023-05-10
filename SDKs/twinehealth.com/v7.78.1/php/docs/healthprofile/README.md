# healthProfile

## Overview

A health profile contains a set of health questions and answers for a patient.

### Available Operations

* [fetchHealthProfile](#fetchhealthprofile) - Get a health profile
* [fetchHealthProfiles](#fetchhealthprofiles) - List health profiles

## fetchHealthProfile

Get a health profile by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthProfileIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchHealthProfileRequest();
    $request->id = '5aa8e482-4d0a-4b40-b508-8e51862065e9';
    $request->include = FetchHealthProfileIncludeEnum::PATIENT;

    $response = $sdk->healthProfile->fetchHealthProfile($request);

    if ($response->fetchHealthProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchHealthProfiles

Get a list of health profiles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthProfilesIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchHealthProfilesRequest();
    $request->filterGroups = 'incidunt';
    $request->filterOrganization = 'reiciendis';
    $request->filterPatient = 'dolorem';
    $request->include = FetchHealthProfilesIncludeEnum::QUESTIONS;
    $request->pageCursor = 'dicta';
    $request->pageLimit = 99416;
    $request->pageNumber = 577140;
    $request->pageSize = 289776;

    $response = $sdk->healthProfile->fetchHealthProfiles($request);

    if ($response->fetchHealthProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
