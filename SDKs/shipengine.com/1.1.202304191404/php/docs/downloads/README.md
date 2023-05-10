# downloads

## Overview

downloads


### Available Operations

* [downloadFile](#downloadfile) - Download File

## downloadFile

Get File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadFileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadFileRequest();
    $request->dir = 'hic';
    $request->download = 'saepe';
    $request->filename = 'fuga';
    $request->rotation = 449950;
    $request->subdir = 'corporis';

    $response = $sdk->downloads->downloadFile($request);

    if ($response->downloadFilePdfResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
