# tools

## Overview

Tools to assist with sending and receiving messages, such as file sharing, translation, etc.

### Available Operations

* [toolsShareFileMultipart](#toolssharefilemultipart) - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS
* [toolsShareFileRaw](#toolssharefileraw) - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

## toolsShareFileMultipart

Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolsShareFileMultipartFormData;
use \OpenAPI\OpenAPI\Models\Operations\ToolsShareFileMultipartFormDataMedia;
use \OpenAPI\OpenAPI\Models\Operations\ToolsShareFileMultipartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToolsShareFileMultipartFormData();
    $request->media = new ToolsShareFileMultipartFormDataMedia();
    $request->media->content = 'explicabo';
    $request->media->media = 'deserunt';

    $requestSecurity = new ToolsShareFileMultipartSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tools->toolsShareFileMultipart($request, $requestSecurity);

    if ($response->shareFileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toolsShareFileRaw

Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToolsShareFileRawSecurity;

$sdk = SDK::builder()
    ->build();

try {
'distinctio'

    $requestSecurity = new ToolsShareFileRawSecurity();
    $requestSecurity->sakariAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tools->toolsShareFileRaw($request, $requestSecurity);

    if ($response->shareFileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
