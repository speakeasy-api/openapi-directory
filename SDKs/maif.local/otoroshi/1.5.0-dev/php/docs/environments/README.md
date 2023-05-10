# environments

## Overview

Everything about Otoroshi Environments

### Available Operations

* [allLines](#alllines) - Get all environments
* [servicesForALine](#servicesforaline) - Get all services for an environment

## allLines

Get all environments provided by the current Otoroshi instance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AllLinesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new AllLinesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->environments->allLines($requestSecurity);

    if ($response->environment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicesForALine

Get all services for an environment provided by the current Otoroshi instance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicesForALineRequest;
use \OpenAPI\OpenAPI\Models\Operations\ServicesForALineSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicesForALineRequest();
    $request->line = 'facilis';

    $requestSecurity = new ServicesForALineSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->environments->servicesForALine($request, $requestSecurity);

    if ($response->services !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
