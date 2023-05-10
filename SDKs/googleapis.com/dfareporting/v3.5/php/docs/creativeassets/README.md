# creativeAssets

### Available Operations

* [dfareportingCreativeAssetsInsert](#dfareportingcreativeassetsinsert) - Inserts a new creative asset.

## dfareportingCreativeAssetsInsert

Inserts a new creative asset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeAssetsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCreativeAssetsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCreativeAssetsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = 'facere';
    $request->accessToken = 'quisquam';
    $request->advertiserId = 'cumque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'deserunt';
    $request->key = 'ad';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->profileId = 'sequi';
    $request->quotaUser = 'porro';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new DfareportingCreativeAssetsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->creativeAssets->dfareportingCreativeAssetsInsert($request, $requestSecurity);

    if ($response->creativeAssetMetadata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
