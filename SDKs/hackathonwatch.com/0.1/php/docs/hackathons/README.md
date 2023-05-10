# hackathons

## Overview

Operations about hackathons

### Available Operations

* [getHackathonsIdFormat](#gethackathonsidformat) - Return the detail of a given hackathon
* [getHackathonsComingFormat](#gethackathonscomingformat) - Return a list of coming hackathons

## getHackathonsIdFormat

Return the detail of a given hackathon

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETHackathonsIdFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETHackathonsIdFormatRequest();
    $request->id = 592845;

    $response = $sdk->hackathons->getHackathonsIdFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHackathonsComingFormat

Return a list of coming hackathons

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETHackathonsComingFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETHackathonsComingFormatRequest();
    $request->page = 715190;

    $response = $sdk->hackathons->getHackathonsComingFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
