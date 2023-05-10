# utility

## Overview

Utility operations

Utility Services
<https://netlicensing.io/wiki/utility-services>
### Available Operations

* [licenseTypes](#licensetypes) - List License Types
* [licensingModels](#licensingmodels) - List Licensing Models

## licenseTypes

Return a list of all License Types supported by the service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicenseTypesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new LicenseTypesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->utility->licenseTypes($requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## licensingModels

Return a list of all licensing models supported by the service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LicensingModelsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new LicensingModelsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->utility->licensingModels($requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
