# Readings

### Available Operations

* [GetOrganizationSensorReadingsHistory](#getorganizationsensorreadingshistory) - Return all reported readings from sensors in a given timespan, sorted by timestamp
* [GetOrganizationSensorReadingsLatest](#getorganizationsensorreadingslatest) - Return the latest available reading for each metric from each sensor, sorted by sensor serial

## GetOrganizationSensorReadingsHistory

Return all reported readings from sensors in a given timespan, sorted by timestamp

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Readings.GetOrganizationSensorReadingsHistory(ctx, operations.GetOrganizationSensorReadingsHistoryRequest{
        EndingBefore: sdk.String("quos"),
        Metrics: []string{
            "doloribus",
            "a",
            "maiores",
        },
        NetworkIds: []string{
            "tempora",
            "necessitatibus",
        },
        OrganizationID: "minus",
        PerPage: sdk.Int64(527229),
        Serials: []string{
            "aliquam",
            "temporibus",
            "sapiente",
            "autem",
        },
        StartingAfter: sdk.String("et"),
        T0: sdk.String("recusandae"),
        T1: sdk.String("error"),
        Timespan: sdk.Float32(3767.76),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSensorReadingsHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSensorReadingsLatest

Return the latest available reading for each metric from each sensor, sorted by sensor serial

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Readings.GetOrganizationSensorReadingsLatest(ctx, operations.GetOrganizationSensorReadingsLatestRequest{
        EndingBefore: sdk.String("aut"),
        Metrics: []string{
            "natus",
            "unde",
            "tempore",
        },
        NetworkIds: []string{
            "accusamus",
            "amet",
        },
        OrganizationID: "veritatis",
        PerPage: sdk.Int64(685354),
        Serials: []string{
            "saepe",
        },
        StartingAfter: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSensorReadingsLatest200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
