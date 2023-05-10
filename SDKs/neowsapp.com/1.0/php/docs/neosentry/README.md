# neosentry

## Overview

Operations with Sentry NearEarthObjects

### Available Operations

* [retrieveSentryRiskData](#retrievesentryriskdata) - Retrieve Sentry (Impact Risk ) Near Earth Objects
* [retrieveSentryRiskDataById](#retrievesentryriskdatabyid) - Retrieve Sentry (Impact Risk ) Near Earth Objectby ID 

## retrieveSentryRiskData

Retrieves Near Earth Objects listed in the NASA sentry data set

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSentryRiskDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveSentryRiskDataRequest();
    $request->isActive = false;
    $request->page = 857946;
    $request->size = 544883;

    $response = $sdk->neosentry->retrieveSentryRiskData($request);

    if ($response->sentryObjectPagingDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveSentryRiskDataById

Retrieves Sentry Near Earth Object by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveSentryRiskDataByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveSentryRiskDataByIdRequest();
    $request->asteroidId = 'illum';

    $response = $sdk->neosentry->retrieveSentryRiskDataById($request);

    if ($response->sentryImpactRiskObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
