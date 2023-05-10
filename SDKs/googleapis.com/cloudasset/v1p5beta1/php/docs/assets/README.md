# assets

### Available Operations

* [cloudassetAssetsList](#cloudassetassetslist) - Lists assets with time and resource types and returns paged results in response.

## cloudassetAssetsList

Lists assets with time and resource types and returns paged results in response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAssetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAssetsListContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetAssetsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetAssetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->assetTypes = [
        'excepturi',
        'nisi',
    ];
    $request->callback = 'recusandae';
    $request->contentType = CloudassetAssetsListContentTypeEnum::ACCESS_POLICY;
    $request->fields = 'ab';
    $request->key = 'quis';
    $request->oauthToken = 'veritatis';
    $request->pageSize = 648172;
    $request->pageToken = 'perferendis';
    $request->parent = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->readTime = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new CloudassetAssetsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->assets->cloudassetAssetsList($request, $requestSecurity);

    if ($response->listAssetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
