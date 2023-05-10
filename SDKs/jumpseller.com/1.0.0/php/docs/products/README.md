# products

### Available Operations

* [deleteProductsIdJson](#deleteproductsidjson) - Delete an existing Product.
* [getProductsJson](#getproductsjson) - Retrieve all Products.
* [getProductsAfterIdJson](#getproductsafteridjson) - Retrieves Products after the given id.
* [getProductsCategoryCategoryIdJson](#getproductscategorycategoryidjson) - Retrieve Products filtered by category.
* [getProductsCategoryCategoryIdCountJson](#getproductscategorycategoryidcountjson) - Count Products filtered by category.
* [getProductsCountJson](#getproductscountjson) - Count all Products.
* [getProductsSearchJson](#getproductssearchjson) - Retrieve a Product List from a query.
* [getProductsStatusStatusJson](#getproductsstatusstatusjson) - Retrieve Products filtered by status.
* [getProductsStatusStatusCountJson](#getproductsstatusstatuscountjson) - Count Products filtered by status.
* [getProductsIdJson](#getproductsidjson) - Retrieve a single Product.
* [postProductsJson](#postproductsjson) - Create a new Product.
* [putProductsIdJson](#putproductsidjson) - Modify an existing Product.

## deleteProductsIdJson

Delete an existing Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductsIdJsonRequest();
    $request->authtoken = 'vero';
    $request->id = 399025;
    $request->login = 'quasi';

    $response = $sdk->products->deleteProductsIdJson($request);

    if ($response->deleteProductsIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsJson

Retrieve all Products.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsJsonRequest();
    $request->authtoken = 'saepe';
    $request->limit = 426306;
    $request->locale = 'harum';
    $request->login = 'molestiae';
    $request->page = 699622;

    $response = $sdk->products->getProductsJson($request);

    if ($response->products !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsAfterIdJson

Retrieves Products after the given id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsAfterIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsAfterIdJsonRequest();
    $request->authtoken = 'occaecati';
    $request->id = 327720;
    $request->locale = 'distinctio';
    $request->login = 'eligendi';

    $response = $sdk->products->getProductsAfterIdJson($request);

    if ($response->products !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsCategoryCategoryIdJson

Retrieve Products filtered by category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsCategoryCategoryIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsCategoryCategoryIdJsonRequest();
    $request->authtoken = 'sit';
    $request->categoryId = 636061;
    $request->locale = 'tempore';
    $request->login = 'adipisci';

    $response = $sdk->products->getProductsCategoryCategoryIdJson($request);

    if ($response->products !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsCategoryCategoryIdCountJson

Count Products filtered by category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsCategoryCategoryIdCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsCategoryCategoryIdCountJsonRequest();
    $request->authtoken = 'cumque';
    $request->categoryId = 160538;
    $request->locale = 'consequatur';
    $request->login = 'minus';

    $response = $sdk->products->getProductsCategoryCategoryIdCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsCountJson

Count all Products.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsCountJsonRequest();
    $request->authtoken = 'quaerat';
    $request->login = 'sapiente';

    $response = $sdk->products->getProductsCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsSearchJson

Endpoint example: 

```text
https://api.jumpseller.com/v1/products/search.json?login=XXXXXX&authtoken=XXXXX&query=test&fields=name,description 
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsSearchJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsSearchJsonFieldsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsSearchJsonRequest();
    $request->authtoken = 'consectetur';
    $request->fields = GetProductsSearchJsonFieldsEnum::DESCRIPTION;
    $request->locale = 'blanditiis';
    $request->login = 'provident';
    $request->query = 'a';

    $response = $sdk->products->getProductsSearchJson($request);

    if ($response->products !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsStatusStatusJson

Retrieve Products filtered by status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsStatusStatusJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsStatusStatusJsonStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsStatusStatusJsonRequest();
    $request->authtoken = 'nulla';
    $request->locale = 'quas';
    $request->login = 'esse';
    $request->status = GetProductsStatusStatusJsonStatusEnum::AVAILABLE;

    $response = $sdk->products->getProductsStatusStatusJson($request);

    if ($response->products !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsStatusStatusCountJson

Count Products filtered by status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsStatusStatusCountJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsStatusStatusCountJsonStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsStatusStatusCountJsonRequest();
    $request->authtoken = 'a';
    $request->locale = 'error';
    $request->login = 'sint';
    $request->status = GetProductsStatusStatusCountJsonStatusEnum::DISABLED;

    $response = $sdk->products->getProductsStatusStatusCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdJson

Retrieve a single Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdJsonRequest();
    $request->authtoken = 'possimus';
    $request->id = 157632;
    $request->locale = 'eveniet';
    $request->login = 'asperiores';

    $response = $sdk->products->getProductsIdJson($request);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProductsJson

Create a new Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostProductsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductEdit;
use \OpenAPI\OpenAPI\Models\Shared\ProductEditFields;
use \OpenAPI\OpenAPI\Models\Shared\CategoryFields;
use \OpenAPI\OpenAPI\Models\Shared\ProductEditFieldsPackageFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductEditFieldsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProductsJsonRequest();
    $request->productEdit = new ProductEdit();
    $request->productEdit->product = new ProductEditFields();
    $request->productEdit->product->barcode = 'facere';
    $request->productEdit->product->categories = [
        new CategoryFields(),
    ];
    $request->productEdit->product->description = 'consequuntur';
    $request->productEdit->product->diameter = 944.58;
    $request->productEdit->product->featured = false;
    $request->productEdit->product->googleProductCategory = 'similique';
    $request->productEdit->product->height = 6336.08;
    $request->productEdit->product->length = 3984.34;
    $request->productEdit->product->metaDescription = 'tenetur';
    $request->productEdit->product->name = 'Lila Kassulke';
    $request->productEdit->product->packageFormat = ProductEditFieldsPackageFormatEnum::CYLINDER;
    $request->productEdit->product->pageTitle = 'illum';
    $request->productEdit->product->permalink = 'soluta';
    $request->productEdit->product->price = 333.04;
    $request->productEdit->product->shippingRequired = false;
    $request->productEdit->product->sku = 'aliquam';
    $request->productEdit->product->status = ProductEditFieldsStatusEnum::DISABLED;
    $request->productEdit->product->stock = 119771;
    $request->productEdit->product->stockUnlimited = false;
    $request->productEdit->product->weight = 3553.69;
    $request->productEdit->product->width = 4438.79;
    $request->authtoken = 'ullam';
    $request->locale = 'nisi';
    $request->login = 'aut';

    $response = $sdk->products->postProductsJson($request);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProductsIdJson

Modify an existing Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutProductsIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductEdit;
use \OpenAPI\OpenAPI\Models\Shared\ProductEditFields;
use \OpenAPI\OpenAPI\Models\Shared\CategoryFields;
use \OpenAPI\OpenAPI\Models\Shared\ProductEditFieldsPackageFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductEditFieldsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProductsIdJsonRequest();
    $request->productEdit = new ProductEdit();
    $request->productEdit->product = new ProductEditFields();
    $request->productEdit->product->barcode = 'voluptatum';
    $request->productEdit->product->categories = [
        new CategoryFields(),
    ];
    $request->productEdit->product->description = 'quibusdam';
    $request->productEdit->product->diameter = 4012.59;
    $request->productEdit->product->featured = false;
    $request->productEdit->product->googleProductCategory = 'deleniti';
    $request->productEdit->product->height = 9292.92;
    $request->productEdit->product->length = 6802.7;
    $request->productEdit->product->metaDescription = 'architecto';
    $request->productEdit->product->name = 'Irvin Boyle III';
    $request->productEdit->product->packageFormat = ProductEditFieldsPackageFormatEnum::BOX;
    $request->productEdit->product->pageTitle = 'minima';
    $request->productEdit->product->permalink = 'veritatis';
    $request->productEdit->product->price = 2327.44;
    $request->productEdit->product->shippingRequired = false;
    $request->productEdit->product->sku = 'adipisci';
    $request->productEdit->product->status = ProductEditFieldsStatusEnum::NOT_AVAILABLE;
    $request->productEdit->product->stock = 839513;
    $request->productEdit->product->stockUnlimited = false;
    $request->productEdit->product->weight = 330.74;
    $request->productEdit->product->width = 5223.71;
    $request->authtoken = 'aut';
    $request->id = 513075;
    $request->locale = 'eum';
    $request->login = 'mollitia';

    $response = $sdk->products->putProductsIdJson($request);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
