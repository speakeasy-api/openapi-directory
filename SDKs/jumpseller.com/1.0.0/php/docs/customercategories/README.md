# customerCategories

### Available Operations

* [deleteCustomerCategoriesIdJson](#deletecustomercategoriesidjson) - Delete an existing CustomerCategory.
* [deleteCustomerCategoriesIdCustomersJson](#deletecustomercategoriesidcustomersjson) - Delete Customers from an existing CustomerCategory.
* [getCustomerCategoriesJson](#getcustomercategoriesjson) - Retrieve all Customer Categories.
* [getCustomerCategoriesIdJson](#getcustomercategoriesidjson) - Retrieve a single CustomerCategory.
* [getCustomerCategoriesIdCustomersJson](#getcustomercategoriesidcustomersjson) - Retrieves the customers in a CustomerCategory.
* [postCustomerCategoriesJson](#postcustomercategoriesjson) - Create a new CustomerCategory.
* [postCustomerCategoriesIdCustomersJson](#postcustomercategoriesidcustomersjson) - Adds Customers to a CustomerCategory.
* [putCustomerCategoriesIdJson](#putcustomercategoriesidjson) - Update a CustomerCategory.

## deleteCustomerCategoriesIdJson

Delete an existing CustomerCategory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerCategoriesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomerCategoriesIdJsonRequest();
    $request->authtoken = 'explicabo';
    $request->id = 647174;
    $request->login = 'distinctio';

    $response = $sdk->customerCategories->deleteCustomerCategoriesIdJson($request);

    if ($response->deleteCustomerCategoriesIdJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomerCategoriesIdCustomersJson

Delete Customers from an existing CustomerCategory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomerCategoriesIdCustomersJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomersToCustomerCategory;
use \OpenAPI\OpenAPI\Models\Shared\CustomerToCustomerCategory;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomerCategoriesIdCustomersJsonRequest();
    $request->customersToCustomerCategory = new CustomersToCustomerCategory();
    $request->customersToCustomerCategory->customers = [
        new CustomerToCustomerCategory(),
        new CustomerToCustomerCategory(),
        new CustomerToCustomerCategory(),
        new CustomerToCustomerCategory(),
    ];
    $request->authtoken = 'labore';
    $request->id = 264730;
    $request->login = 'qui';

    $response = $sdk->customerCategories->deleteCustomerCategoriesIdCustomersJson($request);

    if ($response->deleteCustomerCategoriesIdCustomersJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomerCategoriesJson

Retrieve all Customer Categories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomerCategoriesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomerCategoriesJsonRequest();
    $request->authtoken = 'aliquid';
    $request->limit = 586513;
    $request->login = 'quos';
    $request->page = 20107;

    $response = $sdk->customerCategories->getCustomerCategoriesJson($request);

    if ($response->customerCategories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomerCategoriesIdJson

Retrieve a single CustomerCategory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomerCategoriesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomerCategoriesIdJsonRequest();
    $request->authtoken = 'magni';
    $request->id = 828940;
    $request->login = 'ipsam';

    $response = $sdk->customerCategories->getCustomerCategoriesIdJson($request);

    if ($response->customerCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomerCategoriesIdCustomersJson

Retrieves the customers in a CustomerCategory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomerCategoriesIdCustomersJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomerCategoriesIdCustomersJsonRequest();
    $request->authtoken = 'alias';
    $request->id = 146441;
    $request->login = 'dolorum';

    $response = $sdk->customerCategories->getCustomerCategoriesIdCustomersJson($request);

    if ($response->customers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCustomerCategoriesJson

Create a new CustomerCategory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCustomerCategoriesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerCategoryEdit;
use \OpenAPI\OpenAPI\Models\Shared\CustomerCategoryEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCustomerCategoriesJsonRequest();
    $request->customerCategoryEdit = new CustomerCategoryEdit();
    $request->customerCategoryEdit->category = new CustomerCategoryEditFields();
    $request->customerCategoryEdit->category->name = 'Eddie Prosacco';
    $request->authtoken = 'delectus';
    $request->login = 'eum';

    $response = $sdk->customerCategories->postCustomerCategoriesJson($request);

    if ($response->customerCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCustomerCategoriesIdCustomersJson

Adds Customers to a CustomerCategory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCustomerCategoriesIdCustomersJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomersToCustomerCategory;
use \OpenAPI\OpenAPI\Models\Shared\CustomerToCustomerCategory;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCustomerCategoriesIdCustomersJsonRequest();
    $request->customersToCustomerCategory = new CustomersToCustomerCategory();
    $request->customersToCustomerCategory->customers = [
        new CustomerToCustomerCategory(),
    ];
    $request->authtoken = 'eligendi';
    $request->id = 576157;
    $request->login = 'aliquid';

    $response = $sdk->customerCategories->postCustomerCategoriesIdCustomersJson($request);

    if ($response->customers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCustomerCategoriesIdJson

Update a CustomerCategory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCustomerCategoriesIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerCategoryEdit;
use \OpenAPI\OpenAPI\Models\Shared\CustomerCategoryEditFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCustomerCategoriesIdJsonRequest();
    $request->customerCategoryEdit = new CustomerCategoryEdit();
    $request->customerCategoryEdit->category = new CustomerCategoryEditFields();
    $request->customerCategoryEdit->category->name = 'Terence Marquardt';
    $request->authtoken = 'debitis';
    $request->id = 952749;
    $request->login = 'dolorum';

    $response = $sdk->customerCategories->putCustomerCategoriesIdJson($request);

    if ($response->customerCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
