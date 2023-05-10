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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ullam';
    $request->fields = 'dicta';
    $request->key = 'nesciunt';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->profileId = 'esse';
    $request->quotaUser = 'magni';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'quibusdam';

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
