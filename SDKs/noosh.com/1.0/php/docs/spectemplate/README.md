# specTemplate

### Available Operations

* [getSpecTemplate](#getspectemplate) - Get a specific Spec Template
* [getSpecTemplateList](#getspectemplatelist) - List Spec Templates of Workgroup Level 

## getSpecTemplate

Get a specific Spec Template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSpecTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpecTemplateRequest();
    $request->specTemplateId = 'perferendis';
    $request->workgroupId = 'nihil';

    $response = $sdk->specTemplate->getSpecTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSpecTemplateList

List Spec Templates of Workgroup Level 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSpecTemplateListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSpecTemplateListRequest();
    $request->workgroupId = 'magnam';

    $response = $sdk->specTemplate->getSpecTemplateList($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
