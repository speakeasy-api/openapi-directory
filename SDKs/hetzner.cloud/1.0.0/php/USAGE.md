<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetActionsSortParameterSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetActionsStatusParameterStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionsRequest();
    $request->id = 548814;
    $request->sort = GetActionsSortParameterSortEnum::PROGRESS_ASC;
    $request->status = GetActionsStatusParameterStatusEnum::ERROR;

    $response = $sdk->actions->getActions($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->