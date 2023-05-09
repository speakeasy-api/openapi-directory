# Overview

### Available Operations

* [GetDeviceCameraAnalyticsOverview](#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [GetNetworkClientsOverview](#getnetworkclientsoverview) - Return overview statistics for network clients
* [GetNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [GetNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [GetOrganizationAdaptivePolicyOverview](#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [GetOrganizationAPIRequestsOverview](#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [GetOrganizationAPIRequestsOverviewResponseCodesByInterval](#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period
* [GetOrganizationClientsOverview](#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [GetOrganizationDevicesStatusesOverview](#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [GetOrganizationLicensesOverview](#getorganizationlicensesoverview) - Return an overview of the license state for an organization

## GetDeviceCameraAnalyticsOverview

Returns an overview of aggregate analytics data for a timespan

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
    res, err := s.Overview.GetDeviceCameraAnalyticsOverview(ctx, operations.GetDeviceCameraAnalyticsOverviewRequest{
        ObjectType: operations.GetDeviceCameraAnalyticsOverviewObjectTypeEnumVehicle.ToPointer(),
        Serial: "facere",
        T0: sdk.String("beatae"),
        T1: sdk.String("unde"),
        Timespan: sdk.Float32(537.12),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCameraAnalyticsOverview200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClientsOverview

Return overview statistics for network clients

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
    res, err := s.Overview.GetNetworkClientsOverview(ctx, operations.GetNetworkClientsOverviewRequest{
        NetworkID: "accusantium",
        Resolution: sdk.Int64(865286),
        T0: sdk.String("quisquam"),
        T1: sdk.String("perspiciatis"),
        Timespan: sdk.Float32(3933.39),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSensorAlertsCurrentOverviewByMetric

Return an overview of currently alerting sensors by metric

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
    res, err := s.Overview.GetNetworkSensorAlertsCurrentOverviewByMetric(ctx, operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest{
        NetworkID: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSensorAlertsOverviewByMetric

Return an overview of alert occurrences over a timespan, by metric

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
    res, err := s.Overview.GetNetworkSensorAlertsOverviewByMetric(ctx, operations.GetNetworkSensorAlertsOverviewByMetricRequest{
        Interval: sdk.Int64(314113),
        NetworkID: "ut",
        T0: sdk.String("laudantium"),
        T1: sdk.String("assumenda"),
        Timespan: sdk.Float32(6715.61),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyOverview

Returns adaptive policy aggregate statistics for an organization

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
    res, err := s.Overview.GetOrganizationAdaptivePolicyOverview(ctx, operations.GetOrganizationAdaptivePolicyOverviewRequest{
        OrganizationID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationAPIRequestsOverview

Return an aggregated overview of API requests data

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
    res, err := s.Overview.GetOrganizationAPIRequestsOverview(ctx, operations.GetOrganizationAPIRequestsOverviewRequest{
        OrganizationID: "recusandae",
        T0: sdk.String("occaecati"),
        T1: sdk.String("sit"),
        Timespan: sdk.Float32(3909.06),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequestsOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationAPIRequestsOverviewResponseCodesByInterval

Tracks organizations' API requests by response code across a given time period

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
    res, err := s.Overview.GetOrganizationAPIRequestsOverviewResponseCodesByInterval(ctx, operations.GetOrganizationAPIRequestsOverviewResponseCodesByIntervalRequest{
        AdminIds: []string{
            "culpa",
            "doloremque",
        },
        Interval: sdk.Int64(714127),
        OperationIds: []string{
            "necessitatibus",
            "facilis",
            "aliquam",
            "tempora",
        },
        OrganizationID: "delectus",
        SourceIps: []string{
            "perferendis",
            "culpa",
            "laborum",
            "id",
        },
        T0: sdk.String("quas"),
        T1: sdk.String("nobis"),
        Timespan: sdk.Float32(1376.13),
        UserAgent: sdk.String("consequuntur"),
        Version: operations.GetOrganizationAPIRequestsOverviewResponseCodesByIntervalVersionEnumOne.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationClientsOverview

Return summary information around client data usage (in mb) across the given organization.

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
    res, err := s.Overview.GetOrganizationClientsOverview(ctx, operations.GetOrganizationClientsOverviewRequest{
        OrganizationID: "unde",
        T0: sdk.String("alias"),
        T1: sdk.String("totam"),
        Timespan: sdk.Float32(1566.09),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationClientsOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationDevicesStatusesOverview

Return an overview of current device statuses

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
    res, err := s.Overview.GetOrganizationDevicesStatusesOverview(ctx, operations.GetOrganizationDevicesStatusesOverviewRequest{
        NetworkIds: []string{
            "ea",
            "libero",
        },
        OrganizationID: "veritatis",
        ProductTypes: []GetOrganizationDevicesStatusesOverviewProductTypesEnum{
            operations.GetOrganizationDevicesStatusesOverviewProductTypesEnumWireless,
            operations.GetOrganizationDevicesStatusesOverviewProductTypesEnumSensor,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationDevicesStatusesOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationLicensesOverview

Return an overview of the license state for an organization

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
    res, err := s.Overview.GetOrganizationLicensesOverview(ctx, operations.GetOrganizationLicensesOverviewRequest{
        OrganizationID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicensesOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```
