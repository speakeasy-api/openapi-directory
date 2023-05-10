# domainsApi

### Available Operations

* [getDomain](#getdomain) - Get information about a specific domain
* [getDomains](#getdomains) - Get a list of the available domains

## getDomain

Get information about a specific domain

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
    $request->trainingKey = 'distinctio';
    $request->domainId = 'd9d8d69a-674e-40f4-a7cc-8796ed151a05';

    $response = $sdk->domainsApi->getDomain($request);

    if ($response->domain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomains

Get a list of the available domains

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
    $request->trainingKey = 'repellendus';

    $response = $sdk->domainsApi->getDomains($request);

    if ($response->domains !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
