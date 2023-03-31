# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/appengine/v1alpha/go
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

    req := operations.AppengineAppsAuthorizedCertificatesCreateRequest{
        DollarXgafv: "2",
        AuthorizedCertificate: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: "provident",
                PublicCertificate: "distinctio",
            },
            DisplayName: "quibusdam",
            DomainMappingsCount: 602763,
            DomainNames: []string{
                "corrupti",
                "illum",
                "vel",
                "error",
            },
            ExpireTime: "deserunt",
            ID: "suscipit",
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: "iure",
                Status: "PENDING",
            },
            Name: "debitis",
            VisibleDomainMappings: []string{
                "delectus",
            },
        },
        AccessToken: "tempora",
        Alt: "media",
        AppsID: "molestiae",
        Callback: "minus",
        Fields: "placeat",
        Key: "voluptatum",
        OauthToken: "iusto",
        PrettyPrint: false,
        QuotaUser: "excepturi",
        UploadType: "nisi",
        UploadProtocol: "recusandae",
    }

    ctx := context.Background()
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesCreate(ctx, req, operations.AppengineAppsAuthorizedCertificatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizedCertificate != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Apps

* `AppengineAppsAuthorizedCertificatesCreate` - Uploads the specified SSL certificate.
* `AppengineAppsAuthorizedCertificatesDelete` - Deletes the specified SSL certificate.
* `AppengineAppsAuthorizedCertificatesGet` - Gets the specified SSL certificate.
* `AppengineAppsAuthorizedCertificatesList` - Lists all SSL certificates the user is authorized to administer.
* `AppengineAppsAuthorizedCertificatesPatch` - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* `AppengineAppsAuthorizedDomainsList` - Lists all domains the user is authorized to administer.
* `AppengineAppsDomainMappingsCreate` - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* `AppengineAppsDomainMappingsDelete` - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* `AppengineAppsDomainMappingsGet` - Gets the specified domain mapping.
* `AppengineAppsDomainMappingsList` - Lists the domain mappings on an application.
* `AppengineAppsDomainMappingsPatch` - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* `AppengineAppsLocationsGet` - Gets information about a location.
* `AppengineAppsLocationsList` - Lists information about the supported locations for this service.
* `AppengineAppsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `AppengineAppsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Projects

* `AppengineProjectsLocationsGet` - Gets information about a location.
* `AppengineProjectsLocationsList` - Lists information about the supported locations for this service.
* `AppengineProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `AppengineProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
