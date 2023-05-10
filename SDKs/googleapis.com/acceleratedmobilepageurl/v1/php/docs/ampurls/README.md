# ampUrls

### Available Operations

* [acceleratedmobilepageurlAmpUrlsBatchGet](#acceleratedmobilepageurlampurlsbatchget) - Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).

## acceleratedmobilepageurlAmpUrlsBatchGet

Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AcceleratedmobilepageurlAmpUrlsBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetAmpUrlsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetAmpUrlsRequestLookupStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceleratedmobilepageurlAmpUrlsBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchGetAmpUrlsRequest = new BatchGetAmpUrlsRequest();
    $request->batchGetAmpUrlsRequest->lookupStrategy = BatchGetAmpUrlsRequestLookupStrategyEnum::IN_INDEX_DOC;
    $request->batchGetAmpUrlsRequest->urls = [
        'suscipit',
        'molestiae',
    ];
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatum';
    $request->fields = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'ab';

    $response = $sdk->ampUrls->acceleratedmobilepageurlAmpUrlsBatchGet($request);

    if ($response->batchGetAmpUrlsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
