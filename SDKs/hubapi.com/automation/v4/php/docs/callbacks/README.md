# callbacks

## Overview

Operations to complete callbacks for custom workflow actions.

### Available Operations

* [postAutomationV4ActionsCallbacksCompleteCompleteBatch](#postautomationv4actionscallbackscompletecompletebatch) - Complete a batch of callbacks
* [postAutomationV4ActionsCallbacksCallbackIdCompleteComplete](#postautomationv4actionscallbackscallbackidcompletecomplete) - Complete a callback

## postAutomationV4ActionsCallbacksCompleteCompleteBatch

Completes the given action callbacks.

### Example Usage

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

## postAutomationV4ActionsCallbacksCallbackIdCompleteComplete

Completes the given action callback.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallbackCompletionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest();
    $request->callbackCompletionRequest = new CallbackCompletionRequest();
    $request->callbackCompletionRequest->outputFields = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->callbackId = 'error';

    $requestSecurity = new PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity();
    $requestSecurity->hapikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->callbacks->postAutomationV4ActionsCallbacksCallbackIdCompleteComplete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
