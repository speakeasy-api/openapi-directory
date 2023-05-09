# Groups

## Overview

Group management

### Available Operations

* [DeleteGroupsID](#deletegroupsid) - Delete a Group
* [GetGroups](#getgroups) - Fetch a list of Groups
* [PostGroups](#postgroups) - Create a Group
* [PutGroupsID](#putgroupsid) - Update a Group

## DeleteGroupsID

Delete a Group

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Groups.DeleteGroupsID(ctx, operations.DeleteGroupsIDRequest{
        ID: 725255,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGroups

Without any params, returns a list of the Groups the user belongs to

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Groups.GetGroups(ctx, operations.GetGroupsRequest{
        All: sdk.Bool(false),
        UserID: sdk.Int64(659669),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
}
```

## PostGroups

Create a Group

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Groups.PostGroups(ctx, shared.Group{
        Attributes: map[string]interface{}{
            "deleniti": "sapiente",
            "amet": "deserunt",
            "nisi": "vel",
        },
        GroupID: sdk.Int64(618809),
        ID: sdk.Int64(606393),
        Name: sdk.String("Dorothy Kovacek"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## PutGroupsID

Update a Group

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Groups.PutGroupsID(ctx, operations.PutGroupsIDRequest{
        Group: shared.Group{
            Attributes: map[string]interface{}{
                "labore": "labore",
                "suscipit": "natus",
                "nobis": "eum",
            },
            GroupID: sdk.Int64(878453),
            ID: sdk.Int64(135474),
            Name: sdk.String("Danielle Bosco"),
        },
        ID: 590873,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```
