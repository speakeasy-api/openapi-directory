# asset

### Available Operations

* [getAsset](#getasset) - Asset Detail
* [getAssetContributors](#getassetcontributors) - Asset Contributors
* [listAssets](#listassets) - Asset Collection

## getAsset

Return the content of the selected asset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetRequest();
    $request->aliases = false;
    $request->assetId = 'provident';

    $requestSecurity = new GetAssetSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->asset->getAsset($request, $requestSecurity);

    if ($response->getAsset200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssetContributors

Return the contributors of the selected asset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetContributorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetContributorsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetContributorsRequest();
    $request->aliases = false;
    $request->assetId = 'distinctio';

    $requestSecurity = new GetAssetContributorsSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->asset->getAssetContributors($request, $requestSecurity);

    if ($response->getAssetContributors200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssets

Return a collection of Assets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssetsRequest();
    $request->aliases = false;
    $request->limit = 844266;
    $request->updatedAfter = 'unde';

    $requestSecurity = new ListAssetsSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->asset->listAssets($request, $requestSecurity);

    if ($response->listAssets200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
