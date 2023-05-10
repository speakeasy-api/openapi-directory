# categories

### Available Operations

* [mybusinessbusinessinformationCategoriesBatchGet](#mybusinessbusinessinformationcategoriesbatchget) - Returns a list of business categories for the provided language and GConcept ids.
* [mybusinessbusinessinformationCategoriesList](#mybusinessbusinessinformationcategorieslist) - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

## mybusinessbusinessinformationCategoriesBatchGet

Returns a list of business categories for the provided language and GConcept ids.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationCategoriesBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationCategoriesBatchGetViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinessinformationCategoriesBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'labore';
    $request->key = 'modi';
    $request->languageCode = 'qui';
    $request->names = [
        'cupiditate',
        'quos',
    ];
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->regionCode = 'assumenda';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'alias';
    $request->view = MybusinessbusinessinformationCategoriesBatchGetViewEnum::CATEGORY_VIEW_UNSPECIFIED;

    $response = $sdk->categories->mybusinessbusinessinformationCategoriesBatchGet($request);

    if ($response->batchGetCategoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessbusinessinformationCategoriesList

Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationCategoriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessbusinessinformationCategoriesListViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessbusinessinformationCategoriesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'tempore';
    $request->filter = 'labore';
    $request->key = 'delectus';
    $request->languageCode = 'eum';
    $request->oauthToken = 'non';
    $request->pageSize = 756107;
    $request->pageToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->regionCode = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';
    $request->view = MybusinessbusinessinformationCategoriesListViewEnum::BASIC;

    $response = $sdk->categories->mybusinessbusinessinformationCategoriesList($request);

    if ($response->listCategoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
