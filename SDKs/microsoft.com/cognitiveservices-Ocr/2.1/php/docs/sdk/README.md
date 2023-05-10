# SDK

## Overview

The Computer Vision API provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image.  It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences.  Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.

### Available Operations

* [batchReadFile](#batchreadfile) - Use this interface to get the result of a Read operation, employing the state-of-the-art Optical Character Recognition (OCR) algorithms optimized for text-heavy documents. When you use the Read File interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your 'GetReadOperationResult' operation to access OCR results.​
* [getReadOperationResult](#getreadoperationresult) - This interface is used for getting OCR results of Read operation. The URL to this interface should be retrieved from 'Operation-Location' field returned from Batch Read File interface.
* [getTextOperationResult](#gettextoperationresult) - This interface is used for getting text operation result. The URL to this interface should be retrieved from 'Operation-Location' field returned from Recognize Text interface.
* [recognizeText](#recognizetext) - Recognize Text operation. When you use the Recognize Text interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your Get Recognize Text Operation Result operation.

## batchReadFile

Use this interface to get the result of a Read operation, employing the state-of-the-art Optical Character Recognition (OCR) algorithms optimized for text-heavy documents. When you use the Read File interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your 'GetReadOperationResult' operation to access OCR results.​

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageUrl();
    $request->url = 'provident';

    $response = $sdk->sdk->batchReadFile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReadOperationResult

This interface is used for getting OCR results of Read operation. The URL to this interface should be retrieved from 'Operation-Location' field returned from Batch Read File interface.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReadOperationResultRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReadOperationResultRequest();
    $request->operationId = 'distinctio';

    $response = $sdk->sdk->getReadOperationResult($request);

    if ($response->readOperationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTextOperationResult

This interface is used for getting text operation result. The URL to this interface should be retrieved from 'Operation-Location' field returned from Recognize Text interface.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTextOperationResultRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTextOperationResultRequest();
    $request->operationId = 'quibusdam';

    $response = $sdk->sdk->getTextOperationResult($request);

    if ($response->textOperationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recognizeText

Recognize Text operation. When you use the Recognize Text interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your Get Recognize Text Operation Result operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RecognizeTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;
use \OpenAPI\OpenAPI\Models\Shared\TextRecognitionModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecognizeTextRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'unde';
    $request->mode = TextRecognitionModeEnum::PRINTED;

    $response = $sdk->sdk->recognizeText($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
