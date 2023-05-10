# contentFiltering

### Available Operations

* [getNetworkApplianceContentFiltering](#getnetworkappliancecontentfiltering) - Return the content filtering settings for an MX network
* [getNetworkApplianceContentFilteringCategories](#getnetworkappliancecontentfilteringcategories) - List all available content filtering categories for an MX network
* [updateNetworkApplianceContentFiltering](#updatenetworkappliancecontentfiltering) - Update the content filtering settings for an MX network

## getNetworkApplianceContentFiltering

Return the content filtering settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkApplianceContentFilteringRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkApplianceContentFilteringRequest();
    $request->networkId = 'inventore';

    $response = $sdk->contentFiltering->getNetworkApplianceContentFiltering($request);

    if ($response->getNetworkApplianceContentFiltering200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->networkId = 'laboriosam';

    $response = $sdk->contentFiltering->getNetworkApplianceContentFilteringCategories($request);

    if ($response->getNetworkApplianceContentFilteringCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkApplianceContentFiltering

Update the content filtering settings for an MX network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceContentFilteringRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceContentFilteringRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkApplianceContentFilteringRequest();
    $request->requestBody = new UpdateNetworkApplianceContentFilteringRequestBody();
    $request->requestBody->allowedUrlPatterns = [
        'repudiandae',
        'consequuntur',
        'aspernatur',
        'sequi',
    ];
    $request->requestBody->blockedUrlCategories = [
        'accusamus',
        'deleniti',
        'earum',
    ];
    $request->requestBody->blockedUrlPatterns = [
        'enim',
    ];
    $request->requestBody->urlCategoryListSize = UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum::TOP_SITES;
    $request->networkId = 'quibusdam';

    $response = $sdk->contentFiltering->updateNetworkApplianceContentFiltering($request);

    if ($response->updateNetworkApplianceContentFiltering200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
