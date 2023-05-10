# productdeliverytime

### Available Operations

* [contentProductdeliverytimeCreate](#contentproductdeliverytimecreate) - Creates or updates the delivery time of a product.
* [contentProductdeliverytimeDelete](#contentproductdeliverytimedelete) - Deletes the delivery time of a product.
* [contentProductdeliverytimeGet](#contentproductdeliverytimeget) - Gets `productDeliveryTime` by `productId`.

## contentProductdeliverytimeCreate

Creates or updates the delivery time of a product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductDeliveryTime;
use \OpenAPI\OpenAPI\Models\Shared\ProductDeliveryTimeAreaDeliveryTime;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryArea;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryAreaPostalCodeRange;
use \OpenAPI\OpenAPI\Models\Shared\ProductDeliveryTimeAreaDeliveryTimeDeliveryTime;
use \OpenAPI\OpenAPI\Models\Shared\ProductId;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductdeliverytimeCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->productDeliveryTime = new ProductDeliveryTime();
    $request->productDeliveryTime->areaDeliveryTimes = [
        new ProductDeliveryTimeAreaDeliveryTime(),
        new ProductDeliveryTimeAreaDeliveryTime(),
        new ProductDeliveryTimeAreaDeliveryTime(),
    ];
    $request->productDeliveryTime->productId = new ProductId();
    $request->productDeliveryTime->productId->productId = 'dicta';
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'sunt';
    $request->key = 'a';
    $request->merchantId = 'dolor';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'at';

    $requestSecurity = new ContentProductdeliverytimeCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->productdeliverytime->contentProductdeliverytimeCreate($request, $requestSecurity);

    if ($response->productDeliveryTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentProductdeliverytimeDelete

Deletes the delivery time of a product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductdeliverytimeDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'perferendis';
    $request->key = 'rerum';
    $request->merchantId = 'ea';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->productId = 'dignissimos';
    $request->quotaUser = 'repellat';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new ContentProductdeliverytimeDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->productdeliverytime->contentProductdeliverytimeDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentProductdeliverytimeGet

Gets `productDeliveryTime` by `productId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentProductdeliverytimeGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'consectetur';
    $request->key = 'soluta';
    $request->merchantId = 'natus';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->productId = 'officia';
    $request->quotaUser = 'amet';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'aspernatur';

    $requestSecurity = new ContentProductdeliverytimeGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->productdeliverytime->contentProductdeliverytimeGet($request, $requestSecurity);

    if ($response->productDeliveryTime !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
