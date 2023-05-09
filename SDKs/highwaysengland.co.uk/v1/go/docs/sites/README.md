# Sites

### Available Operations

* [SitesIndex](#sitesindex) - Get a list of sites
* [GetVVersionSitesSiteIds](#getvversionsitessiteids) - Get selected sites

## SitesIndex

Get a list of sites

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Sites.SitesIndex(ctx, operations.SitesIndexRequest{
        Version: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteResponse != nil {
        // handle response
    }
}
```

## GetVVersionSitesSiteIds

Get selected sites

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Sites.GetVVersionSitesSiteIds(ctx, operations.GetVVersionSitesSiteIdsRequest{
        SiteIds: "perferendis",
        Version: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteResponse != nil {
        // handle response
    }
}
```
