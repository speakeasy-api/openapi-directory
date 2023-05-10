<!-- Start SDK Example Usage -->
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchGetAmpUrlsRequest = new BatchGetAmpUrlsRequest();
    $request->batchGetAmpUrlsRequest->lookupStrategy = BatchGetAmpUrlsRequestLookupStrategyEnum::IN_INDEX_DOC;
    $request->batchGetAmpUrlsRequest->urls = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'debitis';

    $response = $sdk->ampUrls->acceleratedmobilepageurlAmpUrlsBatchGet($request);

    if ($response->batchGetAmpUrlsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->