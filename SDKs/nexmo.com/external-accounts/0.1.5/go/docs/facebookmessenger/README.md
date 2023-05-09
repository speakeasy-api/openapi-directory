# FacebookMessenger

## Overview

Managing your [Facebook Messenger](https://developer.nexmo.com/messages/concepts/facebook) account

### Available Operations

* [CreateMessengerAccount](#createmessengeraccount) - Create a Messenger account
* [DeleteMessengerAccount](#deletemessengeraccount) - Delete a Messenger account
* [GetMessengerAccount](#getmessengeraccount) - Retrieve a Messenger account
* [UpdateMessengerAccount](#updatemessengeraccount) - Update a Messenger account

## CreateMessengerAccount

Create a Messenger account

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
    res, err := s.FacebookMessenger.CreateMessengerAccount(ctx, operations.CreateMessengerAccountRequestBody{
        AccessToken: "myAccessToken",
        Applications: []string{
            "vel",
            "error",
            "deserunt",
            "suscipit",
        },
        ExternalID: "12345678",
        Name: sdk.String("optionalName"),
    }, operations.CreateMessengerAccountSecurity{
        BasicAuth: &shared.SchemeBasicAuth{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessengerAccountResponse != nil {
        // handle response
    }
}
```

## DeleteMessengerAccount

Delete a Messenger account

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
    res, err := s.FacebookMessenger.DeleteMessengerAccount(ctx, operations.DeleteMessengerAccountRequest{
        ExternalID: "iure",
    }, operations.DeleteMessengerAccountSecurity{
        BasicAuth: &shared.SchemeBasicAuth{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
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

## GetMessengerAccount

Retrieve a Messenger account

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
    res, err := s.FacebookMessenger.GetMessengerAccount(ctx, operations.GetMessengerAccountRequest{
        ExternalID: "magnam",
    }, operations.GetMessengerAccountSecurity{
        BasicAuth: &shared.SchemeBasicAuth{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessengerAccountResponse != nil {
        // handle response
    }
}
```

## UpdateMessengerAccount

Update a Messenger account

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
    res, err := s.FacebookMessenger.UpdateMessengerAccount(ctx, operations.UpdateMessengerAccountRequest{
        RequestBody: operations.UpdateMessengerAccountRequestBody{
            AccessToken: sdk.String("updatedAccessToken"),
            Applications: []string{
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
            },
            Name: sdk.String("newName"),
        },
        ExternalID: "molestiae",
    }, operations.UpdateMessengerAccountSecurity{
        BasicAuth: &shared.SchemeBasicAuth{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMessengerAccount200ApplicationJSONObject != nil {
        // handle response
    }
}
```
