# PermissionAddAndRemovePermissions

### Available Operations

* [DeletePermissionAppsAppID](#deletepermissionappsappid) - Removes permission that allows the app to access this user's data
* [GetPermissionAppsAppID](#getpermissionappsappid) - Returns permission that allows the app to access this user's data
* [PostPermissionAppsAppID](#postpermissionappsappid) - Adds permission to allow the app to access this user's data

## DeletePermissionAppsAppID

Removes permission that allows the app to access this user's data

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
    res, err := s.PermissionAddAndRemovePermissions.DeletePermissionAppsAppID(ctx, operations.DeletePermissionAppsAppIDRequest{
        AppID: "eum",
        UserID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPermissionAppsAppID

Returns permission that allows the app to access this user's data

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
    res, err := s.PermissionAddAndRemovePermissions.GetPermissionAppsAppID(ctx, operations.GetPermissionAppsAppIDRequest{
        AppID: "eligendi",
        UserID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostPermissionAppsAppID

Adds permission to allow the app to access this user's data

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
    res, err := s.PermissionAddAndRemovePermissions.PostPermissionAppsAppID(ctx, operations.PostPermissionAppsAppIDRequest{
        AppID: "aliquid",
        Date: sdk.Int64(592042),
        IP: sdk.String("necessitatibus"),
        UserID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
