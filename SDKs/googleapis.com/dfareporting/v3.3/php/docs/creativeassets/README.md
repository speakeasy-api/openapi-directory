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
    $request->requestBody = 'laudantium';
    $request->accessToken = 'tempora';
    $request->advertiserId = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->fields = 'rem';
    $request->key = 'tenetur';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->profileId = 'modi';
    $request->quotaUser = 'earum';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'aliquam';

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
