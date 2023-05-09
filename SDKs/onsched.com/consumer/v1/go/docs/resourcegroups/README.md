# ResourceGroups

### Available Operations

* [GetConsumerV1Resourcegroups](#getconsumerv1resourcegroups) - List Resource Groups
* [GetConsumerV1ResourcegroupsID](#getconsumerv1resourcegroupsid) - Get Resource Group

## GetConsumerV1Resourcegroups

<p>Use this endpoint to return a list of <b>Resource Groups</b> for the requested location. If not specified, the business location defaults to the primary business location.</p>

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
    res, err := s.ResourceGroups.GetConsumerV1Resourcegroups(ctx, operations.GetConsumerV1ResourcegroupsRequest{
        Deleted: sdk.Bool(false),
        Limit: sdk.Int(98478),
        LocationID: sdk.String("at"),
        Offset: sdk.Int(92027),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceGroupListViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1ResourcegroupsID

<p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET /consumer/v1/resourceGroups</i> endpoint.</p>

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
    res, err := s.ResourceGroups.GetConsumerV1ResourcegroupsID(ctx, operations.GetConsumerV1ResourcegroupsIDRequest{
        ID: "7051339d-0808-46a1-8403-94c26071f93f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceGroupViewModel != nil {
        // handle response
    }
}
```
