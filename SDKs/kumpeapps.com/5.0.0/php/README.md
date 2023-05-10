# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\KkidAllowanceGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\KkidAllowanceGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KkidAllowanceGetRequest();
    $request->kidUserId = 548814;
    $request->transactionDays = 592845;

    $requestSecurity = new KkidAllowanceGetSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->kKid->kkidAllowanceGet($request, $requestSecurity);

    if ($response->allowance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [kKid](docs/kkid/README.md)

* [kkidAllowanceGet](docs/kkid/README.md#kkidallowanceget) - returns allowance balance and allowance transactions
* [kkidAllowancePost](docs/kkid/README.md#kkidallowancepost) - adds new allowance transaction to kidUserID
* [kkidApnsPost](docs/kkid/README.md#kkidapnspost) - subscribes/unsubscribes/registers for apns push notifications
* [kkidChorelistDelete](docs/kkid/README.md#kkidchorelistdelete) - deletes chore for given chore id
* [kkidChorelistGet](docs/kkid/README.md#kkidchorelistget) - returns list of chores for given user
* [kkidChorelistPost](docs/kkid/README.md#kkidchorelistpost) - adds chore for given user
* [kkidChorelistPut](docs/kkid/README.md#kkidchorelistput) - updates chore for given chore id
* [kkidMasteruserPost](docs/kkid/README.md#kkidmasteruserpost) - adds new master user account
* [kkidShareGet](docs/kkid/README.md#kkidshareget) - Create Share Link
* [kkidUserGet](docs/kkid/README.md#kkiduserget) - Gets user info
* [kkidUserlistDelete](docs/kkid/README.md#kkiduserlistdelete) - deletes user
* [kkidUserlistGet](docs/kkid/README.md#kkiduserlistget) - returns list of users
* [kkidUserlistPost](docs/kkid/README.md#kkiduserlistpost) - adds new child user
* [kkidUserlistPut](docs/kkid/README.md#kkiduserlistput) - updates user
* [kkidWishlistDelete](docs/kkid/README.md#kkidwishlistdelete) - Delete item from wishlist
* [kkidWishlistGet](docs/kkid/README.md#kkidwishlistget) - Get list of wishlist items
* [kkidWishlistPost](docs/kkid/README.md#kkidwishlistpost) - Add item to kid's wishlist
* [kkidWishlistPut](docs/kkid/README.md#kkidwishlistput) - Update item on kid's wishlist

### [authentication](docs/authentication/README.md)

* [~~appkeyPatch~~](docs/authentication/README.md#appkeypatch) - Compromise app key :warning: **Deprecated**
* [~~appkeyPost~~](docs/authentication/README.md#appkeypost) - Request app key :warning: **Deprecated**
* [~~appkeyPut~~](docs/authentication/README.md#appkeyput) - Deactivate app key :warning: **Deprecated**
* [authAppkeyPatch](docs/authentication/README.md#authappkeypatch) - Compromise app key
* [authAppkeyPost](docs/authentication/README.md#authappkeypost) - Request app key
* [authAppkeyPut](docs/authentication/README.md#authappkeyput) - Deactivate app key
* [authAuthkeyGet](docs/authentication/README.md#authauthkeyget) - Request auth key for user (login user)
* [authAuthkeyPatch](docs/authentication/README.md#authauthkeypatch) - Compromise auth key
* [authAuthkeyPost](docs/authentication/README.md#authauthkeypost) - Request auth key for user (login user)
* [authAuthkeyPut](docs/authentication/README.md#authauthkeyput) - Deactivate auth key (logout)
* [authVerifyotpGet](docs/authentication/README.md#authverifyotpget) - Verifies YubiKey OTP for authenticated user
* [~~authkeyGet~~](docs/authentication/README.md#authkeyget) - Request auth key for user (login user) :warning: **Deprecated**
* [~~authkeyPatch~~](docs/authentication/README.md#authkeypatch) - Compromise auth key :warning: **Deprecated**
* [~~authkeyPost~~](docs/authentication/README.md#authkeypost) - Request auth key for user (login user) :warning: **Deprecated**
* [~~authkeyPut~~](docs/authentication/README.md#authkeyput) - Deactivate auth key (logout) :warning: **Deprecated**
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
