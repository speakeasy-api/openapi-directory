# product

## Overview

Product operations

Product Services
<https://netlicensing.io/wiki/product-services>
### Available Operations

* [createProduct](#createproduct) - Create Product
* [deleteProduct](#deleteproduct) - Delete Product
* [listProducts](#listproducts) - List Products
* [productNumber](#productnumber) - Get Product
* [updateProduct](#updateproduct) - Update Product

## createProduct

Creates a new Product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductRequestBodyVatModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProductRequestBody();
    $request->active = false;
    $request->description = 'mollitia';
    $request->licenseeAutoCreate = false;
    $request->licensingInfo = 'occaecati';
    $request->name = 'Lucy Konopelski';
    $request->number = 'error';
    $request->vatMode = CreateProductRequestBodyVatModeEnum::GROSS;
    $request->version = 'quis';

    $requestSecurity = new CreateProductSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->product->createProduct($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProduct

Delete a Product by 'number'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductRequest();
    $request->forceCascade = false;
    $request->productNumber = 'vitae';

    $requestSecurity = new DeleteProductSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->product->deleteProduct($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProducts

Return a list of all configured Products for the current Vendor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListProductsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListProductsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->product->listProducts($requestSecurity);

    if ($response->netlicensings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productNumber

Return a Product by 'productNumber'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductNumberRequest();
    $request->productNumber = 'laborum';

    $requestSecurity = new ProductNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->product->productNumber($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProduct

Sets the provided properties to a Product. Return an updated Product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductRequestBodyVatModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProductRequest();
    $request->requestBody = new UpdateProductRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->description = 'animi';
    $request->requestBody->licenseeAutoCreate = false;
    $request->requestBody->licensingInfo = 'enim';
    $request->requestBody->name = 'Angelica Dietrich';
    $request->requestBody->number = 'id';
    $request->requestBody->vatMode = UpdateProductRequestBodyVatModeEnum::NET;
    $request->requestBody->version = 'aut';
    $request->productNumber = 'quasi';

    $requestSecurity = new UpdateProductSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->product->updateProduct($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
