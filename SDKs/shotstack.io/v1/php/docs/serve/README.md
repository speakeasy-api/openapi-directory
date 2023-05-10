# serve

### Available Operations

* [deleteAsset](#deleteasset) - Delete Asset
* [getAsset](#getasset) - Get Asset
* [getAssetByRenderId](#getassetbyrenderid) - Get Asset by Render ID

## deleteAsset

Delete an asset by its asset id. If a render creates multiple assets, such as thumbnail and poster images, each asset must be deleted individually by the asset id.

**base URL:** https://api.shotstack.io/serve/{version}

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssetRequest();
    $request->id = '29396fea-7596-4eb1-8faa-a2352c595590';

    $requestSecurity = new DeleteAssetSecurity();
    $requestSecurity->developerKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->serve->deleteAsset($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAsset

The Serve API is used to interact with, and delete hosted assets including videos, images, audio files,  thumbnails and poster images. Use this endpoint to fetch an asset by asset id. Note that an asset id is unique for each asset and different from the render id.

**base URL:** https://api.shotstack.io/serve/{version}

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
    $request->id = '7aff1a3a-2fa9-4467-b392-51aa52c3f5ad';

    $requestSecurity = new GetAssetSecurity();
    $requestSecurity->developerKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->serve->getAsset($request, $requestSecurity);

    if ($response->assetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssetByRenderId

A render may generate more than one file, such as a video, thumbnail and poster image. When the assets are created the only known id is the render id returned by the original [render request](#render-video), status  request or webhook. This endpoint lets you look up one or more assets by the render id.

**base URL:** https://api.shotstack.io/serve/{version}

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetByRenderIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetByRenderIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetByRenderIdRequest();
    $request->id = '019da1ff-e78f-4097-b007-4f15471b5e6e';

    $requestSecurity = new GetAssetByRenderIdSecurity();
    $requestSecurity->developerKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->serve->getAssetByRenderId($request, $requestSecurity);

    if ($response->assetRenderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
