# imaging

### Available Operations

* [htmlRender](#htmlrender) - HTML Render
* [imageResize](#imageresize) - Image Resize
* [imageWatermark](#imagewatermark) - Image Watermark
* [qrCode](#qrcode) - QR Code

## htmlRender

Render HTML content to PDF, JPG or PNG

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\HTMLRenderRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HTMLRenderRequestBody();
    $request->content = 'esse';
    $request->css = 'ipsum';
    $request->delay = 568434;
    $request->footer = 'aspernatur';
    $request->format = 'perferendis';
    $request->grayscale = false;
    $request->header = 'ad';
    $request->ignoreCertificateErrors = false;
    $request->imageHeight = 617636;
    $request->imageWidth = 149675;
    $request->landscape = false;
    $request->margin = 6120.96;
    $request->marginBottom = 2223.21;
    $request->marginLeft = 6169.34;
    $request->marginRight = 3864.89;
    $request->marginTop = 9437.49;
    $request->pageHeight = 9025.99;
    $request->pageSize = 'fuga';
    $request->pageWidth = 4499.5;
    $request->timeout = 359508;
    $request->title = 'Miss';
    $request->zoom = 4370.32;

    $response = $sdk->imaging->htmlRender($request);

    if ($response->htmlRender200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## imageResize

Resize an image and output as either JPEG or PNG

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImageResizeRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageResizeRequestBody();
    $request->bgColor = 'saepe';
    $request->format = 'quidem';
    $request->height = 99280;
    $request->imageUrl = 'ipsa';
    $request->resizeMode = 'reiciendis';
    $request->width = 666767;

    $response = $sdk->imaging->imageResize($request);

    if ($response->imageResize200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## imageWatermark

Watermark one image with another image

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImageWatermarkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImageWatermarkRequestBody();
    $request->bgColor = 'mollitia';
    $request->format = 'laborum';
    $request->height = 170909;
    $request->imageUrl = 'dolorem';
    $request->opacity = 358152;
    $request->position = 'explicabo';
    $request->resizeMode = 'nobis';
    $request->watermarkUrl = 'enim';
    $request->width = 607831;

    $response = $sdk->imaging->imageWatermark($request);

    if ($response->imageWatermark200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## qrCode

Generate a QR code as a PNG image

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QRCodeRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QRCodeRequestBody();
    $request->bgColor = 'nemo';
    $request->content = 'minima';
    $request->fgColor = 'excepturi';
    $request->height = 38425;
    $request->width = 438601;

    $response = $sdk->imaging->qrCode($request);

    if ($response->qrCode200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
