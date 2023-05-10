# productsApi

### Available Operations

* [productsApiCount](#productsapicount)
* [productsApiDeleteProduct](#productsapideleteproduct)
* [productsApiDeleteProduct2](#productsapideleteproduct2)
* [productsApiFind](#productsapifind)
* [productsApiList](#productsapilist)
* [productsApiPatchProduct](#productsapipatchproduct)
* [productsApiPatchProduct2](#productsapipatchproduct2)
* [productsApiSave](#productsapisave)

## productsApiCount

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiKey();
    $request->key = 'nulla';

    $response = $sdk->productsApi->productsApiCount($request);

    if ($response->productsApiCount200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsApiDeleteProduct

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductsApiDeleteProductRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductsApiDeleteProductRequest();
    $request->xApiKey = 'corrupti';
    $request->serial = 'illum';

    $response = $sdk->productsApi->productsApiDeleteProduct($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsApiDeleteProduct2

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductsApiDeleteProduct2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductsApiDeleteProduct2Request();
    $request->xApiKey = 'vel';
    $request->serial = 'error';

    $response = $sdk->productsApi->productsApiDeleteProduct2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsApiFind

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductsApiFindRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductsApiFindRequest();
    $request->requestBody = new FindCredentials();
    $request->requestBody->key = 'deserunt';
    $request->requestBody->serial = 'suscipit';
    $request->page = 437587;

    $response = $sdk->productsApi->productsApiFind($request);

    if ($response->productsApiFind200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsApiList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductsApiListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductsApiListRequest();
    $request->requestBody = new ApiKey();
    $request->requestBody->key = 'magnam';
    $request->page = 891773;

    $response = $sdk->productsApi->productsApiList($request);

    if ($response->productViews !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsApiPatchProduct

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductCreateModify();
    $request->custom = 'ipsa';
    $request->key = 'delectus';
    $request->name = 'Laurie Kreiger';
    $request->serial = 'voluptatum';

    $response = $sdk->productsApi->productsApiPatchProduct($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsApiPatchProduct2

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductCreateModify();
    $request->custom = 'iusto';
    $request->key = 'excepturi';
    $request->name = 'Mrs. Sophie Smith MD';
    $request->serial = 'perferendis';

    $response = $sdk->productsApi->productsApiPatchProduct2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsApiSave

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductCreateModify();
    $request->custom = 'ipsam';
    $request->key = 'repellendus';
    $request->name = 'Cedric Connelly';
    $request->serial = 'maiores';

    $response = $sdk->productsApi->productsApiSave($request);

    if ($response->productsApiSave201ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
