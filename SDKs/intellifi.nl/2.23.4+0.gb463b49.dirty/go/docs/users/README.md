# Users

## Overview

The `users` resource contains the user accounts that can log into the Brain Management Console.

Note that this resource is only accessible for administrator users logged into the Brain Management Console.
It is not possible to access this resource using API key authentication.
This resource is therefore irrelevant to most applications.


### Available Operations

* [AddUser](#adduser) - Create user
* [DeleteUser](#deleteuser) - Delete user
* [GetUserByID](#getuserbyid) - Get user
* [GetUsers](#getusers) - Get all users
* [UpdateUser](#updateuser) - Update existing user

## AddUser

Can only be used by an **administrative** user.

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
    res, err := s.Users.AddUser(ctx, shared.UserInput{
        Email: sdk.String("user@intellifi.nl"),
        FirstName: sdk.String("Foo"),
        IsAdmin: sdk.Bool(false),
        IsLocked: sdk.Bool(false),
        LastName: sdk.String("Bar"),
        Password: sdk.String("password1"),
    }, operations.AddUserSecurity{
        CookieSid: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## DeleteUser

Can only be used by an **administrative** user.

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
    res, err := s.Users.DeleteUser(ctx, operations.DeleteUserRequest{
        ID: "5acfbe2f-d570-4757-b929-177deac646ec",
    }, operations.DeleteUserSecurity{
        CookieSid: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## GetUserByID

Can only be used by an **administrative** user.

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
    res, err := s.Users.GetUserByID(ctx, operations.GetUserByIDRequest{
        ID: "b573409e-3eb1-4e5a-ab12-eb07f116db99",
    }, operations.GetUserByIDSecurity{
        CookieSid: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetUsers

Can only be used by an **administrative** user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.GetUsers(ctx, operations.GetUsersRequest{
        After: types.MustTimeFromString("2022-09-11T04:05:16.062Z"),
        AfterID: sdk.String("nostrum"),
        Before: sdk.String("doloribus"),
        BeforeID: sdk.String("eligendi"),
        Email: sdk.String("Emelie_Welch@yahoo.com"),
        FirstName: sdk.String("Joseph"),
        From: sdk.String("molestias"),
        FromID: sdk.String("odio"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        IsAdmin: sdk.Bool(false),
        IsLocked: sdk.Bool(false),
        LastName: sdk.String("Bechtelar"),
        Limit: sdk.Int64(901163),
        Populate: sdk.String("architecto"),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("quos"),
        Sort: sdk.String("iste"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(8268.62),
        Until: sdk.String("tempore"),
        UntilID: sdk.String("libero"),
    }, operations.GetUsersSecurity{
        CookieSid: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateUser

Can only be used by an **administrative** user.

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
    res, err := s.Users.UpdateUser(ctx, operations.UpdateUserRequest{
        UserInput: shared.UserInput{
            Email: sdk.String("user@intellifi.nl"),
            FirstName: sdk.String("Foo"),
            IsAdmin: sdk.Bool(false),
            IsLocked: sdk.Bool(false),
            LastName: sdk.String("Bar"),
            Password: sdk.String("password1"),
        },
        ID: "30fcb33e-a055-4b19-bcd4-4e2f52d82d35",
    }, operations.UpdateUserSecurity{
        CookieSid: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```
