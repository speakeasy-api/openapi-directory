# search

### Available Operations

* [searchInIndex](#searchinindex) - Search in index
* [searchInIndex1](#searchinindex1) - Search in index

## searchInIndex

Search in index

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchInIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchInIndexRequest();
    $request->attributesToCrop = 'title';
    $request->attributesToHighlight = '*';
    $request->attributesToRetrieve = 'title,author';
    $request->cropLength = '5';
    $request->cropMarker = '[...]';
    $request->facets = 'genre';
    $request->filter = 'genre="fantasy"';
    $request->highlightPostTag = '</mark>';
    $request->highlightPreTag = '<mark>';
    $request->hitsPerPage = '50';
    $request->limit = '1';
    $request->matchingStrategy = 'all';
    $request->offset = '0';
    $request->page = '2';
    $request->q = 'prinec';
    $request->showMatchesPosition = 'true';
    $request->sort = 'price';

    $response = $sdk->search->searchInIndex($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchInIndex1

Search in index

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchInIndex1RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchInIndex1RequestBody();
    $request->attributesToHighlight = [
        'title',
        'title',
        'title',
    ];
    $request->q = 'suscipit';

    $response = $sdk->search->searchInIndex1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
