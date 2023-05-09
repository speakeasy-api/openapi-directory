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
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesCreate(ctx, operations.AppengineAppsAuthorizedCertificatesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AuthorizedCertificate: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: sdk.String("provident"),
                PublicCertificate: sdk.String("distinctio"),
            },
            DisplayName: sdk.String("quibusdam"),
            DomainMappingsCount: sdk.Int(602763),
            DomainNames: []string{
                "corrupti",
                "illum",
                "vel",
                "error",
            },
            ExpireTime: sdk.String("deserunt"),
            ID: sdk.String("674e0f46-7cc8-4796-ad15-1a05dfc2ddf7"),
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: sdk.String("quod"),
                Status: shared.ManagedCertificateStatusEnumFailedRetryingCaaForbidden.ToPointer(),
            },
            Name: sdk.String("Deanna Sauer MD"),
            VisibleDomainMappings: []string{
                "occaecati",
                "fugit",
                "deleniti",
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "totam",
        Callback: sdk.String("beatae"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cum"),
    }, operations.AppengineAppsAuthorizedCertificatesCreateSecurity{
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


### [Apps](docs/apps/README.md)

* [AppengineAppsAuthorizedCertificatesCreate](docs/apps/README.md#appengineappsauthorizedcertificatescreate) - Uploads the specified SSL certificate.
* [AppengineAppsAuthorizedCertificatesDelete](docs/apps/README.md#appengineappsauthorizedcertificatesdelete) - Deletes the specified SSL certificate.
* [AppengineAppsAuthorizedCertificatesGet](docs/apps/README.md#appengineappsauthorizedcertificatesget) - Gets the specified SSL certificate.
* [AppengineAppsAuthorizedCertificatesList](docs/apps/README.md#appengineappsauthorizedcertificateslist) - Lists all SSL certificates the user is authorized to administer.
* [AppengineAppsAuthorizedCertificatesPatch](docs/apps/README.md#appengineappsauthorizedcertificatespatch) - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* [AppengineAppsAuthorizedDomainsList](docs/apps/README.md#appengineappsauthorizeddomainslist) - Lists all domains the user is authorized to administer.
* [AppengineAppsDomainMappingsCreate](docs/apps/README.md#appengineappsdomainmappingscreate) - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* [AppengineAppsDomainMappingsDelete](docs/apps/README.md#appengineappsdomainmappingsdelete) - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* [AppengineAppsDomainMappingsGet](docs/apps/README.md#appengineappsdomainmappingsget) - Gets the specified domain mapping.
* [AppengineAppsDomainMappingsList](docs/apps/README.md#appengineappsdomainmappingslist) - Lists the domain mappings on an application.
* [AppengineAppsDomainMappingsPatch](docs/apps/README.md#appengineappsdomainmappingspatch) - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* [AppengineAppsLocationsGet](docs/apps/README.md#appengineappslocationsget) - Gets information about a location.
* [AppengineAppsLocationsList](docs/apps/README.md#appengineappslocationslist) - Lists information about the supported locations for this service.
* [AppengineAppsOperationsGet](docs/apps/README.md#appengineappsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [AppengineAppsOperationsList](docs/apps/README.md#appengineappsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### [Projects](docs/projects/README.md)

* [AppengineProjectsLocationsGet](docs/projects/README.md#appengineprojectslocationsget) - Gets information about a location.
* [AppengineProjectsLocationsList](docs/projects/README.md#appengineprojectslocationslist) - Lists information about the supported locations for this service.
* [AppengineProjectsLocationsOperationsGet](docs/projects/README.md#appengineprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [AppengineProjectsLocationsOperationsList](docs/projects/README.md#appengineprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
