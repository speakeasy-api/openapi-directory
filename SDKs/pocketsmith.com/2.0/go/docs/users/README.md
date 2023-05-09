# Users

### Available Operations

* [GetMe](#getme) - Get the authorised user
* [GetUsersID](#getusersid) - Get user
* [PutUsersID](#putusersid) - Update user

## GetMe

Gets the user that corresponds to the access token used in the request.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetMe(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## GetUsersID

Gets a user by ID. You must be authorised as the target user in order to make this request.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetUsersID(ctx, operations.GetUsersIDRequest{
        ID: 469249,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## PutUsersID

Updates the user by their ID. You must be authorised as the target user in order to make this request.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Users.PutUsersID(ctx, operations.PutUsersIDRequest{
        RequestBody: &operations.PutUsersIDRequestBody{
            AlwaysShowBaseCurrency: sdk.Bool(true),
            BaseCurrencyCode: sdk.String("nzd"),
            BetaUser: sdk.Bool(true),
            Email: sdk.String("foo@bar.com"),
            Name: sdk.String("John Appleseed"),
            TimeZone: sdk.String("Auckland"),
            WeekStartDay: sdk.Int64(1),
        },
        ID: 998848,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```
