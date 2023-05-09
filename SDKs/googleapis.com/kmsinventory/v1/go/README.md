# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/kmsinventory/v1/go
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
    res, err := s.Organizations.KmsinventoryOrganizationsProtectedResourcesSearch(ctx, operations.KmsinventoryOrganizationsProtectedResourcesSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        CryptoKey: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PageSize: sdk.Int64(423655),
        PageToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        Scope: "suscipit",
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.KmsinventoryOrganizationsProtectedResourcesSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Organizations](docs/organizations/README.md)

* [KmsinventoryOrganizationsProtectedResourcesSearch](docs/organizations/README.md#kmsinventoryorganizationsprotectedresourcessearch) - Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.

### [Projects](docs/projects/README.md)

* [KmsinventoryProjectsCryptoKeysList](docs/projects/README.md#kmsinventoryprojectscryptokeyslist) - Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.
* [KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummary](docs/projects/README.md#kmsinventoryprojectslocationskeyringscryptokeysgetprotectedresourcessummary) - Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
