# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/hubapi.com/cms/v3/go
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
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Domains.GetCmsV3DomainsGetPage(ctx, operations.GetCmsV3DomainsGetPageRequest{
        After: sdk.String("corrupti"),
        Archived: sdk.Bool(false),
        CreatedAfter: types.MustTimeFromString("2021-07-27T21:52:56.087Z"),
        CreatedAt: types.MustTimeFromString("2021-03-11T23:22:42.658Z"),
        CreatedBefore: types.MustTimeFromString("2021-05-14T08:28:11.899Z"),
        Limit: sdk.Int(847252),
        Sort: []string{
            "error",
            "deserunt",
        },
        UpdatedAfter: types.MustTimeFromString("2022-07-25T06:44:09.184Z"),
        UpdatedAt: types.MustTimeFromString("2022-02-09T12:04:06.508Z"),
        UpdatedBefore: types.MustTimeFromString("2022-01-14T06:18:51.036Z"),
    }, operations.GetCmsV3DomainsGetPageSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponseWithTotalDomainForwardPaging != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Domains](docs/domains/README.md)

* [GetCmsV3DomainsGetPage](docs/domains/README.md#getcmsv3domainsgetpage) - Get current domains
* [GetCmsV3DomainsDomainIDGetByID](docs/domains/README.md#getcmsv3domainsdomainidgetbyid) - Get a single domain
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
