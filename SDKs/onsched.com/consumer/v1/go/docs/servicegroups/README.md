# ServiceGroups

### Available Operations

* [GetConsumerV1Servicegroups](#getconsumerv1servicegroups) - List Service Groups
* [GetConsumerV1ServicegroupsID](#getconsumerv1servicegroupsid) - Get Service Group

## GetConsumerV1Servicegroups

<p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>

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
    res, err := s.ServiceGroups.GetConsumerV1Servicegroups(ctx, operations.GetConsumerV1ServicegroupsRequest{
        Limit: sdk.Int(241418),
        LocationID: sdk.String("fuga"),
        Offset: sdk.Int(662505),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceGroupListViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1ServicegroupsID

<p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find serviceGroup id's by using the <i>GET /consumer/v1/serviceGroups</i> endpoint.</p>

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
    res, err := s.ServiceGroups.GetConsumerV1ServicegroupsID(ctx, operations.GetConsumerV1ServicegroupsIDRequest{
        ID: 380729,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceGroupViewModel != nil {
        // handle response
    }
}
```
