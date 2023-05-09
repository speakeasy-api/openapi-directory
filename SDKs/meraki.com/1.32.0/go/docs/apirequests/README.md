# APIRequests

### Available Operations

* [GetOrganizationAPIRequests](#getorganizationapirequests) - List the API requests made by an organization
* [GetOrganizationAPIRequestsOverview](#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [GetOrganizationAPIRequestsOverviewResponseCodesByInterval](#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period

## GetOrganizationAPIRequests

List the API requests made by an organization

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
    res, err := s.APIRequests.GetOrganizationAPIRequests(ctx, operations.GetOrganizationAPIRequestsRequest{
        AdminID: sdk.String("ea"),
        EndingBefore: sdk.String("quidem"),
        Method: operations.GetOrganizationAPIRequestsMethodEnumGet.ToPointer(),
        OperationIds: []string{
            "placeat",
            "perspiciatis",
            "expedita",
        },
        OrganizationID: "deleniti",
        Path: sdk.String("a"),
        PerPage: sdk.Int64(455579),
        ResponseCode: sdk.Int64(351936),
        SourceIP: sdk.String("unde"),
        StartingAfter: sdk.String("necessitatibus"),
        T0: sdk.String("animi"),
        T1: sdk.String("impedit"),
        Timespan: sdk.Float32(3730.4),
        UserAgent: sdk.String("corporis"),
        Version: operations.GetOrganizationAPIRequestsVersionEnumOne.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequests200ApplicationJSONObjects != nil {
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
    res, err := s.APIRequests.GetOrganizationAPIRequestsOverview(ctx, operations.GetOrganizationAPIRequestsOverviewRequest{
        OrganizationID: "error",
        T0: sdk.String("esse"),
        T1: sdk.String("labore"),
        Timespan: sdk.Float32(850.66),
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
    res, err := s.APIRequests.GetOrganizationAPIRequestsOverviewResponseCodesByInterval(ctx, operations.GetOrganizationAPIRequestsOverviewResponseCodesByIntervalRequest{
        AdminIds: []string{
            "consectetur",
            "vitae",
            "inventore",
            "dolorem",
        },
        Interval: sdk.Int64(322017),
        OperationIds: []string{
            "iste",
        },
        OrganizationID: "ex",
        SourceIps: []string{
            "soluta",
            "libero",
        },
        T0: sdk.String("rem"),
        T1: sdk.String("dolorum"),
        Timespan: sdk.Float32(4876.76),
        UserAgent: sdk.String("fugit"),
        Version: operations.GetOrganizationAPIRequestsOverviewResponseCodesByIntervalVersionEnumZero.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
