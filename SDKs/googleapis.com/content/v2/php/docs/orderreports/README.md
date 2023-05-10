# orderreports

### Available Operations

* [contentOrderreportsListdisbursements](#contentorderreportslistdisbursements) - Retrieves a report for disbursements from your Merchant Center account.
* [contentOrderreportsListtransactions](#contentorderreportslisttransactions) - Retrieves a list of transactions for a disbursement from your Merchant Center account.

## contentOrderreportsListdisbursements

Retrieves a report for disbursements from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreportsListdisbursementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreportsListdisbursementsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrderreportsListdisbursementsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->disbursementEndDate = 'fugiat';
    $request->disbursementStartDate = 'ut';
    $request->fields = 'eum';
    $request->key = 'suscipit';
    $request->maxResults = 826871;
    $request->merchantId = 'eos';
    $request->oauthToken = 'praesentium';
    $request->pageToken = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'id';

    $requestSecurity = new ContentOrderreportsListdisbursementsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderreports->contentOrderreportsListdisbursements($request, $requestSecurity);

    if ($response->orderreportsListDisbursementsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrderreportsListtransactions

Retrieves a list of transactions for a disbursement from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreportsListtransactionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreportsListtransactionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrderreportsListtransactionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->disbursementId = 'quo';
    $request->fields = 'fuga';
    $request->key = 'eius';
    $request->maxResults = 178367;
    $request->merchantId = 'voluptas';
    $request->oauthToken = 'ab';
    $request->pageToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->transactionEndDate = 'tempora';
    $request->transactionStartDate = 'debitis';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new ContentOrderreportsListtransactionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderreports->contentOrderreportsListtransactions($request, $requestSecurity);

    if ($response->orderreportsListTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
