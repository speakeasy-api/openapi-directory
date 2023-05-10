# imagePredictionApi

### Available Operations

* [predictImage](#predictimage) - Predict an image and saves the result
* [predictImageUrlWithNoStoreForm](#predictimageurlwithnostoreform) - Predict an image url without saving the result
* [predictImageUrlWithNoStoreJson](#predictimageurlwithnostorejson) - Predict an image url without saving the result
* [predictImageUrlWithNoStoreRaw](#predictimageurlwithnostoreraw) - Predict an image url without saving the result
* [predictImageUrlForm](#predictimageurlform) - Predict an image url and saves the result
* [predictImageUrlJson](#predictimageurljson) - Predict an image url and saves the result
* [predictImageUrlRaw](#predictimageurlraw) - Predict an image url and saves the result
* [predictImageWithNoStore](#predictimagewithnostore) - Predict an image without saving the result

## predictImage

Predict an image and saves the result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageRequestBodyImageData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictImageRequest();
    $request->predictionKey = 'excepturi';
    $request->requestBody = new PredictImageRequestBody();
    $request->requestBody->imageData = new PredictImageRequestBodyImageData();
    $request->requestBody->imageData->content = 'aspernatur';
    $request->requestBody->imageData->imageData = 'perferendis';
    $request->application = 'ad';
    $request->iterationId = '929396fe-a759-46eb-90fa-aa2352c59559';
    $request->projectId = '07aff1a3-a2fa-4946-b739-251aa52c3f5a';

    $response = $sdk->imagePredictionApi->predictImage($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## predictImageUrlWithNoStoreForm

Predict an image url without saving the result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageUrlWithNoStoreFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictImageUrlWithNoStoreFormRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'possimus';
    $request->predictionKey = 'aut';
    $request->application = 'quasi';
    $request->iterationId = '9da1ffe7-8f09-47b0-874f-15471b5e6e13';
    $request->projectId = 'b99d488e-1e91-4e45-8ad2-abd44269802d';

    $response = $sdk->imagePredictionApi->predictImageUrlWithNoStoreForm($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## predictImageUrlWithNoStoreJson

Predict an image url without saving the result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageUrlWithNoStoreJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictImageUrlWithNoStoreJsonRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'ipsam';
    $request->predictionKey = 'alias';
    $request->application = 'fugit';
    $request->iterationId = 'a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66';
    $request->projectId = 'ae395efb-9ba8-48f3-a669-97074ba4469b';

    $response = $sdk->imagePredictionApi->predictImageUrlWithNoStoreJson($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## predictImageUrlWithNoStoreRaw

Predict an image url without saving the result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageUrlWithNoStoreRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictImageUrlWithNoStoreRawRequest();
    $request->predictionKey = 'eum';
    $request->requestBody = 'vero';
    $request->application = 'aspernatur';
    $request->iterationId = '14195989-0afa-4563-a251-6fe4c8b711e5';
    $request->projectId = 'b7fd2ed0-2892-41cd-9c69-2601fb576b0d';

    $response = $sdk->imagePredictionApi->predictImageUrlWithNoStoreRaw($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## predictImageUrlForm

Predict an image url and saves the result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageUrlFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictImageUrlFormRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'nemo';
    $request->predictionKey = 'voluptatibus';
    $request->application = 'perferendis';
    $request->iterationId = 'd30c5fbb-2587-4053-a02c-73d5fe9b90c2';
    $request->projectId = '8909b3fe-49a8-4d9c-bf48-633323f9b77f';

    $response = $sdk->imagePredictionApi->predictImageUrlForm($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## predictImageUrlJson

Predict an image url and saves the result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageUrlJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictImageUrlJsonRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'amet';
    $request->predictionKey = 'dolorum';
    $request->application = 'numquam';
    $request->iterationId = '100674eb-f692-480d-9ba7-7a89ebf737ae';
    $request->projectId = '4203ce5e-6a95-4d8a-8d44-6ce2af7a73cf';

    $response = $sdk->imagePredictionApi->predictImageUrlJson($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## predictImageUrlRaw

Predict an image url and saves the result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageUrlRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictImageUrlRawRequest();
    $request->predictionKey = 'amet';
    $request->requestBody = 'tempore';
    $request->application = 'accusamus';
    $request->iterationId = '453f870b-326b-45a7-b429-cdb1a8422bb6';
    $request->projectId = '79d23227-15bf-40cb-b1e3-1b8b90f3443a';

    $response = $sdk->imagePredictionApi->predictImageUrlRaw($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## predictImageWithNoStore

Predict an image without saving the result

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageWithNoStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageWithNoStoreRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageWithNoStoreRequestBodyImageData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictImageWithNoStoreRequest();
    $request->predictionKey = 'architecto';
    $request->requestBody = new PredictImageWithNoStoreRequestBody();
    $request->requestBody->imageData = new PredictImageWithNoStoreRequestBodyImageData();
    $request->requestBody->imageData->content = 'quae';
    $request->requestBody->imageData->imageData = 'aut';
    $request->application = 'quas';
    $request->iterationId = 'e0adcf4b-9218-479f-8e95-3f73ef7fbc7a';
    $request->projectId = 'bd74dd39-c0f5-4d2c-bf7c-70a45626d436';

    $response = $sdk->imagePredictionApi->predictImageWithNoStore($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
