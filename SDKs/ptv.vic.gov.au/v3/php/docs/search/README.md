# search

### Available Operations

* [searchSearch](#searchsearch) - View stops, routes and myki ticket outlets that match the search term

## searchSearch

View stops, routes and myki ticket outlets that match the search term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchSearchRouteTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchSearchRequest();
    $request->devid = 'qui';
    $request->includeAddresses = false;
    $request->includeOutlets = false;
    $request->latitude = 3978.21;
    $request->longitude = 5865.13;
    $request->matchRouteBySuburb = false;
    $request->matchStopByGtfsStopId = false;
    $request->matchStopBySuburb = false;
    $request->maxDistance = 5528.22;
    $request->routeTypes = [
        SearchSearchRouteTypesEnum::ZERO,
    ];
    $request->searchTerm = 'assumenda';
    $request->signature = 'ipsam';
    $request->token = 'alias';

    $response = $sdk->search->searchSearch($request);

    if ($response->v3SearchResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
