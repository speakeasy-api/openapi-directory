# stories

### Available Operations

* [getArticlesearchJson](#getarticlesearchjson) - Article Search

## getArticlesearchJson

Article Search requests use the following URI structure:


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetArticlesearchJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetArticlesearchJsonSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArticlesearchJsonRequest();
    $request->beginDate = 'vel';
    $request->endDate = 'error';
    $request->facetField = 'deserunt';
    $request->facetFilter = false;
    $request->fl = 'suscipit';
    $request->fq = 'iure';
    $request->hl = false;
    $request->page = 297534;
    $request->q = 'debitis';
    $request->sort = GetArticlesearchJsonSortEnum::NEWEST;

    $response = $sdk->stories->getArticlesearchJson($request);

    if ($response->getArticlesearchJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
