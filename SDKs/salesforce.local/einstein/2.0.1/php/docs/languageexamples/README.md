# languageExamples

## Overview

Resources that manage text examples.

### Available Operations

* [getExamples](#getexamples) - Get All Examples
* [getExamplesByLabel](#getexamplesbylabel) - Get All Examples for Label
* [provideFeedback](#providefeedback) - Create a Feedback Example
* [updateDatasetAsync](#updatedatasetasync) - Create Examples From a File

## getExamples

Returns all the examples for the specified dataset,

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetExamplesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetExamplesSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetExamplesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExamplesRequest();
    $request->count = 'quod';
    $request->datasetId = 'quod';
    $request->offset = 'esse';
    $request->source = GetExamplesSourceEnum::FEEDBACK;

    $requestSecurity = new GetExamplesSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageExamples->getExamples($request, $requestSecurity);

    if ($response->exampleList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExamplesByLabel

Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetExamplesByLabelRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetExamplesByLabelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExamplesByLabelRequest();
    $request->count = 'porro';
    $request->labelId = 'dolorum';
    $request->offset = 'dicta';

    $requestSecurity = new GetExamplesByLabelSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageExamples->getExamplesByLabel($request, $requestSecurity);

    if ($response->exampleList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## provideFeedback

Adds a feedback example to the dataset associated with the specified model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProvideFeedbackRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ProvideFeedbackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvideFeedbackRequestBody();
    $request->document = 'nam';
    $request->expectedLabel = 'officia';
    $request->modelId = 'occaecati';
    $request->name = 'feedback-2';

    $requestSecurity = new ProvideFeedbackSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageExamples->provideFeedback($request, $requestSecurity);

    if ($response->example !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDatasetAsync

Adds examples from a .csv, .tsv, or .json file to a dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetAsyncRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetAsyncRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetAsyncSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatasetAsyncRequest();
    $request->requestBody = new UpdateDatasetAsyncRequestBody();
    $request->requestBody->data = 'fugit';
    $request->requestBody->type = 'deleniti';
    $request->datasetId = 'hic';

    $requestSecurity = new UpdateDatasetAsyncSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageExamples->updateDatasetAsync($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
