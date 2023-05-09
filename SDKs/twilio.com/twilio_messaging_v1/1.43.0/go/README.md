# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_messaging_v1/1.43.0/go
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
    res, err := s.CreateAlphaSender(ctx, operations.CreateAlphaSenderRequest{
        RequestBody: &operations.CreateAlphaSenderCreateAlphaSenderRequest{
            AlphaSender: "corrupti",
        },
        ServiceSid: "provident",
    }, operations.CreateAlphaSenderSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServiceAlphaSender != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateAlphaSender](docs/sdk/README.md#createalphasender)
* [CreateBrandRegistrationOtp](docs/sdk/README.md#createbrandregistrationotp)
* [CreateBrandRegistrations](docs/sdk/README.md#createbrandregistrations)
* [CreateBrandVetting](docs/sdk/README.md#createbrandvetting)
* [CreateExternalCampaign](docs/sdk/README.md#createexternalcampaign)
* [CreateLinkshorteningMessagingService](docs/sdk/README.md#createlinkshorteningmessagingservice)
* [CreatePhoneNumber](docs/sdk/README.md#createphonenumber)
* [CreateService](docs/sdk/README.md#createservice)
* [CreateShortCode](docs/sdk/README.md#createshortcode)
* [CreateUsAppToPerson](docs/sdk/README.md#createusapptoperson)
* [DeleteAlphaSender](docs/sdk/README.md#deletealphasender)
* [DeleteDomainCertV4](docs/sdk/README.md#deletedomaincertv4)
* [DeleteLinkshorteningMessagingService](docs/sdk/README.md#deletelinkshorteningmessagingservice)
* [DeletePhoneNumber](docs/sdk/README.md#deletephonenumber)
* [DeleteService](docs/sdk/README.md#deleteservice)
* [DeleteShortCode](docs/sdk/README.md#deleteshortcode)
* [DeleteUsAppToPerson](docs/sdk/README.md#deleteusapptoperson)
* [FetchAlphaSender](docs/sdk/README.md#fetchalphasender)
* [FetchBrandRegistrations](docs/sdk/README.md#fetchbrandregistrations)
* [FetchBrandVetting](docs/sdk/README.md#fetchbrandvetting)
* [FetchDeactivation](docs/sdk/README.md#fetchdeactivation) - Fetch a list of all United States numbers that have been deactivated on a specific date.
* [FetchDomainCertV4](docs/sdk/README.md#fetchdomaincertv4)
* [FetchDomainConfig](docs/sdk/README.md#fetchdomainconfig)
* [FetchDomainConfigMessagingService](docs/sdk/README.md#fetchdomainconfigmessagingservice)
* [FetchPhoneNumber](docs/sdk/README.md#fetchphonenumber)
* [FetchService](docs/sdk/README.md#fetchservice)
* [FetchShortCode](docs/sdk/README.md#fetchshortcode)
* [FetchUsAppToPerson](docs/sdk/README.md#fetchusapptoperson)
* [FetchUsAppToPersonUsecase](docs/sdk/README.md#fetchusapptopersonusecase)
* [FetchUsecase](docs/sdk/README.md#fetchusecase)
* [ListAlphaSender](docs/sdk/README.md#listalphasender)
* [ListBrandRegistrations](docs/sdk/README.md#listbrandregistrations)
* [ListBrandVetting](docs/sdk/README.md#listbrandvetting)
* [ListPhoneNumber](docs/sdk/README.md#listphonenumber)
* [ListService](docs/sdk/README.md#listservice)
* [ListShortCode](docs/sdk/README.md#listshortcode)
* [ListUsAppToPerson](docs/sdk/README.md#listusapptoperson)
* [UpdateBrandRegistrations](docs/sdk/README.md#updatebrandregistrations)
* [UpdateDomainCertV4](docs/sdk/README.md#updatedomaincertv4)
* [UpdateDomainConfig](docs/sdk/README.md#updatedomainconfig)
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
