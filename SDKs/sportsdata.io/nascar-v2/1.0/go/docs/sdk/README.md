# SDK

### Available Operations

* [DriverDetails](#driverdetails) - Driver Details
* [DriverRaceProjectionsEntryList](#driverraceprojectionsentrylist) - Driver Race Projections (Entry List)
* [Drivers](#drivers) - Drivers
* [RaceResults](#raceresults) - Race Results
* [RacesSchedule](#racesschedule) - Races / Schedule
* [Series](#series) - Series

## DriverDetails

Driver Details

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
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DriverDetails(ctx, operations.DriverDetailsRequest{
        Driverid: "distinctio",
        Format: operations.DriverDetailsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Driver != nil {
        // handle response
    }
}
```

## DriverRaceProjectionsEntryList

Driver Race Projections (Entry List)

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
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DriverRaceProjectionsEntryList(ctx, operations.DriverRaceProjectionsEntryListRequest{
        Format: operations.DriverRaceProjectionsEntryListFormatEnumJSON,
        Raceid: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DriverRaceProjections != nil {
        // handle response
    }
}
```

## Drivers

Drivers

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
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Drivers(ctx, operations.DriversRequest{
        Format: operations.DriversFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Drivers != nil {
        // handle response
    }
}
```

## RaceResults

Race Results

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
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RaceResults(ctx, operations.RaceResultsRequest{
        Format: operations.RaceResultsFormatEnumJSON,
        Raceid: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RaceResult != nil {
        // handle response
    }
}
```

## RacesSchedule

Races / Schedule

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
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RacesSchedule(ctx, operations.RacesScheduleRequest{
        Format: operations.RacesScheduleFormatEnumJSON,
        Season: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Races != nil {
        // handle response
    }
}
```

## Series

Series

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
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Series(ctx, operations.SeriesRequest{
        Format: operations.SeriesFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Series != nil {
        // handle response
    }
}
```
