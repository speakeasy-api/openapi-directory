# UserAccountsFindAndModifyUserAccounts

### Available Operations

* [DeleteUserAccountsUserAccountID](#deleteuseraccountsuseraccountid) - Removes the user account
* [GetUserAccounts](#getuseraccounts) - Returns a paginated list of userAccounts
* [GetUserAccountsUserAccountID](#getuseraccountsuseraccountid) - Returns a single user account
* [PatchUserAccountsUserAccountID](#patchuseraccountsuseraccountid) - Updates the user account fields
* [PostUserAccountsUserAccountID](#postuseraccountsuseraccountid) - Updates the user account or adds the user account if it doesn't exist

## DeleteUserAccountsUserAccountID

Removes the user account

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
    res, err := s.UserAccountsFindAndModifyUserAccounts.DeleteUserAccountsUserAccountID(ctx, operations.DeleteUserAccountsUserAccountIDRequest{
        UserAccountID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserAccounts

- Results are paginated and the default is value is 1000 if no limit is provided


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
    res, err := s.UserAccountsFindAndModifyUserAccounts.GetUserAccounts(ctx, operations.GetUserAccountsRequest{
        Limit: sdk.Int64(891924),
        PageNumber: sdk.Int64(260341),
        Query: sdk.String("maxime"),
        Sort: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserAccountsUserAccountID

Returns a single user account

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
    res, err := s.UserAccountsFindAndModifyUserAccounts.GetUserAccountsUserAccountID(ctx, operations.GetUserAccountsUserAccountIDRequest{
        UserAccountID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchUserAccountsUserAccountID

Updates the user account fields

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
    res, err := s.UserAccountsFindAndModifyUserAccounts.PatchUserAccountsUserAccountID(ctx, operations.PatchUserAccountsUserAccountIDRequest{
        CustomData: sdk.String("in"),
        Email: sdk.String("Bailee_VonRueden@gmail.com"),
        Name: sdk.String("Kristie Spencer"),
        UserAccountID: "pariatur",
        UserID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostUserAccountsUserAccountID

Updates the user account or adds the user account if it doesn't exist

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
    res, err := s.UserAccountsFindAndModifyUserAccounts.PostUserAccountsUserAccountID(ctx, operations.PostUserAccountsUserAccountIDRequest{
        CustomData: sdk.String("consequuntur"),
        Email: sdk.String("Levi77@yahoo.com"),
        Name: sdk.String("Ervin Schoen"),
        UserAccountID: "odit",
        UserID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
