# Offers

### Available Operations

* [AllFares](#allfares) - All Fares
* [BestFares](#bestfares) - Best Fares
* [DeepLinks](#deeplinks) - Deep Links
* [Fares](#fares) - Fares
* [FaresSubscriptions](#faressubscriptions) - Fares Subscriptions
* [LHDeepLinksFFP](#lhdeeplinksffp) - LH Deep Links - FFP
* [LHDeepLinksITCO](#lhdeeplinksitco) - LH Deep Links - ITCO
* [LowestFares](#lowestfares) - Lowest Fares
* [ONDRoute](#ondroute) - OND Route
* [ONDStatus](#ondstatus) - OND Status
* [TopOND](#topond) - Top OND

## AllFares

Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS

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
    res, err := s.Offers.AllFares(ctx, operations.AllFaresRequest{
        Accept: sdk.String("unde"),
        CabinClass: sdk.String("nulla"),
        Catalogues: "corrupti",
        Destination: "illum",
        FareFamily: sdk.String("vel"),
        Origin: "error",
        ReturnDate: sdk.String("deserunt"),
        Trackingid: sdk.String("suscipit"),
        TravelDate: "iure",
        Travelers: sdk.String("magnam"),
    }, operations.AllFaresSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllFares200ApplicationJSONString != nil {
        // handle response
    }
}
```

## BestFares

Retrieve best fares for the requested journey across multiple days or multiple months.

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
    res, err := s.Offers.BestFares(ctx, operations.BestFaresRequest{
        Accept: "debitis",
        CabinClass: sdk.String("ipsa"),
        Catalogues: "delectus",
        Country: sdk.String("Ethiopia"),
        Destination: "suscipit",
        FareFamily: sdk.String("molestiae"),
        Origin: "minus",
        Range: "placeat",
        Trackingid: sdk.String("voluptatum"),
        TravelDate: "iusto",
        TripDuration: "excepturi",
    }, operations.BestFaresSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BestFares200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DeepLinks

Returns valid deep links for the provided input parameters

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
    res, err := s.Offers.DeepLinks(ctx, operations.DeepLinksRequest{
        Accept: "nisi",
        CabinClass: sdk.String("recusandae"),
        Catalogues: "temporibus",
        Country: "Bangladesh",
        Destination: sdk.String("quis"),
        DestinationName: sdk.String("veritatis"),
        EncryptionKey: sdk.String("deserunt"),
        Fare: sdk.String("perferendis"),
        FareCurrency: sdk.String("ipsam"),
        Lang: "repellendus",
        NetFare: sdk.String("sapiente"),
        Origin: sdk.String("quo"),
        OriginName: sdk.String("odit"),
        OutboundSegments: sdk.String("at"),
        Partnerid: sdk.String("at"),
        ReturnDate: sdk.String("maiores"),
        ReturnSegments: sdk.String("molestiae"),
        Trackingid: "quod",
        TravelDate: sdk.String("quod"),
        Travelers: sdk.String("esse"),
    }, operations.DeepLinksSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeepLinks200ApplicationJSONString != nil {
        // handle response
    }
}
```

## Fares

Retrieve all available fares per fare family for a specific Origin & Destination on a given date

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
    res, err := s.Offers.Fares(ctx, operations.FaresRequest{
        Accept: "totam",
        Carriers: "porro",
        Catalogues: "dolorum",
        FareTypes: sdk.String("dicta"),
        Segments: "nam",
        Travelers: sdk.String("officia"),
    }, operations.FaresSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Fares200ApplicationJSONString != nil {
        // handle response
    }
}
```

## FaresSubscriptions

Create a subscription for best price O&D. Receive regular updates on lowest fares

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
    res, err := s.Offers.FaresSubscriptions(ctx, operations.FaresSubscriptionsRequest{
        Accept: "occaecati",
        CabinClass: "fugit",
        Country: sdk.String("Maldives"),
        Destination: "hic",
        Email: "Joy.Breitenberg@hotmail.com",
        Lang: "modi",
        Origin: "qui",
        Trackingid: sdk.String("impedit"),
        TripDuration: "cum",
    }, operations.FaresSubscriptionsSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FaresSubscriptions200ApplicationJSONString != nil {
        // handle response
    }
}
```

## LHDeepLinksFFP

Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)

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
    res, err := s.Offers.LHDeepLinksFFP(ctx, operations.LHDeepLinksFFPRequest{
        Accept: "esse",
        CabinClass: sdk.String("ipsum"),
        Catalogues: "excepturi",
        Country: "Bulgaria",
        Destination: "perferendis",
        EncryptionKey: sdk.String("ad"),
        Lang: "natus",
        Origin: "sed",
        Partnerid: sdk.String("iste"),
        ReturnDate: sdk.String("dolor"),
        Trackingid: "natus",
        TravelDate: "laboriosam",
        Travelers: sdk.String("hic"),
    }, operations.LHDeepLinksFFPSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LHDeepLinksFFP200ApplicationJSONString != nil {
        // handle response
    }
}
```

## LHDeepLinksITCO

Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)

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
    res, err := s.Offers.LHDeepLinksITCO(ctx, operations.LHDeepLinksITCORequest{
        Accept: "saepe",
        CabinClass: sdk.String("fuga"),
        Catalogues: "in",
        Country: "Guernsey",
        Destination: "iste",
        EncryptionKey: sdk.String("iure"),
        Fare: "saepe",
        FareCurrency: "quidem",
        Lang: "architecto",
        NetFare: sdk.String("ipsa"),
        Origin: "reiciendis",
        OutboundSegments: "est",
        Partnerid: sdk.String("mollitia"),
        ReturnDate: sdk.String("laborum"),
        ReturnSegments: sdk.String("dolores"),
        Trackingid: "dolorem",
        TravelDate: "corporis",
        Travelers: sdk.String("explicabo"),
    }, operations.LHDeepLinksITCOSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LHDeepLinksITCO200ApplicationJSONString != nil {
        // handle response
    }
}
```

## LowestFares

Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH

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
    res, err := s.Offers.LowestFares(ctx, operations.LowestFaresRequest{
        Accept: "nobis",
        CabinClass: sdk.String("enim"),
        Catalogues: "omnis",
        Country: sdk.String("Guinea"),
        Destination: "minima",
        FareFamily: sdk.String("excepturi"),
        Origin: "accusantium",
        ReturnDate: sdk.String("iure"),
        TravelDate: "culpa",
        Travelers: sdk.String("doloribus"),
    }, operations.LowestFaresSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LowestFares200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ONDRoute

Returns LH route origin & destination information

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
    res, err := s.Offers.ONDRoute(ctx, operations.ONDRouteRequest{
        Accept: "sapiente",
        Catalogues: sdk.String("architecto"),
        Destination: "mollitia",
        Limit: sdk.String("dolorem"),
        Offset: sdk.String("culpa"),
        Origin: "consequuntur",
    }, operations.ONDRouteSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ONDRoute200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ONDStatus

Returns LH network route status information. Search for recently added or retired routes

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
    res, err := s.Offers.ONDStatus(ctx, operations.ONDStatusRequest{
        Accept: "repellat",
        Catalogues: sdk.String("mollitia"),
        NewRoutes: sdk.String("occaecati"),
        OldRoutes: sdk.String("numquam"),
    }, operations.ONDStatusSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ONDStatus200ApplicationJSONString != nil {
        // handle response
    }
}
```

## TopOND

Returns LH Top routes per country or across all countries

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
    res, err := s.Offers.TopOND(ctx, operations.TopONDRequest{
        Accept: "commodi",
        Catalogues: sdk.String("quam"),
        Origin: sdk.String("molestiae"),
    }, operations.TopONDSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TopOND200ApplicationJSONString != nil {
        // handle response
    }
}
```
