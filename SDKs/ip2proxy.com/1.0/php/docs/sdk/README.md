# SDK

## Overview

IP2Proxy allows instant detection of anonymous proxy, VPN, TOR exit nodes, search engine robots (SES), data center ranges (PX2-PX10), residential proxies (PX10) and VPN provider name (PX11) by IP address. It also returns the threat type of the proxy (PX9 or higher). Visit https://www.ip2location.com/web-service/ip2proxy for further information.

### Available Operations

* [get](#get) - Check if an IP address is proxy

## get

Check if an IP address is proxy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->format = GetFormatEnum::XML;
    $request->ip = 'nulla';
    $request->key = 'corrupti';
    $request->package = 'illum';

    $response = $sdk->sdk->get($request);

    if ($response->get200TextHTMLString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
