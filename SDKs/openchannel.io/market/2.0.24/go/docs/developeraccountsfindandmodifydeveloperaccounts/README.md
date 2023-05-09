# DeveloperAccountsFindAndModifyDeveloperAccounts

### Available Operations

* [DeleteDeveloperAccountsDeveloperAccountID](#deletedeveloperaccountsdeveloperaccountid) - Removes the developer account
* [GetDeveloperAccounts](#getdeveloperaccounts) - Returns a paginated list of developerAccounts
* [GetDeveloperAccountsDeveloperAccountID](#getdeveloperaccountsdeveloperaccountid) - Returns a single developer account
* [PatchDeveloperAccountsDeveloperAccountID](#patchdeveloperaccountsdeveloperaccountid) - Updates the developer account fields
* [PostDeveloperAccountsDeveloperAccountID](#postdeveloperaccountsdeveloperaccountid) - Updates the developer account or adds the developer account if it doesn't exist

## DeleteDeveloperAccountsDeveloperAccountID

Removes the developer account

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
    res, err := s.DeveloperAccountsFindAndModifyDeveloperAccounts.DeleteDeveloperAccountsDeveloperAccountID(ctx, operations.DeleteDeveloperAccountsDeveloperAccountIDRequest{
        DeveloperAccountID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeveloperAccounts

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
    res, err := s.DeveloperAccountsFindAndModifyDeveloperAccounts.GetDeveloperAccounts(ctx, operations.GetDeveloperAccountsRequest{
        Limit: sdk.Int64(438601),
        PageNumber: sdk.Int64(634274),
        Query: sdk.String("doloribus"),
        Sort: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDeveloperAccountsDeveloperAccountID

Returns a single developer account

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
    res, err := s.DeveloperAccountsFindAndModifyDeveloperAccounts.GetDeveloperAccountsDeveloperAccountID(ctx, operations.GetDeveloperAccountsDeveloperAccountIDRequest{
        DeveloperAccountID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchDeveloperAccountsDeveloperAccountID

Updates the developer account fields

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
    res, err := s.DeveloperAccountsFindAndModifyDeveloperAccounts.PatchDeveloperAccountsDeveloperAccountID(ctx, operations.PatchDeveloperAccountsDeveloperAccountIDRequest{
        CustomData: sdk.String("mollitia"),
        DeveloperAccountID: "dolorem",
        DeveloperID: "culpa",
        Email: sdk.String("Zechariah.OHara@gmail.com"),
        Name: sdk.String("Claudia Krajcik"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostDeveloperAccountsDeveloperAccountID

Updates the developer account or adds the developer account if it doesn't exist

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
    res, err := s.DeveloperAccountsFindAndModifyDeveloperAccounts.PostDeveloperAccountsDeveloperAccountID(ctx, operations.PostDeveloperAccountsDeveloperAccountIDRequest{
        CustomData: sdk.String("quia"),
        DeveloperAccountID: "quis",
        DeveloperID: "vitae",
        Email: sdk.String("Madison77@hotmail.com"),
        Name: sdk.String("Mandy Hills"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
