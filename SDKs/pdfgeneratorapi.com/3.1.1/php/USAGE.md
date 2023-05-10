<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MergeTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Data;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergeTemplateRequest();
    $request->data = new Data();
    $request->data->id = 12312;
    $request->data->name = 'Sample Data';
    $request->format = FormatEnum::PDF;
    $request->name = 'My document';
    $request->output = OutputEnum::BASE64;
    $request->templateId = 19375;

    $response = $sdk->documents->mergeTemplate($request);

    if ($response->mergeTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->