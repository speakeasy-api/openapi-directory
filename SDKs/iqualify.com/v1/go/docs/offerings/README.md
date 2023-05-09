# Offerings

### Available Operations

* [GetOfferings](#getofferings) - Find current, past and future offerings
* [GetOfferingsCurrent](#getofferingscurrent) - Find active offerings
* [GetOfferingsFuture](#getofferingsfuture) - Find scheduled offerings
* [GetOfferingsInfoTextPattern](#getofferingsinfotextpattern) - Find offerings where info field matches the specified textPattern
* [GetOfferingsPast](#getofferingspast) - Find past offerings
* [GetOfferingsOfferingID](#getofferingsofferingid) - Find offering by ID
* [PatchOfferingsOfferingID](#patchofferingsofferingid) - Update offering
* [PostOfferings](#postofferings) - Create offering

## GetOfferings

Responds with all offerings for your organisation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Offerings.GetOfferings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponses != nil {
        // handle response
    }
}
```

## GetOfferingsCurrent

Responds with active offerings for your organisation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Offerings.GetOfferingsCurrent(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponses != nil {
        // handle response
    }
}
```

## GetOfferingsFuture

Responds with scheduled offerings for your organisation. Scheduled offerings have a start date after today's date (inclusive).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Offerings.GetOfferingsFuture(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponses != nil {
        // handle response
    }
}
```

## GetOfferingsInfoTextPattern

Find offerings where info field matches the specified text pattern.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Offerings.GetOfferingsInfoTextPattern(ctx, operations.GetOfferingsInfoTextPatternRequest{
        TextPattern: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PortfolioActivations != nil {
        // handle response
    }
}
```

## GetOfferingsPast

Responds with past offerings for your organisation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Offerings.GetOfferingsPast(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingID

Responds with an offering matching the offeringId.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Offerings.GetOfferingsOfferingID(ctx, operations.GetOfferingsOfferingIDRequest{
        OfferingID: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponse != nil {
        // handle response
    }
}
```

## PatchOfferingsOfferingID

Updates the offering.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Offerings.PatchOfferingsOfferingID(ctx, operations.PatchOfferingsOfferingIDRequest{
        Offering: shared.Offering{
            Badge: &shared.OfferingBadge{
                BadgeExpiry: &shared.BadgeExpiry{
                    ExpirationDate: types.MustTimeFromString("2021-10-07T01:21:59.434Z"),
                    Expires: sdk.Bool(false),
                    ExpiryType: shared.BadgeExpiryExpiryTypeEnumDate.ToPointer(),
                    TimeframeAmount: sdk.Float64(6754.39),
                    TimeframeUnit: shared.BadgeExpiryTimeframeUnitEnumYears.ToPointer(),
                },
                Description: sdk.String("non"),
                RequiresApproval: sdk.Bool(false),
                Title: sdk.String("Ms."),
            },
            ContentID: sdk.String("enim"),
            Description: sdk.String("accusamus"),
            EarlyCloseOffDate: types.MustTimeFromString("2020-12-03T16:16:10.882Z"),
            End: types.MustTimeFromString("2021-07-20T13:32:41.687Z"),
            HasEarlyCloseOff: sdk.Bool(false),
            Identifier: sdk.String("id"),
            IsReadonly: sdk.Bool(false),
            Metadata: &shared.OfferingMetadata1{
                Category: sdk.String("blanditiis"),
                Level: sdk.String("deleniti"),
                Tags: []string{
                    "amet",
                    "deserunt",
                    "nisi",
                    "vel",
                },
                Topic: sdk.String("natus"),
            },
            Name: sdk.String("Fernando Aufderhar"),
            Overview: sdk.String("distinctio"),
            RootContentID: sdk.String("id"),
            Start: types.MustTimeFromString("2022-09-17T02:55:11.783Z"),
            TrailerVideoURL: sdk.String("suscipit"),
            UseRelativeDates: sdk.Bool(false),
        },
        OfferingID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponse != nil {
        // handle response
    }
}
```

## PostOfferings

Creates a new offering.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Offerings.PostOfferings(ctx, shared.OfferingRequired{
        Badge: &shared.OfferingRequiredBadge{
            BadgeExpiry: &shared.BadgeExpiry{
                ExpirationDate: types.MustTimeFromString("2022-02-21T23:58:20.071Z"),
                Expires: sdk.Bool(false),
                ExpiryType: shared.BadgeExpiryExpiryTypeEnumTimeframe.ToPointer(),
                TimeframeAmount: sdk.Float64(1354.74),
                TimeframeUnit: shared.BadgeExpiryTimeframeUnitEnumDays.ToPointer(),
            },
            Description: sdk.String("magnam"),
            RequiresApproval: sdk.Bool(false),
            Title: sdk.String("Mr."),
        },
        ContentID: sdk.String("excepturi"),
        CreateDefaultChannels: sdk.Bool(false),
        Description: sdk.String("ullam"),
        EarlyCloseOffDate: types.MustTimeFromString("2021-11-24T04:10:44.711Z"),
        End: types.MustTimeFromString("2022-12-07T10:53:17.121Z"),
        HasEarlyCloseOff: sdk.Bool(false),
        Identifier: sdk.String("mollitia"),
        IsReadonly: sdk.Bool(false),
        Metadata: &shared.OfferingRequiredMetadata{
            Category: sdk.String("reiciendis"),
            Level: sdk.String("mollitia"),
            Tags: []string{
                "eum",
                "dolor",
            },
            Topic: sdk.String("necessitatibus"),
        },
        Name: sdk.String("Vivian Boyle"),
        RootContentID: sdk.String("debitis"),
        Start: types.MustTimeFromString("2022-03-12T17:44:26.081Z"),
        TrailerVideoURL: sdk.String("deleniti"),
        UseRelativeDates: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponse != nil {
        // handle response
    }
}
```
