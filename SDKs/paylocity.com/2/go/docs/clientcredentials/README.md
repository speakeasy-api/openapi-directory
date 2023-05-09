# ClientCredentials

### Available Operations

* [AddClientSecret](#addclientsecret) - Obtain new client secret.

## AddClientSecret

Obtain new client secret for Paylocity-issued client id. See Setup section for details.

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
    res, err := s.ClientCredentials.AddClientSecret(ctx, shared.AddClientSecret{
        Code: "ab",
    }, operations.AddClientSecretSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientCredentialsResponses != nil {
        // handle response
    }
}
```
