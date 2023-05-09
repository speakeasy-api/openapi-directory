# Bookings

### Available Operations

* [CancelBooking](#cancelbooking) - CancelBooking
* [CreateBooking](#createbooking) - CreateBooking
* [ListTeamMemberBookingProfiles](#listteammemberbookingprofiles) - ListTeamMemberBookingProfiles
* [RetrieveBooking](#retrievebooking) - RetrieveBooking
* [RetrieveBusinessBookingProfile](#retrievebusinessbookingprofile) - RetrieveBusinessBookingProfile
* [RetrieveTeamMemberBookingProfile](#retrieveteammemberbookingprofile) - RetrieveTeamMemberBookingProfile
* [SearchAvailability](#searchavailability) - SearchAvailability
* [UpdateBooking](#updatebooking) - UpdateBooking

## CancelBooking

Cancels an existing booking.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Bookings.CancelBooking(ctx, operations.CancelBookingRequest{
        CancelBookingRequest: shared.CancelBookingRequest{
            BookingVersion: sdk.Int64(847252),
            IdempotencyKey: sdk.String("vel"),
        },
        BookingID: "error",
    }, operations.CancelBookingSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelBookingResponse != nil {
        // handle response
    }
}
```

## CreateBooking

Creates a booking.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Bookings.CreateBooking(ctx, shared.CreateBookingRequest{
        Booking: shared.Booking{
            AppointmentSegments: []shared.AppointmentSegment{
                shared.AppointmentSegment{
                    DurationMinutes: 384382,
                    ServiceVariationID: "iure",
                    ServiceVariationVersion: 297534,
                    TeamMemberID: "debitis",
                },
                shared.AppointmentSegment{
                    DurationMinutes: 56713,
                    ServiceVariationID: "delectus",
                    ServiceVariationVersion: 272656,
                    TeamMemberID: "suscipit",
                },
                shared.AppointmentSegment{
                    DurationMinutes: 477665,
                    ServiceVariationID: "minus",
                    ServiceVariationVersion: 812169,
                    TeamMemberID: "voluptatum",
                },
            },
            CreatedAt: sdk.String("iusto"),
            CustomerID: sdk.String("excepturi"),
            CustomerNote: sdk.String("nisi"),
            ID: sdk.String("ed151a05-dfc2-4ddf-bcc7-8ca1ba928fc8"),
            LocationID: sdk.String("beatae"),
            SellerNote: sdk.String("commodi"),
            StartAt: sdk.String("molestiae"),
            Status: sdk.String("modi"),
            UpdatedAt: sdk.String("qui"),
            Version: sdk.Int64(774234),
        },
        IdempotencyKey: sdk.String("cum"),
    }, operations.CreateBookingSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBookingResponse != nil {
        // handle response
    }
}
```

## ListTeamMemberBookingProfiles

Lists booking profiles for team members.

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
    res, err := s.Bookings.ListTeamMemberBookingProfiles(ctx, operations.ListTeamMemberBookingProfilesRequest{
        BookableOnly: sdk.Bool(false),
        Cursor: sdk.String("esse"),
        Limit: sdk.Int64(216550),
        LocationID: sdk.String("excepturi"),
    }, operations.ListTeamMemberBookingProfilesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTeamMemberBookingProfilesResponse != nil {
        // handle response
    }
}
```

## RetrieveBooking

Retrieves a booking.

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
    res, err := s.Bookings.RetrieveBooking(ctx, operations.RetrieveBookingRequest{
        BookingID: "aspernatur",
    }, operations.RetrieveBookingSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveBookingResponse != nil {
        // handle response
    }
}
```

## RetrieveBusinessBookingProfile

Retrieves a seller's booking profile.

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
    res, err := s.Bookings.RetrieveBusinessBookingProfile(ctx, operations.RetrieveBusinessBookingProfileSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveBusinessBookingProfileResponse != nil {
        // handle response
    }
}
```

## RetrieveTeamMemberBookingProfile

Retrieves a team member's booking profile.

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
    res, err := s.Bookings.RetrieveTeamMemberBookingProfile(ctx, operations.RetrieveTeamMemberBookingProfileRequest{
        TeamMemberID: "perferendis",
    }, operations.RetrieveTeamMemberBookingProfileSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveTeamMemberBookingProfileResponse != nil {
        // handle response
    }
}
```

## SearchAvailability

Searches for availabilities for booking.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Bookings.SearchAvailability(ctx, shared.SearchAvailabilityRequest{
        Query: shared.SearchAvailabilityQuery{
            Filter: shared.SearchAvailabilityFilter{
                BookingID: sdk.String("ad"),
                LocationID: sdk.String("natus"),
                SegmentFilters: []shared.SegmentFilter{
                    shared.SegmentFilter{
                        ServiceVariationID: "iste",
                        TeamMemberIDFilter: &shared.FilterValue{
                            All: []string{
                                "natus",
                            },
                            Any: []string{
                                "hic",
                                "saepe",
                            },
                            None: []string{
                                "in",
                                "corporis",
                                "iste",
                            },
                        },
                    },
                },
                StartAtRange: shared.TimeRange{
                    EndAt: sdk.String("iure"),
                    StartAt: sdk.String("saepe"),
                },
            },
        },
    }, operations.SearchAvailabilitySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchAvailabilityResponse != nil {
        // handle response
    }
}
```

## UpdateBooking

Updates a booking.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Bookings.UpdateBooking(ctx, operations.UpdateBookingRequest{
        UpdateBookingRequest: shared.UpdateBookingRequest{
            Booking: shared.Booking{
                AppointmentSegments: []shared.AppointmentSegment{
                    shared.AppointmentSegment{
                        DurationMinutes: 99280,
                        ServiceVariationID: "ipsa",
                        ServiceVariationVersion: 969810,
                        TeamMemberID: "est",
                    },
                    shared.AppointmentSegment{
                        DurationMinutes: 653140,
                        ServiceVariationID: "laborum",
                        ServiceVariationVersion: 170909,
                        TeamMemberID: "dolorem",
                    },
                    shared.AppointmentSegment{
                        DurationMinutes: 358152,
                        ServiceVariationID: "explicabo",
                        ServiceVariationVersion: 750686,
                        TeamMemberID: "enim",
                    },
                },
                CreatedAt: sdk.String("omnis"),
                CustomerID: sdk.String("nemo"),
                CustomerNote: sdk.String("minima"),
                ID: sdk.String("907aff1a-3a2f-4a94-a773-9251aa52c3f5"),
                LocationID: sdk.String("id"),
                SellerNote: sdk.String("possimus"),
                StartAt: sdk.String("aut"),
                Status: sdk.String("quasi"),
                UpdatedAt: sdk.String("error"),
                Version: sdk.Int64(837945),
            },
            IdempotencyKey: sdk.String("laborum"),
        },
        BookingID: "quasi",
    }, operations.UpdateBookingSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBookingResponse != nil {
        // handle response
    }
}
```
