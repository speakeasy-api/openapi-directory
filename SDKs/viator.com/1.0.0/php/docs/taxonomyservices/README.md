# taxonomyServices

## Overview

Taxonomy services

### Available Operations

* [taxonomyAttractions](#taxonomyattractions) - /taxonomy/attractions
* [taxonomyCategories](#taxonomycategories) - /taxonomy/categories
* [taxonomyDestinations](#taxonomydestinations) - /taxonomy/destinations

## taxonomyAttractions

Get attractions
- Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers
- The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TaxonomyAttractionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaxonomyAttractionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TaxonomyAttractionsRequestBodySortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxonomyAttractionsRequest();
    $request->acceptLanguage = 'en-US';
    $request->requestBody = new TaxonomyAttractionsRequestBody();
    $request->requestBody->destId = 656330;
    $request->requestBody->sortOrder = TaxonomyAttractionsRequestBodySortOrderEnum::SEO_PUBLISHED_DATE_A;
    $request->requestBody->topX = 'odit';

    $response = $sdk->taxonomyServices->taxonomyAttractions($request);

    if ($response->taxonomyAttractions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxonomyCategories

Get all product categories
- Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service
- This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories
- **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TaxonomyCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxonomyCategoriesRequest();
    $request->acceptLanguage = 'en-US';
    $request->destId = 778346;

    $response = $sdk->taxonomyServices->taxonomyCategories($request);

    if ($response->taxonomyCategories200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxonomyDestinations

Get details of all destinations supported by this API
- Retrieves all the country taxonomy/city nodes as a flat list
- Returns a complete list of Viator destinations, including destination names and parent identifiers
- Used to provide navigation through drill down lists or combo boxes


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TaxonomyDestinationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxonomyDestinationsRequest();
    $request->acceptLanguage = 'en-US';

    $response = $sdk->taxonomyServices->taxonomyDestinations($request);

    if ($response->taxonomyDestinations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
