# templates

## Overview

Everything about Otoroshi entities templates

### Available Operations

* [initiateApiKey](#initiateapikey) - Get a template of an Otoroshi Api Key
* [initiateService](#initiateservice) - Get a template of an Otoroshi service descriptor
* [initiateServiceGroup](#initiateservicegroup) - Get a template of an Otoroshi service group

## initiateApiKey

Get a template of an Otoroshi Api Key. The generated entity is not persisted

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InitiateApiKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new InitiateApiKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->templates->initiateApiKey($requestSecurity);

    if ($response->apiKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## initiateService

Get a template of an Otoroshi service descriptor. The generated entity is not persisted

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InitiateServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new InitiateServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->templates->initiateService($requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## initiateServiceGroup

Get a template of an Otoroshi service group. The generated entity is not persisted

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InitiateServiceGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new InitiateServiceGroupSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->templates->initiateServiceGroup($requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
