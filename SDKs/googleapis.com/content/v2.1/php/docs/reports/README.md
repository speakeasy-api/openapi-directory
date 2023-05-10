# reports

### Available Operations

* [contentReportsSearch](#contentreportssearch) - Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.

## contentReportsSearch

Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentReportsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentReportsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentReportsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->searchRequest = new SearchRequest();
    $request->searchRequest->pageSize = 211301;
    $request->searchRequest->pageToken = 'architecto';
    $request->searchRequest->query = 'aperiam';
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'illo';
    $request->key = 'magnam';
    $request->merchantId = 'delectus';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'ex';

    $requestSecurity = new ContentReportsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->reports->contentReportsSearch($request, $requestSecurity);

    if ($response->searchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
