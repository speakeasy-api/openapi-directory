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
    $request->accessToken = 'facere';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'ad';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'labore';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nostrum';
    $request->fields = 'neque';
    $request->key = 'iusto';
    $request->merchantId = 'est';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->storeCode = 'fugiat';
    $request->targetMerchantId = 'unde';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'ducimus';

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
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'vitae';
    $request->key = 'dignissimos';
    $request->merchantId = 'esse';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->storeCode = 'aspernatur';
    $request->targetMerchantId = 'enim';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'iusto';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->posStore = new PosStore();
    $request->posStore->gcidCategory = [
        'illo',
        'ab',
        'incidunt',
    ];
    $request->posStore->kind = 'accusamus';
    $request->posStore->phoneNumber = 'saepe';
    $request->posStore->placeId = 'tempore';
    $request->posStore->storeAddress = 'veniam';
    $request->posStore->storeCode = 'eos';
    $request->posStore->storeName = 'reiciendis';
    $request->posStore->websiteUrl = 'earum';
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'repellat';
    $request->key = 'quisquam';
    $request->merchantId = 'sequi';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->targetMerchantId = 'illo';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'assumenda';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->posInventoryRequest = new PosInventoryRequest();
    $request->posInventoryRequest->contentLanguage = 'quisquam';
    $request->posInventoryRequest->gtin = 'provident';
    $request->posInventoryRequest->itemId = 'laudantium';
    $request->posInventoryRequest->price = new Price();
    $request->posInventoryRequest->price->currency = 'repudiandae';
    $request->posInventoryRequest->price->value = 'consequatur';
    $request->posInventoryRequest->quantity = 'maxime';
    $request->posInventoryRequest->storeCode = 'aspernatur';
    $request->posInventoryRequest->targetCountry = 'nam';
    $request->posInventoryRequest->timestamp = 'expedita';
    $request->accessToken = 'quas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->fields = 'rerum';
    $request->key = 'dignissimos';
    $request->merchantId = 'corporis';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->targetMerchantId = 'repellendus';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'dolorem';

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
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aut';
    $request->fields = 'voluptatem';
    $request->key = 'ad';
    $request->merchantId = 'quae';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->targetMerchantId = 'praesentium';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'cum';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->posSaleRequest = new PosSaleRequest();
    $request->posSaleRequest->contentLanguage = 'quasi';
    $request->posSaleRequest->gtin = 'dicta';
    $request->posSaleRequest->itemId = 'laudantium';
    $request->posSaleRequest->price = new Price();
    $request->posSaleRequest->price->currency = 'doloremque';
    $request->posSaleRequest->price->value = 'earum';
    $request->posSaleRequest->quantity = 'iusto';
    $request->posSaleRequest->saleId = 'amet';
    $request->posSaleRequest->storeCode = 'provident';
    $request->posSaleRequest->targetCountry = 'dolorum';
    $request->posSaleRequest->timestamp = 'necessitatibus';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequatur';
    $request->fields = 'nemo';
    $request->key = 'molestiae';
    $request->merchantId = 'itaque';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'corrupti';
    $request->targetMerchantId = 'aperiam';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'accusamus';

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
