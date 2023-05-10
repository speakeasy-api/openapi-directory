# productVariants

### Available Operations

* [getProductsIdVariantsJson](#getproductsidvariantsjson) - Retrieve all Product Variants.
* [getProductsIdVariantsCountJson](#getproductsidvariantscountjson) - Count all Product Variants.
* [getProductsIdVariantsVariantIdJson](#getproductsidvariantsvariantidjson) - Retrieve a single Product Variant.
* [postProductsIdVariantsJson](#postproductsidvariantsjson) - Create a new Product Variant.
* [putProductsIdVariantsVariantIdJson](#putproductsidvariantsvariantidjson) - Modify an existing Product Variant.

## getProductsIdVariantsJson

Retrieve all Product Variants.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdVariantsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdVariantsJsonRequest();
    $request->authtoken = 'praesentium';
    $request->id = 159867;
    $request->login = 'deleniti';

    $response = $sdk->productVariants->getProductsIdVariantsJson($request);

    if ($response->variants !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdVariantsCountJson

Count all Product Variants.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdVariantsCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdVariantsCountJsonRequest();
    $request->authtoken = 'fugit';
    $request->id = 681393;
    $request->login = 'mollitia';

    $response = $sdk->productVariants->getProductsIdVariantsCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdVariantsVariantIdJson

Retrieve a single Product Variant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdVariantsVariantIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdVariantsVariantIdJsonRequest();
    $request->authtoken = 'incidunt';
    $request->id = 539224;
    $request->login = 'explicabo';
    $request->variantId = 325685;

    $response = $sdk->productVariants->getProductsIdVariantsVariantIdJson($request);

    if ($response->variant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProductsIdVariantsJson

Create a new Product Variant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostProductsIdVariantsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\VariantEdit;
use \OpenAPI\OpenAPI\Models\Shared\VariantEditFields;
use \OpenAPI\OpenAPI\Models\Shared\ProductOptionVariantEdit;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProductsIdVariantsJsonRequest();
    $request->variantEdit = new VariantEdit();
    $request->variantEdit->variant = new VariantEditFields();
    $request->variantEdit->variant->imageId = 392676;
    $request->variantEdit->variant->options = [
        new ProductOptionVariantEdit(),
    ];
    $request->variantEdit->variant->price = 9564.06;
    $request->variantEdit->variant->sku = 'consequuntur';
    $request->variantEdit->variant->stock = 187131;
    $request->variantEdit->variant->stockUnlimited = false;
    $request->authtoken = 'explicabo';
    $request->id = 903984;
    $request->login = 'occaecati';

    $response = $sdk->productVariants->postProductsIdVariantsJson($request);

    if ($response->variant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProductsIdVariantsVariantIdJson

Modify an existing Product Variant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutProductsIdVariantsVariantIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\VariantEdit;
use \OpenAPI\OpenAPI\Models\Shared\VariantEditFields;
use \OpenAPI\OpenAPI\Models\Shared\ProductOptionVariantEdit;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProductsIdVariantsVariantIdJsonRequest();
    $request->variantEdit = new VariantEdit();
    $request->variantEdit->variant = new VariantEditFields();
    $request->variantEdit->variant->imageId = 543806;
    $request->variantEdit->variant->options = [
        new ProductOptionVariantEdit(),
    ];
    $request->variantEdit->variant->price = 4569.11;
    $request->variantEdit->variant->sku = 'eveniet';
    $request->variantEdit->variant->stock = 882042;
    $request->variantEdit->variant->stockUnlimited = false;
    $request->authtoken = 'veritatis';
    $request->id = 458604;
    $request->login = 'quod';
    $request->variantId = 724168;

    $response = $sdk->productVariants->putProductsIdVariantsVariantIdJson($request);

    if ($response->variant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
