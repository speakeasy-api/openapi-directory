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
    $request->requestBody = 'suscipit';
    $request->accessToken = 'saepe';
    $request->advertiserId = 'earum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'quaerat';
    $request->key = 'ipsum';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->profileId = 'laudantium';
    $request->quotaUser = 'rerum';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'odit';

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
