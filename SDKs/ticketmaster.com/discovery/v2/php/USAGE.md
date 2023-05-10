<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindIncludeLicensedContentEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindIncludeSpellcheckEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindIncludeTestEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindRequest();
    $request->classificationId = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->classificationName = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->id = '69a674e0-f467-4cc8-b96e-d151a05dfc2d';
    $request->includeLicensedContent = FindIncludeLicensedContentEnum::NO;
    $request->includeSpellcheck = FindIncludeSpellcheckEnum::NO;
    $request->includeTest = FindIncludeTestEnum::NO;
    $request->keyword = 'quod';
    $request->locale = 'quod';
    $request->page = 'esse';
    $request->size = 'totam';
    $request->sort = 'porro';
    $request->source = FindSourceEnum::FRONTGATE;

    $response = $sdk->find($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->