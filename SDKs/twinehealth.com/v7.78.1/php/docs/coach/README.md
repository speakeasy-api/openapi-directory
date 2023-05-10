# coach

## Overview

A coach is a person that supports a patient

### Available Operations

* [fetchCoach](#fetchcoach) - Get a coach
* [fetchCoaches](#fetchcoaches) - List coaches

## fetchCoach

Get a coach record by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCoachRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCoachRequest();
    $request->id = '44ed53b8-8f3a-48d8-b5c0-b2f2fb7b194a';

    $response = $sdk->coach->fetchCoach($request);

    if ($response->fetchCoachResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCoaches

Get a list of coaches matching the specified filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCoachesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCoachesRequest();
    $request->filterGroups = 'sed';
    $request->filterOrganization = 'in';

    $response = $sdk->coach->fetchCoaches($request);

    if ($response->fetchCoachesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
