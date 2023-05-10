# productImages

### Available Operations

* [deleteProductsIdImagesImageIdJson](#deleteproductsidimagesimageidjson) - Delete a Product Image.
* [getProductsIdImagesJson](#getproductsidimagesjson) - Retrieve all Product Images.
* [getProductsIdImagesCountJson](#getproductsidimagescountjson) - Count all Product Images.
* [getProductsIdImagesImageIdJson](#getproductsidimagesimageidjson) - Retrieve a single Product Image.
* [postProductsIdImagesJson](#postproductsidimagesjson) - Create a new Product Image.

## deleteProductsIdImagesImageIdJson

Delete a Product Image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductsIdImagesImageIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductsIdImagesImageIdJsonRequest();
    $request->authtoken = 'minima';
    $request->id = 53427;
    $request->imageId = 952871;
    $request->login = 'libero';

    $response = $sdk->productImages->deleteProductsIdImagesImageIdJson($request);

    if ($response->deleteProductsIdImagesImageIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdImagesJson

Retrieve all Product Images.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdImagesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdImagesJsonRequest();
    $request->authtoken = 'aut';
    $request->id = 11427;
    $request->login = 'deleniti';

    $response = $sdk->productImages->getProductsIdImagesJson($request);

    if ($response->images !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdImagesCountJson

Count all Product Images.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdImagesCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdImagesCountJsonRequest();
    $request->authtoken = 'impedit';
    $request->id = 304582;
    $request->login = 'fugit';

    $response = $sdk->productImages->getProductsIdImagesCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdImagesImageIdJson

Retrieve a single Product Image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdImagesImageIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdImagesImageIdJsonRequest();
    $request->authtoken = 'accusamus';
    $request->id = 79522;
    $request->imageId = 250622;
    $request->login = 'et';

    $response = $sdk->productImages->getProductsIdImagesImageIdJson($request);

    if ($response->image !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProductsIdImagesJson

Create a new Product Image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostProductsIdImagesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageEdit;
use \OpenAPI\OpenAPI\Models\Shared\ImageEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProductsIdImagesJsonRequest();
    $request->imageEdit = new ImageEdit();
    $request->imageEdit->image = new ImageEditFields();
    $request->imageEdit->image->url = 'dolorum';
    $request->authtoken = 'laborum';
    $request->id = 810424;
    $request->login = 'velit';

    $response = $sdk->productImages->postProductsIdImagesJson($request);

    if ($response->image !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
