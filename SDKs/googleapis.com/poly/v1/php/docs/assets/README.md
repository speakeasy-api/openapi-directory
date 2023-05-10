# assets

### Available Operations

* [polyAssetsGet](#polyassetsget) - Returns detailed information about an asset given its name. PRIVATE assets are returned only if the currently authenticated user (via OAuth token) is the author of the asset.
* [polyAssetsList](#polyassetslist) - Lists all public, remixable assets. These are assets with an access level of PUBLIC and published under the CC-By license.

## polyAssetsGet

Returns detailed information about an asset given its name. PRIVATE assets are returned only if the currently authenticated user (via OAuth token) is the author of the asset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolyAssetsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolyAssetsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->name = 'Ken Kshlerin';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $response = $sdk->assets->polyAssetsGet($request);

    if ($response->asset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## polyAssetsList

Lists all public, remixable assets. These are assets with an access level of PUBLIC and published under the CC-By license.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PolyAssetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PolyAssetsListMaxComplexityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PolyAssetsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->category = 'repellendus';
    $request->curated = false;
    $request->fields = 'sapiente';
    $request->format = 'quo';
    $request->key = 'odit';
    $request->keywords = 'at';
    $request->maxComplexity = PolyAssetsListMaxComplexityEnum::SIMPLE;
    $request->oauthToken = 'maiores';
    $request->orderBy = 'molestiae';
    $request->pageSize = 799159;
    $request->pageToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'porro';

    $response = $sdk->assets->polyAssetsList($request);

    if ($response->listAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
