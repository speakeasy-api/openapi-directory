# productOptions

### Available Operations

* [deleteProductsIdOptionsOptionIdJson](#deleteproductsidoptionsoptionidjson) - Delete a Product Option.
* [getProductsIdOptionsJson](#getproductsidoptionsjson) - Retrieve all Product Options.
* [getProductsIdOptionsCountJson](#getproductsidoptionscountjson) - Count all Product Options.
* [getProductsIdOptionsOptionIdJson](#getproductsidoptionsoptionidjson) - Retrieve a single Product Option.
* [postProductsIdOptionsJson](#postproductsidoptionsjson) - Create a new Product Option.
* [putProductsIdOptionsOptionIdJson](#putproductsidoptionsoptionidjson) - Modify an existing Product Option.

## deleteProductsIdOptionsOptionIdJson

Delete a Product Option.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductsIdOptionsOptionIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductsIdOptionsOptionIdJsonRequest();
    $request->authtoken = 'fuga';
    $request->id = 259422;
    $request->login = 'eos';
    $request->optionId = 373813;

    $response = $sdk->productOptions->deleteProductsIdOptionsOptionIdJson($request);

    if ($response->deleteProductsIdOptionsOptionIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdOptionsJson

Retrieve all Product Options.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdOptionsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdOptionsJsonRequest();
    $request->authtoken = 'ab';
    $request->id = 587600;
    $request->login = 'consequatur';

    $response = $sdk->productOptions->getProductsIdOptionsJson($request);

    if ($response->productOptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdOptionsCountJson

Count all Product Options.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdOptionsCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdOptionsCountJsonRequest();
    $request->authtoken = 'tempora';
    $request->id = 892050;
    $request->login = 'ipsam';

    $response = $sdk->productOptions->getProductsIdOptionsCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdOptionsOptionIdJson

Retrieve a single Product Option.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdOptionsOptionIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdOptionsOptionIdJsonRequest();
    $request->authtoken = 'aspernatur';
    $request->id = 197054;
    $request->login = 'quo';
    $request->optionId = 459856;

    $response = $sdk->productOptions->getProductsIdOptionsOptionIdJson($request);

    if ($response->productOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProductsIdOptionsJson

Create a new Product Option.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostProductsIdOptionsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductOptionEdit;
use \OpenAPI\OpenAPI\Models\Shared\ProductOptionEditFields;
use \OpenAPI\OpenAPI\Models\Shared\ProductOptionEditFieldsOptionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProductsIdOptionsJsonRequest();
    $request->productOptionEdit = new ProductOptionEdit();
    $request->productOptionEdit->option = new ProductOptionEditFields();
    $request->productOptionEdit->option->name = 'Kevin Rau';
    $request->productOptionEdit->option->optionType = ProductOptionEditFieldsOptionTypeEnum::OPTION;
    $request->productOptionEdit->option->position = 469498;
    $request->authtoken = 'totam';
    $request->id = 882710;
    $request->login = 'aliquam';

    $response = $sdk->productOptions->postProductsIdOptionsJson($request);

    if ($response->productOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProductsIdOptionsOptionIdJson

Modify an existing Product Option.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutProductsIdOptionsOptionIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductOptionEdit;
use \OpenAPI\OpenAPI\Models\Shared\ProductOptionEditFields;
use \OpenAPI\OpenAPI\Models\Shared\ProductOptionEditFieldsOptionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProductsIdOptionsOptionIdJsonRequest();
    $request->productOptionEdit = new ProductOptionEdit();
    $request->productOptionEdit->option = new ProductOptionEditFields();
    $request->productOptionEdit->option->name = 'Violet Johns';
    $request->productOptionEdit->option->optionType = ProductOptionEditFieldsOptionTypeEnum::TEXT;
    $request->productOptionEdit->option->position = 475289;
    $request->authtoken = 'accusantium';
    $request->id = 783648;
    $request->login = 'eum';
    $request->optionId = 556429;

    $response = $sdk->productOptions->putProductsIdOptionsOptionIdJson($request);

    if ($response->productOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
