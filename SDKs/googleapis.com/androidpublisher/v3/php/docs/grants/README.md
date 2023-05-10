# grants

### Available Operations

* [androidpublisherGrantsCreate](#androidpublishergrantscreate) - Grant access for a user to the given package.

## androidpublisherGrantsCreate

Grant access for a user to the given package.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherGrantsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Grant;
use \OpenAPI\OpenAPI\Models\Shared\GrantAppLevelPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidpublisherGrantsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidpublisherGrantsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->grant = new Grant();
    $request->grant->appLevelPermissions = [
        GrantAppLevelPermissionsEnum::CAN_MANAGE_DRAFT_APPS,
        GrantAppLevelPermissionsEnum::CAN_MANAGE_PUBLIC_LISTING,
        GrantAppLevelPermissionsEnum::CAN_MANAGE_PERMISSIONS,
        GrantAppLevelPermissionsEnum::CAN_VIEW_FINANCIAL_DATA,
    ];
    $request->grant->name = 'Mrs. Virginia McGlynn';
    $request->grant->packageName = 'ipsam';
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'esse';
    $request->key = 'recusandae';
    $request->oauthToken = 'aperiam';
    $request->parent = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'inventore';

    $requestSecurity = new AndroidpublisherGrantsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->grants->androidpublisherGrantsCreate($request, $requestSecurity);

    if ($response->grant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
