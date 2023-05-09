# Users

### Available Operations

* [GetAccessToken](#getaccesstoken) - Get access token details
* [GetUser](#getuser) - Get user details
* [GetUserSubscriptionList](#getusersubscriptionlist) - List user subscriptions

## GetAccessToken

Get access token details

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
    res, err := s.Users.GetAccessToken(ctx, operations.GetAccessTokenSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenDetails != nil {
        // handle response
    }
}
```

## GetUser

Get user details

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
    res, err := s.Users.GetUser(ctx, operations.GetUserSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserDetails != nil {
        // handle response
    }
}
```

## GetUserSubscriptionList

List user subscriptions

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
    res, err := s.Users.GetUserSubscriptionList(ctx, operations.GetUserSubscriptionListSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionDataList != nil {
        // handle response
    }
}
```
