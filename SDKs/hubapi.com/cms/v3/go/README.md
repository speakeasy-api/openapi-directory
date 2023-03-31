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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetCmsV3DomainsGetPageRequest{
        After: "corrupti",
        Archived: false,
        CreatedAfter: "2021-07-27T21:52:56.087Z",
        CreatedAt: "2021-03-11T23:22:42.658Z",
        CreatedBefore: "2021-05-14T08:28:11.899Z",
        Limit: 847252,
        Sort: []string{
            "error",
            "deserunt",
        },
        UpdatedAfter: "2022-07-25T06:44:09.184Z",
        UpdatedAt: "2022-02-09T12:04:06.508Z",
        UpdatedBefore: "2022-01-14T06:18:51.036Z",
    }

    ctx := context.Background()
    res, err := s.Domains.GetCmsV3DomainsGetPage(ctx, req, operations.GetCmsV3DomainsGetPageSecurity{
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


### Domains

* `GetCmsV3DomainsGetPage` - Get current domains
* `GetCmsV3DomainsDomainIDGetByID` - Get a single domain
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
