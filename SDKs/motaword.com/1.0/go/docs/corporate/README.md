# Corporate

### Available Operations

* [GetAvailableCorporatePermissions](#getavailablecorporatepermissions) - View available permissions
* [GetAvailableCorporatePermissionsByID](#getavailablecorporatepermissionsbyid) - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* [GetCorporate](#getcorporate) - View your corporate account
* [GetCorporateByID](#getcorporatebyid) - Get details of this corporate account
* [GetCorporateUserGroups](#getcorporateusergroups) - View user groups
* [GetCorporateUserGroupsByID](#getcorporateusergroupsbyid) - Get a list of user groups for this corporate account
* [GetCorporateUsers](#getcorporateusers) - View users
* [GetCorporateUsersByID](#getcorporateusersbyid) - Get a list of users for this corporate account
* [GetCorporatesList](#getcorporateslist) - Get a list of corporate accounts
* [SaveCorporateUser](#savecorporateuser) - Create or update a user
* [SaveCorporateUserGroup](#savecorporateusergroup) - Create or update a corporate user group
* [SaveCorporateUserGroupByID](#savecorporateusergroupbyid) - Create or update a corporate user group for this corporate account

## GetAvailableCorporatePermissions

View a list of available permissions for your corporate account. They are used when assigning permissions to your corporate users.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Corporate.GetAvailableCorporatePermissions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionList != nil {
        // handle response
    }
}
```

## GetAvailableCorporatePermissionsByID

Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Corporate.GetAvailableCorporatePermissionsByID(ctx, operations.GetAvailableCorporatePermissionsByIDRequest{
        CorporateID: 199996,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionList != nil {
        // handle response
    }
}
```

## GetCorporate

View the details of the corporate account that your user account belongs to.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Corporate.GetCorporate(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CorporateAccount != nil {
        // handle response
    }
}
```

## GetCorporateByID

Get details of this corporate account

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Corporate.GetCorporateByID(ctx, operations.GetCorporateByIDRequest{
        CorporateID: 179490,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CorporateAccount != nil {
        // handle response
    }
}
```

## GetCorporateUserGroups

View a list of user groups under my corporate account. User groups are a part of our RBAC implementation and can be used to configure complex permission scenarios.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Corporate.GetCorporateUserGroups(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserGroupList != nil {
        // handle response
    }
}
```

## GetCorporateUserGroupsByID

Get a list of user groups for this corporate account

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Corporate.GetCorporateUserGroupsByID(ctx, operations.GetCorporateUserGroupsByIDRequest{
        CorporateID: 18521,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserGroupList != nil {
        // handle response
    }
}
```

## GetCorporateUsers

View a list of users under your corporate account. This endpoint will only return information if your user account is permitted to view corporate account users, configured by your administrator.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Corporate.GetCorporateUsers(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```

## GetCorporateUsersByID

Get a list of users for this corporate account

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Corporate.GetCorporateUsersByID(ctx, operations.GetCorporateUsersByIDRequest{
        CorporateID: 170986,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```

## GetCorporatesList

Get a list of corporate accounts

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Corporate.GetCorporatesList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CorporateAccounts != nil {
        // handle response
    }
}
```

## SaveCorporateUser

Create or update a user under your corporate account. This endpoint requires permissions for corporate user management, configured by your administrator.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Corporate.SaveCorporateUser(ctx, shared.UserUpdateContent{
        Birthday: types.MustDateFromString("2021-08-11"),
        City: sdk.String("Port Ewell"),
        Country: sdk.String("United States of America"),
        Email: sdk.String("Leo.Purdy@hotmail.com"),
        FirstName: sdk.String("Ottilie"),
        ID: sdk.Int64(164694),
        LastName: sdk.String("Kutch"),
        Notifications: &shared.UserUpdateContentNotifications{
            PhoneNumber: sdk.String("error"),
            SmsEnabled: sdk.Bool(false),
        },
        Notify: sdk.Bool(false),
        PaypalEmail: sdk.String("eaque"),
        Phone: sdk.String("(729) 926-6585 x7793"),
        Require1099: sdk.Bool(false),
        State: sdk.String("quos"),
        Street: sdk.String("2221 Tyreek Mountains"),
        UserGroups: []int64{
            452109,
            490459,
            970237,
        },
        Zip: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## SaveCorporateUserGroup

Create or update a corporate user group

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Corporate.SaveCorporateUserGroup(ctx, shared.UserGroup{
        CorporateID: sdk.Int64(680545),
        ID: sdk.Int64(254356),
        Name: sdk.String("Melissa Bednar"),
        Permissions: []string{
            "accusamus",
            "quidem",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserGroup != nil {
        // handle response
    }
}
```

## SaveCorporateUserGroupByID

Create or update a corporate user group for this corporate account

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Corporate.SaveCorporateUserGroupByID(ctx, operations.SaveCorporateUserGroupByIDRequest{
        UserGroup: shared.UserGroup{
            CorporateID: sdk.Int64(976405),
            ID: sdk.Int64(377752),
            Name: sdk.String("Dr. Craig Littel DDS"),
            Permissions: []string{
                "iusto",
                "voluptate",
                "dolorum",
            },
        },
        CorporateID: 536579,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserGroup != nil {
        // handle response
    }
}
```
