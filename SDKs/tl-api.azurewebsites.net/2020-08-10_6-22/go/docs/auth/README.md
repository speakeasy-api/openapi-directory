# Auth

### Available Operations

* [AuthLogin](#authlogin) - Authenticate and provide token for autherizations.
            

## AuthLogin

Authenticate and provide token for autherizations.
            

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.AuthLogin(ctx, shared.LoginDTO{
        Password: sdk.String("nam"),
        Remember: sdk.Bool(false),
        Username: sdk.String("Magdalena_Kuvalis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthLogin200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```
