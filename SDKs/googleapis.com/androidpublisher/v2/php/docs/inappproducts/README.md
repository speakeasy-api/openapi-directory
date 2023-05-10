# inappproducts

### Available Operations

* [androidpublisherInappproductsDelete](#androidpublisherinappproductsdelete) - Delete an in-app product for an app.
* [androidpublisherInappproductsGet](#androidpublisherinappproductsget) - Returns information about the in-app product specified.
* [androidpublisherInappproductsInsert](#androidpublisherinappproductsinsert) - Creates a new in-app product for an app.
* [androidpublisherInappproductsList](#androidpublisherinappproductslist) - List all the in-app products for an Android app, both subscriptions and managed in-app products..
* [androidpublisherInappproductsPatch](#androidpublisherinappproductspatch) - Updates the details of an in-app product. This method supports patch semantics.
* [androidpublisherInappproductsUpdate](#androidpublisherinappproductsupdate) - Updates the details of an in-app product.

## androidpublisherInappproductsDelete

Delete an in-app product for an app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInappproductsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'repellendus';
    $request->key = 'totam';
    $request->oauthToken = 'similique';
    $request->packageName = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->sku = 'quaerat';
    $request->userIp = 'tempora';

    $requestSecurity = new AndroidpublisherInappproductsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inappproducts->androidpublisherInappproductsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherInappproductsGet

Returns information about the in-app product specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInappproductsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'vel';
    $request->key = 'quod';
    $request->oauthToken = 'officiis';
    $request->packageName = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->sku = 'a';
    $request->userIp = 'esse';

    $requestSecurity = new AndroidpublisherInappproductsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inappproducts->androidpublisherInappproductsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherInappproductsInsert

Creates a new in-app product for an app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\InAppProduct;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\InAppProductListing;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInappproductsInsertRequest();
    $request->inAppProduct = new InAppProduct();
    $request->inAppProduct->defaultLanguage = 'harum';
    $request->inAppProduct->defaultPrice = new Price();
    $request->inAppProduct->defaultPrice->currency = 'iusto';
    $request->inAppProduct->defaultPrice->priceMicros = 'ipsum';
    $request->inAppProduct->gracePeriod = 'quisquam';
    $request->inAppProduct->listings = [
        'amet' => new InAppProductListing(),
        'tempore' => new InAppProductListing(),
        'accusamus' => new InAppProductListing(),
        'numquam' => new InAppProductListing(),
    ];
    $request->inAppProduct->packageName = 'enim';
    $request->inAppProduct->prices = [
        'sapiente' => new Price(),
    ];
    $request->inAppProduct->purchaseType = 'totam';
    $request->inAppProduct->sku = 'nihil';
    $request->inAppProduct->status = 'sit';
    $request->inAppProduct->subscriptionPeriod = 'expedita';
    $request->inAppProduct->trialPeriod = 'neque';
    $request->alt = AltEnum::JSON;
    $request->autoConvertMissingPrices = false;
    $request->fields = 'sed';
    $request->key = 'vel';
    $request->oauthToken = 'libero';
    $request->packageName = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->userIp = 'quam';

    $requestSecurity = new AndroidpublisherInappproductsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inappproducts->androidpublisherInappproductsInsert($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherInappproductsList

List all the in-app products for an Android app, both subscriptions and managed in-app products..

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInappproductsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'ipsum';
    $request->key = 'incidunt';
    $request->maxResults = 186458;
    $request->oauthToken = 'cupiditate';
    $request->packageName = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->startIndex = 747080;
    $request->token = 'dicta';
    $request->userIp = 'laborum';

    $requestSecurity = new AndroidpublisherInappproductsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inappproducts->androidpublisherInappproductsList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherInappproductsPatch

Updates the details of an in-app product. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\InAppProduct;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\InAppProductListing;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInappproductsPatchRequest();
    $request->inAppProduct = new InAppProduct();
    $request->inAppProduct->defaultLanguage = 'totam';
    $request->inAppProduct->defaultPrice = new Price();
    $request->inAppProduct->defaultPrice->currency = 'incidunt';
    $request->inAppProduct->defaultPrice->priceMicros = 'aspernatur';
    $request->inAppProduct->gracePeriod = 'dolores';
    $request->inAppProduct->listings = [
        'facilis' => new InAppProductListing(),
        'aliquid' => new InAppProductListing(),
        'quam' => new InAppProductListing(),
    ];
    $request->inAppProduct->packageName = 'molestias';
    $request->inAppProduct->prices = [
        'qui' => new Price(),
        'neque' => new Price(),
        'fugit' => new Price(),
        'magni' => new Price(),
    ];
    $request->inAppProduct->purchaseType = 'odio';
    $request->inAppProduct->sku = 'sunt';
    $request->inAppProduct->status = 'ullam';
    $request->inAppProduct->subscriptionPeriod = 'nam';
    $request->inAppProduct->trialPeriod = 'hic';
    $request->alt = AltEnum::JSON;
    $request->autoConvertMissingPrices = false;
    $request->fields = 'voluptatem';
    $request->key = 'cumque';
    $request->oauthToken = 'soluta';
    $request->packageName = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->sku = 'saepe';
    $request->userIp = 'ipsum';

    $requestSecurity = new AndroidpublisherInappproductsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inappproducts->androidpublisherInappproductsPatch($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidpublisherInappproductsUpdate

Updates the details of an in-app product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\InAppProduct;
use \OpenAPI\OpenAPI\Models\Shared\Price;
use \OpenAPI\OpenAPI\Models\Shared\InAppProductListing;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherInappproductsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherInappproductsUpdateRequest();
    $request->inAppProduct = new InAppProduct();
    $request->inAppProduct->defaultLanguage = 'veritatis';
    $request->inAppProduct->defaultPrice = new Price();
    $request->inAppProduct->defaultPrice->currency = 'nobis';
    $request->inAppProduct->defaultPrice->priceMicros = 'quos';
    $request->inAppProduct->gracePeriod = 'tempore';
    $request->inAppProduct->listings = [
        'aperiam' => new InAppProductListing(),
        'delectus' => new InAppProductListing(),
        'dolorem' => new InAppProductListing(),
    ];
    $request->inAppProduct->packageName = 'dolore';
    $request->inAppProduct->prices = [
        'adipisci' => new Price(),
        'dolorum' => new Price(),
    ];
    $request->inAppProduct->purchaseType = 'architecto';
    $request->inAppProduct->sku = 'quae';
    $request->inAppProduct->status = 'aut';
    $request->inAppProduct->subscriptionPeriod = 'quas';
    $request->inAppProduct->trialPeriod = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->autoConvertMissingPrices = false;
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'repellendus';
    $request->packageName = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->sku = 'ut';
    $request->userIp = 'facilis';

    $requestSecurity = new AndroidpublisherInappproductsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inappproducts->androidpublisherInappproductsUpdate($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
