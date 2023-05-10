# localinventory

### Available Operations

* [contentLocalinventoryCustombatch](#contentlocalinventorycustombatch) - Updates local inventory for multiple products or stores in a single request.
* [contentLocalinventoryInsert](#contentlocalinventoryinsert) - Updates the local inventory of a product in your Merchant Center account.

## contentLocalinventoryCustombatch

Updates local inventory for multiple products or stores in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentLocalinventoryCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalinventoryCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\LocalinventoryCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\LocalInventory;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentLocalinventoryCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentLocalinventoryCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->localinventoryCustomBatchRequest = new LocalinventoryCustomBatchRequest();
    $request->localinventoryCustomBatchRequest->entries = [
        new LocalinventoryCustomBatchRequestEntry(),
        new LocalinventoryCustomBatchRequestEntry(),
        new LocalinventoryCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'recusandae';
    $request->fields = 'omnis';
    $request->key = 'quaerat';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new ContentLocalinventoryCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->localinventory->contentLocalinventoryCustombatch($request, $requestSecurity);

    if ($response->localinventoryCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentLocalinventoryInsert

Updates the local inventory of a product in your Merchant Center account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentLocalinventoryInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalInventory;
use \OpenAPI\OpenAPI\Models\Shared\CustomAttribute;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentLocalinventoryInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentLocalinventoryInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->localInventory = new LocalInventory();
    $request->localInventory->availability = 'debitis';
    $request->localInventory->customAttributes = [
        new CustomAttribute(),
        new CustomAttribute(),
        new CustomAttribute(),
    ];
    $request->localInventory->instoreProductLocation = 'eum';
    $request->localInventory->kind = 'nemo';
    $request->localInventory->pickupMethod = 'recusandae';
    $request->localInventory->pickupSla = 'esse';
    $request->localInventory->price = new Price();
    $request->localInventory->price->currency = 'provident';
    $request->localInventory->price->value = 'quis';
    $request->localInventory->quantity = 431785;
    $request->localInventory->salePrice = new Price();
    $request->localInventory->salePrice->currency = 'reiciendis';
    $request->localInventory->salePrice->value = 'provident';
    $request->localInventory->salePriceEffectiveDate = 'aspernatur';
    $request->localInventory->storeCode = 'ullam';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->fields = 'mollitia';
    $request->key = 'provident';
    $request->merchantId = 'possimus';
    $request->oauthToken = 'animi';
    $request->prettyPrint = false;
    $request->productId = 'ex';
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new ContentLocalinventoryInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->localinventory->contentLocalinventoryInsert($request, $requestSecurity);

    if ($response->localInventory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
