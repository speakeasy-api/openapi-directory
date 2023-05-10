# categories

### Available Operations

* [deleteCategoriesId](#deletecategoriesid) - Delete category
* [getCategoriesId](#getcategoriesid) - Get category
* [getUsersIdCategories](#getusersidcategories) - List categories in user
* [postUsersIdCategories](#postusersidcategories) - Create category in user
* [putCategoriesId](#putcategoriesid) - Update category

## deleteCategoriesId

Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCategoriesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCategoriesIdRequest();
    $request->id = 832620;

    $response = $sdk->categories->deleteCategoriesId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCategoriesId

Gets a particular category by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoriesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoriesIdRequest();
    $request->id = 957156;

    $response = $sdk->categories->getCategoriesId($request);

    if ($response->category !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdCategories

Lists all categories belonging to a user by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdCategoriesRequest();
    $request->id = 778157;

    $response = $sdk->categories->getUsersIdCategories($request);

    if ($response->categories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUsersIdCategories

Creates a category belonging to the user by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdCategoriesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostUsersIdCategoriesRequestBodyRefundBehaviourEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostUsersIdCategoriesRequest();
    $request->requestBody = new PostUsersIdCategoriesRequestBody();
    $request->requestBody->colour = '#e0e7ff';
    $request->requestBody->isBill = true;
    $request->requestBody->isTransfer = false;
    $request->requestBody->parentId = 42;
    $request->requestBody->refundBehaviour = PostUsersIdCategoriesRequestBodyRefundBehaviourEnum::CREDITS_ARE_REFUNDS;
    $request->requestBody->rollUp = false;
    $request->requestBody->title = 'Food';
    $request->id = 140350;

    $response = $sdk->categories->postUsersIdCategories($request);

    if ($response->category !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCategoriesId

Updates a category by its ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutCategoriesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutCategoriesIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutCategoriesIdRequestBodyRefundBehaviourEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCategoriesIdRequest();
    $request->requestBody = new PutCategoriesIdRequestBody();
    $request->requestBody->colour = '#e0e7ff';
    $request->requestBody->isBill = true;
    $request->requestBody->isTransfer = false;
    $request->requestBody->parentId = 42;
    $request->requestBody->refundBehaviour = PutCategoriesIdRequestBodyRefundBehaviourEnum::CREDITS_ARE_REFUNDS;
    $request->requestBody->rollUp = false;
    $request->requestBody->title = 'Food';
    $request->id = 870013;

    $response = $sdk->categories->putCategoriesId($request);

    if ($response->category !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
