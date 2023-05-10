# productOptionValues

### Available Operations

* [deleteProductsIdOptionsOptionIdValuesValueIdJson](#deleteproductsidoptionsoptionidvaluesvalueidjson) - Delete a Product Option Value.
* [getProductsIdOptionsOptionIdValuesJson](#getproductsidoptionsoptionidvaluesjson) - Retrieve all Product Option Values.
* [getProductsIdOptionsOptionIdValuesCountJson](#getproductsidoptionsoptionidvaluescountjson) - Count all Product Option Values.
* [getProductsIdOptionsOptionIdValuesValueIdJson](#getproductsidoptionsoptionidvaluesvalueidjson) - Retrieve a single Product Option Value.
* [postProductsIdOptionsOptionIdValuesJson](#postproductsidoptionsoptionidvaluesjson) - Create a new Product Option Value.
* [putProductsIdOptionsOptionIdValuesValueIdJson](#putproductsidoptionsoptionidvaluesvalueidjson) - Modify an existing Product Option Value.

## deleteProductsIdOptionsOptionIdValuesValueIdJson

Delete a Product Option Value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductsIdOptionsOptionIdValuesValueIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductsIdOptionsOptionIdValuesValueIdJsonRequest();
    $request->authtoken = 'eum';
    $request->id = 420539;
    $request->login = 'nobis';
    $request->optionId = 557369;
    $request->valueId = 829603;

    $response = $sdk->productOptionValues->deleteProductsIdOptionsOptionIdValuesValueIdJson($request);

    if ($response->deleteProductsIdOptionsOptionIdValuesValueIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdOptionsOptionIdValuesJson

Retrieve all Product Option Values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdOptionsOptionIdValuesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdOptionsOptionIdValuesJsonRequest();
    $request->authtoken = 'nulla';
    $request->id = 379034;
    $request->login = 'libero';
    $request->optionId = 96549;

    $response = $sdk->productOptionValues->getProductsIdOptionsOptionIdValuesJson($request);

    if ($response->productOptionValues !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdOptionsOptionIdValuesCountJson

Count all Product Option Values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdOptionsOptionIdValuesCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdOptionsOptionIdValuesCountJsonRequest();
    $request->authtoken = 'tempora';
    $request->id = 256139;
    $request->login = 'explicabo';
    $request->optionId = 591935;

    $response = $sdk->productOptionValues->getProductsIdOptionsOptionIdValuesCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdOptionsOptionIdValuesValueIdJson

Retrieve a single Product Option Value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdOptionsOptionIdValuesValueIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdOptionsOptionIdValuesValueIdJsonRequest();
    $request->authtoken = 'ipsa';
    $request->id = 476477;
    $request->login = 'magnam';
    $request->optionId = 487935;
    $request->valueId = 262118;

    $response = $sdk->productOptionValues->getProductsIdOptionsOptionIdValuesValueIdJson($request);

    if ($response->productOptionValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProductsIdOptionsOptionIdValuesJson

Create a new Product Option Value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostProductsIdOptionsOptionIdValuesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductOptionValueEdit;
use \OpenAPI\OpenAPI\Models\Shared\ProductOptionValueEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProductsIdOptionsOptionIdValuesJsonRequest();
    $request->productOptionValueEdit = new ProductOptionValueEdit();
    $request->productOptionValueEdit->value = new ProductOptionValueEditFields();
    $request->productOptionValueEdit->value->name = 'Tamara Leffler';
    $request->productOptionValueEdit->value->position = 695626;
    $request->authtoken = 'fugiat';
    $request->id = 283519;
    $request->login = 'eum';
    $request->optionId = 379927;

    $response = $sdk->productOptionValues->postProductsIdOptionsOptionIdValuesJson($request);

    if ($response->productOptionValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProductsIdOptionsOptionIdValuesValueIdJson

Modify an existing Product Option Value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutProductsIdOptionsOptionIdValuesValueIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductOptionValueEdit;
use \OpenAPI\OpenAPI\Models\Shared\ProductOptionValueEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProductsIdOptionsOptionIdValuesValueIdJsonRequest();
    $request->productOptionValueEdit = new ProductOptionValueEdit();
    $request->productOptionValueEdit->value = new ProductOptionValueEditFields();
    $request->productOptionValueEdit->value->name = 'Alan Lang Jr.';
    $request->productOptionValueEdit->value->position = 660040;
    $request->authtoken = 'quidem';
    $request->id = 206594;
    $request->login = 'quo';
    $request->optionId = 847276;
    $request->valueId = 777408;

    $response = $sdk->productOptionValues->putProductsIdOptionsOptionIdValuesValueIdJson($request);

    if ($response->productOptionValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
