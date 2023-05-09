# Summary

### Available Operations

* [GetOrganizationSummaryTopAppliancesByUtilization](#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.
* [GetOrganizationSummaryTopClientsByUsage](#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [GetOrganizationSummaryTopClientsManufacturersByUsage](#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [GetOrganizationSummaryTopDevicesByUsage](#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [GetOrganizationSummaryTopDevicesModelsByUsage](#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [GetOrganizationSummaryTopSsidsByUsage](#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [GetOrganizationSummaryTopSwitchesByEnergyUsage](#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

## GetOrganizationSummaryTopAppliancesByUtilization

Return the top 10 appliances sorted by utilization over given time range.

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
    res, err := s.Summary.GetOrganizationSummaryTopAppliancesByUtilization(ctx, operations.GetOrganizationSummaryTopAppliancesByUtilizationRequest{
        OrganizationID: "laborum",
        T0: sdk.String("exercitationem"),
        T1: sdk.String("eligendi"),
        Timespan: sdk.Float32(9829.17),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopClientsByUsage

Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

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
    res, err := s.Summary.GetOrganizationSummaryTopClientsByUsage(ctx, operations.GetOrganizationSummaryTopClientsByUsageRequest{
        OrganizationID: "minus",
        T0: sdk.String("at"),
        T1: sdk.String("similique"),
        Timespan: sdk.Float32(7303.81),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopClientsByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopClientsManufacturersByUsage

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

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
    res, err := s.Summary.GetOrganizationSummaryTopClientsManufacturersByUsage(ctx, operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest{
        OrganizationID: "nihil",
        T0: sdk.String("debitis"),
        T1: sdk.String("rem"),
        Timespan: sdk.Float32(7711.19),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopDevicesByUsage

Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.

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
    res, err := s.Summary.GetOrganizationSummaryTopDevicesByUsage(ctx, operations.GetOrganizationSummaryTopDevicesByUsageRequest{
        OrganizationID: "recusandae",
        T0: sdk.String("eligendi"),
        T1: sdk.String("maiores"),
        Timespan: sdk.Float32(4499.93),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopDevicesByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopDevicesModelsByUsage

Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.

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
    res, err := s.Summary.GetOrganizationSummaryTopDevicesModelsByUsage(ctx, operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest{
        OrganizationID: "quibusdam",
        T0: sdk.String("sed"),
        T1: sdk.String("ullam"),
        Timespan: sdk.Float32(5109.1),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopSsidsByUsage

Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.

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
    res, err := s.Summary.GetOrganizationSummaryTopSsidsByUsage(ctx, operations.GetOrganizationSummaryTopSsidsByUsageRequest{
        OrganizationID: "corrupti",
        T0: sdk.String("quibusdam"),
        T1: sdk.String("ab"),
        Timespan: sdk.Float32(9315.71),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopSsidsByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopSwitchesByEnergyUsage

Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.

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
    res, err := s.Summary.GetOrganizationSummaryTopSwitchesByEnergyUsage(ctx, operations.GetOrganizationSummaryTopSwitchesByEnergyUsageRequest{
        OrganizationID: "adipisci",
        T0: sdk.String("dicta"),
        T1: sdk.String("fugiat"),
        Timespan: sdk.Float32(2608.18),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
