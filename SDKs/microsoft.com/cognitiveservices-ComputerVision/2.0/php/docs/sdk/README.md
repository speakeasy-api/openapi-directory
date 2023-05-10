# SDK

## Overview

The Computer Vision API provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image.  It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences.  Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.

### Available Operations

* [analyzeImage](#analyzeimage) - This operation extracts a rich set of visual features based on the image content.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
* [analyzeImageByDomain](#analyzeimagebydomain) - This operation recognizes content within an image by applying a domain-specific model. The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request. Currently, the API provides following domain-specific models: celebrities, landmarks.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON.
If the request failed, the response will contain an error code and a message to help understand what went wrong.
* [describeImage](#describeimage) - This operation generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. All descriptions are in English.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
* [detectObjects](#detectobjects) - Performs object detection on the specified image.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
* [generateThumbnail](#generatethumbnail) - This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image.
A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.
* [getAreaOfInterest](#getareaofinterest) - This operation returns a bounding box around the most important area of the image.
A successful response will be returned in JSON. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.
* [listModels](#listmodels) - This operation returns the list of domain-specific models that are supported by the Computer Vision API. Currently, the API supports following domain-specific models: celebrity recognizer, landmark recognizer.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
* [recognizePrintedText](#recognizeprintedtext) - Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.
Upon success, the OCR results will be returned.
Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, NotSupportedLanguage, or InternalServerError.
* [tagImage](#tagimage) - This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag "cello" may be accompanied by the hint "musical instrument". All tags are in English.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

## analyzeImage

This operation extracts a rich set of visual features based on the image content.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeImageDetailsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\VisualFeaturesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyzeImageRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'deserunt';
    $request->details = [
        AnalyzeImageDetailsEnum::CELEBRITIES,
        AnalyzeImageDetailsEnum::CELEBRITIES,
    ];
    $request->language = ServiceLanguageEnum::ZH;
    $request->visualFeatures = [
        VisualFeaturesEnum::BRANDS,
    ];

    $response = $sdk->sdk->analyzeImage($request);

    if ($response->imageAnalysis !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyzeImageByDomain

This operation recognizes content within an image by applying a domain-specific model. The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request. Currently, the API provides following domain-specific models: celebrities, landmarks.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON.
If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeImageByDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;
use \OpenAPI\OpenAPI\Models\Shared\ServiceLanguageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyzeImageByDomainRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'tempora';
    $request->language = ServiceLanguageEnum::ES;
    $request->model = 'molestiae';

    $response = $sdk->sdk->analyzeImageByDomain($request);

    if ($response->domainModelResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImage

This operation generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. All descriptions are in English.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;
use \OpenAPI\OpenAPI\Models\Shared\ServiceLanguageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImageRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'minus';
    $request->language = ServiceLanguageEnum::ZH;
    $request->maxCandidates = 528895;

    $response = $sdk->sdk->describeImage($request);

    if ($response->imageDescription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectObjects

Performs object detection on the specified image.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

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
    $request->url = 'iusto';

    $response = $sdk->sdk->detectObjects($request);

    if ($response->detectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateThumbnail

This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image.
A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateThumbnailRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateThumbnailRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'excepturi';
    $request->height = 392785;
    $request->smartCropping = false;
    $request->width = 925597;

    $response = $sdk->sdk->generateThumbnail($request);

    if ($response->generateThumbnail200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAreaOfInterest

This operation returns a bounding box around the most important area of the image.
A successful response will be returned in JSON. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.

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
    $request->url = 'temporibus';

    $response = $sdk->sdk->getAreaOfInterest($request);

    if ($response->areaOfInterestResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listModels

This operation returns the list of domain-specific models that are supported by the Computer Vision API. Currently, the API supports following domain-specific models: celebrity recognizer, landmark recognizer.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->listModels();

    if ($response->listModelsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recognizePrintedText

Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.
Upon success, the OCR results will be returned.
Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, NotSupportedLanguage, or InternalServerError.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RecognizePrintedTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;
use \OpenAPI\OpenAPI\Models\Shared\OcrLanguageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecognizePrintedTextRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'ab';
    $request->detectOrientation = false;
    $request->language = OcrLanguageEnum::DE;

    $response = $sdk->sdk->recognizePrintedText($request);

    if ($response->ocrResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagImage

This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag "cello" may be accompanied by the hint "musical instrument". All tags are in English.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;
use \OpenAPI\OpenAPI\Models\Shared\ServiceLanguageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagImageRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'veritatis';
    $request->language = ServiceLanguageEnum::PT;

    $response = $sdk->sdk->tagImage($request);

    if ($response->tagResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
