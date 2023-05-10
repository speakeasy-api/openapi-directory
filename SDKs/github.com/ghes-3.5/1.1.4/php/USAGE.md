<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest();
    $request->requestBody = new ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody();
    $request->requestBody->labels = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->org = 'unde';
    $request->runnerId = 857946;

    $response = $sdk->actions->actionsAddCustomLabelsToSelfHostedRunnerForOrg($request);

    if ($response->actionsAddCustomLabelsToSelfHostedRunnerForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->