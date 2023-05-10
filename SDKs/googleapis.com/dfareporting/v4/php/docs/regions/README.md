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
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'libero';
    $request->fields = 'ut';
    $request->key = 'tempora';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->profileId = 'quas';
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'fugit';

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
