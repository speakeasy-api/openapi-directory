# media

### Available Operations

* [cloudsearchMediaUpload](#cloudsearchmediaupload) - Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.

## cloudsearchMediaUpload

Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchMediaUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchMediaUploadSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchMediaUploadSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchMediaUploadSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchMediaUploadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = 'perferendis';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quam';
    $request->fields = 'dolor';
    $request->key = 'vero';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->resourceName = 'recusandae';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new CloudsearchMediaUploadSecurity();
    $requestSecurity->option1 = new CloudsearchMediaUploadSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->media->cloudsearchMediaUpload($request, $requestSecurity);

    if ($response->media !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
