# contentFilteringRules

### Available Operations

* [getNetworkContentFiltering](#getnetworkcontentfiltering) - Return the content filtering settings for an MX network
* [updateNetworkContentFiltering](#updatenetworkcontentfiltering) - Update the content filtering settings for an MX network

## getNetworkContentFiltering

Return the content filtering settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkContentFilteringRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkContentFilteringRequest();
    $request->networkId = 'quidem';

    $response = $sdk->contentFilteringRules->getNetworkContentFiltering($request);

    if ($response->getNetworkContentFiltering200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkContentFiltering

Update the content filtering settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkContentFilteringRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkContentFilteringRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkContentFilteringRequestBodyUrlCategoryListSizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkContentFilteringRequest();
    $request->requestBody = new UpdateNetworkContentFilteringRequestBody();
    $request->requestBody->allowedUrlPatterns = [
        'voluptate',
        'autem',
    ];
    $request->requestBody->blockedUrlCategories = [
        'eaque',
        'pariatur',
        'nemo',
    ];
    $request->requestBody->blockedUrlPatterns = [
        'perferendis',
        'fugiat',
        'amet',
        'aut',
    ];
    $request->requestBody->urlCategoryListSize = UpdateNetworkContentFilteringRequestBodyUrlCategoryListSizeEnum::TOP_SITES;
    $request->networkId = 'corporis';

    $response = $sdk->contentFilteringRules->updateNetworkContentFiltering($request);

    if ($response->updateNetworkContentFiltering200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
