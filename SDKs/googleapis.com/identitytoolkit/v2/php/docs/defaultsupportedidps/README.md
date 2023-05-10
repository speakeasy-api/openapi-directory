# defaultSupportedIdps

### Available Operations

* [identitytoolkitDefaultSupportedIdpsList](#identitytoolkitdefaultsupportedidpslist) - List all default supported Idps.

## identitytoolkitDefaultSupportedIdpsList

List all default supported Idps.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitDefaultSupportedIdpsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitDefaultSupportedIdpsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitDefaultSupportedIdpsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\IdentitytoolkitDefaultSupportedIdpsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdentitytoolkitDefaultSupportedIdpsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'cupiditate';
    $request->key = 'quos';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 164940;
    $request->pageToken = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new IdentitytoolkitDefaultSupportedIdpsListSecurity();
    $requestSecurity->option1 = new IdentitytoolkitDefaultSupportedIdpsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->defaultSupportedIdps->identitytoolkitDefaultSupportedIdpsList($request, $requestSecurity);

    if ($response->googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
