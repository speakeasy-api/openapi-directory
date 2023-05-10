# permissions

### Available Operations

* [androidenterprisePermissionsGet](#androidenterprisepermissionsget) - Retrieves details of an Android app permission for display to an enterprise admin.

## androidenterprisePermissionsGet

Retrieves details of an Android app permission for display to an enterprise admin.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterprisePermissionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterprisePermissionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterprisePermissionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corporis';
    $request->fields = 'veniam';
    $request->key = 'aliquid';
    $request->language = 'inventore';
    $request->oauthToken = 'magnam';
    $request->permissionId = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new AndroidenterprisePermissionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->permissions->androidenterprisePermissionsGet($request, $requestSecurity);

    if ($response->permission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
