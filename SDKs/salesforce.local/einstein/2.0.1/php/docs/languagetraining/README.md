# languageTraining

## Overview

Resources that handle text dataset training.

### Available Operations

* [getTrainStatusAndProgress](#gettrainstatusandprogress) - Get Training Status
* [retrain](#retrain) - Retrain a Dataset
* [train](#train) - Train a Dataset

## getTrainStatusAndProgress

Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainStatusAndProgressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTrainStatusAndProgressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrainStatusAndProgressRequest();
    $request->modelId = 'ipsum';

    $requestSecurity = new GetTrainStatusAndProgressSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageTraining->getTrainStatusAndProgress($request, $requestSecurity);

    if ($response->trainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrain

Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrainRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\V2LanguageTrainParams;
use \OpenAPI\OpenAPI\Models\Operations\RetrainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrainRequestBody();
    $request->algorithm = 'intent';
    $request->epochs = 20;
    $request->learningRate = 0.0001;
    $request->modelId = '7JXCXTRXTMNLJCEF2DR5CJ46QU';
    $request->trainParams = new V2LanguageTrainParams();
    $request->trainParams->trainSplitRatio = 0.9;
    $request->trainParams->withFeedback = false;
    $request->trainParams->withGlobalDatasetId = 568434;

    $requestSecurity = new RetrainSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageTraining->retrain($request, $requestSecurity);

    if ($response->trainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## train

Trains a dataset and creates a model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TrainRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\V2LanguageTrainParams;
use \OpenAPI\OpenAPI\Models\Operations\TrainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrainRequestBody();
    $request->algorithm = 'intent';
    $request->datasetId = 57;
    $request->epochs = 20;
    $request->learningRate = 1352.18;
    $request->name = 'Cathy Mosciski';
    $request->trainParams = new V2LanguageTrainParams();
    $request->trainParams->trainSplitRatio = 0.9;
    $request->trainParams->withFeedback = false;
    $request->trainParams->withGlobalDatasetId = 222321;

    $requestSecurity = new TrainSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->languageTraining->train($request, $requestSecurity);

    if ($response->trainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
