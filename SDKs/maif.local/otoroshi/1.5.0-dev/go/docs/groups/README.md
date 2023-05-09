# Groups

## Overview

Everything about Otoroshi service groups

### Available Operations

* [AllServiceGroups](#allservicegroups) - Get all service groups
* [CreateGroup](#creategroup) - Create a new service group
* [DeleteGroup](#deletegroup) - Delete a service group
* [PatchGroup](#patchgroup) - Update a service group with a diff
* [ServiceGroup](#servicegroup) - Get a service group
* [UpdateGroup](#updategroup) - Update a service group

## AllServiceGroups

Get all service groups

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Groups.AllServiceGroups(ctx, operations.AllServiceGroupsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
}
```

## CreateGroup

Create a new service group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Groups.CreateGroup(ctx, shared.Group{
        Description: sdk.String("a string value"),
        ID: "a string value",
        Name: "a string value",
    }, operations.CreateGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## DeleteGroup

Delete a service group

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Groups.DeleteGroup(ctx, operations.DeleteGroupRequest{
        ServiceGroupID: "ex",
    }, operations.DeleteGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleted != nil {
        // handle response
    }
}
```

## PatchGroup

Update a service group with a diff

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Groups.PatchGroup(ctx, operations.PatchGroupRequest{
        RequestBody: []shared.Patch{
            shared.Patch{
                Op: shared.PatchOpEnumRemove,
                Path: "a string value",
                Value: sdk.String("voluptatibus"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumReplace,
                Path: "a string value",
                Value: sdk.String("sapiente"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumCopy,
                Path: "a string value",
                Value: sdk.String("saepe"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumRemove,
                Path: "a string value",
                Value: sdk.String("impedit"),
            },
        },
        ServiceGroupID: "corporis",
    }, operations.PatchGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## ServiceGroup

Get a service group

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Groups.ServiceGroup(ctx, operations.ServiceGroupRequest{
        ServiceGroupID: "veniam",
    }, operations.ServiceGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## UpdateGroup

Update a service group

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Groups.UpdateGroup(ctx, operations.UpdateGroupRequest{
        Group: &shared.Group{
            Description: sdk.String("a string value"),
            ID: "a string value",
            Name: "a string value",
        },
        ServiceGroupID: "aliquid",
    }, operations.UpdateGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```
