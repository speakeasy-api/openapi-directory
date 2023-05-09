# Resources

### Available Operations

* [GetConsumerV1Resources](#getconsumerv1resources) - List Resources
* [GetConsumerV1ResourcesID](#getconsumerv1resourcesid) - Get Resource
* [GetConsumerV1ResourcesIDServices](#getconsumerv1resourcesidservices) - Get Resource Linked Services

## GetConsumerV1Resources

<p>Use this endpoint to return a <b>List of Resources</b> associated with a business location. If not specified, the business location defaults to the primary business location. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

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
    res, err := s.Resources.GetConsumerV1Resources(ctx, operations.GetConsumerV1ResourcesRequest{
        Email: sdk.String("Yessenia.Bayer@yahoo.com"),
        Limit: sdk.Int(162954),
        LocationID: sdk.String("repellendus"),
        Name: sdk.String("Simon Kuhn"),
        Offset: sdk.Int(368102),
        ResourceGroupID: sdk.Int(65304),
        SortOrder: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceListViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1ResourcesID

<p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the <i>GET consumer/v1/resources</i> endpoint. </p>

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
    res, err := s.Resources.GetConsumerV1ResourcesID(ctx, operations.GetConsumerV1ResourcesIDRequest{
        ID: 783235,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1ResourcesIDServices

<p>Use this endpoint to get a <b>List of Linked Services</b> associated with the resource requested. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, the maximum limit is 100. Use the other query parameters to filter the results further.</p>
<p>Resource linked services are used to explicitly define the services that can be booked for a specified resource. By default, all services are bookable for any resource. For more information: <a href="https://docs.onsched.com/docs/linked-services">Linked Services Overview</a></p>

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
    res, err := s.Resources.GetConsumerV1ResourcesIDServices(ctx, operations.GetConsumerV1ResourcesIDServicesRequest{
        ID: 801836,
        Limit: sdk.Int(288398),
        Offset: sdk.Int(70447),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceServiceListViewModel != nil {
        // handle response
    }
}
```
