# Services

### Available Operations

* [GetConsumerV1Services](#getconsumerv1services) - List Services
* [GetConsumerV1ServicesAllocationsID](#getconsumerv1servicesallocationsid) - Get Service Allocation
* [GetConsumerV1ServicesID](#getconsumerv1servicesid) - Get Service
* [GetConsumerV1ServicesIDAllocations](#getconsumerv1servicesidallocations) - List Service Allocations
* [GetConsumerV1ServicesIDResources](#getconsumerv1servicesidresources) - List Resources for Service

## GetConsumerV1Services

<p>Use this endpoint to <b>List Services</b> available at your business location and/or company. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Services.GetConsumerV1Services(ctx, operations.GetConsumerV1ServicesRequest{
        AllLocations: sdk.Bool(false),
        DefaultService: sdk.Bool(false),
        Limit: sdk.Int(246063),
        LocationID: sdk.String("culpa"),
        Name: sdk.String("Clay Larson"),
        Offset: sdk.Int(497678),
        Scope: shared.ServicesScopeEnumLocation.ToPointer(),
        ServiceGroupID: sdk.Int(427834),
        ServiceID: sdk.String("labore"),
        SortDescending: sdk.Bool(false),
        SortOrder: shared.ServiceSortOrderEnumName.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceListViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1ServicesAllocationsID

<p>Use this endpoint to return a <b>Service Allocation</b> object. A valid <b>serviceAllocation id</b> is required. Find service allocation id's by using the <i>GET/consumer​/v1​/services​/{id}​/allocations</i> endpoint.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Services.GetConsumerV1ServicesAllocationsID(ctx, operations.GetConsumerV1ServicesAllocationsIDRequest{
        ID: "bb675fd5-e60b-4375-ad4f-6fbee41f3331",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAllocationViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1ServicesID

<p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /consumer/v1/services</i> endpoint.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Services.GetConsumerV1ServicesID(ctx, operations.GetConsumerV1ServicesIDRequest{
        ID: 489509,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1ServicesIDAllocations

<p>Use this endpoint to return a <b>List of Service Allocations</b> associated with the requested service. A valid <b>service id</b> is required. Allocations are used for Event type services/bookings. Retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service supply the service id. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://docs.onsched.com/reference/post_setup-v1-services-id-allocations">Create Service Allocations</a></p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Services.GetConsumerV1ServicesIDAllocations(ctx, operations.GetConsumerV1ServicesIDAllocationsRequest{
        EndDate: types.MustTimeFromString("2020-04-29T18:47:01.945Z"),
        ID: "35b60eb1-ea42-4655-9ba3-c28744ed53b8",
        Limit: sdk.Int(555361),
        LocationID: sdk.String("hic"),
        Offset: sdk.Int(201517),
        ResourceID: sdk.String("culpa"),
        StartDate: types.MustTimeFromString("2021-04-07T21:05:22.480Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAllocationListViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1ServicesIDResources

<p>Use this endpoint to return a list of <b>Resources that provide the Service requested</b>. A valid <b>service id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Services.GetConsumerV1ServicesIDResources(ctx, operations.GetConsumerV1ServicesIDResourcesRequest{
        ID: "8f5c0b2f-2fb7-4b19-8a27-6b26916fe1f0",
        Limit: sdk.Int(546885),
        LocationID: sdk.String("maiores"),
        Offset: sdk.Int(274823),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceListViewModel != nil {
        // handle response
    }
}
```
