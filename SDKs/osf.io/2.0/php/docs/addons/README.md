# addons

## Overview

Addons represent a user connection to an external service, some addons allow for additional storage, some modify user authentication or add a redirect link to a project.

### Available Operations

* [addonsList](#addonslist) - List all addons

## addonsList


A paginated list of addons configurable with the OSF, for read purposes only.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 addons. Each resource in the array is a separate addon object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->addons->addonsList();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
