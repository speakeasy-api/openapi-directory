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
        new AccountstatusesCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'ipsum';
    $request->key = 'voluptate';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'aspernatur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'amet';
    $request->accountId = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->destinations = [
        'suscipit',
        'deserunt',
        'provident',
        'minima',
    ];
    $request->fields = 'repellendus';
    $request->key = 'totam';
    $request->merchantId = 'similique';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'tempora';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'qui';
    $request->destinations = [
        'a',
        'esse',
        'harum',
    ];
    $request->fields = 'iusto';
    $request->key = 'ipsum';
    $request->maxResults = 788740;
    $request->merchantId = 'tenetur';
    $request->name = 'Kelli Thompson';
    $request->oauthToken = 'dolorem';
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'sit';

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
