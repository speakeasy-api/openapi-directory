# search

### Available Operations

* [searchBusSchedules](#searchbusschedules) - Searches the bus schedules folder on S3 for a given bus number.
* [searchGet](#searchget) - Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.
* [searchMetaCategories](#searchmetacategories) - Gets the available search categories.
* [searchMetaSearchProviders](#searchmetasearchproviders) - Gets the available searchProvider names.
* [searchMetaSorts](#searchmetasorts) - Gets the available sorting options.

## searchBusSchedules

Searches the bus schedules folder on S3 for a given bus number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBusSchedulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBusSchedulesRequest();
    $request->query = 'asperiores';

    $response = $sdk->search->searchBusSchedules($request);

    if ($response->tflApiPresentationEntitiesSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchGet

Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGetRequest();
    $request->query = 'nihil';

    $response = $sdk->search->searchGet($request);

    if ($response->tflApiPresentationEntitiesSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchMetaCategories

Gets the available search categories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->search->searchMetaCategories();

    if ($response->searchMetaCategories200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchMetaSearchProviders

Gets the available searchProvider names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->search->searchMetaSearchProviders();

    if ($response->searchMetaSearchProviders200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchMetaSorts

Gets the available sorting options.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->search->searchMetaSorts();

    if ($response->searchMetaSorts200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
