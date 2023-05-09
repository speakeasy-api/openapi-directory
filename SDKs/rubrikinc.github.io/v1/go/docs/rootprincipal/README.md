# RootPrincipal

## Overview

Principal Actions.

### Available Operations

* [AssignRolesToPrincipals](#assignrolestoprincipals) - Assign roles to principals
* [GetRolesForPrincipals](#getrolesforprincipals) - Get roles assigned to principals
* [RevokeRolesFromPrincipals](#revokerolesfromprincipals) - Revoke roles from principals
* [SearchPrincipalsV1](#searchprincipalsv1) - Search for principals

## AssignRolesToPrincipals

Assign a set of roles to the specified principals.

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
    res, err := s.RootPrincipal.AssignRolesToPrincipals(ctx, shared.RoleAssignmentRequest{
        Principals: []string{
            "ex",
            "odit",
            "voluptatem",
        },
        Roles: []string{
            "libero",
            "vero",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleInfos != nil {
        // handle response
    }
}
```

## GetRolesForPrincipals

Get a list of role information for all roles assigned to the principals.


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
    res, err := s.RootPrincipal.GetRolesForPrincipals(ctx, operations.GetRolesForPrincipalsRequest{
        Principals: []string{
            "consequuntur",
            "quidem",
            "aperiam",
            "animi",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrincipalWithRoleInfos != nil {
        // handle response
    }
}
```

## RevokeRolesFromPrincipals

Revoke a set of roles from the specified principals.


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
    res, err := s.RootPrincipal.RevokeRolesFromPrincipals(ctx, shared.RoleAssignmentRequest{
        Principals: []string{
            "itaque",
        },
        Roles: []string{
            "quia",
            "porro",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SearchPrincipalsV1

Search for principals based on the specified parameters.

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
    res, err := s.RootPrincipal.SearchPrincipalsV1(ctx, operations.SearchPrincipalsV1Request{
        AuthDomainID: sdk.String("architecto"),
        IsAssignedRolesOrIsLocal: sdk.Bool(false),
        IsTotpEnabled: sdk.Bool(false),
        Limit: sdk.Int(648142),
        Name: sdk.String("Dr. Joseph Bins"),
        Offset: sdk.Int(684857),
        OrganizationID: sdk.String("culpa"),
        PrincipalType: operations.SearchPrincipalsV1PrincipalTypeEnumGroup.ToPointer(),
        RoleID: sdk.String("sunt"),
        SortBy: operations.SearchPrincipalsV1SortByEnumDisplayName.ToPointer(),
        SortOrder: operations.SearchPrincipalsV1SortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrincipalSummaryV1ListResponse != nil {
        // handle response
    }
}
```
