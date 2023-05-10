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
    $request->accessToken = 'ad';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'suscipit';
    $request->fields = 'deserunt';
    $request->key = 'provident';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'similique';

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
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->country = 'Isle of Man';
    $request->datafeedId = 'quod';
    $request->fields = 'officiis';
    $request->key = 'qui';
    $request->language = 'dolorum';
    $request->merchantId = 'a';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'ipsum';

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
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempore';
    $request->fields = 'accusamus';
    $request->key = 'numquam';
    $request->maxResults = 313692;
    $request->merchantId = 'dolorem';
    $request->oauthToken = 'sapiente';
    $request->pageToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'expedita';

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
