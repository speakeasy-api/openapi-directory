# visionPrediction

## Overview

Resources that return predictions for image input.

### Available Operations

* [detectMultipart](#detectmultipart) - Detection with Image File
* [ocrMultipart](#ocrmultipart) - Detect Text
* [predictMultipart](#predictmultipart) - Make Prediction

## detectMultipart

Returns labels, probabilities, and bounding box coordinates for items detected in the specified local image file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ObjectDetectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetectMultipartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ObjectDetectionRequest();
    $request->modelId = 'YCQ4ZACEPJFGXZNRA6ERF3GL5E';
    $request->sampleBase64Content = 'SomeBase64EncodedImage';
    $request->sampleId = 'praesentium';
    $request->sampleLocation = 'voluptatibus';

    $requestSecurity = new DetectMultipartSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionPrediction->detectMultipart($request, $requestSecurity);

    if ($response->objectDetectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ocrMultipart

Returns a prediction from an OCR model for the specified image URL or local image file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OcrMultipartRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\OcrMultipartRequestBodySampleContent;
use \OpenAPI\OpenAPI\Models\Operations\OcrMultipartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OcrMultipartRequestBody();
    $request->modelId = 'WJH4YCA7YX4PCWVNCYNWYHBMY4';
    $request->sampleContent = new OcrMultipartRequestBodySampleContent();
    $request->sampleContent->content = 'ipsa';
    $request->sampleContent->sampleContent = 'omnis';
    $request->sampleId = 'voluptate';
    $request->sampleLocation = 'cum';
    $request->task = 'table';

    $requestSecurity = new OcrMultipartSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionPrediction->ocrMultipart($request, $requestSecurity);

    if ($response->ocrPredictResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## predictMultipart

Returns a prediction from an image or multi-label model for the specified image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ImageClassificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PredictMultipartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageClassificationRequest();
    $request->modelId = 'WJH4YCA7YX4PCWVNCYNWYHBMY4';
    $request->numResults = 3;
    $request->sampleBase64Content = 'SomeBase64EncodedImage';
    $request->sampleId = 'perferendis';
    $request->sampleLocation = 'doloremque';

    $requestSecurity = new PredictMultipartSecurity();
    $requestSecurity->bearerToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->visionPrediction->predictMultipart($request, $requestSecurity);

    if ($response->imageClassificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
