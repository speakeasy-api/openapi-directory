# categories

### Available Operations

* [mybusinessCategoriesBatchGet](#mybusinesscategoriesbatchget) - Returns a list of business categories for the provided language and GConcept ids.
* [mybusinessCategoriesList](#mybusinesscategorieslist) - Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

## mybusinessCategoriesBatchGet

Returns a list of business categories for the provided language and GConcept ids.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessCategoriesBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessCategoriesBatchGetViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessCategoriesBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veniam';
    $request->categoryIds = [
        'officiis',
        'beatae',
    ];
    $request->fields = 'laudantium';
    $request->key = 'exercitationem';
    $request->languageCode = 'praesentium';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->regionCode = 'dolorum';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'error';
    $request->view = MybusinessCategoriesBatchGetViewEnum::FULL;

    $response = $sdk->categories->mybusinessCategoriesBatchGet($request);

    if ($response->batchGetBusinessCategoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessCategoriesList

Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessCategoriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessCategoriesListViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessCategoriesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'nostrum';
    $request->key = 'officia';
    $request->languageCode = 'dolorum';
    $request->oauthToken = 'corrupti';
    $request->pageSize = 879235;
    $request->pageToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->regionCode = 'fugit';
    $request->searchTerm = 'ut';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'voluptatem';
    $request->view = MybusinessCategoriesListViewEnum::BASIC;

    $response = $sdk->categories->mybusinessCategoriesList($request);

    if ($response->listBusinessCategoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
