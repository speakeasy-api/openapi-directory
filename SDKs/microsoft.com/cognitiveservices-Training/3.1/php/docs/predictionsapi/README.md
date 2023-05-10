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
    $request->trainingKey = 'sed';
    $request->ids = [
        '13fa4a41-c480-4d3f-a132-af03102d514f',
        '4cc6f18b-f962-41a6-a4f7-7a87ee3e4be7',
        '52c65b34-418e-43bb-91c8-d975e0e8419d',
    ];
    $request->projectId = '8f84f144-f3e0-47ed-8c4a-a5f3cabd905a';

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
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryToken;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTokenOrderByEnum;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryPredictionsFormRequest();
    $request->predictionQueryToken = new PredictionQueryToken();
    $request->predictionQueryToken->application = 'cupiditate';
    $request->predictionQueryToken->continuation = 'reprehenderit';
    $request->predictionQueryToken->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-07T04:45:04.380Z');
    $request->predictionQueryToken->iterationId = '05672822-7b2d-4309-870b-f7a4fa87cf53';
    $request->predictionQueryToken->maxCount = 353819;
    $request->predictionQueryToken->orderBy = PredictionQueryTokenOrderByEnum::SUGGESTED;
    $request->predictionQueryToken->session = 'voluptas';
    $request->predictionQueryToken->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-10T15:22:59.188Z');
    $request->predictionQueryToken->tags = [
        new PredictionQueryTag(),
        new PredictionQueryTag(),
        new PredictionQueryTag(),
        new PredictionQueryTag(),
    ];
    $request->trainingKey = 'corporis';
    $request->projectId = '4ebf60c3-21f0-423b-b5d2-367fe1a0cc8d';

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
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryToken;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTokenOrderByEnum;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryPredictionsJsonRequest();
    $request->predictionQueryToken = new PredictionQueryToken();
    $request->predictionQueryToken->application = 'maiores';
    $request->predictionQueryToken->continuation = 'odio';
    $request->predictionQueryToken->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-29T12:28:14.355Z');
    $request->predictionQueryToken->iterationId = '0a396d90-c364-4b7c-95df-bace188b1c4e';
    $request->predictionQueryToken->maxCount = 920548;
    $request->predictionQueryToken->orderBy = PredictionQueryTokenOrderByEnum::NEWEST;
    $request->predictionQueryToken->session = 'impedit';
    $request->predictionQueryToken->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-16T09:33:52.132Z');
    $request->predictionQueryToken->tags = [
        new PredictionQueryTag(),
        new PredictionQueryTag(),
    ];
    $request->trainingKey = 'eligendi';
    $request->projectId = 'e611feeb-1c7c-4bdb-aeec-74378ba25317';

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
    $request->requestBody = 'esse';
    $request->trainingKey = 'magnam';
    $request->projectId = '7dc915ad-2caf-45dd-a723-dc0f5ae2f3a6';

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
    $request->requestBody->imageData->content = 'harum';
    $request->requestBody->imageData->imageData = 'ducimus';
    $request->trainingKey = 'doloremque';
    $request->iterationId = '08787561-43f5-4a6c-98b5-5554080d40bc';
    $request->projectId = 'acc6cbd6-b5f3-4ec9-8930-4f926bad2553';
    $request->store = false;

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
    $request->imageUrl->url = 'voluptatum';
    $request->trainingKey = 'quasi';
    $request->iterationId = '9b474b0e-d20e-4562-88ff-f639a910abdc';
    $request->projectId = 'ab626766-96e1-4ec0-8221-b335d89acb3e';
    $request->store = false;

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
    $request->imageUrl->url = 'nobis';
    $request->trainingKey = 'asperiores';
    $request->iterationId = 'da8d0c54-9ef0-4300-8978-a61fa1cf2068';
    $request->projectId = '8f77c1ff-c71d-4ca1-a3f2-a3c80a97ff33';
    $request->store = false;

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
    $request->requestBody = 'non';
    $request->trainingKey = 'optio';
    $request->iterationId = 'ddf857a9-e618-476c-aab2-1d29dfc94d6f';
    $request->projectId = 'ecd79939-0066-4a6d-ad00-0355338cec08';
    $request->store = false;

    $response = $sdk->predictionsApi->quickTestImageUrlRaw($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
