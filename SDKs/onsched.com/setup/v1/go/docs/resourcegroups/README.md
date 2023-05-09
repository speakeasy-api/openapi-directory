# ResourceGroups

### Available Operations

* [DeleteSetupV1ResourcegroupsID](#deletesetupv1resourcegroupsid) - Delete Resource Group
* [GetSetupV1Resourcegroups](#getsetupv1resourcegroups) - List Resource Groups
* [GetSetupV1ResourcegroupsID](#getsetupv1resourcegroupsid) - Get Resource Group
* [PostSetupV1Resourcegroups](#postsetupv1resourcegroups) - Create Resource Group
* [PutSetupV1ResourcegroupsID](#putsetupv1resourcegroupsid) - Update Resource Group
* [PutSetupV1ResourcegroupsIDRecover](#putsetupv1resourcegroupsidrecover) - Recover Resource Group

## DeleteSetupV1ResourcegroupsID

<p>Use this endpoint to <b>Delete</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. The resource group is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/resourcegroups​/{id}​/recover</i> endpoint.</p>

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
    res, err := s.ResourceGroups.DeleteSetupV1ResourcegroupsID(ctx, operations.DeleteSetupV1ResourcegroupsIDRequest{
        ID: "72e80285-7a5b-4404-a3a7-d575f1400e76",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceGroupViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1Resourcegroups

<p>Use this endpoint to <b>List Resource Groups</b> for the specified location. If not specified, the business location defaults to the primary business location. <b>Name</b> is a required field.</p>
<p>Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the query parameters to filter the results further.</p>

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
    res, err := s.ResourceGroups.GetSetupV1Resourcegroups(ctx, operations.GetSetupV1ResourcegroupsRequest{
        Deleted: sdk.Bool(false),
        Limit: sdk.Int(256114),
        LocationID: sdk.String("dolorum"),
        Offset: sdk.Int(823718),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceGroupListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ResourcegroupsID

<p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET setup/v1/resourceGroups</i> endpoint.</p>

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
    res, err := s.ResourceGroups.GetSetupV1ResourcegroupsID(ctx, operations.GetSetupV1ResourcegroupsIDRequest{
        ID: "7334ec1b-781b-436a-8808-8d100efada20",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceGroupViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1Resourcegroups

<p>Use this endpoint to <b>Create</b> a resourceGroup object. Resource groups are used to categorize your resources.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ResourceGroups.PostSetupV1Resourcegroups(ctx, shared.ResourceGroupInputModel{
        Description: sdk.String("alias"),
        Email: sdk.String("Trudie18@hotmail.com"),
        LocationID: sdk.String("qui"),
        Name: sdk.String("Mrs. Kerry Cassin"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceGroupViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ResourcegroupsID

<p>Use this endpoint to <b>Update</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. </p>

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
    res, err := s.ResourceGroups.PutSetupV1ResourcegroupsID(ctx, operations.PutSetupV1ResourcegroupsIDRequest{
        ResourceGroupUpdateModel: &shared.ResourceGroupUpdateModel{
            Description: sdk.String("optio"),
            Email: sdk.String("Kelton_Nikolaus19@hotmail.com"),
            Name: sdk.String("Gertrude Ryan"),
        },
        ID: "3ffda9e0-6bee-4482-9c1f-c0e115c80bff",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceGroupViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ResourcegroupsIDRecover

<p>Use this endpoint to <b>Recover</b> a deleted resourceGroup object. A valid <b>resourceGroup id</b> is required.</p>

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
    res, err := s.ResourceGroups.PutSetupV1ResourcegroupsIDRecover(ctx, operations.PutSetupV1ResourcegroupsIDRecoverRequest{
        ID: "918544ec-42de-4fcc-a8f1-977773e63562",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModel != nil {
        // handle response
    }
}
```
