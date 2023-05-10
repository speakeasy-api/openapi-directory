# predictionsApi

### Available Operations

* [deletePrediction](#deleteprediction) - Delete a set of predicted images and their associated prediction results.
* [queryPredictionsForm](#querypredictionsform) - Get images that were sent to your prediction endpoint.
* [queryPredictionsJson](#querypredictionsjson) - Get images that were sent to your prediction endpoint.
* [queryPredictionsRaw](#querypredictionsraw) - Get images that were sent to your prediction endpoint.
* [quickTestImage](#quicktestimage) - Quick test an image.
* [quickTestImageUrlForm](#quicktestimageurlform) - Quick test an image url.
* [quickTestImageUrlJson](#quicktestimageurljson) - Quick test an image url.
* [quickTestImageUrlRaw](#quicktestimageurlraw) - Quick test an image url.

## deletePrediction

Delete a set of predicted images and their associated prediction results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePredictionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePredictionRequest();
    $request->trainingKey = 'nisi';
    $request->ids = [
        'ee4825c1-fc0e-4115-880b-ff918544ec42',
        'defcce8f-1977-4773-a635-62a7b408f05e',
        '3d48fdaf-313a-41f5-bd94-259c0b36f25e',
    ];
    $request->projectId = 'a944f3b7-56c1-41f6-837a-5126243835bb';

    $response = $sdk->predictionsApi->deletePrediction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryPredictionsForm

Get images that were sent to your prediction endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QueryPredictionsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTokenInput;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTokenOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryPredictionsFormRequest();
    $request->predictionQueryTokenInput = new PredictionQueryTokenInput();
    $request->predictionQueryTokenInput->application = 'impedit';
    $request->predictionQueryTokenInput->continuation = 'sit';
    $request->predictionQueryTokenInput->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-14T14:16:27.959Z');
    $request->predictionQueryTokenInput->iterationId = '23a45cef-c5fd-4e10-a0ce-2169e510019c';
    $request->predictionQueryTokenInput->maxCount = 435531;
    $request->predictionQueryTokenInput->orderBy = PredictionQueryTokenOrderByEnum::SUGGESTED;
    $request->predictionQueryTokenInput->session = 'quod';
    $request->predictionQueryTokenInput->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-28T22:31:45.952Z');
    $request->trainingKey = 'velit';
    $request->projectId = '4762799b-fbbe-4694-9fb2-bb4ecae6c3d5';

    $response = $sdk->predictionsApi->queryPredictionsForm($request);

    if ($response->predictionQueryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryPredictionsJson

Get images that were sent to your prediction endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QueryPredictionsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTokenInput;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTokenOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryPredictionsJsonRequest();
    $request->predictionQueryTokenInput = new PredictionQueryTokenInput();
    $request->predictionQueryTokenInput->application = 'illum';
    $request->predictionQueryTokenInput->continuation = 'facilis';
    $request->predictionQueryTokenInput->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-08T22:04:48.396Z');
    $request->predictionQueryTokenInput->iterationId = 'debd5dae-a4c5-406a-8aa9-4c02644cf5e9';
    $request->predictionQueryTokenInput->maxCount = 860311;
    $request->predictionQueryTokenInput->orderBy = PredictionQueryTokenOrderByEnum::OLDEST;
    $request->predictionQueryTokenInput->session = 'mollitia';
    $request->predictionQueryTokenInput->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-28T08:01:36.245Z');
    $request->trainingKey = 'esse';
    $request->projectId = '8adc1ac6-00de-4c00-9ac8-02e2ec09ff8f';

    $response = $sdk->predictionsApi->queryPredictionsJson($request);

    if ($response->predictionQueryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryPredictionsRaw

Get images that were sent to your prediction endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QueryPredictionsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryPredictionsRawRequest();
    $request->requestBody = 'alias';
    $request->trainingKey = 'asperiores';
    $request->projectId = '816ff347-7c13-4e90-ac14-125b0960a668';

    $response = $sdk->predictionsApi->queryPredictionsRaw($request);

    if ($response->predictionQueryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quickTestImage

Quick test an image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuickTestImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\QuickTestImageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\QuickTestImageRequestBodyImageData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuickTestImageRequest();
    $request->requestBody = new QuickTestImageRequestBody();
    $request->requestBody->imageData = new QuickTestImageRequestBodyImageData();
    $request->requestBody->imageData->content = 'veritatis';
    $request->requestBody->imageData->imageData = 'ullam';
    $request->trainingKey = 'quae';
    $request->iterationId = 'a472af92-3c59-449f-83f3-50cf876ffb90';
    $request->projectId = '1c6ecbb4-e243-4cf7-89ff-afeda53e5ae6';

    $response = $sdk->predictionsApi->quickTestImage($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quickTestImageUrlForm

Quick test an image url.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuickTestImageUrlFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuickTestImageUrlFormRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'repudiandae';
    $request->trainingKey = 'accusantium';
    $request->iterationId = 'ac184c2b-9c24-47c8-8373-a40e1942f32e';
    $request->projectId = '55055756-f5d5-46d0-bd0a-f2dfe13db4f6';

    $response = $sdk->predictionsApi->quickTestImageUrlForm($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quickTestImageUrlJson

Quick test an image url.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuickTestImageUrlJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuickTestImageUrlJsonRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'explicabo';
    $request->trainingKey = 'minus';
    $request->iterationId = 'ba3f8941-aebc-40b8-8a69-24d3b2ecfcc8';
    $request->projectId = 'f895010f-5dd3-4d6f-a180-4e54c82f168a';

    $response = $sdk->predictionsApi->quickTestImageUrlJson($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quickTestImageUrlRaw

Quick test an image url.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuickTestImageUrlRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuickTestImageUrlRawRequest();
    $request->requestBody = 'dolor';
    $request->trainingKey = 'aliquid';
    $request->iterationId = '3c8873e4-8438-40b1-b6b8-ca275a60a04c';
    $request->projectId = '495cc699-171b-451c-9bdb-1cf4b888ebdf';

    $response = $sdk->predictionsApi->quickTestImageUrlRaw($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
