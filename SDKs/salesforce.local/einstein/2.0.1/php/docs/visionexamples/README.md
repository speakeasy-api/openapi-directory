# visionExamples

## Overview

Resources that manage image examples.

### Available Operations

* [addExample](#addexample) - Create an Example
* [getExamplesByLabel1](#getexamplesbylabel1) - Get All Examples for Label
* [getExamples1](#getexamples1) - Get All Examples
* [provideFeedback1](#providefeedback1) - Create a Feedback Example
* [updateDatasetAsync1](#updatedatasetasync1) - Create Feedback Examples From a Zip File
* [updateDatasetAsync2](#updatedatasetasync2) - Create Examples From a Zip File

## addExample

Adds an example with the specified label to a dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddExampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddExampleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddExampleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddExampleRequest();
    $request->requestBody = new AddExampleRequestBody();
    $request->requestBody->data = 'quam';
    $request->requestBody->labelId = 42;
    $request->requestBody->name = 'Shannon Mueller';
    $request->datasetId = 'vitae';

    $requestSecurity = new AddExampleSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionExamples->addExample($request, $requestSecurity);

    if ($response->example !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExamplesByLabel1

Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetExamplesByLabel1Request;
use \OpenAPI\OpenAPI\Models\Operations\GetExamplesByLabel1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExamplesByLabel1Request();
    $request->count = 'laborum';
    $request->labelId = 'animi';
    $request->offset = 'enim';

    $requestSecurity = new GetExamplesByLabel1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionExamples->getExamplesByLabel1($request, $requestSecurity);

    if ($response->exampleList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExamples1

Returns all the examples for the specified dataset. By default, returns examples created by uploading them from a .zip file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetExamples1Request;
use \OpenAPI\OpenAPI\Models\Operations\GetExamples1SourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetExamples1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExamples1Request();
    $request->count = 'odit';
    $request->datasetId = 'quo';
    $request->offset = 'sequi';
    $request->source = GetExamples1SourceEnum::UPLOAD;

    $requestSecurity = new GetExamples1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionExamples->getExamples1($request, $requestSecurity);

    if ($response->exampleList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## provideFeedback1

Adds a feedback example to the dataset associated with the specified model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProvideFeedback1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ProvideFeedback1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvideFeedback1RequestBody();
    $request->data = 'ipsam';
    $request->expectedLabel = 'id';
    $request->modelId = 'possimus';
    $request->name = 'feedback-1';

    $requestSecurity = new ProvideFeedback1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionExamples->provideFeedback1($request, $requestSecurity);

    if ($response->example !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDatasetAsync1

Adds feedback examples to the dataset associated with the specified object detection model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetAsync1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetAsync1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatasetAsync1RequestBody();
    $request->data = 'aut';
    $request->modelId = 'quasi';

    $requestSecurity = new UpdateDatasetAsync1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionExamples->updateDatasetAsync1($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDatasetAsync2

Adds examples from a .zip file to a dataset. You can use this call only with a dataset that was created from a .zip file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetAsync2Request;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetAsync2RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatasetAsync2Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatasetAsync2Request();
    $request->requestBody = new UpdateDatasetAsync2RequestBody();
    $request->requestBody->data = 'error';
    $request->requestBody->path = 'temporibus';
    $request->datasetId = 'laborum';

    $requestSecurity = new UpdateDatasetAsync2Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionExamples->updateDatasetAsync2($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
