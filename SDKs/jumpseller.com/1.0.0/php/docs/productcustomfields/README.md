# productCustomFields

### Available Operations

* [deleteProductsProductIdFieldsFieldIdJson](#deleteproductsproductidfieldsfieldidjson) - Delete value of Product Custom Field
* [getProductsIdFieldsJson](#getproductsidfieldsjson) - Retrieve all Product Custom Fields
* [getProductsIdFieldsCountJson](#getproductsidfieldscountjson) - Count all Product Custom Fields.
* [postProductsIdFieldsJson](#postproductsidfieldsjson) - Add an existing Custom Field to a Product.
* [putProductsProductIdFieldsFieldIdJson](#putproductsproductidfieldsfieldidjson) - Update value of Product Custom Field

## deleteProductsProductIdFieldsFieldIdJson

Delete value of Product Custom Field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductsProductIdFieldsFieldIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductsProductIdFieldsFieldIdJsonRequest();
    $request->authtoken = 'eligendi';
    $request->fieldId = 497391;
    $request->login = 'alias';
    $request->productId = 639473;

    $response = $sdk->productCustomFields->deleteProductsProductIdFieldsFieldIdJson($request);

    if ($response->messageObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdFieldsJson

Retrieve all Product Custom Fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdFieldsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdFieldsJsonRequest();
    $request->authtoken = 'tempora';
    $request->id = 368584;
    $request->login = 'ea';

    $response = $sdk->productCustomFields->getProductsIdFieldsJson($request);

    if ($response->productCustomFields !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProductsIdFieldsCountJson

Count all Product Custom Fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsIdFieldsCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsIdFieldsCountJsonRequest();
    $request->authtoken = 'aspernatur';
    $request->id = 428224;
    $request->login = 'possimus';

    $response = $sdk->productCustomFields->getProductsIdFieldsCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postProductsIdFieldsJson

Add an existing Custom Field to a Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostProductsIdFieldsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddProductCustomField;
use \OpenAPI\OpenAPI\Models\Shared\AddProductCustomFieldFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostProductsIdFieldsJsonRequest();
    $request->addProductCustomField = new AddProductCustomField();
    $request->addProductCustomField->field = new AddProductCustomFieldFields();
    $request->addProductCustomField->field->id = 297842;
    $request->addProductCustomField->field->value = 'ratione';
    $request->authtoken = 'ex';
    $request->id = 511319;
    $request->login = 'dicta';

    $response = $sdk->productCustomFields->postProductsIdFieldsJson($request);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProductsProductIdFieldsFieldIdJson

Update value of Product Custom Field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutProductsProductIdFieldsFieldIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProductsProductIdFieldsFieldIdJsonRequest();
    $request->authtoken = 'dolor';
    $request->fieldId = 980700;
    $request->login = 'quasi';
    $request->productId = 406120;

    $response = $sdk->productCustomFields->putProductsProductIdFieldsFieldIdJson($request);

    if ($response->productCustomField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
