# alertTypes

### Available Operations

* [getOrganizationWebhooksAlertTypes](#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts

## getOrganizationWebhooksAlertTypes

Return a list of alert types to be used with managing webhook alerts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWebhooksAlertTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWebhooksAlertTypesProductTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationWebhooksAlertTypesRequest();
    $request->organizationId = 'qui';
    $request->productType = GetOrganizationWebhooksAlertTypesProductTypeEnum::APPLIANCE;

    $response = $sdk->alertTypes->getOrganizationWebhooksAlertTypes($request);

    if ($response->getOrganizationWebhooksAlertTypes200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
