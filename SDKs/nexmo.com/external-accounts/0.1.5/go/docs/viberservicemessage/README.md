# ViberServiceMessage

## Overview

Managing your [Viber Service Message](https://developer.nexmo.com/messages/concepts/viber) account

### Available Operations

* [GetVSMAccount](#getvsmaccount) - Retrieve a Viber Service Message account

## GetVSMAccount

Retrieve a Viber Service Message account

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
    res, err := s.ViberServiceMessage.GetVSMAccount(ctx, operations.GetVSMAccountRequest{
        ExternalID: "minus",
    }, operations.GetVSMAccountSecurity{
        BasicAuth: &shared.SchemeBasicAuth{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VSMAccountResponse != nil {
        // handle response
    }
}
```
