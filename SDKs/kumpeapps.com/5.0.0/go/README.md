# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/kumpeapps.com/5.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.KKid.KkidAllowanceGet(ctx, operations.KkidAllowanceGetRequest{
        KidUserID: 548814,
        TransactionDays: sdk.Int64(592845),
    }, operations.KkidAllowanceGetSecurity{
        AuthKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Allowance != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [KKid](docs/kkid/README.md)

* [KkidAllowanceGet](docs/kkid/README.md#kkidallowanceget) - returns allowance balance and allowance transactions
* [KkidAllowancePost](docs/kkid/README.md#kkidallowancepost) - adds new allowance transaction to kidUserID
* [KkidApnsPost](docs/kkid/README.md#kkidapnspost) - subscribes/unsubscribes/registers for apns push notifications
* [KkidChorelistDelete](docs/kkid/README.md#kkidchorelistdelete) - deletes chore for given chore id
* [KkidChorelistGet](docs/kkid/README.md#kkidchorelistget) - returns list of chores for given user
* [KkidChorelistPost](docs/kkid/README.md#kkidchorelistpost) - adds chore for given user
* [KkidChorelistPut](docs/kkid/README.md#kkidchorelistput) - updates chore for given chore id
* [KkidMasteruserPost](docs/kkid/README.md#kkidmasteruserpost) - adds new master user account
* [KkidShareGet](docs/kkid/README.md#kkidshareget) - Create Share Link
* [KkidUserGet](docs/kkid/README.md#kkiduserget) - Gets user info
* [KkidUserlistDelete](docs/kkid/README.md#kkiduserlistdelete) - deletes user
* [KkidUserlistGet](docs/kkid/README.md#kkiduserlistget) - returns list of users
* [KkidUserlistPost](docs/kkid/README.md#kkiduserlistpost) - adds new child user
* [KkidUserlistPut](docs/kkid/README.md#kkiduserlistput) - updates user
* [KkidWishlistDelete](docs/kkid/README.md#kkidwishlistdelete) - Delete item from wishlist
* [KkidWishlistGet](docs/kkid/README.md#kkidwishlistget) - Get list of wishlist items
* [KkidWishlistPost](docs/kkid/README.md#kkidwishlistpost) - Add item to kid's wishlist
* [KkidWishlistPut](docs/kkid/README.md#kkidwishlistput) - Update item on kid's wishlist

### [Authentication](docs/authentication/README.md)

* [~~AppkeyPatch~~](docs/authentication/README.md#appkeypatch) - Compromise app key :warning: **Deprecated**
* [~~AppkeyPost~~](docs/authentication/README.md#appkeypost) - Request app key :warning: **Deprecated**
* [~~AppkeyPut~~](docs/authentication/README.md#appkeyput) - Deactivate app key :warning: **Deprecated**
* [AuthAppkeyPatch](docs/authentication/README.md#authappkeypatch) - Compromise app key
* [AuthAppkeyPost](docs/authentication/README.md#authappkeypost) - Request app key
* [AuthAppkeyPut](docs/authentication/README.md#authappkeyput) - Deactivate app key
* [AuthAuthkeyGet](docs/authentication/README.md#authauthkeyget) - Request auth key for user (login user)
* [AuthAuthkeyPatch](docs/authentication/README.md#authauthkeypatch) - Compromise auth key
* [AuthAuthkeyPost](docs/authentication/README.md#authauthkeypost) - Request auth key for user (login user)
* [AuthAuthkeyPut](docs/authentication/README.md#authauthkeyput) - Deactivate auth key (logout)
* [AuthVerifyotpGet](docs/authentication/README.md#authverifyotpget) - Verifies YubiKey OTP for authenticated user
* [~~AuthkeyGet~~](docs/authentication/README.md#authkeyget) - Request auth key for user (login user) :warning: **Deprecated**
* [~~AuthkeyPatch~~](docs/authentication/README.md#authkeypatch) - Compromise auth key :warning: **Deprecated**
* [~~AuthkeyPost~~](docs/authentication/README.md#authkeypost) - Request auth key for user (login user) :warning: **Deprecated**
* [~~AuthkeyPut~~](docs/authentication/README.md#authkeyput) - Deactivate auth key (logout) :warning: **Deprecated**
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
