# regionalinventory

### Available Operations

* [contentRegionalinventoryCustombatch](#contentregionalinventorycustombatch) - Updates regional inventory for multiple products or regions in a single request.
* [contentRegionalinventoryInsert](#contentregionalinventoryinsert) - Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.

## contentRegionalinventoryCustombatch

Updates regional inventory for multiple products or regions in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionalinventoryCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalinventoryCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegionalinventoryCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\RegionalInventory;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionalinventoryCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRegionalinventoryCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionalinventoryCustomBatchRequest = new RegionalinventoryCustomBatchRequest();
    $request->regionalinventoryCustomBatchRequest->entries = [
        new RegionalinventoryCustomBatchRequestEntry(),
        new RegionalinventoryCustomBatchRequestEntry(),
        new RegionalinventoryCustomBatchRequestEntry(),
        new RegionalinventoryCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minus';
    $request->fields = 'porro';
    $request->key = 'id';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new ContentRegionalinventoryCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionalinventory->contentRegionalinventoryCustombatch($request, $requestSecurity);

    if ($response->regionalinventoryCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentRegionalinventoryInsert

Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionalinventoryInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalInventory;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentRegionalinventoryInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRegionalinventoryInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionalInventory = new RegionalInventory();
    $request->regionalInventory->availability = 'hic';
    $request->regionalInventory->customAttributes = [
        new CustomAttribute(),
        new CustomAttribute(),
        new CustomAttribute(),
        new CustomAttribute(),
    ];
    $request->regionalInventory->kind = 'accusantium';
    $request->regionalInventory->price = new Price();
    $request->regionalInventory->price->currency = 'soluta';
    $request->regionalInventory->price->value = 'fugit';
    $request->regionalInventory->regionId = 'pariatur';
    $request->regionalInventory->salePrice = new Price();
    $request->regionalInventory->salePrice->currency = 'eligendi';
    $request->regionalInventory->salePrice->value = 'recusandae';
    $request->regionalInventory->salePriceEffectiveDate = 'veritatis';
    $request->accessToken = 'aut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->fields = 'dolor';
    $request->key = 'voluptates';
    $request->merchantId = 'tempora';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->productId = 'rerum';
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new ContentRegionalinventoryInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionalinventory->contentRegionalinventoryInsert($request, $requestSecurity);

    if ($response->regionalInventory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
