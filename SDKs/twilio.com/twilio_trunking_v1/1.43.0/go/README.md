# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_trunking_v1/1.43.0/go
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
    res, err := s.CreateCredentialList(ctx, operations.CreateCredentialListRequest{
        RequestBody: &operations.CreateCredentialListCreateCredentialListRequest{
            CredentialListSid: "corrupti",
        },
        TrunkSid: "provident",
    }, operations.CreateCredentialListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkCredentialList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateCredentialList](docs/sdk/README.md#createcredentiallist)
* [CreateIPAccessControlList](docs/sdk/README.md#createipaccesscontrollist) - Associate an IP Access Control List with a Trunk
* [CreateOriginationURL](docs/sdk/README.md#createoriginationurl)
* [CreatePhoneNumber](docs/sdk/README.md#createphonenumber)
* [CreateTrunk](docs/sdk/README.md#createtrunk)
* [DeleteCredentialList](docs/sdk/README.md#deletecredentiallist)
* [DeleteIPAccessControlList](docs/sdk/README.md#deleteipaccesscontrollist) - Remove an associated IP Access Control List from a Trunk
* [DeleteOriginationURL](docs/sdk/README.md#deleteoriginationurl)
* [DeletePhoneNumber](docs/sdk/README.md#deletephonenumber)
* [DeleteTrunk](docs/sdk/README.md#deletetrunk)
* [FetchCredentialList](docs/sdk/README.md#fetchcredentiallist)
* [FetchIPAccessControlList](docs/sdk/README.md#fetchipaccesscontrollist)
* [FetchOriginationURL](docs/sdk/README.md#fetchoriginationurl)
* [FetchPhoneNumber](docs/sdk/README.md#fetchphonenumber)
* [FetchRecording](docs/sdk/README.md#fetchrecording)
* [FetchTrunk](docs/sdk/README.md#fetchtrunk)
* [ListCredentialList](docs/sdk/README.md#listcredentiallist)
* [ListIPAccessControlList](docs/sdk/README.md#listipaccesscontrollist) - List all IP Access Control Lists for a Trunk
* [ListOriginationURL](docs/sdk/README.md#listoriginationurl)
* [ListPhoneNumber](docs/sdk/README.md#listphonenumber)
* [ListTrunk](docs/sdk/README.md#listtrunk)
* [UpdateOriginationURL](docs/sdk/README.md#updateoriginationurl)
* [UpdateRecording](docs/sdk/README.md#updaterecording)
* [UpdateTrunk](docs/sdk/README.md#updatetrunk)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
