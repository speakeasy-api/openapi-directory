# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_microvisor_v1/1.43.0/go
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
    res, err := s.CreateAccountConfig(ctx, operations.CreateAccountConfigCreateAccountConfigRequest{
        Key: "corrupti",
        Value: "provident",
    }, operations.CreateAccountConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1AccountConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateAccountConfig](docs/sdk/README.md#createaccountconfig) - Create a config for an Account.
* [CreateAccountSecret](docs/sdk/README.md#createaccountsecret) - Create a secret for an Account.
* [CreateDeviceConfig](docs/sdk/README.md#createdeviceconfig) - Create a config for a Microvisor Device.
* [CreateDeviceSecret](docs/sdk/README.md#createdevicesecret) - Create a secret for a Microvisor Device.
* [DeleteAccountConfig](docs/sdk/README.md#deleteaccountconfig) - Delete a config for an Account.
* [DeleteAccountSecret](docs/sdk/README.md#deleteaccountsecret) - Delete a secret for an Account.
* [DeleteApp](docs/sdk/README.md#deleteapp) - Delete a specific App.
* [DeleteDeviceConfig](docs/sdk/README.md#deletedeviceconfig) - Delete a config for a Microvisor Device.
* [DeleteDeviceSecret](docs/sdk/README.md#deletedevicesecret) - Delete a secret for a Microvisor Device.
* [FetchAccountConfig](docs/sdk/README.md#fetchaccountconfig) - Retrieve a Config for an Account.
* [FetchAccountSecret](docs/sdk/README.md#fetchaccountsecret) - Retrieve a Secret for an Account.
* [FetchApp](docs/sdk/README.md#fetchapp) - Fetch a specific App.
* [FetchAppManifest](docs/sdk/README.md#fetchappmanifest) - Retrieve the Manifest for an App.
* [FetchDevice](docs/sdk/README.md#fetchdevice) - Fetch a specific Device.
* [FetchDeviceConfig](docs/sdk/README.md#fetchdeviceconfig) - Retrieve a Config for a Device.
* [FetchDeviceSecret](docs/sdk/README.md#fetchdevicesecret) - Retrieve a Secret for a Device.
* [ListAccountConfig](docs/sdk/README.md#listaccountconfig) - Retrieve a list of all Configs for an Account.
* [ListAccountSecret](docs/sdk/README.md#listaccountsecret) - Retrieve a list of all Secrets for an Account.
* [ListApp](docs/sdk/README.md#listapp) - Retrieve a list of all Apps for an Account.
* [ListDevice](docs/sdk/README.md#listdevice) - Retrieve a list of all Devices registered with the Account.
* [ListDeviceConfig](docs/sdk/README.md#listdeviceconfig) - Retrieve a list of all Configs for a Device.
* [ListDeviceSecret](docs/sdk/README.md#listdevicesecret) - Retrieve a list of all Secrets for a Device.
* [UpdateAccountConfig](docs/sdk/README.md#updateaccountconfig) - Update a config for an Account.
* [UpdateAccountSecret](docs/sdk/README.md#updateaccountsecret) - Update a secret for an Account.
* [UpdateDevice](docs/sdk/README.md#updatedevice) - Update a specific Device.
* [UpdateDeviceConfig](docs/sdk/README.md#updatedeviceconfig) - Update a config for a Microvisor Device.
* [UpdateDeviceSecret](docs/sdk/README.md#updatedevicesecret) - Update a secret for a Microvisor Device.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
