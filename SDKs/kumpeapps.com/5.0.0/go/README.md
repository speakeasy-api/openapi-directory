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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.KkidAllowanceGetRequest{
        KidUserID: 548814,
        TransactionDays: 592845,
    }

    ctx := context.Background()
    res, err := s.KKid.KkidAllowanceGet(ctx, req, operations.KkidAllowanceGetSecurity{
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


### KKid

* `KkidAllowanceGet` - returns allowance balance and allowance transactions
* `KkidAllowancePost` - adds new allowance transaction to kidUserID
* `KkidApnsPost` - subscribes/unsubscribes/registers for apns push notifications
* `KkidChorelistDelete` - deletes chore for given chore id
* `KkidChorelistGet` - returns list of chores for given user
* `KkidChorelistPost` - adds chore for given user
* `KkidChorelistPut` - updates chore for given chore id
* `KkidMasteruserPost` - adds new master user account
* `KkidShareGet` - Create Share Link
* `KkidUserGet` - Gets user info
* `KkidUserlistDelete` - deletes user
* `KkidUserlistGet` - returns list of users
* `KkidUserlistPost` - adds new child user
* `KkidUserlistPut` - updates user
* `KkidWishlistDelete` - Delete item from wishlist
* `KkidWishlistGet` - Get list of wishlist items
* `KkidWishlistPost` - Add item to kid's wishlist
* `KkidWishlistPut` - Update item on kid's wishlist

### Authentication

* `AppkeyPatch` - Compromise app key
* `AppkeyPost` - Request app key
* `AppkeyPut` - Deactivate app key
* `AuthAppkeyPatch` - Compromise app key
* `AuthAppkeyPost` - Request app key
* `AuthAppkeyPut` - Deactivate app key
* `AuthAuthkeyGet` - Request auth key for user (login user)
* `AuthAuthkeyPatch` - Compromise auth key
* `AuthAuthkeyPost` - Request auth key for user (login user)
* `AuthAuthkeyPut` - Deactivate auth key (logout)
* `AuthVerifyotpGet` - Verifies YubiKey OTP for authenticated user
* `AuthkeyGet` - Request auth key for user (login user)
* `AuthkeyPatch` - Compromise auth key
* `AuthkeyPost` - Request auth key for user (login user)
* `AuthkeyPut` - Deactivate auth key (logout)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
