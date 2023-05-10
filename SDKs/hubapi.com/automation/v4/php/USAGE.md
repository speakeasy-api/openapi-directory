<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchInputCallbackCompletionBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallbackCompletionBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchInputCallbackCompletionBatchRequest();
    $request->inputs = [
        new CallbackCompletionBatchRequest(),
        new CallbackCompletionBatchRequest(),
        new CallbackCompletionBatchRequest(),
    ];

    $requestSecurity = new PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->callbacks->postAutomationV4ActionsCallbacksCompleteCompleteBatch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->