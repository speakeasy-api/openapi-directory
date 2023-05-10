# pos

### Available Operations

* [contentPosCustombatch](#contentposcustombatch) - Batches multiple POS-related calls in a single request.
* [contentPosDelete](#contentposdelete) - Deletes a store for the given merchant.
* [contentPosGet](#contentposget) - Retrieves information about the given store.
* [contentPosInsert](#contentposinsert) - Creates a store for the given merchant.
* [contentPosInventory](#contentposinventory) - Submit inventory for the given merchant.
* [contentPosList](#contentposlist) - Lists the stores of the target merchant.
* [contentPosSale](#contentpossale) - Submit a sale event for the given merchant.

## contentPosCustombatch

Batches multiple POS-related calls in a single request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosCustombatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosCustomBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\PosCustomBatchRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\PosInventory;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\PosSale;
use \OpenAPI\OpenAPI\Models\Shared\PosStore;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosCustombatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentPosCustombatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->posCustomBatchRequest = new PosCustomBatchRequest();
    $request->posCustomBatchRequest->entries = [
        new PosCustomBatchRequestEntry(),
        new PosCustomBatchRequestEntry(),
        new PosCustomBatchRequestEntry(),
        new PosCustomBatchRequestEntry(),
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->dryRun = false;
    $request->fields = 'reprehenderit';
    $request->key = 'facere';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'veniam';

    $requestSecurity = new ContentPosCustombatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pos->contentPosCustombatch($request, $requestSecurity);

    if ($response->posCustomBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentPosDelete

Deletes a store for the given merchant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentPosDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->dryRun = false;
    $request->fields = 'atque';
    $request->key = 'reprehenderit';
    $request->merchantId = 'asperiores';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->storeCode = 'quidem';
    $request->targetMerchantId = 'maxime';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new ContentPosDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pos->contentPosDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentPosGet

Retrieves information about the given store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentPosGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'atque';
    $request->fields = 'error';
    $request->key = 'officiis';
    $request->merchantId = 'officiis';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->storeCode = 'minima';
    $request->targetMerchantId = 'aspernatur';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new ContentPosGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pos->contentPosGet($request, $requestSecurity);

    if ($response->posStore !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentPosInsert

Creates a store for the given merchant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosStore;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentPosInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->posStore = new PosStore();
    $request->posStore->gcidCategory = [
        'error',
        'blanditiis',
        'suscipit',
        'repudiandae',
    ];
    $request->posStore->kind = 'atque';
    $request->posStore->phoneNumber = 'atque';
    $request->posStore->placeId = 'sunt';
    $request->posStore->storeAddress = 'recusandae';
    $request->posStore->storeCode = 'dolorum';
    $request->posStore->storeName = 'repellendus';
    $request->posStore->websiteUrl = 'labore';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->dryRun = false;
    $request->fields = 'dicta';
    $request->key = 'accusantium';
    $request->merchantId = 'beatae';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->targetMerchantId = 'laboriosam';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'a';

    $requestSecurity = new ContentPosInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pos->contentPosInsert($request, $requestSecurity);

    if ($response->posStore !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentPosInventory

Submit inventory for the given merchant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosInventorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentPosInventoryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->posInventoryRequest = new PosInventoryRequest();
    $request->posInventoryRequest->contentLanguage = 'magnam';
    $request->posInventoryRequest->gtin = 'saepe';
    $request->posInventoryRequest->itemId = 'consequuntur';
    $request->posInventoryRequest->price = new Price();
    $request->posInventoryRequest->price->currency = 'occaecati';
    $request->posInventoryRequest->price->value = 'officiis';
    $request->posInventoryRequest->quantity = 'perspiciatis';
    $request->posInventoryRequest->storeCode = 'in';
    $request->posInventoryRequest->targetCountry = 'adipisci';
    $request->posInventoryRequest->timestamp = 'eveniet';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->dryRun = false;
    $request->fields = 'id';
    $request->key = 'quis';
    $request->merchantId = 'reprehenderit';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'illo';
    $request->targetMerchantId = 'corporis';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'eveniet';

    $requestSecurity = new ContentPosInventorySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pos->contentPosInventory($request, $requestSecurity);

    if ($response->posInventoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentPosList

Lists the stores of the target merchant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentPosListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'ipsa';
    $request->key = 'totam';
    $request->merchantId = 'quae';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'eveniet';
    $request->targetMerchantId = 'qui';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new ContentPosListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pos->contentPosList($request, $requestSecurity);

    if ($response->posListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentPosSale

Submit a sale event for the given merchant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosSaleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosSaleRequest;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentPosSaleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentPosSaleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->posSaleRequest = new PosSaleRequest();
    $request->posSaleRequest->contentLanguage = 'ratione';
    $request->posSaleRequest->gtin = 'laborum';
    $request->posSaleRequest->itemId = 'distinctio';
    $request->posSaleRequest->price = new Price();
    $request->posSaleRequest->price->currency = 'voluptatum';
    $request->posSaleRequest->price->value = 'rem';
    $request->posSaleRequest->quantity = 'aliquam';
    $request->posSaleRequest->saleId = 'ad';
    $request->posSaleRequest->storeCode = 'repellat';
    $request->posSaleRequest->targetCountry = 'alias';
    $request->posSaleRequest->timestamp = 'corporis';
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'mollitia';
    $request->dryRun = false;
    $request->fields = 'voluptas';
    $request->key = 'alias';
    $request->merchantId = 'maiores';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->targetMerchantId = 'id';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new ContentPosSaleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->pos->contentPosSale($request, $requestSecurity);

    if ($response->posSaleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
