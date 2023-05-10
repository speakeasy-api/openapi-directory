# SDK

## Overview

API for OpenAQ LCS

### Available Operations

* [favicoFaviconIcoGet](#favicofaviconicoget) - Favico
* [pongPingGet](#pongpingget) - Pong

## favicoFaviconIcoGet

Favico

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->favicoFaviconIcoGet();

    if ($response->favicoFaviconIcoGet200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pongPingGet

Sanity check.
This will let the user know that the service is operational.
And this path operation will:
* show a lifesign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->pongPingGet();

    if ($response->pongPingGet200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
