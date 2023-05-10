# search

### Available Operations

* [checkDocumentsReindex](#checkdocumentsreindex) - Check reindex status of the client source and translation documents.
* [reindexDocuments](#reindexdocuments) - Reindex for search all of the client source and translation documents.
* [searchEverywhere](#searcheverywhere) - Search everything in your account

## checkDocumentsReindex

Check reindex status of the client source and translation documents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CheckDocumentsReindexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckDocumentsReindexRequest();
    $request->asyncRequestKey = 'consequuntur';

    $response = $sdk->search->checkDocumentsReindex($request);

    if ($response->asyncOperationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reindexDocuments

Reindex for search all of the client source and translation documents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->search->reindexDocuments();

    if ($response->asyncOperationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchEverywhere

Search through everything in your account, from projects to documents, from source strings to translations...

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchEverywhereRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchEverywhereIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchEverywhereRequest();
    $request->include = [
        SearchEverywhereIncludeEnum::PROJECTS,
        SearchEverywhereIncludeEnum::STRINGS,
        SearchEverywhereIncludeEnum::DOCUMENTS,
    ];
    $request->page = 277596;
    $request->perPage = 539224;
    $request->query = 'explicabo';

    $response = $sdk->search->searchEverywhere($request);

    if ($response->searchEverywhereResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
