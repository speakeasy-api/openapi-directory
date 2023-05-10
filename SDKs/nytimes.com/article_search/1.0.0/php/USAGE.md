<!-- Start SDK Example Usage -->
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
    $request->beginDate = 'corrupti';
    $request->endDate = 'provident';
    $request->facetField = 'distinctio';
    $request->facetFilter = false;
    $request->fl = 'quibusdam';
    $request->fq = 'unde';
    $request->hl = false;
    $request->page = 857946;
    $request->q = 'corrupti';
    $request->sort = GetArticlesearchJsonSortEnum::OLDEST;

    $response = $sdk->stories->getArticlesearchJson($request);

    if ($response->getArticlesearchJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->