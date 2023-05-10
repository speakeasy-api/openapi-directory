# categories

### Available Operations

* [getNetworkApplianceContentFilteringCategories](#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network

## getNetworkApplianceContentFilteringCategories

List all available content filtering categories for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceContentFilteringCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceContentFilteringCategoriesRequest();
    $request->networkId = 'reprehenderit';

    $response = $sdk->categories->getNetworkApplianceContentFilteringCategories($request);

    if ($response->getNetworkApplianceContentFilteringCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
