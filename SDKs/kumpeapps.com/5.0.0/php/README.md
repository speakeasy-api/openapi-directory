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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### kKid

* `kkidAllowanceGet` - returns allowance balance and allowance transactions
* `kkidAllowancePost` - adds new allowance transaction to kidUserID
* `kkidApnsPost` - subscribes/unsubscribes/registers for apns push notifications
* `kkidChorelistDelete` - deletes chore for given chore id
* `kkidChorelistGet` - returns list of chores for given user
* `kkidChorelistPost` - adds chore for given user
* `kkidChorelistPut` - updates chore for given chore id
* `kkidMasteruserPost` - adds new master user account
* `kkidShareGet` - Create Share Link
* `kkidUserGet` - Gets user info
* `kkidUserlistDelete` - deletes user
* `kkidUserlistGet` - returns list of users
* `kkidUserlistPost` - adds new child user
* `kkidUserlistPut` - updates user
* `kkidWishlistDelete` - Delete item from wishlist
* `kkidWishlistGet` - Get list of wishlist items
* `kkidWishlistPost` - Add item to kid's wishlist
* `kkidWishlistPut` - Update item on kid's wishlist

### authentication

* `appkeyPatch` - Compromise app key
* `appkeyPost` - Request app key
* `appkeyPut` - Deactivate app key
* `authAppkeyPatch` - Compromise app key
* `authAppkeyPost` - Request app key
* `authAppkeyPut` - Deactivate app key
* `authAuthkeyGet` - Request auth key for user (login user)
* `authAuthkeyPatch` - Compromise auth key
* `authAuthkeyPost` - Request auth key for user (login user)
* `authAuthkeyPut` - Deactivate auth key (logout)
* `authVerifyotpGet` - Verifies YubiKey OTP for authenticated user
* `authkeyGet` - Request auth key for user (login user)
* `authkeyPatch` - Compromise auth key
* `authkeyPost` - Request auth key for user (login user)
* `authkeyPut` - Deactivate auth key (logout)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
