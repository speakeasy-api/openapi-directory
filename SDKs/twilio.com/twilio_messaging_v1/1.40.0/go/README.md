# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_messaging_v1/1.40.0/go
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

    req := operations.CreateAlphaSenderRequest{
        RequestBody: &operations.CreateAlphaSenderCreateAlphaSenderRequest{
            AlphaSender: "corrupti",
        },
        ServiceSid: "provident",
    }

    ctx := context.Background()
    res, err := s.CreateAlphaSender(ctx, req, operations.CreateAlphaSenderSecurity{
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

### SDK SDK

* `CreateAlphaSender`
* `CreateBrandRegistrations`
* `CreateBrandVetting`
* `CreateExternalCampaign`
* `CreateLinkshorteningMessagingService`
* `CreatePhoneNumber`
* `CreateService`
* `CreateShortCode`
* `CreateTollfreeVerification`
* `CreateUsAppToPerson`
* `DeleteAlphaSender`
* `DeleteDomainCertV4`
* `DeleteLinkshorteningMessagingService`
* `DeletePhoneNumber`
* `DeleteService`
* `DeleteShortCode`
* `DeleteUsAppToPerson`
* `FetchAlphaSender`
* `FetchBrandRegistrations`
* `FetchBrandVetting`
* `FetchDeactivation` - Fetch a list of all United States numbers that have been deactivated on a specific date.
* `FetchDomainCertV4`
* `FetchDomainConfig`
* `FetchDomainConfigMessagingService`
* `FetchPhoneNumber`
* `FetchService`
* `FetchShortCode`
* `FetchTollfreeVerification`
* `FetchUsAppToPerson`
* `FetchUsAppToPersonUsecase`
* `FetchUsecase`
* `ListAlphaSender`
* `ListBrandRegistrations`
* `ListBrandVetting`
* `ListPhoneNumber`
* `ListService`
* `ListShortCode`
* `ListTollfreeVerification`
* `ListUsAppToPerson`
* `UpdateBrandRegistrations`
* `UpdateDomainCertV4`
* `UpdateDomainConfig`
* `UpdateService`
* `UpdateTollfreeVerification`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
