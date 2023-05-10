# rateLimit

## Overview

Check your current rate limit status

### Available Operations

* [rateLimitGet](#ratelimitget) - Get rate limit status for the authenticated user

## rateLimitGet

**Note:** Accessing this endpoint does not count against your REST API rate limit.

**Note:** The `rate` object is deprecated. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rateLimit->rateLimitGet();

    if ($response->rateLimitOverview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
