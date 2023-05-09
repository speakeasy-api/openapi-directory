# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_notify_v1/1.43.0/go
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
    res, err := s.CreateBinding(ctx, operations.CreateBindingRequest{
        RequestBody: &operations.CreateBindingCreateBindingRequest{
            Address: "5786 Little Streets",
            BindingType: shared.BindingEnumBindingTypeEnumSms,
            CredentialSid: sdk.String("error"),
            Endpoint: sdk.String("deserunt"),
            Identity: "suscipit",
            NotificationProtocolVersion: sdk.String("iure"),
            Tag: []string{
                "debitis",
                "ipsa",
            },
        },
        ServiceSid: "delectus",
    }, operations.CreateBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1ServiceBinding != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateBinding](docs/sdk/README.md#createbinding)
* [CreateCredential](docs/sdk/README.md#createcredential)
* [CreateNotification](docs/sdk/README.md#createnotification)
* [CreateService](docs/sdk/README.md#createservice)
* [DeleteBinding](docs/sdk/README.md#deletebinding)
* [DeleteCredential](docs/sdk/README.md#deletecredential)
* [DeleteService](docs/sdk/README.md#deleteservice)
* [FetchBinding](docs/sdk/README.md#fetchbinding)
* [FetchCredential](docs/sdk/README.md#fetchcredential)
* [FetchService](docs/sdk/README.md#fetchservice)
* [ListBinding](docs/sdk/README.md#listbinding)
* [ListCredential](docs/sdk/README.md#listcredential)
* [ListService](docs/sdk/README.md#listservice)
* [UpdateCredential](docs/sdk/README.md#updatecredential)
* [UpdateService](docs/sdk/README.md#updateservice)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
