# domainsApi

### Available Operations

* [getDomain](#getdomain) - Get information about a specific domain.
* [getDomains](#getdomains) - Get a list of the available domains.

## getDomain

Get information about a specific domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainRequest();
    $request->domainId = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->domainsApi->getDomain($request);

    if ($response->domain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomains

Get a list of the available domains.

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
    $response = $sdk->domainsApi->getDomains();

    if ($response->domains !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
