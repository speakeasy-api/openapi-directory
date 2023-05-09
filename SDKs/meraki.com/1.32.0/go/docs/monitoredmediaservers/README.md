# MonitoredMediaServers

### Available Operations

* [CreateOrganizationInsightMonitoredMediaServer](#createorganizationinsightmonitoredmediaserver) - Add a media server to be monitored for this organization
* [DeleteOrganizationInsightMonitoredMediaServer](#deleteorganizationinsightmonitoredmediaserver) - Delete a monitored media server from this organization
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
    res, err := s.MonitoredMediaServers.CreateOrganizationInsightMonitoredMediaServer(ctx, operations.CreateOrganizationInsightMonitoredMediaServerRequest{
        RequestBody: operations.CreateOrganizationInsightMonitoredMediaServerRequestBody{
            Address: "851 Larson Estate",
            BestEffortMonitoringEnabled: sdk.Bool(false),
            Name: "Emmett Monahan DDS",
        },
        OrganizationID: "numquam",
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
    res, err := s.MonitoredMediaServers.DeleteOrganizationInsightMonitoredMediaServer(ctx, operations.DeleteOrganizationInsightMonitoredMediaServerRequest{
        MonitoredMediaServerID: "vel",
        OrganizationID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.MonitoredMediaServers.GetOrganizationInsightMonitoredMediaServer(ctx, operations.GetOrganizationInsightMonitoredMediaServerRequest{
        MonitoredMediaServerID: "eaque",
        OrganizationID: "iste",
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
    res, err := s.MonitoredMediaServers.GetOrganizationInsightMonitoredMediaServers(ctx, operations.GetOrganizationInsightMonitoredMediaServersRequest{
        OrganizationID: "tempora",
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
    res, err := s.MonitoredMediaServers.UpdateOrganizationInsightMonitoredMediaServer(ctx, operations.UpdateOrganizationInsightMonitoredMediaServerRequest{
        RequestBody: &operations.UpdateOrganizationInsightMonitoredMediaServerRequestBody{
            Address: sdk.String("195 Christiansen Dam"),
            BestEffortMonitoringEnabled: sdk.Bool(false),
            Name: sdk.String("Holly Stiedemann"),
        },
        MonitoredMediaServerID: "odio",
        OrganizationID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```
