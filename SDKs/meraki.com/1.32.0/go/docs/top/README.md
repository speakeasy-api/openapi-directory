# Top

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
    res, err := s.Top.GetOrganizationSummaryTopAppliancesByUtilization(ctx, operations.GetOrganizationSummaryTopAppliancesByUtilizationRequest{
        OrganizationID: "vero",
        T0: sdk.String("quos"),
        T1: sdk.String("beatae"),
        Timespan: sdk.Float32(5608.64),
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
    res, err := s.Top.GetOrganizationSummaryTopClientsByUsage(ctx, operations.GetOrganizationSummaryTopClientsByUsageRequest{
        OrganizationID: "consequatur",
        T0: sdk.String("dolorem"),
        T1: sdk.String("delectus"),
        Timespan: sdk.Float32(97.84),
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
    res, err := s.Top.GetOrganizationSummaryTopClientsManufacturersByUsage(ctx, operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest{
        OrganizationID: "eum",
        T0: sdk.String("voluptate"),
        T1: sdk.String("omnis"),
        Timespan: sdk.Float32(5180.03),
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
    res, err := s.Top.GetOrganizationSummaryTopDevicesByUsage(ctx, operations.GetOrganizationSummaryTopDevicesByUsageRequest{
        OrganizationID: "a",
        T0: sdk.String("hic"),
        T1: sdk.String("iusto"),
        Timespan: sdk.Float32(266.81),
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
    res, err := s.Top.GetOrganizationSummaryTopDevicesModelsByUsage(ctx, operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest{
        OrganizationID: "similique",
        T0: sdk.String("sint"),
        T1: sdk.String("facere"),
        Timespan: sdk.Float32(9995.41),
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
    res, err := s.Top.GetOrganizationSummaryTopSsidsByUsage(ctx, operations.GetOrganizationSummaryTopSsidsByUsageRequest{
        OrganizationID: "hic",
        T0: sdk.String("dicta"),
        T1: sdk.String("eligendi"),
        Timespan: sdk.Float32(3318.33),
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
    res, err := s.Top.GetOrganizationSummaryTopSwitchesByEnergyUsage(ctx, operations.GetOrganizationSummaryTopSwitchesByEnergyUsageRequest{
        OrganizationID: "architecto",
        T0: sdk.String("voluptatum"),
        T1: sdk.String("ad"),
        Timespan: sdk.Float32(273.11),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
