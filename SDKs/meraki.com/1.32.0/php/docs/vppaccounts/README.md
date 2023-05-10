# vppAccounts

### Available Operations

* [getOrganizationSmVppAccount](#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [getOrganizationSmVppAccounts](#getorganizationsmvppaccounts) - List the VPP accounts in the organization

## getOrganizationSmVppAccount

Get a hash containing the unparsed token of the VPP account with the given ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSmVppAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSmVppAccountRequest();
    $request->organizationId = 'tempore';
    $request->vppAccountId = 'repudiandae';

    $response = $sdk->vppAccounts->getOrganizationSmVppAccount($request);

    if ($response->getOrganizationSmVppAccount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationSmVppAccounts

List the VPP accounts in the organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationSmVppAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationSmVppAccountsRequest();
    $request->organizationId = 'molestias';

    $response = $sdk->vppAccounts->getOrganizationSmVppAccounts($request);

    if ($response->getOrganizationSmVppAccounts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
