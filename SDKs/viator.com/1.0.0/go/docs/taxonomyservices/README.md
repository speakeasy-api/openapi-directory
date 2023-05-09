# TaxonomyServices

## Overview

Taxonomy services

### Available Operations

* [TaxonomyAttractions](#taxonomyattractions) - /taxonomy/attractions
* [TaxonomyCategories](#taxonomycategories) - /taxonomy/categories
* [TaxonomyDestinations](#taxonomydestinations) - /taxonomy/destinations

## TaxonomyAttractions

Get attractions
- Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers
- The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TaxonomyServices.TaxonomyAttractions(ctx, operations.TaxonomyAttractionsRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.TaxonomyAttractionsRequestBody{
            DestID: sdk.Int64(606393),
            SortOrder: operations.TaxonomyAttractionsRequestBodySortOrderEnumSeoReviewAvgRatingD.ToPointer(),
            TopX: sdk.String("perferendis"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxonomyAttractions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TaxonomyCategories

Get all product categories
- Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service
- This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories
- **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TaxonomyServices.TaxonomyCategories(ctx, operations.TaxonomyCategoriesRequest{
        AcceptLanguage: "en-US",
        DestID: sdk.Int64(470132),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxonomyCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TaxonomyDestinations

Get details of all destinations supported by this API
- Retrieves all the country taxonomy/city nodes as a flat list
- Returns a complete list of Viator destinations, including destination names and parent identifiers
- Used to provide navigation through drill down lists or combo boxes


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.TaxonomyServices.TaxonomyDestinations(ctx, operations.TaxonomyDestinationsRequest{
        AcceptLanguage: "en-US",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaxonomyDestinations200ApplicationJSONObject != nil {
        // handle response
    }
}
```
