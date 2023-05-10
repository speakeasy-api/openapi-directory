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
use \OpenAPI\OpenAPI\Models\Operations\GetDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainRequest();
    $request->trainingKey = 'perferendis';
    $request->domainId = '5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb';

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
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainsRequest();
    $request->trainingKey = 'esse';

    $response = $sdk->domainsApi->getDomains($request);

    if ($response->domains !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
