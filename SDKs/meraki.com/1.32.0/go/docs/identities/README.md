# Identities

### Available Operations

* [GetAdministeredIdentitiesMe](#getadministeredidentitiesme) - Returns the identity of the current user.

## GetAdministeredIdentitiesMe

Returns the identity of the current user.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Identities.GetAdministeredIdentitiesMe(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAdministeredIdentitiesMe200ApplicationJSONObject != nil {
        // handle response
    }
}
```
