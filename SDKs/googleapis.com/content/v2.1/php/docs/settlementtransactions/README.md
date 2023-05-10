# settlementtransactions

### Available Operations

* [contentSettlementtransactionsList](#contentsettlementtransactionslist) - Retrieves a list of transactions for the settlement.

## contentSettlementtransactionsList

Retrieves a list of transactions for the settlement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentSettlementtransactionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentSettlementtransactionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentSettlementtransactionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::JSON;
    $request->callback = 'a';
    $request->fields = 'laborum';
    $request->key = 'veritatis';
    $request->maxResults = 801816;
    $request->merchantId = 'a';
    $request->oauthToken = 'qui';
    $request->pageToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->settlementId = 'atque';
    $request->transactionIds = [
        'tenetur',
        'voluptate',
        'quam',
    ];
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'vitae';

    $requestSecurity = new ContentSettlementtransactionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settlementtransactions->contentSettlementtransactionsList($request, $requestSecurity);

    if ($response->settlementtransactionsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
