# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/kumpeapps.com/5.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.KkidAllowanceGetRequest(
    kid_user_id=548814,
    transaction_days=592845,
)
    
res = s.k_kid.kkid_allowance_get(req, operations.KkidAllowanceGetSecurity(
    auth_key="YOUR_API_KEY_HERE",
))

if res.allowance is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### k_kid

* `kkid_allowance_get` - returns allowance balance and allowance transactions
* `kkid_allowance_post` - adds new allowance transaction to kidUserID
* `kkid_apns_post` - subscribes/unsubscribes/registers for apns push notifications
* `kkid_chorelist_delete` - deletes chore for given chore id
* `kkid_chorelist_get` - returns list of chores for given user
* `kkid_chorelist_post` - adds chore for given user
* `kkid_chorelist_put` - updates chore for given chore id
* `kkid_masteruser_post` - adds new master user account
* `kkid_share_get` - Create Share Link
* `kkid_user_get` - Gets user info
* `kkid_userlist_delete` - deletes user
* `kkid_userlist_get` - returns list of users
* `kkid_userlist_post` - adds new child user
* `kkid_userlist_put` - updates user
* `kkid_wishlist_delete` - Delete item from wishlist
* `kkid_wishlist_get` - Get list of wishlist items
* `kkid_wishlist_post` - Add item to kid's wishlist
* `kkid_wishlist_put` - Update item on kid's wishlist

### authentication

* `appkey_patch` - Compromise app key
* `appkey_post` - Request app key
* `appkey_put` - Deactivate app key
* `auth_appkey_patch` - Compromise app key
* `auth_appkey_post` - Request app key
* `auth_appkey_put` - Deactivate app key
* `auth_authkey_get` - Request auth key for user (login user)
* `auth_authkey_patch` - Compromise auth key
* `auth_authkey_post` - Request auth key for user (login user)
* `auth_authkey_put` - Deactivate auth key (logout)
* `auth_verifyotp_get` - Verifies YubiKey OTP for authenticated user
* `authkey_get` - Request auth key for user (login user)
* `authkey_patch` - Compromise auth key
* `authkey_post` - Request auth key for user (login user)
* `authkey_put` - Deactivate auth key (logout)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
