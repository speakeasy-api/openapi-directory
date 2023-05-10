# SDK

## Overview

This api converts file formats of OpenXml and OpenOffice documents formats to vector files (e.g., svg)

### Available Operations

* [svgconvert](#svgconvert) - converts pptx file to svg image

## svgconvert

converts pptx file to svg image

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SvgconvertFileToConvert;
use \OpenAPI\OpenAPI\Models\Operations\SvgconvertFileToConvertFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SvgconvertFileToConvert();
    $request->file = new SvgconvertFileToConvertFile();
    $request->file->content = 'distinctio';
    $request->file->file = 'quibusdam';

    $response = $sdk->sdk->svgconvert($request);

    if ($response->fileUrl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
