# backgroundRemoval

### Available Operations

* [postRemovebgForm](#postremovebgform) - Remove the background of an image
* [postRemovebgJson](#postremovebgjson) - Remove the background of an image
* [postRemovebgMultipart](#postremovebgmultipart) - Remove the background of an image

## postRemovebgForm

Removes the background of a JPG/PNG image.

* File size: up to 12 MB
* Image source: File upload (binary or as base64 encoded string) or download from URL
* Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
* Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJson;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonChannelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonTypeLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveBgJson();
    $request->addShadow = false;
    $request->bgColor = 'iure';
    $request->bgImageUrl = 'magnam';
    $request->channels = RemoveBgJsonChannelsEnum::ALPHA;
    $request->crop = false;
    $request->cropMargin = 'ipsa';
    $request->format = RemoveBgJsonFormatEnum::ZIP;
    $request->imageFileB64 = 'tempora';
    $request->imageUrl = 'https://www.remove.bg/example-hd.jpg';
    $request->position = 'suscipit';
    $request->roi = 'molestiae';
    $request->scale = 'minus';
    $request->semitransparency = false;
    $request->size = RemoveBgJsonSizeEnum::AUTO;
    $request->type = RemoveBgJsonTypeEnum::PRODUCT;
    $request->typeLevel = RemoveBgJsonTypeLevelEnum::ONE;

    $response = $sdk->backgroundRemoval->postRemovebgForm($request);

    if ($response->removeBgJsonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemovebgJson

Removes the background of a JPG/PNG image.

* File size: up to 12 MB
* Image source: File upload (binary or as base64 encoded string) or download from URL
* Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
* Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJson;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonChannelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgJsonTypeLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveBgJson();
    $request->addShadow = false;
    $request->bgColor = 'excepturi';
    $request->bgImageUrl = 'nisi';
    $request->channels = RemoveBgJsonChannelsEnum::ALPHA;
    $request->crop = false;
    $request->cropMargin = 'temporibus';
    $request->format = RemoveBgJsonFormatEnum::AUTO;
    $request->imageFileB64 = 'quis';
    $request->imageUrl = 'https://www.remove.bg/example-hd.jpg';
    $request->position = 'veritatis';
    $request->roi = 'deserunt';
    $request->scale = 'perferendis';
    $request->semitransparency = false;
    $request->size = RemoveBgJsonSizeEnum::FULL;
    $request->type = RemoveBgJsonTypeEnum::CAR;
    $request->typeLevel = RemoveBgJsonTypeLevelEnum::LATEST;

    $response = $sdk->backgroundRemoval->postRemovebgJson($request);

    if ($response->removeBgJsonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemovebgMultipart

Removes the background of a JPG/PNG image.

* File size: up to 12 MB
* Image source: File upload (binary or as base64 encoded string) or download from URL
* Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
* Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgMultipart;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgMultipartBgImageFile;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgMultipartChannelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgMultipartFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgMultipartImageFile;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgMultipartSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgMultipartTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveBgMultipartTypeLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveBgMultipart();
    $request->addShadow = false;
    $request->bgColor = 'quo';
    $request->bgImageFile = new RemoveBgMultipartBgImageFile();
    $request->bgImageFile->bgImageFile = 'odit';
    $request->bgImageFile->content = 'at';
    $request->bgImageUrl = 'at';
    $request->channels = RemoveBgMultipartChannelsEnum::ALPHA;
    $request->crop = false;
    $request->cropMargin = 'molestiae';
    $request->format = RemoveBgMultipartFormatEnum::ZIP;
    $request->imageFile = new RemoveBgMultipartImageFile();
    $request->imageFile->content = 'quod';
    $request->imageFile->imageFile = 'esse';
    $request->imageFileB64 = 'totam';
    $request->imageUrl = 'https://www.remove.bg/example-hd.jpg';
    $request->position = 'porro';
    $request->roi = 'dolorum';
    $request->scale = 'dicta';
    $request->semitransparency = false;
    $request->size = RemoveBgMultipartSizeEnum::AUTO;
    $request->type = RemoveBgMultipartTypeEnum::PRODUCT;
    $request->typeLevel = RemoveBgMultipartTypeLevelEnum::TWO;

    $response = $sdk->backgroundRemoval->postRemovebgMultipart($request);

    if ($response->removeBgJsonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
