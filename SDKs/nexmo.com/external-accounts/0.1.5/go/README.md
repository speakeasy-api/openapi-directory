# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nexmo.com/external-accounts/0.1.5/go
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

    req := operations.GetAllAccountsRequest{
        PageNumber: 1,
        PageSize: 1,
        Provider: "viber_service_msg",
    }

    ctx := context.Background()
    res, err := s.Account.GetAllAccounts(ctx, req, operations.GetAllAccountsSecurity{
        BasicAuth: &shared.SchemeBasicAuth{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllAccounts200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Account

* `GetAllAccounts` - Retrieve all accounts you own

### Application

* `LinkApplication` - Link application to an account
* `UnliWithoutApplicationnkApplication` - Unlink application from an account

### FacebookMessenger

* `CreateMessengerAccount` - Create a Messenger account
* `DeleteMessengerAccount` - Delete a Messenger account
* `GetMessengerAccount` - Retrieve a Messenger account
* `UpdateMessengerAccount` - Update a Messenger account

### ViberServiceMessage

* `GetVSMAccount` - Retrieve a Viber Service Message account

### WhatsApp

* `GetWAAccount` - Retrieve a Whatsapp account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
