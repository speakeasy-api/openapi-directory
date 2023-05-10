# privileges

### Available Operations

* [directoryPrivilegesList](#directoryprivilegeslist) - Retrieves a paginated list of all privileges for a customer.

## directoryPrivilegesList

Retrieves a paginated list of all privileges for a customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryPrivilegesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryPrivilegesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryPrivilegesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectoryPrivilegesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectoryPrivilegesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->customer = 'voluptate';
    $request->fields = 'sequi';
    $request->key = 'dignissimos';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new DirectoryPrivilegesListSecurity();
    $requestSecurity->option1 = new DirectoryPrivilegesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->privileges->directoryPrivilegesList($request, $requestSecurity);

    if ($response->privileges !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
