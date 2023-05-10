# utilities

### Available Operations

* [heartbeat](#heartbeat)
* [lbheartbeat](#lbheartbeat)
* [version](#version)
* [contribute](#contribute)
* [getOpenapiSpec](#getopenapispec)
* [serverInfo](#serverinfo)

## heartbeat

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->utilities->heartbeat();

    if ($response->schemaNode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lbheartbeat

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->utilities->lbheartbeat();

    if ($response->schemaNode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## version

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->utilities->version();

    if ($response->schemaNode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contribute

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->utilities->contribute();

    if ($response->schemaNode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOpenapiSpec

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->utilities->getOpenapiSpec();

    if ($response->schemaNode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## serverInfo

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->utilities->serverInfo();

    if ($response->schemaNode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
