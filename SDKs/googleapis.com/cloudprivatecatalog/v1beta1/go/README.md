# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudprivatecatalog/v1beta1/go
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
    res, err := s.Organizations.CloudprivatecatalogOrganizationsCatalogsSearch(ctx, operations.CloudprivatecatalogOrganizationsCatalogsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PageSize: sdk.Int64(847252),
        PageToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("error"),
        QuotaUser: sdk.String("deserunt"),
        Resource: "suscipit",
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.CloudprivatecatalogOrganizationsCatalogsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Organizations](docs/organizations/README.md)

* [CloudprivatecatalogOrganizationsCatalogsSearch](docs/organizations/README.md#cloudprivatecatalogorganizationscatalogssearch) - Search Catalog resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.
* [CloudprivatecatalogOrganizationsProductsSearch](docs/organizations/README.md#cloudprivatecatalogorganizationsproductssearch) - Search Product resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.
* [CloudprivatecatalogOrganizationsVersionsSearch](docs/organizations/README.md#cloudprivatecatalogorganizationsversionssearch) - Search Version resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
