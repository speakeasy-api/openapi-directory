# APIUsage

### Available Operations

* [GetOrganizationAPIRequests](#getorganizationapirequests) - List the API requests made by an organization
* [GetOrganizationAPIRequestsOverview](#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data

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
    res, err := s.APIUsage.GetOrganizationAPIRequests(ctx, operations.GetOrganizationAPIRequestsRequest{
        AdminID: sdk.String("iure"),
        EndingBefore: sdk.String("magnam"),
        Method: sdk.String("debitis"),
        OrganizationID: "ipsa",
        Path: sdk.String("delectus"),
        PerPage: sdk.Int64(272656),
        ResponseCode: sdk.Int64(383441),
        SourceIP: sdk.String("molestiae"),
        StartingAfter: sdk.String("minus"),
        T0: sdk.String("placeat"),
        T1: sdk.String("voluptatum"),
        Timespan: sdk.Float32(4799.77),
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
    res, err := s.APIUsage.GetOrganizationAPIRequestsOverview(ctx, operations.GetOrganizationAPIRequestsOverviewRequest{
        OrganizationID: "excepturi",
        T0: sdk.String("nisi"),
        T1: sdk.String("recusandae"),
        Timespan: sdk.Float32(8360.79),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequestsOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```
