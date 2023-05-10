# products

### Available Operations

* [adexchangebuyerProductsGet](#adexchangebuyerproductsget) - Gets the requested product by id.
* [adexchangebuyerProductsSearch](#adexchangebuyerproductssearch) - Gets the requested product.

## adexchangebuyerProductsGet

Gets the requested product by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProductsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProductsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerProductsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'tempora';
    $request->key = 'numquam';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->productId = 'provident';
    $request->quotaUser = 'ipsa';
    $request->userIp = 'molestiae';

    $requestSecurity = new AdexchangebuyerProductsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->adexchangebuyerProductsGet($request, $requestSecurity);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerProductsSearch

Gets the requested product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProductsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProductsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerProductsSearchRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'magnam';
    $request->key = 'odio';
    $request->oauthToken = 'eius';
    $request->pqlQuery = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->userIp = 'rem';

    $requestSecurity = new AdexchangebuyerProductsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->adexchangebuyerProductsSearch($request, $requestSecurity);

    if ($response->getOffersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
