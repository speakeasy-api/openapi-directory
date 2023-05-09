# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/privateca/v1/go
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
    res, err := s.Projects.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(ctx, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ActivateCertificateAuthorityRequest: &shared.ActivateCertificateAuthorityRequest{
            PemCaCertificate: sdk.String("provident"),
            RequestID: sdk.String("distinctio"),
            SubordinateConfig: &shared.SubordinateConfig{
                CertificateAuthority: sdk.String("quibusdam"),
                PemIssuerChain: &shared.SubordinateConfigChain{
                    PemCertificates: []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                },
            },
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        Name: "Raquel Bednar",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity{
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

* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiesactivate) - Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiescertificaterevocationlistslist) - Lists CertificateRevocationLists.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiescreate) - Create a new CertificateAuthority in a given Project and Location.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiesdisable) - Disable a CertificateAuthority.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiesenable) - Enable a CertificateAuthority.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiesfetch) - Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesList](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritieslist) - Lists CertificateAuthorities.
* [PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiesundelete) - Undelete a CertificateAuthority that has been deleted.
* [PrivatecaProjectsLocationsCaPoolsCertificatesCreate](docs/projects/README.md#privatecaprojectslocationscapoolscertificatescreate) - Create a new Certificate in a given Project, Location from a particular CaPool.
* [PrivatecaProjectsLocationsCaPoolsCertificatesList](docs/projects/README.md#privatecaprojectslocationscapoolscertificateslist) - Lists Certificates.
* [PrivatecaProjectsLocationsCaPoolsCertificatesRevoke](docs/projects/README.md#privatecaprojectslocationscapoolscertificatesrevoke) - Revoke a Certificate.
* [PrivatecaProjectsLocationsCaPoolsCreate](docs/projects/README.md#privatecaprojectslocationscapoolscreate) - Create a CaPool.
* [PrivatecaProjectsLocationsCaPoolsFetchCaCerts](docs/projects/README.md#privatecaprojectslocationscapoolsfetchcacerts) - FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.
* [PrivatecaProjectsLocationsCaPoolsList](docs/projects/README.md#privatecaprojectslocationscapoolslist) - Lists CaPools.
* [PrivatecaProjectsLocationsCertificateTemplatesCreate](docs/projects/README.md#privatecaprojectslocationscertificatetemplatescreate) - Create a new CertificateTemplate in a given Project and Location.
* [PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicy](docs/projects/README.md#privatecaprojectslocationscertificatetemplatesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [PrivatecaProjectsLocationsCertificateTemplatesList](docs/projects/README.md#privatecaprojectslocationscertificatetemplateslist) - Lists CertificateTemplates.
* [PrivatecaProjectsLocationsCertificateTemplatesPatch](docs/projects/README.md#privatecaprojectslocationscertificatetemplatespatch) - Update a CertificateTemplate.
* [PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicy](docs/projects/README.md#privatecaprojectslocationscertificatetemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissions](docs/projects/README.md#privatecaprojectslocationscertificatetemplatestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [PrivatecaProjectsLocationsList](docs/projects/README.md#privatecaprojectslocationslist) - Lists information about the supported locations for this service.
* [PrivatecaProjectsLocationsOperationsCancel](docs/projects/README.md#privatecaprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [PrivatecaProjectsLocationsOperationsDelete](docs/projects/README.md#privatecaprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [PrivatecaProjectsLocationsOperationsGet](docs/projects/README.md#privatecaprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [PrivatecaProjectsLocationsOperationsList](docs/projects/README.md#privatecaprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
