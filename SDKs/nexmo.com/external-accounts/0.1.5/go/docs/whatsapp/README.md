# WhatsApp

### Available Operations

* [GetWAAccount](#getwaaccount) - Retrieve a Whatsapp account

## GetWAAccount

Retrieve a Whatsapp account

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
    res, err := s.WhatsApp.GetWAAccount(ctx, operations.GetWAAccountRequest{
        ExternalID: "placeat",
    }, operations.GetWAAccountSecurity{
        BasicAuth: &shared.SchemeBasicAuth{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WAAccountResponse != nil {
        // handle response
    }
}
```
