# quotas

### Available Operations

* [contentQuotasList](#contentquotaslist) - Lists the daily call quota and usage per method for your Merchant Center account.

## contentQuotasList

Lists the daily call quota and usage per method for your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentQuotasListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentQuotasListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentQuotasListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deserunt';
    $request->fields = 'magni';
    $request->key = 'nihil';
    $request->merchantId = 'voluptas';
    $request->oauthToken = 'animi';
    $request->pageSize = 413780;
    $request->pageToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new ContentQuotasListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->quotas->contentQuotasList($request, $requestSecurity);

    if ($response->listMethodQuotasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
