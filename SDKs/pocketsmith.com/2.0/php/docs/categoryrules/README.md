# categoryRules

### Available Operations

* [getUsersIdCategoryRules](#getusersidcategoryrules) - List category rules in user
* [postCategoriesIdCategoryRules](#postcategoriesidcategoryrules) - Create category rule in category

## getUsersIdCategoryRules

Lists all category rules belonging to a user by their ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdCategoryRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdCategoryRulesRequest();
    $request->id = 870088;

    $response = $sdk->categoryRules->getUsersIdCategoryRules($request);

    if ($response->categoryRules !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCategoriesIdCategoryRules

Creates a rule to allocate a category to transactions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostCategoriesIdCategoryRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCategoriesIdCategoryRulesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCategoriesIdCategoryRulesRequest();
    $request->requestBody = new PostCategoriesIdCategoryRulesRequestBody();
    $request->requestBody->applyToAll = false;
    $request->requestBody->applyToUncategorised = true;
    $request->requestBody->payeeMatches = 'Countdown';
    $request->id = 978619;

    $response = $sdk->categoryRules->postCategoriesIdCategoryRules($request);

    if ($response->categoryRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
