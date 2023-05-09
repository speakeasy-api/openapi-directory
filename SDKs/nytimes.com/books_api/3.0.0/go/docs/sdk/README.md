# SDK

## Overview

The Books API provides information about book reviews and The New York Times bestsellers lists.

<http://developer.nytimes.com/>
### Available Operations

* [GETListsBestSellersHistoryJSON](#getlistsbestsellershistoryjson) - Best Seller History List
* [GETListsDateListJSON](#getlistsdatelistjson) - Best Seller List by Date
* [GETListsFormat](#getlistsformat) - Best Seller List
* [GETListsNamesFormat](#getlistsnamesformat) - Best Seller List Names
* [GETListsOverviewFormat](#getlistsoverviewformat) - Best Seller List Overview
* [GETReviewsFormat](#getreviewsformat) - Reviews

## GETListsBestSellersHistoryJSON

Best Seller History List

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
    res, err := s.SDK.GETListsBestSellersHistoryJSON(ctx, operations.GETListsBestSellersHistoryJSONRequest{
        AgeGroup: sdk.String("illum"),
        Author: sdk.String("vel"),
        Contributor: sdk.String("error"),
        Isbn: sdk.String("deserunt"),
        Price: sdk.String("suscipit"),
        Publisher: sdk.String("iure"),
        Title: sdk.String("Mrs."),
    }, operations.GETListsBestSellersHistoryJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETListsBestSellersHistoryJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETListsDateListJSON

Best Seller List by Date

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
    res, err := s.SDK.GETListsDateListJSON(ctx, operations.GETListsDateListJSONRequest{
        BestsellersDate: sdk.String("debitis"),
        Date: "ipsa",
        Isbn: sdk.Int64(963663),
        List: "tempora",
        ListName: sdk.String("suscipit"),
        Offset: sdk.Int64(477665),
        PublishedDate: types.MustTimeFromString("2020-07-25T16:12:20.938Z"),
        Rank: sdk.String("voluptatum"),
        RankLastWeek: sdk.Int64(479977),
        SortOrder: operations.GETListsDateListJSONSortOrderEnumDesc.ToPointer(),
        WeeksOnList: sdk.Int64(392785),
    }, operations.GETListsDateListJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETListsDateListJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETListsFormat

Best Seller List

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
    res, err := s.SDK.GETListsFormat(ctx, operations.GETListsFormatRequest{
        BestsellersDate: types.MustTimeFromString("2020-06-29T11:50:59.674Z"),
        Date: sdk.String("ab"),
        Format: operations.GETListsFormatFormatEnumJSON,
        Isbn: sdk.String("veritatis"),
        List: sdk.String("deserunt"),
        Offset: sdk.Int64(20218),
        PublishedDate: sdk.String("ipsam"),
        Rank: sdk.Int64(832620),
        RankLastWeek: sdk.Int64(957156),
        SortOrder: operations.GETListsFormatSortOrderEnumDesc.ToPointer(),
        WeeksOnList: sdk.Int64(140350),
    }, operations.GETListsFormatSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETListsFormat200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETListsNamesFormat

Best Seller List Names

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
    res, err := s.SDK.GETListsNamesFormat(ctx, operations.GETListsNamesFormatRequest{
        APIKey: sdk.String("at"),
        Format: operations.GETListsNamesFormatFormatEnumJsonp,
    }, operations.GETListsNamesFormatSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETListsNamesFormat200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETListsOverviewFormat

Best Seller List Overview

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
    res, err := s.SDK.GETListsOverviewFormat(ctx, operations.GETListsOverviewFormatRequest{
        APIKey: sdk.String("maiores"),
        Format: operations.GETListsOverviewFormatFormatEnumJSON,
        PublishedDate: sdk.String("quod"),
    }, operations.GETListsOverviewFormatSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETListsOverviewFormat200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETReviewsFormat

Reviews

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
    res, err := s.SDK.GETReviewsFormat(ctx, operations.GETReviewsFormatRequest{
        APIKey: sdk.String("quod"),
        Author: sdk.String("esse"),
        Format: operations.GETReviewsFormatFormatEnumJsonp,
        Isbn: sdk.Int64(780529),
        Title: sdk.String("Miss"),
    }, operations.GETReviewsFormatSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETReviewsFormat200ApplicationJSONObject != nil {
        // handle response
    }
}
```
