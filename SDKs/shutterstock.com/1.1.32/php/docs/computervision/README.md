# computerVision

### Available Operations

* [getKeywords](#getkeywords) - List suggested keywords
* [getSimilarImages](#getsimilarimages) - List similar images
* [getSimilarVideos](#getsimilarvideos) - List similar videos
* [~~uploadEphemeralImage~~](#uploadephemeralimage) - Upload ephemeral images :warning: **Deprecated**
* [uploadImage](#uploadimage) - Upload images

## getKeywords

This endpoint returns a list of suggested keywords for a media item that you specify or upload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetKeywordsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetKeywordsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKeywordsRequest();
    $request->assetId = 'sit';

    $requestSecurity = new GetKeywordsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->computerVision->getKeywords($request, $requestSecurity);

    if ($response->keywordDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSimilarImages

This endpoint returns images that are visually similar to an image that you specify or upload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarImagesLicenseEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarImagesViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarImagesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSimilarImagesRequest();
    $request->assetId = 'fugiat';
    $request->language = LanguageEnum::CS;
    $request->license = [
        GetSimilarImagesLicenseEnum::EDITORIAL,
    ];
    $request->page = 679393;
    $request->perPage = 478596;
    $request->safe = false;
    $request->view = GetSimilarImagesViewEnum::MINIMAL;

    $requestSecurity = new GetSimilarImagesSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->computerVision->getSimilarImages($request, $requestSecurity);

    if ($response->imageSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSimilarVideos

This endpoint returns videos that are visually similar to an image that you specify or upload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarVideosRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarVideosLicenseEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarVideosViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarVideosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSimilarVideosRequest();
    $request->assetId = 'dolorum';
    $request->language = LanguageEnum::CS;
    $request->license = [
        GetSimilarVideosLicenseEnum::EDITORIAL,
        GetSimilarVideosLicenseEnum::EDITORIAL,
        GetSimilarVideosLicenseEnum::EDITORIAL,
    ];
    $request->page = 990339;
    $request->perPage = 469497;
    $request->safe = false;
    $request->view = GetSimilarVideosViewEnum::MINIMAL;

    $requestSecurity = new GetSimilarVideosSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->computerVision->getSimilarVideos($request, $requestSecurity);

    if ($response->videoSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~uploadEphemeralImage~~

Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ImageCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadEphemeralImageSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageCreateRequest();
    $request->base64Image = 'voluptate';

    $requestSecurity = new UploadEphemeralImageSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->computerVision->uploadEphemeralImage($request, $requestSecurity);

    if ($response->imageCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadImage

This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ImageCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadImageSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageCreateRequest();
    $request->base64Image = 'id';

    $requestSecurity = new UploadImageSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->computerVision->uploadImage($request, $requestSecurity);

    if ($response->computerVisionImageCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
