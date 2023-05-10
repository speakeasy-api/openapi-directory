# datafeedstatuses

### Available Operations

* [contentDatafeedstatusesCustombatch](#contentdatafeedstatusescustombatch) - Gets multiple Merchant Center datafeed statuses in a single request.
* [contentDatafeedstatusesGet](#contentdatafeedstatusesget) - Retrieves the status of a datafeed from your Merchant Center account.
* [contentDatafeedstatusesList](#contentdatafeedstatuseslist) - Lists the statuses of the datafeeds in your Merchant Center account.

## contentDatafeedstatusesCustombatch

Gets multiple Merchant Center datafeed statuses in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedstatusesCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedstatusesCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatafeedstatusesCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedstatusesCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedstatusesCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->datafeedstatusesCustomBatchRequest = new DatafeedstatusesCustomBatchRequest();
    $request->datafeedstatusesCustomBatchRequest->entries = [
        new DatafeedstatusesCustomBatchRequestEntry(),
        new DatafeedstatusesCustomBatchRequestEntry(),
        new DatafeedstatusesCustomBatchRequestEntry(),
        new DatafeedstatusesCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'magni';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'numquam';
    $request->key = 'veniam';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'laudantium';

    $requestSecurity = new ContentDatafeedstatusesCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeedstatuses->contentDatafeedstatusesCustombatch($request, $requestSecurity);

    if ($response->datafeedstatusesCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedstatusesGet

Retrieves the status of a datafeed from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedstatusesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedstatusesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedstatusesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laboriosam';
    $request->country = 'Palestinian Territory';
    $request->datafeedId = 'voluptatum';
    $request->feedLabel = 'error';
    $request->fields = 'hic';
    $request->key = 'expedita';
    $request->language = 'debitis';
    $request->merchantId = 'neque';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new ContentDatafeedstatusesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeedstatuses->contentDatafeedstatusesGet($request, $requestSecurity);

    if ($response->datafeedStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentDatafeedstatusesList

Lists the statuses of the datafeeds in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedstatusesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentDatafeedstatusesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentDatafeedstatusesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'atque';
    $request->fields = 'fugit';
    $request->key = 'ut';
    $request->maxResults = 856303;
    $request->merchantId = 'voluptatem';
    $request->oauthToken = 'culpa';
    $request->pageToken = 'expedita';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new ContentDatafeedstatusesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->datafeedstatuses->contentDatafeedstatusesList($request, $requestSecurity);

    if ($response->datafeedstatusesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
