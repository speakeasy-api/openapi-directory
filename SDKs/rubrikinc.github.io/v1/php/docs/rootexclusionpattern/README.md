# rootExclusionPattern

## Overview

Exclusion patterns.

### Available Operations

* [bulkCreateExclusionPattern](#bulkcreateexclusionpattern) - Bulk create exclusion patterns
* [bulkDeleteExclusionPattern](#bulkdeleteexclusionpattern) - Bulk delete the provided mutable exclusion patterns
* [createExclusionPattern](#createexclusionpattern) - Create an exclusion pattern
* [deleteExclusionPattern](#deleteexclusionpattern) - Delete a mutable exclusion pattern
* [getExclusionPattern](#getexclusionpattern) - Get details of a exclusion pattern
* [queryExclusionPattern](#queryexclusionpattern) - Get a summary of all exclusion patterns
* [updateExclusionPattern](#updateexclusionpattern) - Update a mutable exclusion pattern

## bulkCreateExclusionPattern

Bulk create exclusion patterns.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\ExclusionPatternCreateConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new ExclusionPatternCreateConfig(),
        new ExclusionPatternCreateConfig(),
    ]

    $response = $sdk->rootExclusionPattern->bulkCreateExclusionPattern($request);

    if ($response->exclusionPatternDetailList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bulkDeleteExclusionPattern

Bulk deletes the mutable patterns in a specified set of exclusion patterns.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\BulkDeleteExclusionPatternRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkDeleteExclusionPatternRequest();
    $request->ids = [
        'perferendis',
    ];

    $response = $sdk->rootExclusionPattern->bulkDeleteExclusionPattern($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExclusionPattern

Create a exclusion pattern.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\ExclusionPatternCreateConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExclusionPatternCreateConfig();
    $request->pattern = 'rerum';
    $request->sourceId = 'ea';

    $response = $sdk->rootExclusionPattern->createExclusionPattern($request);

    if ($response->exclusionPatternDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteExclusionPattern

Deletes an exclusion pattern if that pattern is mutable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExclusionPatternRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteExclusionPatternRequest();
    $request->id = '07f3c93c-73b9-4da3-b2ce-da7e23f22574';

    $response = $sdk->rootExclusionPattern->deleteExclusionPattern($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExclusionPattern

Get details of a exclusion pattern.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetExclusionPatternRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExclusionPatternRequest();
    $request->id = '11faf4b7-544e-4472-a802-857a5b40463a';

    $response = $sdk->rootExclusionPattern->getExclusionPattern($request);

    if ($response->exclusionPatternDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryExclusionPattern

Get a summary of all exclusion patterns.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryExclusionPatternRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryExclusionPatternSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryExclusionPatternSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryExclusionPatternRequest();
    $request->isMutable = false;
    $request->limit = 492632;
    $request->offset = 853246;
    $request->pattern = 'nostrum';
    $request->primaryClusterId = 'molestiae';
    $request->sortBy = QueryExclusionPatternSortByEnum::PATTERN;
    $request->sortOrder = QueryExclusionPatternSortOrderEnum::ASC;
    $request->sourceId = 'reiciendis';

    $response = $sdk->rootExclusionPattern->queryExclusionPattern($request);

    if ($response->exclusionPatternDetailListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateExclusionPattern

Update mutable exclusion pattern with specified properties. The exclusion pattern which is mutable can be modified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExclusionPatternRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExclusionPatternUpdateConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateExclusionPatternRequest();
    $request->exclusionPatternUpdateConfig = new ExclusionPatternUpdateConfig();
    $request->exclusionPatternUpdateConfig->isActive = false;
    $request->exclusionPatternUpdateConfig->isMutable = false;
    $request->exclusionPatternUpdateConfig->pattern = 'ab';
    $request->id = '400e764a-d733-44ec-9b78-1b36a08088d1';

    $response = $sdk->rootExclusionPattern->updateExclusionPattern($request);

    if ($response->exclusionPatternDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
