# individual

## Overview

Individual humans (including patients), or organisms

### Available Operations

* [getIndividual](#getindividual) - Returns list of matches
* [getPedigree](#getpedigree) - Returns list of matches

## getIndividual

Returns list of matches

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualRequest();
    $request->id = '2d025292-70b8-4d57-a2dd-895b8bcf24db';

    $response = $sdk->individual->getIndividual($request);

    if ($response->associations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPedigree

Returns list of matches

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPedigreeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPedigreeRequest();
    $request->id = '95969335-2f74-4533-994d-78de3b6e9389';

    $response = $sdk->individual->getPedigree($request);

    if ($response->associations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
