# apnsCert

### Available Operations

* [getOrganizationSmApnsCert](#getorganizationsmapnscert) - Get the organization's APNS certificate

## getOrganizationSmApnsCert

Get the organization's APNS certificate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSmApnsCertRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSmApnsCertRequest();
    $request->organizationId = 'ducimus';

    $response = $sdk->apnsCert->getOrganizationSmApnsCert($request);

    if ($response->getOrganizationSmApnsCert200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
