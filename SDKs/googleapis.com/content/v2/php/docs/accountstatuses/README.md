# accountstatuses

### Available Operations

* [contentAccountstatusesCustombatch](#contentaccountstatusescustombatch) - Retrieves multiple Merchant Center account statuses in a single request.
* [contentAccountstatusesGet](#contentaccountstatusesget) - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* [contentAccountstatusesList](#contentaccountstatuseslist) - Lists the statuses of the sub-accounts in your Merchant Center account.

## contentAccountstatusesCustombatch

Retrieves multiple Merchant Center account statuses in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountstatusesCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountstatusesCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountstatusesCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountstatusesCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountstatusesCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accountstatusesCustomBatchRequest = new AccountstatusesCustomBatchRequest();
    $request->accountstatusesCustomBatchRequest->entries = [
        new AccountstatusesCustomBatchRequestEntry(),
        new AccountstatusesCustomBatchRequestEntry(),
        new AccountstatusesCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'assumenda';
    $request->fields = 'ipsam';
    $request->key = 'alias';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new ContentAccountstatusesCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountstatuses->contentAccountstatusesCustombatch($request, $requestSecurity);

    if ($response->accountstatusesCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountstatusesGet

Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountstatusesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountstatusesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountstatusesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempore';
    $request->accountId = 'labore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->destinations = [
        'eligendi',
    ];
    $request->fields = 'sint';
    $request->key = 'aliquid';
    $request->merchantId = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new ContentAccountstatusesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountstatuses->contentAccountstatusesGet($request, $requestSecurity);

    if ($response->accountStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentAccountstatusesList

Lists the statuses of the sub-accounts in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountstatusesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountstatusesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountstatusesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->destinations = [
        'illum',
        'maiores',
    ];
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->maxResults = 297437;
    $request->merchantId = 'cumque';
    $request->oauthToken = 'facere';
    $request->pageToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new ContentAccountstatusesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountstatuses->contentAccountstatusesList($request, $requestSecurity);

    if ($response->accountstatusesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
