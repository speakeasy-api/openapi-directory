# ServiceGroups

### Available Operations

* [DeleteSetupV1ServicegroupsID](#deletesetupv1servicegroupsid) - Delete Service Group
* [GetSetupV1Servicegroups](#getsetupv1servicegroups) - List Service Groups
* [GetSetupV1ServicegroupsID](#getsetupv1servicegroupsid) - Get Service Group
* [PostSetupV1Servicegroups](#postsetupv1servicegroups) - Create Service Group
* [PutSetupV1ServicegroupsID](#putsetupv1servicegroupsid) - Update Service Group
* [PutSetupV1ServicegroupsIDRecover](#putsetupv1servicegroupsidrecover) - Recover Service Group

## DeleteSetupV1ServicegroupsID

<p>Use this endpoint to <b>Delete</b> a Service Group object. A valid <b>serviceGroup id</b> is required. The service group is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/servicegroups​/{id}​/recover</i> endpoint.</p>

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
    res, err := s.ServiceGroups.DeleteSetupV1ServicegroupsID(ctx, operations.DeleteSetupV1ServicegroupsIDRequest{
        ID: 103901,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceGroupViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1Servicegroups

<p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If no business location is specified it will default to the Primary Business Location of the company. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>

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
    res, err := s.ServiceGroups.GetSetupV1Servicegroups(ctx, operations.GetSetupV1ServicegroupsRequest{
        Limit: sdk.Int(381654),
        LocationID: sdk.String("eligendi"),
        Offset: sdk.Int(885523),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceGroupListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ServicegroupsID

<p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find service group id's by using the <i>GET /setup/v1/serviceGroups</i> endpoint.</p>

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
    res, err := s.ServiceGroups.GetSetupV1ServicegroupsID(ctx, operations.GetSetupV1ServicegroupsIDRequest{
        ID: 490956,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceGroupViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1Servicegroups

<p>Use this endpoint to <b>Create</b> a Service Group. If no locationId is specified in the body, the business location will default to the primary business location. Service groups are used to categorize services. Service groups are optional and only make sense if you have multiple services that will be easier read if categorized. Only the service group Type of 0 is supported by the API. It defaults to 0 if not supplied.</p>

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
    res, err := s.ServiceGroups.PostSetupV1Servicegroups(ctx, shared.ServiceGroupInputModel{
        Description: sdk.String("fugit"),
        LocationID: sdk.String("ratione"),
        Name: sdk.String("Alex Armstrong"),
        Type: sdk.Int(963908),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceGroupViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ServicegroupsID

<p>Use this endpoint to <b>Update</b> a Service Group object. A valid <b>serviceGroup id</b> is required. </p>

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
    res, err := s.ServiceGroups.PutSetupV1ServicegroupsID(ctx, operations.PutSetupV1ServicegroupsIDRequest{
        ServiceGroupInputModel: &shared.ServiceGroupInputModel{
            Description: sdk.String("deserunt"),
            LocationID: sdk.String("ratione"),
            Name: sdk.String("Alyssa Morar"),
            Type: sdk.Int(497480),
        },
        ID: 160260,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceGroupViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ServicegroupsIDRecover

<p>Use this endpoint to <b>Recover</b> a deleted Service Group. A valid <b>serviceGroup id</b> is required. </p>

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
    res, err := s.ServiceGroups.PutSetupV1ServicegroupsIDRecover(ctx, operations.PutSetupV1ServicegroupsIDRecoverRequest{
        ID: 370195,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceGroupViewModel != nil {
        // handle response
    }
}
```
