# settlementreports

### Available Operations

* [contentSettlementreportsGet](#contentsettlementreportsget) - Retrieves a settlement report from your Merchant Center account.
* [contentSettlementreportsList](#contentsettlementreportslist) - Retrieves a list of settlement reports from your Merchant Center account.

## contentSettlementreportsGet

Retrieves a settlement report from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentSettlementreportsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentSettlementreportsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentSettlementreportsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'amet';
    $request->key = 'debitis';
    $request->merchantId = 'nobis';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->settlementId = 'id';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new ContentSettlementreportsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settlementreports->contentSettlementreportsGet($request, $requestSecurity);

    if ($response->settlementReport !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentSettlementreportsList

Retrieves a list of settlement reports from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentSettlementreportsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentSettlementreportsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentSettlementreportsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquam';
    $request->fields = 'provident';
    $request->key = 'vero';
    $request->maxResults = 938094;
    $request->merchantId = 'doloremque';
    $request->oauthToken = 'ipsum';
    $request->pageToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->transferEndDate = 'tempora';
    $request->transferStartDate = 'perspiciatis';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new ContentSettlementreportsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settlementreports->contentSettlementreportsList($request, $requestSecurity);

    if ($response->settlementreportsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
