# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/certificatemanager/v1/go
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
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(ctx, operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CertificateIssuanceConfigInput: &shared.CertificateIssuanceConfigInput{
            CertificateAuthorityConfig: &shared.CertificateAuthorityConfig{
                CertificateAuthorityServiceConfig: &shared.CertificateAuthorityServiceConfig{
                    CaPool: sdk.String("provident"),
                },
            },
            Description: sdk.String("distinctio"),
            KeyAlgorithm: shared.CertificateIssuanceConfigKeyAlgorithmEnumEcdsaP256.ToPointer(),
            Labels: map[string]string{
                "nulla": "corrupti",
                "illum": "vel",
                "error": "deserunt",
            },
            Lifetime: sdk.String("suscipit"),
            Name: sdk.String("Dr. Valerie Toy"),
            RotationWindowPercentage: sdk.Int(383441),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        CertificateIssuanceConfigID: sdk.String("voluptatum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("nisi"),
        Parent: "recusandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    }, operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate](docs/projects/README.md#certificatemanagerprojectslocationscertificateissuanceconfigscreate) - Creates a new CertificateIssuanceConfig in a given project and location.
* [CertificatemanagerProjectsLocationsCertificateIssuanceConfigsList](docs/projects/README.md#certificatemanagerprojectslocationscertificateissuanceconfigslist) - Lists CertificateIssuanceConfigs in a given project and location.
* [CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate](docs/projects/README.md#certificatemanagerprojectslocationscertificatemapscertificatemapentriescreate) - Creates a new CertificateMapEntry in a given project and location.
* [CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList](docs/projects/README.md#certificatemanagerprojectslocationscertificatemapscertificatemapentrieslist) - Lists CertificateMapEntries in a given project and location.
* [CertificatemanagerProjectsLocationsCertificateMapsCreate](docs/projects/README.md#certificatemanagerprojectslocationscertificatemapscreate) - Creates a new CertificateMap in a given project and location.
* [CertificatemanagerProjectsLocationsCertificateMapsList](docs/projects/README.md#certificatemanagerprojectslocationscertificatemapslist) - Lists CertificateMaps in a given project and location.
* [CertificatemanagerProjectsLocationsCertificatesCreate](docs/projects/README.md#certificatemanagerprojectslocationscertificatescreate) - Creates a new Certificate in a given project and location.
* [CertificatemanagerProjectsLocationsCertificatesList](docs/projects/README.md#certificatemanagerprojectslocationscertificateslist) - Lists Certificates in a given project and location.
* [CertificatemanagerProjectsLocationsDNSAuthorizationsCreate](docs/projects/README.md#certificatemanagerprojectslocationsdnsauthorizationscreate) - Creates a new DnsAuthorization in a given project and location.
* [CertificatemanagerProjectsLocationsDNSAuthorizationsList](docs/projects/README.md#certificatemanagerprojectslocationsdnsauthorizationslist) - Lists DnsAuthorizations in a given project and location.
* [CertificatemanagerProjectsLocationsList](docs/projects/README.md#certificatemanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [CertificatemanagerProjectsLocationsOperationsCancel](docs/projects/README.md#certificatemanagerprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [CertificatemanagerProjectsLocationsOperationsList](docs/projects/README.md#certificatemanagerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [CertificatemanagerProjectsLocationsTrustConfigsCreate](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigscreate) - Creates a new TrustConfig in a given project and location.
* [CertificatemanagerProjectsLocationsTrustConfigsDelete](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigsdelete) - Deletes a single TrustConfig.
* [CertificatemanagerProjectsLocationsTrustConfigsGet](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigsget) - Gets details of a single TrustConfig.
* [CertificatemanagerProjectsLocationsTrustConfigsList](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigslist) - Lists TrustConfigs in a given project and location.
* [CertificatemanagerProjectsLocationsTrustConfigsPatch](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigspatch) - Updates a TrustConfig.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
