# Institutions

### Available Operations

* [GetInstitutions](#getinstitutions) - /institutions

## GetInstitutions

### Get institutions

Get a list of available institutions.

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
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Institutions.GetInstitutions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstitutions200ApplicationJSONObject != nil {
        // handle response
    }
}
```
