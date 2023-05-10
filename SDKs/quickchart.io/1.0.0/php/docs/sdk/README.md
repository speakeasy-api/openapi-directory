# SDK

## Overview

An API to generate charts and QR codes using QuickChart services.

### Available Operations

* [getChart](#getchart) - Generate a chart (GET)
* [getQr](#getqr) - Generate a QR code (GET)
* [postChart](#postchart) - Generate a chart (POST)
* [postQr](#postqr) - Generate a QR code (POST)

## getChart

Generate a chart based on the provided parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChartRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChartRequest();
    $request->backgroundColor = 'nulla';
    $request->chart = 'corrupti';
    $request->format = 'illum';
    $request->height = 423655;
    $request->width = 623564;

    $response = $sdk->sdk->getChart($request);

    if ($response->getChart200ImageJpegBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQr

Generate a QR code based on the provided parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQrRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQrRequest();
    $request->format = 'deserunt';
    $request->height = 384382;
    $request->margin = 437587;
    $request->text = 'magnam';
    $request->width = 891773;

    $response = $sdk->sdk->getQr($request);

    if ($response->getQr200ImagePngBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postChart

Generate a chart based on the provided configuration in the request body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostChartRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostChartRequestBody();
    $request->backgroundColor = 'ipsa';
    $request->chart = [
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
        'iusto' => 'excepturi',
    ];
    $request->format = 'nisi';
    $request->height = 925597;
    $request->width = 836079;

    $response = $sdk->sdk->postChart($request);

    if ($response->postChart200ImageJpegBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQr

Generate a QR code based on the provided configuration in the request body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQrRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQrRequestBody();
    $request->format = 'ab';
    $request->height = 337396;
    $request->margin = 87129;
    $request->text = 'deserunt';
    $request->width = 20218;

    $response = $sdk->sdk->postQr($request);

    if ($response->postQr200ImagePngBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
