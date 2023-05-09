# Insight

### Available Operations

* [CreateOrganizationInsightMonitoredMediaServer](#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [DeleteOrganizationInsightMonitoredMediaServer](#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
* [GetNetworkInsightApplicationHealthByTime](#getnetworkinsightapplicationhealthbytime) - Get application health by time
* [GetOrganizationInsightApplications](#getorganizationinsightapplications) - List all Insight tracked applications
* [GetOrganizationInsightMonitoredMediaServer](#getorganizationinsightmonitoredmediaserver) - Return a monitored media server for this organization
* [GetOrganizationInsightMonitoredMediaServers](#getorganizationinsightmonitoredmediaservers) - List the monitored media servers for this organization
* [UpdateOrganizationInsightMonitoredMediaServer](#updateorganizationinsightmonitoredmediaserver) - Update a monitored media server for this organization

## CreateOrganizationInsightMonitoredMediaServer

Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.

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
    res, err := s.Insight.CreateOrganizationInsightMonitoredMediaServer(ctx, operations.CreateOrganizationInsightMonitoredMediaServerRequest{
        RequestBody: operations.CreateOrganizationInsightMonitoredMediaServerRequestBody{
            Address: "28358 Cormier Fort",
            BestEffortMonitoringEnabled: sdk.Bool(false),
            Name: "Muriel Braun",
        },
        OrganizationID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInsightMonitoredMediaServer201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteOrganizationInsightMonitoredMediaServer

Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.

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
    res, err := s.Insight.DeleteOrganizationInsightMonitoredMediaServer(ctx, operations.DeleteOrganizationInsightMonitoredMediaServerRequest{
        MonitoredMediaServerID: "provident",
        OrganizationID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkInsightApplicationHealthByTime

Get application health by time

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
    res, err := s.Insight.GetNetworkInsightApplicationHealthByTime(ctx, operations.GetNetworkInsightApplicationHealthByTimeRequest{
        ApplicationID: "aliquid",
        NetworkID: "iusto",
        Resolution: sdk.Int64(423692),
        T0: sdk.String("nihil"),
        T1: sdk.String("praesentium"),
        Timespan: sdk.Float32(9796.97),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkInsightApplicationHealthByTime200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInsightApplications

List all Insight tracked applications

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
    res, err := s.Insight.GetOrganizationInsightApplications(ctx, operations.GetOrganizationInsightApplicationsRequest{
        OrganizationID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInsightApplications200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInsightMonitoredMediaServer

Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.

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
    res, err := s.Insight.GetOrganizationInsightMonitoredMediaServer(ctx, operations.GetOrganizationInsightMonitoredMediaServerRequest{
        MonitoredMediaServerID: "dolores",
        OrganizationID: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInsightMonitoredMediaServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationInsightMonitoredMediaServers

List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.

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
    res, err := s.Insight.GetOrganizationInsightMonitoredMediaServers(ctx, operations.GetOrganizationInsightMonitoredMediaServersRequest{
        OrganizationID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInsightMonitoredMediaServers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationInsightMonitoredMediaServer

Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.

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
    res, err := s.Insight.UpdateOrganizationInsightMonitoredMediaServer(ctx, operations.UpdateOrganizationInsightMonitoredMediaServerRequest{
        RequestBody: &operations.UpdateOrganizationInsightMonitoredMediaServerRequestBody{
            Address: sdk.String("5144 Garrett Extensions"),
            BestEffortMonitoringEnabled: sdk.Bool(false),
            Name: sdk.String("Ernesto Armstrong"),
        },
        MonitoredMediaServerID: "doloremque",
        OrganizationID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```
