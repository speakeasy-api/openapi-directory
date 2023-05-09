# ByUsage

### Available Operations

* [GetOrganizationSummaryTopClientsByUsage](#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [GetOrganizationSummaryTopClientsManufacturersByUsage](#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [GetOrganizationSummaryTopDevicesByUsage](#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [GetOrganizationSummaryTopDevicesModelsByUsage](#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [GetOrganizationSummaryTopSsidsByUsage](#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range

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
    res, err := s.ByUsage.GetOrganizationSummaryTopClientsByUsage(ctx, operations.GetOrganizationSummaryTopClientsByUsageRequest{
        OrganizationID: "quas",
        T0: sdk.String("maxime"),
        T1: sdk.String("recusandae"),
        Timespan: sdk.Float32(7674.66),
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
    res, err := s.ByUsage.GetOrganizationSummaryTopClientsManufacturersByUsage(ctx, operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest{
        OrganizationID: "doloremque",
        T0: sdk.String("totam"),
        T1: sdk.String("iure"),
        Timespan: sdk.Float32(9829.27),
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
    res, err := s.ByUsage.GetOrganizationSummaryTopDevicesByUsage(ctx, operations.GetOrganizationSummaryTopDevicesByUsageRequest{
        OrganizationID: "est",
        T0: sdk.String("fugit"),
        T1: sdk.String("veritatis"),
        Timespan: sdk.Float32(8996.52),
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
    res, err := s.ByUsage.GetOrganizationSummaryTopDevicesModelsByUsage(ctx, operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest{
        OrganizationID: "iste",
        T0: sdk.String("dicta"),
        T1: sdk.String("ipsam"),
        Timespan: sdk.Float32(1631.81),
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
    res, err := s.ByUsage.GetOrganizationSummaryTopSsidsByUsage(ctx, operations.GetOrganizationSummaryTopSsidsByUsageRequest{
        OrganizationID: "cumque",
        T0: sdk.String("quidem"),
        T1: sdk.String("non"),
        Timespan: sdk.Float32(1095.69),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopSsidsByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
