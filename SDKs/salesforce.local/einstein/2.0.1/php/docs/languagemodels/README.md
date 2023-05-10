# languageModels

## Overview

Resources that manage text models and model metrics.

### Available Operations

* [deleteModel](#deletemodel) - Delete a Model
* [getTrainedModelLearningCurve](#gettrainedmodellearningcurve) - Get Model Learning Curve
* [getTrainedModelMetrics](#gettrainedmodelmetrics) - Get Model Metrics
* [getTrainedModels](#gettrainedmodels) - Get All Models

## deleteModel

Deletes the specified model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteModelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteModelRequest();
    $request->modelId = 'optio';

    $requestSecurity = new DeleteModelSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageModels->deleteModel($request, $requestSecurity);

    if ($response->deletionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrainedModelLearningCurve

Returns the metrics for each epoch in a model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainedModelLearningCurveRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainedModelLearningCurveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrainedModelLearningCurveRequest();
    $request->count = 'totam';
    $request->modelId = 'beatae';
    $request->offset = 'commodi';

    $requestSecurity = new GetTrainedModelLearningCurveSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageModels->getTrainedModelLearningCurve($request, $requestSecurity);

    if ($response->learningCurveList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrainedModelMetrics

Returns the metrics for a model

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainedModelMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainedModelMetricsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrainedModelMetricsRequest();
    $request->modelId = 'molestiae';

    $requestSecurity = new GetTrainedModelMetricsSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageModels->getTrainedModelMetrics($request, $requestSecurity);

    if ($response->metrics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrainedModels

Returns all models for the specified dataset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainedModelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainedModelsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrainedModelsRequest();
    $request->count = 'modi';
    $request->datasetId = 'qui';
    $request->offset = 'impedit';

    $requestSecurity = new GetTrainedModelsSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageModels->getTrainedModels($request, $requestSecurity);

    if ($response->modelList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
