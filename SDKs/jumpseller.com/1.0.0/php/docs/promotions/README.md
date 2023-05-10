# promotions

### Available Operations

* [deletePromotionsIdJson](#deletepromotionsidjson) - Delete an existing Promotion.
* [getPromotionsJson](#getpromotionsjson) - Retrieve all Promotions.
* [getPromotionsIdJson](#getpromotionsidjson) - Retrieve a single Promotion.
* [postPromotionsJson](#postpromotionsjson) - Create a new Promotion.
* [putPromotionsIdJson](#putpromotionsidjson) - Update a Promotion.

## deletePromotionsIdJson

Delete an existing Promotion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePromotionsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePromotionsIdJsonRequest();
    $request->authtoken = 'ab';
    $request->id = 544591;
    $request->login = 'non';

    $response = $sdk->promotions->deletePromotionsIdJson($request);

    if ($response->deletePromotionsIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPromotionsJson

Retrieve all Promotions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPromotionsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPromotionsJsonRequest();
    $request->authtoken = 'voluptatem';
    $request->limit = 221161;
    $request->login = 'occaecati';
    $request->page = 253191;

    $response = $sdk->promotions->getPromotionsJson($request);

    if ($response->promotions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPromotionsIdJson

Retrieve a single Promotion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPromotionsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPromotionsIdJsonRequest();
    $request->authtoken = 'impedit';
    $request->id = 131055;
    $request->login = 'voluptas';

    $response = $sdk->promotions->getPromotionsIdJson($request);

    if ($response->promotion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPromotionsJson

Create a new Promotion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPromotionsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PromotionEdit;
use \OpenAPI\OpenAPI\Models\Shared\PromotionEditFields;
use \OpenAPI\OpenAPI\Models\Shared\Id;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPromotionsJsonRequest();
    $request->promotionEdit = new PromotionEdit();
    $request->promotionEdit->promotion = new PromotionEditFields();
    $request->promotionEdit->promotion->beginsAt = 'aut';
    $request->promotionEdit->promotion->buysAtLeast = 'dignissimos';
    $request->promotionEdit->promotion->categories = [
        new Id(),
    ];
    $request->promotionEdit->promotion->code = 'maiores';
    $request->promotionEdit->promotion->conditionPrice = 6184.8;
    $request->promotionEdit->promotion->conditionQty = 244651;
    $request->promotionEdit->promotion->cumulative = false;
    $request->promotionEdit->promotion->customerCategories = [
        new Id(),
        new Id(),
        new Id(),
        new Id(),
    ];
    $request->promotionEdit->promotion->customers = 'voluptas';
    $request->promotionEdit->promotion->discountAmountFix = 9903.45;
    $request->promotionEdit->promotion->discountAmountPercent = 456.59;
    $request->promotionEdit->promotion->discountTarget = 'ea';
    $request->promotionEdit->promotion->enabled = false;
    $request->promotionEdit->promotion->expiresAt = 'quaerat';
    $request->promotionEdit->promotion->lasts = 'consequuntur';
    $request->promotionEdit->promotion->maxTimesUsed = 831520;
    $request->promotionEdit->promotion->name = 'Simon Kuhn';
    $request->promotionEdit->promotion->products = [
        new Id(),
        new Id(),
    ];
    $request->promotionEdit->promotion->productsX = [
        new Id(),
    ];
    $request->promotionEdit->promotion->quantityX = 312753;
    $request->promotionEdit->promotion->type = 'porro';
    $request->authtoken = 'quod';
    $request->login = 'labore';

    $response = $sdk->promotions->postPromotionsJson($request);

    if ($response->promotion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPromotionsIdJson

Update a Promotion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutPromotionsIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PromotionEdit;
use \OpenAPI\OpenAPI\Models\Shared\PromotionEditFields;
use \OpenAPI\OpenAPI\Models\Shared\Id;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPromotionsIdJsonRequest();
    $request->promotionEdit = new PromotionEdit();
    $request->promotionEdit->promotion = new PromotionEditFields();
    $request->promotionEdit->promotion->beginsAt = 'ab';
    $request->promotionEdit->promotion->buysAtLeast = 'adipisci';
    $request->promotionEdit->promotion->categories = [
        new Id(),
        new Id(),
        new Id(),
    ];
    $request->promotionEdit->promotion->code = 'id';
    $request->promotionEdit->promotion->conditionPrice = 3807.29;
    $request->promotionEdit->promotion->conditionQty = 246063;
    $request->promotionEdit->promotion->cumulative = false;
    $request->promotionEdit->promotion->customerCategories = [
        new Id(),
        new Id(),
        new Id(),
    ];
    $request->promotionEdit->promotion->customers = 'est';
    $request->promotionEdit->promotion->discountAmountFix = 9268.8;
    $request->promotionEdit->promotion->discountAmountPercent = 5173.09;
    $request->promotionEdit->promotion->discountTarget = 'fugiat';
    $request->promotionEdit->promotion->enabled = false;
    $request->promotionEdit->promotion->expiresAt = 'vel';
    $request->promotionEdit->promotion->lasts = 'ducimus';
    $request->promotionEdit->promotion->maxTimesUsed = 554688;
    $request->promotionEdit->promotion->name = 'Clara Senger';
    $request->promotionEdit->promotion->products = [
        new Id(),
        new Id(),
    ];
    $request->promotionEdit->promotion->productsX = [
        new Id(),
        new Id(),
    ];
    $request->promotionEdit->promotion->quantityX = 360545;
    $request->promotionEdit->promotion->type = 'reiciendis';
    $request->authtoken = 'assumenda';
    $request->id = 363161;
    $request->login = 'recusandae';

    $response = $sdk->promotions->putPromotionsIdJson($request);

    if ($response->promotion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
