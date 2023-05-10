# predictionsApi

### Available Operations

* [deletePrediction](#deleteprediction) - Delete a set of predicted images and their associated prediction results
* [queryPredictionResultsForm](#querypredictionresultsform) - Get images that were sent to your prediction endpoint
* [queryPredictionResultsJson](#querypredictionresultsjson) - Get images that were sent to your prediction endpoint
* [queryPredictionResultsRaw](#querypredictionresultsraw) - Get images that were sent to your prediction endpoint
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
    $request->trainingKey = 'blanditiis';
    $request->ids = [
        'sed',
        'sit',
    ];
    $request->projectId = '65e904f3-b119-44b8-abf6-03a79f9dfe0a';

    $response = $sdk->predictionsApi->deletePrediction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryPredictionResultsForm

Get images that were sent to your prediction endpoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QueryPredictionResultsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTokenInput;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTokenOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryPredictionResultsFormRequest();
    $request->predictionQueryTokenInput = new PredictionQueryTokenInput();
    $request->predictionQueryTokenInput->application = 'quidem';
    $request->predictionQueryTokenInput->continuation = 'reprehenderit';
    $request->predictionQueryTokenInput->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-11T19:46:56.272Z');
    $request->predictionQueryTokenInput->iterationId = '8a50ce18-7f86-4bc1-b3d6-89eee9526f8d';
    $request->predictionQueryTokenInput->maxCount = 621693;
    $request->predictionQueryTokenInput->orderBy = PredictionQueryTokenOrderByEnum::OLDEST;
    $request->predictionQueryTokenInput->session = 'suscipit';
    $request->predictionQueryTokenInput->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-17T08:50:15.963Z');
    $request->trainingKey = 'atque';
    $request->projectId = '1ead4f0e-1012-4563-b94e-29e973e922a5';

    $response = $sdk->predictionsApi->queryPredictionResultsForm($request);

    if ($response->predictionQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryPredictionResultsJson

Get images that were sent to your prediction endpoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QueryPredictionResultsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTokenInput;
use \OpenAPI\OpenAPI\Models\Shared\PredictionQueryTokenOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryPredictionResultsJsonRequest();
    $request->predictionQueryTokenInput = new PredictionQueryTokenInput();
    $request->predictionQueryTokenInput->application = 'reprehenderit';
    $request->predictionQueryTokenInput->continuation = 'error';
    $request->predictionQueryTokenInput->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T02:57:43.536Z');
    $request->predictionQueryTokenInput->iterationId = 'be3e0608-07e2-4b6e-bab8-845f0597a60f';
    $request->predictionQueryTokenInput->maxCount = 970222;
    $request->predictionQueryTokenInput->orderBy = PredictionQueryTokenOrderByEnum::NEWEST;
    $request->predictionQueryTokenInput->session = 'id';
    $request->predictionQueryTokenInput->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-16T00:03:17.363Z');
    $request->trainingKey = 'dolorum';
    $request->projectId = '31e94764-a3e8-465e-b956-f9251a5a9da6';

    $response = $sdk->predictionsApi->queryPredictionResultsJson($request);

    if ($response->predictionQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryPredictionResultsRaw

Get images that were sent to your prediction endpoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QueryPredictionResultsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryPredictionResultsRawRequest();
    $request->requestBody = 'aliquid';
    $request->trainingKey = 'accusantium';
    $request->projectId = 'ff57bfaa-d4f9-4efc-9b45-12c1032648dc';

    $response = $sdk->predictionsApi->queryPredictionResultsRaw($request);

    if ($response->predictionQuery !== null) {
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
    $request->requestBody->imageData->content = 'eos';
    $request->requestBody->imageData->imageData = 'sapiente';
    $request->trainingKey = 'eum';
    $request->iterationId = '15199ebf-d0e9-4fe6-8632-ca3aed011799';
    $request->projectId = '6312fde0-4771-4778-bf61-d017476360a1';

    $response = $sdk->predictionsApi->quickTestImage($request);

    if ($response->imagePredictionResult !== null) {
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
    $request->imageUrl->url = 'nostrum';
    $request->trainingKey = 'fugiat';
    $request->iterationId = 'b6a66065-9a1a-4dea-ab58-51d6c645b08b';
    $request->projectId = '61891baa-0fe1-4ade-808e-6f8c5f350d8c';

    $response = $sdk->predictionsApi->quickTestImageUrlForm($request);

    if ($response->imagePredictionResult !== null) {
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
    $request->imageUrl->url = 'quibusdam';
    $request->trainingKey = 'nam';
    $request->iterationId = '5a341814-3010-4421-813d-5208ece7e253';
    $request->projectId = 'b668451c-6c6e-4205-a16d-eab3fec9578a';

    $response = $sdk->predictionsApi->quickTestImageUrlJson($request);

    if ($response->imagePredictionResult !== null) {
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
    $request->requestBody = 'voluptas';
    $request->trainingKey = 'numquam';
    $request->iterationId = '584273a8-418d-4162-b09f-b0929921aefb';
    $request->projectId = '9f58c4d8-6e68-4e4b-a056-013f59da757a';

    $response = $sdk->predictionsApi->quickTestImageUrlRaw($request);

    if ($response->imagePredictionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
