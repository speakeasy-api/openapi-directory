# healthProfileAnswer

## Overview

A health profile answer is the answer to a question for a patient.

### Available Operations

* [fetchHealthProfileAnswer](#fetchhealthprofileanswer) - Get a health profile answer
* [fetchHealthProfileAnswers](#fetchhealthprofileanswers) - List health profile answers

## fetchHealthProfileAnswer

Get a health profile answer by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthProfileAnswerRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthProfileAnswerIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchHealthProfileAnswerRequest();
    $request->id = 'b8abf603-a79f-49df-a0ab-7da8a50ce187';
    $request->include = FetchHealthProfileAnswerIncludeEnum::PATIENT;

    $response = $sdk->healthProfileAnswer->fetchHealthProfileAnswer($request);

    if ($response->fetchHealthProfileAnswerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchHealthProfileAnswers

Get a list of health profile answers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthProfileAnswersRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthProfileAnswersIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchHealthProfileAnswersRequest();
    $request->filterGroups = 'asperiores';
    $request->filterOrganization = 'totam';
    $request->filterPatient = 'suscipit';
    $request->include = FetchHealthProfileAnswersIncludeEnum::PATIENT;
    $request->pageCursor = 'quidem';
    $request->pageLimit = 806670;
    $request->pageNumber = 90885;
    $request->pageSize = 461007;

    $response = $sdk->healthProfileAnswer->fetchHealthProfileAnswers($request);

    if ($response->fetchHealthProfileAnswersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
