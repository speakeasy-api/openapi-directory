# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [FetchUser](#fetchuser) - Fetch a frontline user
* [UpdateUser](#updateuser) - Update an existing frontline user

## FetchUser

Fetch a frontline user

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
    res, err := s.SDK.FetchUser(ctx, operations.FetchUserRequest{
        Sid: "provident",
    }, operations.FetchUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FrontlineV1User != nil {
        // handle response
    }
}
```

## UpdateUser

Update an existing frontline user

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
    res, err := s.SDK.UpdateUser(ctx, operations.UpdateUserRequest{
        RequestBody: &operations.UpdateUserUpdateUserRequest{
            Avatar: sdk.String("distinctio"),
            FriendlyName: sdk.String("quibusdam"),
            IsAvailable: sdk.Bool(false),
            State: shared.UserEnumStateTypeEnumDeactivated.ToPointer(),
        },
        Sid: "nulla",
    }, operations.UpdateUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FrontlineV1User != nil {
        // handle response
    }
}
```
