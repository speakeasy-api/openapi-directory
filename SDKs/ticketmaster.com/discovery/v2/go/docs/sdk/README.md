# SDK

## Overview

The Ticketmaster Discovery API allows you to search for events, attractions, or venues.

### Available Operations

* [Find](#find) - Attraction Search
* [Get](#get) - Get Attraction Details
* [GetGenre](#getgenre) - Get Genre Details
* [GetImages](#getimages) - Get Event Images
* [GetSegment](#getsegment) - Get Segment Details
* [GetSubgenre](#getsubgenre) - Get Sub-Genre Details
* [GetDiscoveryV2Classifications](#getdiscoveryv2classifications) - Classification Search
* [GetDiscoveryV2ClassificationsID](#getdiscoveryv2classificationsid) - Get Classification Details
* [GetDiscoveryV2Events](#getdiscoveryv2events) - Event Search
* [GetDiscoveryV2EventsID](#getdiscoveryv2eventsid) - Get Event Details
* [GetDiscoveryV2Venues](#getdiscoveryv2venues) - Venue Search
* [GetDiscoveryV2VenuesID](#getdiscoveryv2venuesid) - Get Venue Details

## Find

Find attractions (artists, sports, packages, plays and so on) and filter your search by name, and much more.

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
    res, err := s.SDK.Find(ctx, operations.FindRequest{
        ClassificationID: []interface{}{
            "nam",
        },
        ClassificationName: []interface{}{
            "occaecati",
            "fugit",
            "deleniti",
        },
        ID: sdk.String("fc816742-cb73-4920-9929-396fea7596eb"),
        IncludeLicensedContent: operations.FindIncludeLicensedContentEnumYes.ToPointer(),
        IncludeSpellcheck: operations.FindIncludeSpellcheckEnumYes.ToPointer(),
        IncludeTest: operations.FindIncludeTestEnumOnly.ToPointer(),
        Keyword: sdk.String("est"),
        Locale: sdk.String("mollitia"),
        Page: sdk.String("laborum"),
        Size: sdk.String("dolores"),
        Sort: sdk.String("dolorem"),
        Source: operations.FindSourceEnumUniverse.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## Get

Get details for a specific attraction using the unique identifier for the attraction.

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
    res, err := s.SDK.Get(ctx, operations.GetRequest{
        ID: "2c595590-7aff-41a3-a2fa-9467739251aa",
        IncludeLicensedContent: operations.GetIncludeLicensedContentEnumYes.ToPointer(),
        Locale: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetGenre

Get details for a specific genre using its unique identifier.

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
    res, err := s.SDK.GetGenre(ctx, operations.GetGenreRequest{
        ID: "c3f5ad01-9da1-4ffe-b8f0-97b0074f1547",
        IncludeLicensedContent: operations.GetGenreIncludeLicensedContentEnumYes.ToPointer(),
        Locale: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetImages

Get images for a specific event using the unique identifier for the event.

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
    res, err := s.SDK.GetImages(ctx, operations.GetImagesRequest{
        ID: "5e6e13b9-9d48-48e1-a91e-450ad2abd442",
        IncludeLicensedContent: operations.GetImagesIncludeLicensedContentEnumYes.ToPointer(),
        Locale: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSegment

Get details for a specific segment using its unique identifier.

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
    res, err := s.SDK.GetSegment(ctx, operations.GetSegmentRequest{
        ID: "802d502a-94bb-44f6-bc96-9e9a3efa77df",
        IncludeLicensedContent: operations.GetSegmentIncludeLicensedContentEnumNo.ToPointer(),
        Locale: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSubgenre

Get details for a specific sub-genre using its unique identifier.

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
    res, err := s.SDK.GetSubgenre(ctx, operations.GetSubgenreRequest{
        ID: "4cd66ae3-95ef-4b9b-a88f-3a66997074ba",
        IncludeLicensedContent: operations.GetSubgenreIncludeLicensedContentEnumYes.ToPointer(),
        Locale: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDiscoveryV2Classifications

Find classifications and filter your search by name, and much more. Classifications help define the nature of attractions and events.

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
    res, err := s.SDK.GetDiscoveryV2Classifications(ctx, operations.GetDiscoveryV2ClassificationsRequest{
        ID: sdk.String("69b6e214-1959-4890-afa5-63e2516fe4c8"),
        IncludeLicensedContent: operations.GetDiscoveryV2ClassificationsIncludeLicensedContentEnumNo.ToPointer(),
        IncludeSpellcheck: operations.GetDiscoveryV2ClassificationsIncludeSpellcheckEnumYes.ToPointer(),
        IncludeTest: operations.GetDiscoveryV2ClassificationsIncludeTestEnumYes.ToPointer(),
        Keyword: sdk.String("architecto"),
        Locale: sdk.String("repudiandae"),
        Page: sdk.String("ullam"),
        Size: sdk.String("expedita"),
        Sort: sdk.String("nihil"),
        Source: operations.GetDiscoveryV2ClassificationsSourceEnumTmr.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDiscoveryV2ClassificationsID

Get details for a specific segment, genre, or sub-genre using its unique identifier.

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
    res, err := s.SDK.GetDiscoveryV2ClassificationsID(ctx, operations.GetDiscoveryV2ClassificationsIDRequest{
        ID: "d2ed0289-21cd-4dc6-9260-1fb576b0d5f0",
        IncludeLicensedContent: operations.GetDiscoveryV2ClassificationsIDIncludeLicensedContentEnumNo.ToPointer(),
        Locale: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDiscoveryV2Events

Find events and filter your search by location, date, availability, and much more.

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
    res, err := s.SDK.GetDiscoveryV2Events(ctx, operations.GetDiscoveryV2EventsRequest{
        AttractionID: sdk.String("aut"),
        City: sdk.String("Hesselshire"),
        ClassificationID: []interface{}{
            "nobis",
            "dolores",
            "quis",
        },
        ClassificationName: []interface{}{
            "dignissimos",
            "eaque",
            "quis",
        },
        ClientVisibility: sdk.String("nesciunt"),
        CountryCode: sdk.String("CK"),
        DmaID: sdk.String("perferendis"),
        EndDateTime: sdk.String("dolores"),
        GeoPoint: sdk.String("minus"),
        ID: sdk.String("73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48"),
        IncludeLicensedContent: operations.GetDiscoveryV2EventsIncludeLicensedContentEnumYes.ToPointer(),
        IncludeSpellcheck: operations.GetDiscoveryV2EventsIncludeSpellcheckEnumYes.ToPointer(),
        IncludeTBA: operations.GetDiscoveryV2EventsIncludeTbaEnumYes.ToPointer(),
        IncludeTBD: operations.GetDiscoveryV2EventsIncludeTbdEnumYes.ToPointer(),
        IncludeTest: operations.GetDiscoveryV2EventsIncludeTestEnumYes.ToPointer(),
        Keyword: sdk.String("ipsum"),
        Latlong: sdk.String("hic"),
        Locale: sdk.String("excepturi"),
        MarketID: sdk.String("cum"),
        OnsaleEndDateTime: sdk.String("voluptate"),
        OnsaleOnAfterStartDate: sdk.String("dignissimos"),
        OnsaleOnStartDate: sdk.String("reiciendis"),
        OnsaleStartDateTime: sdk.String("amet"),
        Page: sdk.String("dolorum"),
        PostalCode: sdk.String("00044"),
        PromoterID: sdk.String("quaerat"),
        Radius: sdk.String("accusamus"),
        SegmentID: sdk.String("quidem"),
        SegmentName: sdk.String("voluptatibus"),
        Size: sdk.String("voluptas"),
        Sort: sdk.String("natus"),
        Source: operations.GetDiscoveryV2EventsSourceEnumTicketmaster.ToPointer(),
        StartDateTime: sdk.String("atque"),
        StateCode: sdk.String("sit"),
        Unit: operations.GetDiscoveryV2EventsUnitEnumKm.ToPointer(),
        VenueID: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDiscoveryV2EventsID

Get details for a specific event using the unique identifier for the event. This includes the venue and location, the attraction(s), and the Ticketmaster Website URL for purchasing tickets for the event.

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
    res, err := s.SDK.GetDiscoveryV2EventsID(ctx, operations.GetDiscoveryV2EventsIDRequest{
        ID: "ba77a89e-bf73-47ae-8203-ce5e6a95d8a0",
        IncludeLicensedContent: operations.GetDiscoveryV2EventsIDIncludeLicensedContentEnumNo.ToPointer(),
        Locale: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDiscoveryV2Venues

Find venues and filter your search by name, and much more.

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
    res, err := s.SDK.GetDiscoveryV2Venues(ctx, operations.GetDiscoveryV2VenuesRequest{
        CountryCode: sdk.String("ET"),
        GeoPoint: sdk.String("vel"),
        ID: sdk.String("ce2af7a7-3cf3-4be4-93f8-70b326b5a734"),
        IncludeLicensedContent: operations.GetDiscoveryV2VenuesIncludeLicensedContentEnumYes.ToPointer(),
        IncludeSpellcheck: operations.GetDiscoveryV2VenuesIncludeSpellcheckEnumNo.ToPointer(),
        IncludeTest: operations.GetDiscoveryV2VenuesIncludeTestEnumOnly.ToPointer(),
        Keyword: sdk.String("pariatur"),
        Latlong: sdk.String("soluta"),
        Locale: sdk.String("dicta"),
        Page: sdk.String("laborum"),
        Radius: sdk.String("totam"),
        Size: sdk.String("incidunt"),
        Sort: sdk.String("aspernatur"),
        Source: operations.GetDiscoveryV2VenuesSourceEnumTicketmaster.ToPointer(),
        StateCode: sdk.String("distinctio"),
        Unit: operations.GetDiscoveryV2VenuesUnitEnumKm.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDiscoveryV2VenuesID

Get details for a specific venue using the unique identifier for the venue.

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
    res, err := s.SDK.GetDiscoveryV2VenuesID(ctx, operations.GetDiscoveryV2VenuesIDRequest{
        ID: "679d2322-715b-4f0c-bb1e-31b8b90f3443",
        IncludeLicensedContent: operations.GetDiscoveryV2VenuesIDIncludeLicensedContentEnumNo.ToPointer(),
        Locale: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
