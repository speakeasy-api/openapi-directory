# healthProfileQuestion

## Overview

A health profile question contains a health question and the corresponding answer for a patient.

### Available Operations

* [fetchHealthProfileQuestion](#fetchhealthprofilequestion) - Get a health profile question
* [fetchHealthProfileQuestions](#fetchhealthprofilequestions) - List health profile questions

## fetchHealthProfileQuestion

Get a health profile by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthProfileQuestionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthProfileQuestionIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchHealthProfileQuestionRequest();
    $request->id = '3d689eee-9526-4f8d-986e-881ead4f0e10';
    $request->include = FetchHealthProfileQuestionIncludeEnum::QUESTION_DEFINITION;

    $response = $sdk->healthProfileQuestion->fetchHealthProfileQuestion($request);

    if ($response->fetchHealthProfileQuestionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchHealthProfileQuestions

Get a list of health profile questions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthProfileQuestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchHealthProfileQuestionsIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchHealthProfileQuestionsRequest();
    $request->filterGroups = 'dolores';
    $request->filterOrganization = 'enim';
    $request->filterPatient = 'laboriosam';
    $request->include = FetchHealthProfileQuestionsIncludeEnum::QUESTION_DEFINITION;

    $response = $sdk->healthProfileQuestion->fetchHealthProfileQuestions($request);

    if ($response->fetchHealthProfileQuestionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
