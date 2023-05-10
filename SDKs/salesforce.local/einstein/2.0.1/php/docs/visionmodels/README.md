# visionModels

## Overview

Resources that manage image models and model metrics.

### Available Operations

* [deleteModel1](#deletemodel1) - Delete a Model
* [getTrainedModelLearningCurve1](#gettrainedmodellearningcurve1) - Get Model Learning Curve
* [getTrainedModelMetrics1](#gettrainedmodelmetrics1) - Get Model Metrics
* [getTrainedModels1](#gettrainedmodels1) - Get All Models

## deleteModel1

Deletes the specified model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModel1Request;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModel1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModel1Request();
    $request->modelId = 'SomeModelId';

    $requestSecurity = new DeleteModel1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionModels->deleteModel1($request, $requestSecurity);

    if ($response->deletionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrainedModelLearningCurve1

Returns the metrics for each epoch in a model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainedModelLearningCurve1Request;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainedModelLearningCurve1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrainedModelLearningCurve1Request();
    $request->count = 'quasi';
    $request->modelId = 'SomeModelId';
    $request->offset = 'reiciendis';

    $requestSecurity = new GetTrainedModelLearningCurve1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionModels->getTrainedModelLearningCurve1($request, $requestSecurity);

    if ($response->learningCurveList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrainedModelMetrics1

Returns the metrics for a model

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainedModelMetrics1Request;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainedModelMetrics1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrainedModelMetrics1Request();
    $request->modelId = 'SomeModelId';

    $requestSecurity = new GetTrainedModelMetrics1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionModels->getTrainedModelMetrics1($request, $requestSecurity);

    if ($response->metrics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrainedModels1

Returns all models for the specified dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainedModels1Request;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainedModels1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrainedModels1Request();
    $request->count = 'voluptatibus';
    $request->datasetId = 'vero';
    $request->offset = 'nihil';

    $requestSecurity = new GetTrainedModels1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionModels->getTrainedModels1($request, $requestSecurity);

    if ($response->modelList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
