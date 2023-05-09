# Domains

## Overview

Operations for fetching domains

### Available Operations

* [GetCmsV3DomainsGetPage](#getcmsv3domainsgetpage) - Get current domains
* [GetCmsV3DomainsDomainIDGetByID](#getcmsv3domainsdomainidgetbyid) - Get a single domain

## GetCmsV3DomainsGetPage

Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.

### Example Usage

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
        After: sdk.String("tempora"),
        Archived: sdk.Bool(false),
        CreatedAfter: types.MustTimeFromString("2022-07-10T15:39:12.517Z"),
        CreatedAt: types.MustTimeFromString("2020-07-25T16:12:20.938Z"),
        CreatedBefore: types.MustTimeFromString("2022-01-15T14:47:59.325Z"),
        Limit: sdk.Int(568045),
        Sort: []string{
            "recusandae",
            "temporibus",
        },
        UpdatedAfter: types.MustTimeFromString("2022-08-30T20:24:33.984Z"),
        UpdatedAt: types.MustTimeFromString("2022-05-09T10:00:51.349Z"),
        UpdatedBefore: types.MustTimeFromString("2022-08-19T14:12:14.246Z"),
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

## GetCmsV3DomainsDomainIDGetByID

Returns a single domains with the id specified.

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
    res, err := s.Domains.GetCmsV3DomainsDomainIDGetByID(ctx, operations.GetCmsV3DomainsDomainIDGetByIDRequest{
        DomainID: "repellendus",
    }, operations.GetCmsV3DomainsDomainIDGetByIDSecurity{
        Hapikey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Domain != nil {
        // handle response
    }
}
```
