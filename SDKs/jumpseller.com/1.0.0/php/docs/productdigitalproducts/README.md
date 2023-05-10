# productDigitalProducts

### Available Operations

* [deleteProductsIdDigitalProductsDigitalProductIdJson](#deleteproductsiddigitalproductsdigitalproductidjson) - Delete a Product DigitalProduct.
* [getProductsIdDigitalProductsJson](#getproductsiddigitalproductsjson) - Retrieve all Product DigitalProducts.
* [getProductsIdDigitalProductsCountJson](#getproductsiddigitalproductscountjson) - Count all Product DigitalProducts.
* [getProductsIdDigitalProductsDigitalProductIdJson](#getproductsiddigitalproductsdigitalproductidjson) - Retrieve a single Product DigitalProduct.
* [postProductsIdDigitalProductsJson](#postproductsiddigitalproductsjson) - Create a new Product DigitalProduct.

## deleteProductsIdDigitalProductsDigitalProductIdJson

Delete a Product DigitalProduct.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest();
    $request->authtoken = 'nulla';
    $request->digitalProductId = 569211;
    $request->id = 972920;
    $request->login = 'nostrum';

    $response = $sdk->productDigitalProducts->deleteProductsIdDigitalProductsDigitalProductIdJson($request);

    if ($response->deleteProductsIdDigitalProductsDigitalProductIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdDigitalProductsJson

Retrieve all Product DigitalProducts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdDigitalProductsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdDigitalProductsJsonRequest();
    $request->authtoken = 'sapiente';
    $request->id = 788873;
    $request->login = 'saepe';

    $response = $sdk->productDigitalProducts->getProductsIdDigitalProductsJson($request);

    if ($response->digitalProducts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdDigitalProductsCountJson

Count all Product DigitalProducts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdDigitalProductsCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdDigitalProductsCountJsonRequest();
    $request->authtoken = 'ea';
    $request->id = 774048;
    $request->login = 'corporis';

    $response = $sdk->productDigitalProducts->getProductsIdDigitalProductsCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdDigitalProductsDigitalProductIdJson

Retrieve a single Product DigitalProduct.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdDigitalProductsDigitalProductIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdDigitalProductsDigitalProductIdJsonRequest();
    $request->authtoken = 'veniam';
    $request->digitalProductId = 399499;
    $request->id = 81101;
    $request->login = 'magnam';

    $response = $sdk->productDigitalProducts->getProductsIdDigitalProductsDigitalProductIdJson($request);

    if ($response->digitalProduct !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProductsIdDigitalProductsJson

Create a new Product DigitalProduct.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostProductsIdDigitalProductsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\DigitalProductEdit;
use \OpenAPI\OpenAPI\Models\Shared\DigitalProductEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProductsIdDigitalProductsJsonRequest();
    $request->digitalProductEdit = new DigitalProductEdit();
    $request->digitalProductEdit->digitalProduct = new DigitalProductEditFields();
    $request->digitalProductEdit->digitalProduct->filename = 'ea';
    $request->digitalProductEdit->digitalProduct->url = 'quo';
    $request->authtoken = 'consectetur';
    $request->id = 926213;
    $request->login = 'aspernatur';

    $response = $sdk->productDigitalProducts->postProductsIdDigitalProductsJson($request);

    if ($response->digitalProduct !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
