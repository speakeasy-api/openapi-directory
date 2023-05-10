<!-- Start SDK Example Usage -->
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
    $request->bgColor = 'corrupti';
    $request->bgImageUrl = 'provident';
    $request->channels = RemoveBgJsonChannelsEnum::ALPHA;
    $request->crop = false;
    $request->cropMargin = 'quibusdam';
    $request->format = RemoveBgJsonFormatEnum::JPG;
    $request->imageFileB64 = 'nulla';
    $request->imageUrl = 'https://www.remove.bg/example-hd.jpg';
    $request->position = 'corrupti';
    $request->roi = 'illum';
    $request->scale = 'vel';
    $request->semitransparency = false;
    $request->size = RemoveBgJsonSizeEnum::FULL;
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
<!-- End SDK Example Usage -->