# predictionsApi

### Available Operations

* [deletePrediction](#deleteprediction) - Delete a set of predicted images and their associated prediction results
* [queryPredictionsForm](#querypredictionsform) - Get images that were sent to your prediction endpoint
* [queryPredictionsJson](#querypredictionsjson) - Get images that were sent to your prediction endpoint
* [queryPredictionsRaw](#querypredictionsraw) - Get images that were sent to your prediction endpoint
* [quickTestImage](#quicktestimage) - Quick test an image
* [quickTestImageUrlForm](#quicktestimageurlform) - Quick test an image url
* [quickTestImageUrlJson](#quicktestimageurljson) - Quick test an image url
* [quickTestImageUrlRaw](#quicktestimageurlraw) - Quick test an image url

## deletePrediction

Delete a set of predicted images and their associated prediction results

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
    $request->trainingKey = 'velit';
    $request->ids = [
        'accusantium',
    ];
    $request->projectId = '661e9634-9e1c-4f9e-86e3-a437000ae6b6';

    $response = $sdk->predictionsApi->deletePrediction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryPredictionsForm

Get images that were sent to your prediction endpoint

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
    $request->predictionQueryTokenInput->application = 'facilis';
    $request->predictionQueryTokenInput->continuation = 'placeat';
    $request->predictionQueryTokenInput->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-01T09:41:55.270Z');
    $request->predictionQueryTokenInput->iterationId = '8f759eac-55a9-4741-9311-352965bb8a72';
    $request->predictionQueryTokenInput->maxCount = 545;
    $request->predictionQueryTokenInput->orderBy = PredictionQueryTokenOrderByEnum::NEWEST;
    $request->predictionQueryTokenInput->session = 'vel';
    $request->predictionQueryTokenInput->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-08T19:16:07.063Z');
    $request->trainingKey = 'modi';
    $request->projectId = '35e139db-c225-49b1-abda-8c070e1084cb';

    $response = $sdk->predictionsApi->queryPredictionsForm($request);

    if ($response->predictionQueryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryPredictionsJson

Get images that were sent to your prediction endpoint

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
    $request->predictionQueryTokenInput->application = 'voluptatem';
    $request->predictionQueryTokenInput->continuation = 'autem';
    $request->predictionQueryTokenInput->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-29T20:56:45.429Z');
    $request->predictionQueryTokenInput->iterationId = 'd1ad879e-eb96-465b-85ef-bd02bae0be2d';
    $request->predictionQueryTokenInput->maxCount = 483518;
    $request->predictionQueryTokenInput->orderBy = PredictionQueryTokenOrderByEnum::OLDEST;
    $request->predictionQueryTokenInput->session = 'odit';
    $request->predictionQueryTokenInput->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T23:12:04.283Z');
    $request->trainingKey = 'error';
    $request->projectId = 'e3ea4b51-97f9-4244-bda7-ce52b895c537';

    $response = $sdk->predictionsApi->queryPredictionsJson($request);

    if ($response->predictionQueryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryPredictionsRaw

Get images that were sent to your prediction endpoint

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
    $request->requestBody = 'minus';
    $request->trainingKey = 'eum';
    $request->projectId = '454efb0b-3489-46c3-8a5a-cfbe2fd57075';

    $response = $sdk->predictionsApi->queryPredictionsRaw($request);

    if ($response->predictionQueryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quickTestImage

Quick test an image

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
    $request->requestBody->imageData->content = 'in';
    $request->requestBody->imageData->imageData = 'ducimus';
    $request->trainingKey = 'excepturi';
    $request->iterationId = '29177dea-c646-4ecb-9734-09e3eb1e5a2b';
    $request->projectId = '12eb07f1-16db-4995-85fc-95fa88970e18';

    $response = $sdk->predictionsApi->quickTestImage($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quickTestImageUrlForm

Quick test an image url

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
    $request->imageUrl->url = 'iste';
    $request->trainingKey = 'assumenda';
    $request->iterationId = 'bb30fcb3-3ea0-455b-997c-d44e2f52d82d';
    $request->projectId = '3513bb6f-48b6-456b-8db3-5ff2e4b27537';

    $response = $sdk->predictionsApi->quickTestImageUrlForm($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quickTestImageUrlJson

Quick test an image url

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
    $request->imageUrl->url = 'est';
    $request->trainingKey = 'rem';
    $request->iterationId = 'cd9e7319-c177-4d52-9f77-b114eeb52ff7';
    $request->projectId = '85fc3781-4d4c-498e-8c2b-b89eb75dad63';

    $response = $sdk->predictionsApi->quickTestImageUrlJson($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quickTestImageUrlRaw

Quick test an image url

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
    $request->requestBody = 'commodi';
    $request->trainingKey = 'impedit';
    $request->iterationId = '600503d8-bb31-4180-b739-ae9e057eb809';
    $request->projectId = 'e2810331-f398-41d4-8700-b607f3c93c73';

    $response = $sdk->predictionsApi->quickTestImageUrlRaw($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
