# CashDrawers

### Available Operations

* [ListCashDrawerShiftEvents](#listcashdrawershiftevents) - ListCashDrawerShiftEvents
* [ListCashDrawerShifts](#listcashdrawershifts) - ListCashDrawerShifts
* [RetrieveCashDrawerShift](#retrievecashdrawershift) - RetrieveCashDrawerShift

## ListCashDrawerShiftEvents

Provides a paginated list of events for a single cash drawer shift.

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
    res, err := s.CashDrawers.ListCashDrawerShiftEvents(ctx, operations.ListCashDrawerShiftEventsRequest{
        Cursor: sdk.String("aliquid"),
        Limit: sdk.Int64(592042),
        LocationID: "necessitatibus",
        ShiftID: "sint",
    }, operations.ListCashDrawerShiftEventsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCashDrawerShiftEventsResponse != nil {
        // handle response
    }
}
```

## ListCashDrawerShifts

Provides the details for all of the cash drawer shifts for a location
in a date range.

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
    res, err := s.CashDrawers.ListCashDrawerShifts(ctx, operations.ListCashDrawerShiftsRequest{
        BeginTime: sdk.String("officia"),
        Cursor: sdk.String("dolor"),
        EndTime: sdk.String("debitis"),
        Limit: sdk.Int64(952749),
        LocationID: "dolorum",
        SortOrder: sdk.String("in"),
    }, operations.ListCashDrawerShiftsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCashDrawerShiftsResponse != nil {
        // handle response
    }
}
```

## RetrieveCashDrawerShift

Provides the summary details for a single cash drawer shift. See
[ListCashDrawerShiftEvents](https://developer.squareup.com/reference/square_2021-08-18/cash-drawers-api/list-cash-drawer-shift-events) for a list of cash drawer shift events.

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
    res, err := s.CashDrawers.RetrieveCashDrawerShift(ctx, operations.RetrieveCashDrawerShiftRequest{
        LocationID: "in",
        ShiftID: "illum",
    }, operations.RetrieveCashDrawerShiftSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveCashDrawerShiftResponse != nil {
        // handle response
    }
}
```
