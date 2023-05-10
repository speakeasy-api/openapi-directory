# orderreturns

### Available Operations

* [contentOrderreturnsGet](#contentorderreturnsget) - Retrieves an order return from your Merchant Center account.
* [contentOrderreturnsList](#contentorderreturnslist) - Lists order returns in your Merchant Center account.

## contentOrderreturnsGet

Retrieves an order return from your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrderreturnsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'aperiam';
    $request->key = 'distinctio';
    $request->merchantId = 'quod';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'inventore';
    $request->returnId = 'nihil';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new ContentOrderreturnsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderreturns->contentOrderreturnsGet($request, $requestSecurity);

    if ($response->merchantOrderReturn !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentOrderreturnsList

Lists order returns in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsListOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentOrderreturnsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentOrderreturnsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'commodi';
    $request->createdEndDate = 'sapiente';
    $request->createdStartDate = 'dolores';
    $request->fields = 'deserunt';
    $request->key = 'molestiae';
    $request->maxResults = 35362;
    $request->merchantId = 'porro';
    $request->oauthToken = 'eum';
    $request->orderBy = ContentOrderreturnsListOrderByEnum::RETURN_CREATION_TIME_ASC;
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new ContentOrderreturnsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orderreturns->contentOrderreturnsList($request, $requestSecurity);

    if ($response->orderreturnsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
