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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePredictionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePredictionRequest();
    $request->ids = [
        '6e2813fa-4a41-4c48-8d3f-2132af03102d',
    ];
    $request->projectId = '514f4cc6-f18b-4f96-a1a6-a4f77a87ee3e';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryPredictionsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryToken;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTokenOrderByEnum;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryPredictionsFormRequest();
    $request->predictionQueryToken = new PredictionQueryToken();
    $request->predictionQueryToken->application = 'eius';
    $request->predictionQueryToken->continuation = 'rerum';
    $request->predictionQueryToken->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-13T19:04:49.388Z');
    $request->predictionQueryToken->iterationId = '52c65b34-418e-43bb-91c8-d975e0e8419d';
    $request->predictionQueryToken->maxCount = 526584;
    $request->predictionQueryToken->orderBy = PredictionQueryTokenOrderByEnum::SUGGESTED;
    $request->predictionQueryToken->session = 'deleniti';
    $request->predictionQueryToken->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-23T18:04:16.608Z');
    $request->predictionQueryToken->tags = [
        new PredictionQueryTag(),
    ];
    $request->projectId = '44f3e07e-dcc4-4aa5-b3ca-bd905a972e05';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryPredictionsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryToken;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTokenOrderByEnum;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryPredictionsJsonRequest();
    $request->predictionQueryToken = new PredictionQueryToken();
    $request->predictionQueryToken->application = 'nisi';
    $request->predictionQueryToken->continuation = 'molestiae';
    $request->predictionQueryToken->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-27T02:38:23.996Z');
    $request->predictionQueryToken->iterationId = '227b2d30-9470-4bf7-a4fa-87cf535a6fae';
    $request->predictionQueryToken->maxCount = 359453;
    $request->predictionQueryToken->orderBy = PredictionQueryTokenOrderByEnum::NEWEST;
    $request->predictionQueryToken->session = 'necessitatibus';
    $request->predictionQueryToken->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-13T05:01:27.465Z');
    $request->predictionQueryToken->tags = [
        new PredictionQueryTag(),
        new PredictionQueryTag(),
    ];
    $request->projectId = '0c321f02-3b75-4d23-a7fe-1a0cc8df79f0';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryPredictionsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryPredictionsRawRequest();
    $request->requestBody = 'similique';
    $request->projectId = '396d90c3-64b7-4c15-9fba-ce188b1c4ee2';

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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QuickTestImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\QuickTestImageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\QuickTestImageRequestBodyImageData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuickTestImageRequest();
    $request->requestBody = new QuickTestImageRequestBody();
    $request->requestBody->imageData = new QuickTestImageRequestBodyImageData();
    $request->requestBody->imageData->content = 'impedit';
    $request->requestBody->imageData->imageData = 'quas';
    $request->iterationId = 'c6ce611f-eeb1-4c7c-bdb6-eec74378ba25';
    $request->projectId = '317747dc-915a-4d2c-af5d-d6723dc0f5ae';
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QuickTestImageUrlFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuickTestImageUrlFormRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'aspernatur';
    $request->iterationId = 'f3a6b700-8787-4561-83f5-a6c98b555540';
    $request->projectId = '80d40bca-cc6c-4bd6-b5f3-ec909304f926';
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QuickTestImageUrlJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuickTestImageUrlJsonRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'cum';
    $request->iterationId = 'ad255381-9b47-44b0-ad20-e56248fff639';
    $request->projectId = 'a910abdc-ab62-4676-a96e-1ec00221b335';
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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QuickTestImageUrlRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuickTestImageUrlRawRequest();
    $request->requestBody = 'illum';
    $request->iterationId = '89acb3ec-fda8-4d0c-949e-f03004978a61';
    $request->projectId = 'fa1cf206-88f7-47c1-bfc7-1dca163f2a3c';
    $request->store = false;

    $response = $sdk->predictionsApi->quickTestImageUrlRaw($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
