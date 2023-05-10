# categories

## Overview

Categories enable understanding where your money goes by driving
powerful insights in Up. All categories in Up are pre-defined
and are automatically assigned to new purchases in most cases. A
parent-child relationship is used to represent categories,
however parent categories cannot be directly assigned to
transactions.


### Available Operations

* [getCategories](#getcategories) - List categories
* [getCategoriesId](#getcategoriesid) - Retrieve category
* [patchTransactionsTransactionIdRelationshipsCategory](#patchtransactionstransactionidrelationshipscategory) - Categorize transaction

## getCategories

Retrieve a list of all categories and their ancestry. The returned list
is not paginated.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCategoriesRequest();
    $request->filterParent = 'odit';

    $response = $sdk->categories->getCategories($request);

    if ($response->listCategoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCategoriesId

Retrieve a specific category by providing its unique identifier.


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
    $request->id = 'ddf7cc78-ca1b-4a92-8fc8-16742cb73920';

    $response = $sdk->categories->getCategoriesId($request);

    if ($response->getCategoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchTransactionsTransactionIdRelationshipsCategory

Updates the category associated with a transaction. Only transactions
for which `isCategorizable` is set to true support this operation. The
`id` is taken from the list exposed on `/categories` and cannot be one of
the top-level (parent) categories. To de-categorize a transaction, set
the entire `data` key to `null`. An HTTP `204` is returned on success.
The associated category, along with its request URL is also exposed via
the `category` relationship on the transaction resource returned from
`/transactions/{id}`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchTransactionsTransactionIdRelationshipsCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTransactionCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTransactionCategoryRequestData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchTransactionsTransactionIdRelationshipsCategoryRequest();
    $request->updateTransactionCategoryRequest = new UpdateTransactionCategoryRequest();
    $request->updateTransactionCategoryRequest->data = new UpdateTransactionCategoryRequestData();
    $request->updateTransactionCategoryRequest->data->id = '5929396f-ea75-496e-b10f-aaa2352c5955';
    $request->updateTransactionCategoryRequest->data->type = 'excepturi';
    $request->transactionId = 'accusantium';

    $response = $sdk->categories->patchTransactionsTransactionIdRelationshipsCategory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
