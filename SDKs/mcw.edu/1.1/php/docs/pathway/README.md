# pathway

### Available Operations

* [getPathwaysWithDiagramsForCategoryUsingGET](#getpathwayswithdiagramsforcategoryusingget) - Return a list of pathways based on category provided
* [searchPathwaysUsingGET](#searchpathwaysusingget) - Return a list of pathways based on search term

## getPathwaysWithDiagramsForCategoryUsingGET

Return a list of pathways based on category provided

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETPathwaysWithDiagramsForCategoryUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPathwaysWithDiagramsForCategoryUsingGETRequest();
    $request->category = 'error';

    $response = $sdk->pathway->getPathwaysWithDiagramsForCategoryUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchPathwaysUsingGET

Return a list of pathways based on search term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchPathwaysUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPathwaysUsingGETRequest();
    $request->searchString = 'temporibus';

    $response = $sdk->pathway->searchPathwaysUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
