# SiteTypes

### Available Operations

* [SiteTypesGetSitesForPublicFacingAPI](#sitetypesgetsitesforpublicfacingapi) - Returns the layer metadata for the LayerId specified.
* [SiteTypesIndex](#sitetypesindex) - Return list of site types

## SiteTypesGetSitesForPublicFacingAPI

Returns the layer metadata for the LayerId specified.

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
    res, err := s.SiteTypes.SiteTypesGetSitesForPublicFacingAPI(ctx, operations.SiteTypesGetSitesForPublicFacingAPIRequest{
        SiteTypeID: 71036,
        Version: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteTypeLayer != nil {
        // handle response
    }
}
```

## SiteTypesIndex

Return list of site types

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
    res, err := s.SiteTypes.SiteTypesIndex(ctx, operations.SiteTypesIndexRequest{
        Version: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SiteTypeResponse != nil {
        // handle response
    }
}
```
