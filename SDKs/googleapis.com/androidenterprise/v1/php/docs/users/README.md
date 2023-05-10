# users

### Available Operations

* [androidenterpriseUsersDelete](#androidenterpriseusersdelete) - Deleted an EMM-managed user.
* [androidenterpriseUsersGenerateAuthenticationToken](#androidenterpriseusersgenerateauthenticationtoken) - Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.
* [androidenterpriseUsersGet](#androidenterpriseusersget) - Retrieves a user's details.
* [androidenterpriseUsersGetAvailableProductSet](#androidenterpriseusersgetavailableproductset) - Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [androidenterpriseUsersInsert](#androidenterpriseusersinsert) - Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.
* [androidenterpriseUsersList](#androidenterpriseuserslist) - Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.
* [androidenterpriseUsersRevokeDeviceAccess](#androidenterpriseusersrevokedeviceaccess) - Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.
* [androidenterpriseUsersSetAvailableProductSet](#androidenterpriseuserssetavailableproductset) - Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [androidenterpriseUsersUpdate](#androidenterpriseusersupdate) - Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.

## androidenterpriseUsersDelete

Deleted an EMM-managed user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseUsersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corrupti';
    $request->enterpriseId = 'accusamus';
    $request->fields = 'tempora';
    $request->key = 'atque';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'voluptatem';
    $request->userId = 'culpa';

    $requestSecurity = new AndroidenterpriseUsersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidenterpriseUsersDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseUsersGenerateAuthenticationToken

Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersGenerateAuthenticationTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersGenerateAuthenticationTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseUsersGenerateAuthenticationTokenRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->enterpriseId = 'ipsam';
    $request->fields = 'sit';
    $request->key = 'voluptatum';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'et';
    $request->userId = 'blanditiis';

    $requestSecurity = new AndroidenterpriseUsersGenerateAuthenticationTokenSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidenterpriseUsersGenerateAuthenticationToken($request, $requestSecurity);

    if ($response->authenticationToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseUsersGet

Retrieves a user's details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseUsersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->enterpriseId = 'nostrum';
    $request->fields = 'saepe';
    $request->key = 'error';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'dolorem';
    $request->userId = 'harum';

    $requestSecurity = new AndroidenterpriseUsersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidenterpriseUsersGet($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseUsersGetAvailableProductSet

Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersGetAvailableProductSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersGetAvailableProductSetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseUsersGetAvailableProductSetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'labore';
    $request->enterpriseId = 'quidem';
    $request->fields = 'atque';
    $request->key = 'laborum';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'alias';
    $request->userId = 'amet';

    $requestSecurity = new AndroidenterpriseUsersGetAvailableProductSetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidenterpriseUsersGetAvailableProductSet($request, $requestSecurity);

    if ($response->productSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseUsersInsert

Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseUsersInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->user = new User();
    $request->user->accountIdentifier = 'voluptate';
    $request->user->accountType = UserAccountTypeEnum::USER_ACCOUNT;
    $request->user->displayName = 'reiciendis';
    $request->user->id = '9dfe0ab7-da8a-450c-a187-f86bc173d689';
    $request->user->managementType = UserManagementTypeEnum::EMM_MANAGED;
    $request->user->primaryEmail = 'officiis';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->enterpriseId = 'aspernatur';
    $request->fields = 'ex';
    $request->key = 'maiores';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'blanditiis';

    $requestSecurity = new AndroidenterpriseUsersInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidenterpriseUsersInsert($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseUsersList

Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseUsersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'atque';
    $request->email = 'Theresia.Parisian96@gmail.com';
    $request->enterpriseId = 'doloremque';
    $request->fields = 'repudiandae';
    $request->key = 'dicta';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new AndroidenterpriseUsersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidenterpriseUsersList($request, $requestSecurity);

    if ($response->usersListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseUsersRevokeDeviceAccess

Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersRevokeDeviceAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersRevokeDeviceAccessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseUsersRevokeDeviceAccessRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->enterpriseId = 'magnam';
    $request->fields = 'saepe';
    $request->key = 'consequuntur';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'in';
    $request->userId = 'adipisci';

    $requestSecurity = new AndroidenterpriseUsersRevokeDeviceAccessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidenterpriseUsersRevokeDeviceAccess($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseUsersSetAvailableProductSet

Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersSetAvailableProductSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductSet;
use \OpenAPI\OpenAPI\Models\Shared\ProductSetProductSetBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductVisibility;
use \OpenAPI\OpenAPI\Models\Shared\ProductVisibilityTracksEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersSetAvailableProductSetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseUsersSetAvailableProductSetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->productSet = new ProductSet();
    $request->productSet->productId = [
        'consequuntur',
        'fugit',
        'id',
    ];
    $request->productSet->productSetBehavior = ProductSetProductSetBehaviorEnum::WHITELIST;
    $request->productSet->productVisibility = [
        new ProductVisibility(),
        new ProductVisibility(),
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->enterpriseId = 'quidem';
    $request->fields = 'eveniet';
    $request->key = 'non';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'ipsa';
    $request->userId = 'totam';

    $requestSecurity = new AndroidenterpriseUsersSetAvailableProductSetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidenterpriseUsersSetAvailableProductSet($request, $requestSecurity);

    if ($response->productSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseUsersUpdate

Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\UserAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseUsersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseUsersUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->user = new User();
    $request->user->accountIdentifier = 'molestiae';
    $request->user->accountType = UserAccountTypeEnum::USER_ACCOUNT;
    $request->user->displayName = 'qui';
    $request->user->id = 'b6e3ab88-45f0-4597-a60f-f2a54a31e947';
    $request->user->managementType = UserManagementTypeEnum::GOOGLE_MANAGED;
    $request->user->primaryEmail = 'ut';
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->enterpriseId = 'laudantium';
    $request->fields = 'eum';
    $request->key = 'nemo';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'quis';
    $request->userId = 'eum';

    $requestSecurity = new AndroidenterpriseUsersUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->users->androidenterpriseUsersUpdate($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
