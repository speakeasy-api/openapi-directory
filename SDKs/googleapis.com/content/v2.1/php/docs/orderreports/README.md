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
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'earum';
    $request->disbursementEndDate = 'perspiciatis';
    $request->disbursementStartDate = 'maiores';
    $request->fields = 'debitis';
    $request->key = 'aliquid';
    $request->maxResults = 780931;
    $request->merchantId = 'suscipit';
    $request->oauthToken = 'dolorem';
    $request->pageToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'ratione';

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
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequatur';
    $request->disbursementId = 'quasi';
    $request->fields = 'et';
    $request->key = 'ducimus';
    $request->maxResults = 619183;
    $request->merchantId = 'occaecati';
    $request->oauthToken = 'suscipit';
    $request->pageToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->transactionEndDate = 'magni';
    $request->transactionStartDate = 'doloribus';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'necessitatibus';

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
