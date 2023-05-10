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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->assetTypes = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->callback = 'deserunt';
    $request->contentType = CloudassetAssetsListContentTypeEnum::CONTENT_TYPE_UNSPECIFIED;
    $request->fields = 'ipsam';
    $request->key = 'repellendus';
    $request->oauthToken = 'sapiente';
    $request->pageSize = 778157;
    $request->pageToken = 'odit';
    $request->parent = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->readTime = 'maiores';
    $request->relationshipTypes = [
        'quod',
        'quod',
    ];
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

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
