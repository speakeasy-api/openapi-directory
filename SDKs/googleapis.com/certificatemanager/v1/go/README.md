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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest{
        DollarXgafv: "2",
        CertificateIssuanceConfigInput: &shared.CertificateIssuanceConfigInput{
            CertificateAuthorityConfig: &shared.CertificateAuthorityConfig{
                CertificateAuthorityServiceConfig: &shared.CertificateAuthorityServiceConfig{
                    CaPool: "provident",
                },
            },
            Description: "distinctio",
            KeyAlgorithm: "ECDSA_P256",
            Labels: map[string]string{
                "nulla": "corrupti",
                "illum": "vel",
                "error": "deserunt",
            },
            Lifetime: "suscipit",
            Name: "iure",
            RotationWindowPercentage: 297534,
        },
        AccessToken: "debitis",
        Alt: "json",
        Callback: "delectus",
        CertificateIssuanceConfigID: "tempora",
        Fields: "suscipit",
        Key: "molestiae",
        OauthToken: "minus",
        Parent: "placeat",
        PrettyPrint: false,
        QuotaUser: "voluptatum",
        UploadType: "iusto",
        UploadProtocol: "excepturi",
    }

    ctx := context.Background()
    res, err := s.Projects.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(ctx, req, operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity{
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


### Projects

* `CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate` - Creates a new CertificateIssuanceConfig in a given project and location.
* `CertificatemanagerProjectsLocationsCertificateIssuanceConfigsList` - Lists CertificateIssuanceConfigs in a given project and location.
* `CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate` - Creates a new CertificateMapEntry in a given project and location.
* `CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList` - Lists CertificateMapEntries in a given project and location.
* `CertificatemanagerProjectsLocationsCertificateMapsCreate` - Creates a new CertificateMap in a given project and location.
* `CertificatemanagerProjectsLocationsCertificateMapsList` - Lists CertificateMaps in a given project and location.
* `CertificatemanagerProjectsLocationsCertificatesCreate` - Creates a new Certificate in a given project and location.
* `CertificatemanagerProjectsLocationsCertificatesList` - Lists Certificates in a given project and location.
* `CertificatemanagerProjectsLocationsDNSAuthorizationsCreate` - Creates a new DnsAuthorization in a given project and location.
* `CertificatemanagerProjectsLocationsDNSAuthorizationsList` - Lists DnsAuthorizations in a given project and location.
* `CertificatemanagerProjectsLocationsDNSAuthorizationsPatch` - Updates a DnsAuthorization.
* `CertificatemanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `CertificatemanagerProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `CertificatemanagerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `CertificatemanagerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `CertificatemanagerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
