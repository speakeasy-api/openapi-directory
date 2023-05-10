<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApplyYaraRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ApplyYaraRulesRequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\ApplyYaraRulesRequestBodyIsUnpackingRequiredEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplyYaraRulesRequestBody();
    $request->file = new ApplyYaraRulesRequestBodyFile();
    $request->file->content = 'corrupti';
    $request->file->file = 'provident';
    $request->isUnpackingRequired = ApplyYaraRulesRequestBodyIsUnpackingRequiredEnum::FALSE;
    $request->rules = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];

    $response = $sdk->applyYaraRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->