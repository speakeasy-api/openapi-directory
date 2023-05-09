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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAllAccounts(ctx, operations.GetAllAccountsRequest{
        PageNumber: sdk.Int64(1),
        PageSize: sdk.Int64(1),
        Provider: operations.GetAllAccountsProviderEnumViberServiceMsg.ToPointer(),
    }, operations.GetAllAccountsSecurity{
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


### [Account](docs/account/README.md)

* [GetAllAccounts](docs/account/README.md#getallaccounts) - Retrieve all accounts you own

### [Application](docs/application/README.md)

* [LinkApplication](docs/application/README.md#linkapplication) - Link application to an account
* [UnliWithoutApplicationnkApplication](docs/application/README.md#unliwithoutapplicationnkapplication) - Unlink application from an account

### [FacebookMessenger](docs/facebookmessenger/README.md)

* [CreateMessengerAccount](docs/facebookmessenger/README.md#createmessengeraccount) - Create a Messenger account
* [DeleteMessengerAccount](docs/facebookmessenger/README.md#deletemessengeraccount) - Delete a Messenger account
* [GetMessengerAccount](docs/facebookmessenger/README.md#getmessengeraccount) - Retrieve a Messenger account
* [UpdateMessengerAccount](docs/facebookmessenger/README.md#updatemessengeraccount) - Update a Messenger account

### [ViberServiceMessage](docs/viberservicemessage/README.md)

* [GetVSMAccount](docs/viberservicemessage/README.md#getvsmaccount) - Retrieve a Viber Service Message account

### [WhatsApp](docs/whatsapp/README.md)

* [GetWAAccount](docs/whatsapp/README.md#getwaaccount) - Retrieve a Whatsapp account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
