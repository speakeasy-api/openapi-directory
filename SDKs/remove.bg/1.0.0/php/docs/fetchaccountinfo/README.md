# fetchAccountInfo

### Available Operations

* [getAccount](#getaccount) - Fetch credit balance and free API calls.

## getAccount

Get the current credit balance and number of free API calls.

Notes:

* Balance changes may be delayed by several seconds. To locally keep track of your credit balance, you should therefore only call this endpoint initially (or e.g. when the user manually triggers a refresh), then use the `X-Credits-Charged` response header returned with each image processing response to adjust the local balance.

* The "*sizes*" field is always "all", is deprecated and will soon be removed.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->fetchAccountInfo->getAccount();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
