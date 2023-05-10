# categories

### Available Operations

* [deleteCategoriesIdJson](#deletecategoriesidjson) - Delete an existing Category.
* [getCategoriesJson](#getcategoriesjson) - Retrieve all Categories.
* [getCategoriesCountJson](#getcategoriescountjson) - Count all Categories.
* [getCategoriesIdJson](#getcategoriesidjson) - Retrieve a single Category.
* [postCategoriesJson](#postcategoriesjson) - Create a new Category.
* [putCategoriesIdJson](#putcategoriesidjson) - Modify an existing Category.

## deleteCategoriesIdJson

Delete an existing Category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCategoriesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCategoriesIdJsonRequest();
    $request->authtoken = 'delectus';
    $request->id = 272656;
    $request->login = 'suscipit';

    $response = $sdk->categories->deleteCategoriesIdJson($request);

    if ($response->deleteCategoriesIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCategoriesJson

Retrieve all Categories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoriesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoriesJsonRequest();
    $request->authtoken = 'molestiae';
    $request->login = 'minus';

    $response = $sdk->categories->getCategoriesJson($request);

    if ($response->category !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCategoriesCountJson

Count all Categories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoriesCountJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoriesCountJsonRequest();
    $request->authtoken = 'placeat';
    $request->login = 'voluptatum';

    $response = $sdk->categories->getCategoriesCountJson($request);

    if ($response->count !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCategoriesIdJson

Retrieve a single Category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoriesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoriesIdJsonRequest();
    $request->authtoken = 'iusto';
    $request->id = 568045;
    $request->login = 'nisi';

    $response = $sdk->categories->getCategoriesIdJson($request);

    if ($response->category !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCategoriesJson

Category's permalink is automatically generated from the given category's name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCategoriesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryEdit;
use \OpenAPI\OpenAPI\Models\Shared\CategoryEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCategoriesJsonRequest();
    $request->categoryEdit = new CategoryEdit();
    $request->categoryEdit->category = new CategoryEditFields();
    $request->categoryEdit->category->name = 'Jake Bernier MD';
    $request->categoryEdit->category->parentId = 20218;
    $request->authtoken = 'ipsam';
    $request->login = 'repellendus';

    $response = $sdk->categories->postCategoriesJson($request);

    if ($response->category !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCategoriesIdJson

Modify an existing Category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCategoriesIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CategoryEdit;
use \OpenAPI\OpenAPI\Models\Shared\CategoryEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCategoriesIdJsonRequest();
    $request->categoryEdit = new CategoryEdit();
    $request->categoryEdit->category = new CategoryEditFields();
    $request->categoryEdit->category->name = 'Cedric Connelly';
    $request->categoryEdit->category->parentId = 978619;
    $request->authtoken = 'molestiae';
    $request->id = 799159;
    $request->login = 'quod';

    $response = $sdk->categories->putCategoriesIdJson($request);

    if ($response->category !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
