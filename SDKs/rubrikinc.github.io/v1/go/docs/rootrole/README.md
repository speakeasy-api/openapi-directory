# RootRole

## Overview

Role management.

### Available Operations

* [CreateRole](#createrole) - Create a new role
* [DeleteRole](#deleterole) - Delete a role
* [GetRole](#getrole) - Get role information for the specified role
* [GetRoles](#getroles) - Get all roles in an organization
* [UpdateRole](#updaterole) - Update role information

## CreateRole

Create a new role in the current organization.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootRole.CreateRole(ctx, shared.RoleInfoCreate{
        Description: sdk.String("dicta"),
        Name: "Brendan Marvin",
        OrganizationID: sdk.String("reprehenderit"),
        RoleTemplate: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleInfo != nil {
        // handle response
    }
}
```

## DeleteRole

Delete the role with the specified ID.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootRole.DeleteRole(ctx, operations.DeleteRoleRequest{
        ID: "4bfad2bf-7d67-4ca8-8ad9-9b41d6124353",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRole

Get role information for the role with the specified ID.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootRole.GetRole(ctx, operations.GetRoleRequest{
        ID: "1870cf68-b03a-4d42-9bd4-3d1f0cb0a000",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleInfo != nil {
        // handle response
    }
}
```

## GetRoles

Get a list of role information for all roles in the specified organization.


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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootRole.GetRoles(ctx, operations.GetRolesRequest{
        Limit: sdk.Int(221480),
        Name: sdk.String("Cesar Daugherty"),
        Offset: sdk.Int(576751),
        OrganizationID: sdk.String("tempore"),
        RoleTemplate: []string{
            "dolorum",
        },
        SortBy: operations.GetRolesSortByEnumDescription.ToPointer(),
        SortOrder: operations.GetRolesSortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleInfoListResponse != nil {
        // handle response
    }
}
```

## UpdateRole

Update the role information for the specified role.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootRole.UpdateRole(ctx, operations.UpdateRoleRequest{
        RoleInfoUpdate: shared.RoleInfoUpdate{
            Description: sdk.String("pariatur"),
            Name: sdk.String("Jay Wiza"),
        },
        ID: "741c57d1-fedc-4205-8d38-dc3ce185472f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleInfo != nil {
        // handle response
    }
}
```
