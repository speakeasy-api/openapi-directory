# openapiSpec

### Available Operations

* [getOrganizationOpenapiSpec](#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

## getOrganizationOpenapiSpec

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationOpenapiSpecRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationOpenapiSpecRequest();
    $request->organizationId = 'perspiciatis';

    $response = $sdk->openapiSpec->getOrganizationOpenapiSpec($request);

    if ($response->getOrganizationOpenapiSpec200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
