# SDK

## Overview

IP2WHOIS is a free tool to allow you to check WHOIS information for a particular domain, such as domain assigned owner contact information, registrar information, registrant information, location and much more.

### Available Operations

* [get](#get) - Lookup WHOIS information

## get

Lookup WHOIS information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->domain = 'quibusdam';
    $request->format = 'unde';
    $request->key = 'nulla';

    $response = $sdk->sdk->get($request);

    if ($response->get200TextHTMLString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
