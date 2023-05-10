# SDK

## Overview

The Dispatch API enables the developer to specify a multiple message workflow. A workflow follows a template. The first one we are adding is the failover template. The failover template instructs the Messages API to first send a message to the specified channel. If that message fails immediately or if the condition_status is not reached within the given time period the next message is sent. The developer will also receive status webhooks from the messages resource for each delivery and read event. This API is currently in Beta.

### Available Operations

* [createWorkflow](#createworkflow) - Create a workflow

## createWorkflow

Create a workflow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkflow;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkflowTemplateEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkflow();
    $request->template = CreateWorkflowTemplateEnum::FAILOVER;
    $request->workflow = [
        new SendMessage(),
        new SendMessage(),
        new SendMessage(),
    ];

    $requestSecurity = new CreateWorkflowSecurity();
    $requestSecurity->basicAuth->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basicAuth->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createWorkflow($request, $requestSecurity);

    if ($response->response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
