# entitlements

### Available Operations

* [androidenterpriseEntitlementsDelete](#androidenterpriseentitlementsdelete) - Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [androidenterpriseEntitlementsGet](#androidenterpriseentitlementsget) - Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [androidenterpriseEntitlementsList](#androidenterpriseentitlementslist) - Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [androidenterpriseEntitlementsUpdate](#androidenterpriseentitlementsupdate) - Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

## androidenterpriseEntitlementsDelete

Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEntitlementsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEntitlementsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEntitlementsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->enterpriseId = 'fugiat';
    $request->entitlementId = 'amet';
    $request->fields = 'aut';
    $request->key = 'cumque';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'nobis';
    $request->userId = 'dolores';

    $requestSecurity = new AndroidenterpriseEntitlementsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->entitlements->androidenterpriseEntitlementsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEntitlementsGet

Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEntitlementsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEntitlementsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEntitlementsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->enterpriseId = 'quis';
    $request->entitlementId = 'nesciunt';
    $request->fields = 'eos';
    $request->key = 'perferendis';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'dolor';
    $request->userId = 'vero';

    $requestSecurity = new AndroidenterpriseEntitlementsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->entitlements->androidenterpriseEntitlementsGet($request, $requestSecurity);

    if ($response->entitlement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEntitlementsList

Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEntitlementsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEntitlementsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEntitlementsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->enterpriseId = 'facilis';
    $request->fields = 'perspiciatis';
    $request->key = 'voluptatem';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'error';
    $request->userId = 'eaque';

    $requestSecurity = new AndroidenterpriseEntitlementsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->entitlements->androidenterpriseEntitlementsList($request, $requestSecurity);

    if ($response->entitlementsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseEntitlementsUpdate

Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEntitlementsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Entitlement;
use \OpenAPI\OpenAPI\Models\Shared\EntitlementReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEntitlementsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseEntitlementsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->entitlement = new Entitlement();
    $request->entitlement->productId = 'rerum';
    $request->entitlement->reason = EntitlementReasonEnum::FREE;
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->enterpriseId = 'iste';
    $request->entitlementId = 'dolorum';
    $request->fields = 'deleniti';
    $request->install = false;
    $request->key = 'pariatur';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'delectus';
    $request->userId = 'quaerat';

    $requestSecurity = new AndroidenterpriseEntitlementsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->entitlements->androidenterpriseEntitlementsUpdate($request, $requestSecurity);

    if ($response->entitlement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
