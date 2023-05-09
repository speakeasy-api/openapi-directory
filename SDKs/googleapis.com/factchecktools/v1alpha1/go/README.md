# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/factchecktools/v1alpha1/go
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
    res, err := s.Claims.FactchecktoolsClaimsSearch(ctx, operations.FactchecktoolsClaimsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        LanguageCode: sdk.String("corrupti"),
        MaxAgeDays: sdk.Int64(847252),
        OauthToken: sdk.String("vel"),
        Offset: sdk.Int64(623564),
        PageSize: sdk.Int64(645894),
        PageToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("iure"),
        QuotaUser: sdk.String("magnam"),
        ReviewPublisherSiteFilter: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Claims](docs/claims/README.md)

* [FactchecktoolsClaimsSearch](docs/claims/README.md#factchecktoolsclaimssearch) - Search through fact-checked claims.

### [Pages](docs/pages/README.md)

* [FactchecktoolsPagesCreate](docs/pages/README.md#factchecktoolspagescreate) - Create `ClaimReview` markup on a page.
* [FactchecktoolsPagesDelete](docs/pages/README.md#factchecktoolspagesdelete) - Delete all `ClaimReview` markup on a page.
* [FactchecktoolsPagesGet](docs/pages/README.md#factchecktoolspagesget) - Get all `ClaimReview` markup on a page.
* [FactchecktoolsPagesList](docs/pages/README.md#factchecktoolspageslist) - List the `ClaimReview` markup pages for a specific URL or for an organization.
* [FactchecktoolsPagesUpdate](docs/pages/README.md#factchecktoolspagesupdate) - Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
