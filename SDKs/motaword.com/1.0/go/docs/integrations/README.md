# Integrations

### Available Operations

* [GetIntegrationsToken](#getintegrationstoken) - Generate a new access token for MotaWord's integrations service

## GetIntegrationsToken

Generate a new access token for MotaWord's integrations service

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Integrations.GetIntegrationsToken(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.IntegrationsToken != nil {
        // handle response
    }
}
```
