# AuthController

## Overview

Auth Controller

### Available Operations

* [GetBasicUserInformation](#getbasicuserinformation) - Get Basic User Information
* [LogIn](#login) - Log In
* [LogOut](#logout) - Log Out

## GetBasicUserInformation

Once logged in and have a token, get basic user information including group role membership

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
    res, err := s.AuthController.GetBasicUserInformation(ctx, operations.GetBasicUserInformationRequest{
        Token: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## LogIn

Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AuthController.LogIn(ctx, shared.Credentials{
        APIKey: sdk.String("distinctio"),
        Password: sdk.String("quibusdam"),
        Username: sdk.String("Leda_Stiedemann"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## LogOut

Log Out

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
    res, err := s.AuthController.LogOut(ctx, operations.LogOutRequest{
        Token: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
