# logs

### Available Operations

* [getOrganizationWebhooksLogs](#getorganizationwebhookslogs) - Return the log of webhook POSTs sent

## getOrganizationWebhooksLogs

Return the log of webhook POSTs sent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWebhooksLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationWebhooksLogsRequest();
    $request->endingBefore = 'suscipit';
    $request->organizationId = 'dolor';
    $request->perPage = 3866;
    $request->startingAfter = 'libero';
    $request->t0 = 'quibusdam';
    $request->t1 = 'fuga';
    $request->timespan = 4685.8;
    $request->url = 'similique';

    $response = $sdk->logs->getOrganizationWebhooksLogs($request);

    if ($response->getOrganizationWebhooksLogs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
