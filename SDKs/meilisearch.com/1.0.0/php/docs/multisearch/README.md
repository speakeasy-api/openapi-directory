# multiSearch

### Available Operations

* [searchOneOrMoreIndexes](#searchoneormoreindexes) - Search one or more indexes

## searchOneOrMoreIndexes

Search one or more indexes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchOneOrMoreIndexesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchOneOrMoreIndexesRequestBodyQueries;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchOneOrMoreIndexesRequestBody();
    $request->queries = [
        new SearchOneOrMoreIndexesRequestBodyQueries(),
        new SearchOneOrMoreIndexesRequestBodyQueries(),
        new SearchOneOrMoreIndexesRequestBodyQueries(),
    ];

    $response = $sdk->multiSearch->searchOneOrMoreIndexes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
