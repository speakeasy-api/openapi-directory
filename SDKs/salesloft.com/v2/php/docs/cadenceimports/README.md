# cadenceImports

## Overview

Cadence Importing

### Available Operations

* [postV2CadenceImportsJson](#postv2cadenceimportsjson) - Import cadences from JSON

## postV2CadenceImportsJson

New cadences can be created or steps can be imported onto existing cadences which do not have steps.
<a href="/cadence-imports.html" target="_blank" rel="noopener noreferrer">Visit here for more details</a>.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2CadenceImportsJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2CadenceImportsJsonRequestBody();
    $request->cadenceContent = [
        'quasi' => 'similique',
    ];
    $request->settings = [
        'aliquid' => 'tenetur',
        'quae' => 'earum',
        'vel' => 'in',
    ];
    $request->sharingSettings = [
        'libero' => 'illum',
        'soluta' => 'accusantium',
    ];

    $response = $sdk->cadenceImports->postV2CadenceImportsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
