# V1

### Available Operations

* [AddExpiryListingsJSON](#addexpirylistingsjson) - Add expiry listings into GoDaddy Auction
* [AddExpiryListingsRaw](#addexpirylistingsraw) - Add expiry listings into GoDaddy Auction
* [DeleteListings](#deletelistings) - Remove listings from GoDaddy Auction

## AddExpiryListingsJSON

Add expiry listings into GoDaddy Auction

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.AddExpiryListingsJSON(ctx, []shared.AftermarketListingExpiryCreate{
        shared.AftermarketListingExpiryCreate{
            Domain: "tempora",
            ExpiresAt: "suscipit",
            LosingRegistrarID: 477665,
            PageViewsMonthly: sdk.Int64(791725),
            RevenueMonthly: sdk.Int64(812169),
        },
        shared.AftermarketListingExpiryCreate{
            Domain: "voluptatum",
            ExpiresAt: "iusto",
            LosingRegistrarID: 568045,
            PageViewsMonthly: sdk.Int64(392785),
            RevenueMonthly: sdk.Int64(925597),
        },
        shared.AftermarketListingExpiryCreate{
            Domain: "temporibus",
            ExpiresAt: "ab",
            LosingRegistrarID: 337396,
            PageViewsMonthly: sdk.Int64(87129),
            RevenueMonthly: sdk.Int64(648172),
        },
        shared.AftermarketListingExpiryCreate{
            Domain: "perferendis",
            ExpiresAt: "ipsam",
            LosingRegistrarID: 832620,
            PageViewsMonthly: sdk.Int64(957156),
            RevenueMonthly: sdk.Int64(778157),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AddExpiryListingsRaw

Add expiry listings into GoDaddy Auction

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1.AddExpiryListingsRaw(ctx, []byte("odit"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## DeleteListings

Remove listings from GoDaddy Auction

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
    res, err := s.V1.DeleteListings(ctx, operations.DeleteListingsRequest{
        Domains: []string{
            "at",
            "maiores",
            "molestiae",
            "quod",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
