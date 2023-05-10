# contentFilteringCategories

### Available Operations

* [getNetworkContentFilteringCategories](#getnetworkcontentfilteringcategories) - List all available content filtering categories for an MX network

## getNetworkContentFilteringCategories

List all available content filtering categories for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkContentFilteringCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkContentFilteringCategoriesRequest();
    $request->networkId = 'maiores';

    $response = $sdk->contentFilteringCategories->getNetworkContentFilteringCategories($request);

    if ($response->getNetworkContentFilteringCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
