# visionTraining

## Overview

Resources that handle image dataset training.

### Available Operations

* [getTrainStatusAndProgress1](#gettrainstatusandprogress1) - Get Training Status
* [retrain1](#retrain1) - Retrain a Dataset
* [train1](#train1) - Train a Dataset

## getTrainStatusAndProgress1

Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainStatusAndProgress1Request;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainStatusAndProgress1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrainStatusAndProgress1Request();
    $request->modelId = 'SomeModelId';

    $requestSecurity = new GetTrainStatusAndProgress1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionTraining->getTrainStatusAndProgress1($request, $requestSecurity);

    if ($response->trainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrain1

Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Retrain1RequestBody;
use \OpenAPI\OpenAPI\Models\Shared\V2VisionTrainParams;
use \OpenAPI\OpenAPI\Models\Operations\Retrain1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Retrain1RequestBody();
    $request->algorithm = 'object-detection';
    $request->epochs = 20;
    $request->learningRate = 0.0001;
    $request->modelId = '7JXCXTRXTMNLJCEF2DR5CJ46QU';
    $request->trainParams = new V2VisionTrainParams();
    $request->trainParams->trainSplitRatio = 0.9;
    $request->trainParams->withFeedback = false;
    $request->trainParams->withGlobalDatasetId = 441711;

    $requestSecurity = new Retrain1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionTraining->retrain1($request, $requestSecurity);

    if ($response->trainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## train1

Trains a dataset and creates a model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Train1RequestBody;
use \OpenAPI\OpenAPI\Models\Shared\V2VisionTrainParams;
use \OpenAPI\OpenAPI\Models\Operations\Train1Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Train1RequestBody();
    $request->algorithm = 'object-detection';
    $request->datasetId = 57;
    $request->epochs = 20;
    $request->learningRate = 0.0001;
    $request->name = 'Shawna Carter';
    $request->trainParams = new V2VisionTrainParams();
    $request->trainParams->trainSplitRatio = 0.9;
    $request->trainParams->withFeedback = false;
    $request->trainParams->withGlobalDatasetId = 480894;

    $requestSecurity = new Train1Security();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionTraining->train1($request, $requestSecurity);

    if ($response->trainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
