# regions

### Available Operations

* [dfareportingRegionsList](#dfareportingregionslist) - Retrieves a list of regions.

## dfareportingRegionsList

Retrieves a list of regions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRegionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingRegionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingRegionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'cupiditate';
    $request->key = 'aliquam';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->profileId = 'atque';
    $request->quotaUser = 'minus';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'neque';

    $requestSecurity = new DfareportingRegionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regions->dfareportingRegionsList($request, $requestSecurity);

    if ($response->regionsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
