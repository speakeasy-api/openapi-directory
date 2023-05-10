# stats

## Overview

Everything about Otoroshi stats

### Available Operations

* [globalLiveStats](#globallivestats) - Get global otoroshi stats
* [serviceLiveStats](#servicelivestats) - Get live feed of otoroshi stats

## globalLiveStats

Get global otoroshi stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GlobalLiveStatsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GlobalLiveStatsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->stats->globalLiveStats($requestSecurity);

    if ($response->stats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serviceLiveStats

Get live feed of global otoroshi stats (global) or for a service {id}

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServiceLiveStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ServiceLiveStatsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceLiveStatsRequest();
    $request->id = '1840394c-2607-41f9-bf5f-0642dac7af51';

    $requestSecurity = new ServiceLiveStatsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->stats->serviceLiveStats($request, $requestSecurity);

    if ($response->stats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
