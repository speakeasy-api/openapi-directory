# resources

### Available Operations

* [cloudassetResourcesSearchAll](#cloudassetresourcessearchall) - Searches all the resources within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloud.assets.SearchAllResources` permission on the requested scope, otherwise the request will be rejected.

## cloudassetResourcesSearchAll

Searches all the resources within a given accessible Resource Manager scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the resources within a scope, even if they don't have `.get` permission of all the resources. Callers should have `cloud.assets.SearchAllResources` permission on the requested scope, otherwise the request will be rejected.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetResourcesSearchAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudassetResourcesSearchAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudassetResourcesSearchAllRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->assetTypes = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->callback = 'sapiente';
    $request->fields = 'quo';
    $request->key = 'odit';
    $request->oauthToken = 'at';
    $request->orderBy = 'at';
    $request->pageSize = 978619;
    $request->pageToken = 'molestiae';
    $request->prettyPrint = false;
    $request->query = 'quod';
    $request->quotaUser = 'quod';
    $request->scope = 'esse';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new CloudassetResourcesSearchAllSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resources->cloudassetResourcesSearchAll($request, $requestSecurity);

    if ($response->searchAllResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
