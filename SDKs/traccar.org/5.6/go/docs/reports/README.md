# Reports

## Overview

Reports generation

### Available Operations

* [GetReportsEvents](#getreportsevents) - Fetch a list of Events within the time period for the Devices or Groups
* [GetReportsRoute](#getreportsroute) - Fetch a list of Positions within the time period for the Devices or Groups
* [GetReportsStops](#getreportsstops) - Fetch a list of ReportStops within the time period for the Devices or Groups
* [GetReportsSummary](#getreportssummary) - Fetch a list of ReportSummary within the time period for the Devices or Groups
* [GetReportsTrips](#getreportstrips) - Fetch a list of ReportTrips within the time period for the Devices or Groups

## GetReportsEvents

At least one _deviceId_ or one _groupId_ must be passed

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.GetReportsEvents(ctx, operations.GetReportsEventsRequest{
        DeviceID: []int64{
            704415,
            596656,
            31838,
        },
        From: types.MustTimeFromString("2022-07-04T15:50:14.407Z"),
        GroupID: []int64{
            621479,
            50370,
            577229,
        },
        To: types.MustTimeFromString("2022-07-11T08:07:03.616Z"),
        Type: []string{
            "earum",
            "modi",
            "iste",
            "dolorum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## GetReportsRoute

At least one _deviceId_ or one _groupId_ must be passed

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.GetReportsRoute(ctx, operations.GetReportsRouteRequest{
        DeviceID: []int64{
            864282,
            589910,
            750844,
        },
        From: types.MustTimeFromString("2021-01-26T22:08:21.462Z"),
        GroupID: []int64{
            554242,
            398221,
        },
        To: types.MustTimeFromString("2022-10-16T09:46:06.582Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Positions != nil {
        // handle response
    }
}
```

## GetReportsStops

At least one _deviceId_ or one _groupId_ must be passed

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.GetReportsStops(ctx, operations.GetReportsStopsRequest{
        DeviceID: []int64{
            186193,
        },
        From: types.MustTimeFromString("2022-01-21T07:17:52.299Z"),
        GroupID: []int64{
            739551,
            452109,
            490459,
        },
        To: types.MustTimeFromString("2022-04-26T23:32:35.989Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportStops != nil {
        // handle response
    }
}
```

## GetReportsSummary

At least one _deviceId_ or one _groupId_ must be passed

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.GetReportsSummary(ctx, operations.GetReportsSummaryRequest{
        DeviceID: []int64{
            254356,
            85295,
            58029,
        },
        From: types.MustTimeFromString("2022-07-26T10:30:36.625Z"),
        GroupID: []int64{
            311796,
            881005,
        },
        To: types.MustTimeFromString("2021-01-18T05:23:42.271Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportSummaries != nil {
        // handle response
    }
}
```

## GetReportsTrips

At least one _deviceId_ or one _groupId_ must be passed

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.GetReportsTrips(ctx, operations.GetReportsTripsRequest{
        DeviceID: []int64{
            617658,
            179603,
        },
        From: types.MustTimeFromString("2022-12-13T23:37:42.244Z"),
        GroupID: []int64{
            67249,
            743835,
            679393,
            478596,
        },
        To: types.MustTimeFromString("2022-04-28T20:45:55.086Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportTrips != nil {
        // handle response
    }
}
```
