# Auth

## Overview

authentication and authorization

### Available Operations

* [GetAuth](#getauth) - Request a JWT access token using your obono username and password.

## GetAuth

Request a JWT access token using your obono username and password.

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
    res, err := s.Auth.GetAuth(ctx, operations.GetAuthSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthResult != nil {
        // handle response
    }
}
```
