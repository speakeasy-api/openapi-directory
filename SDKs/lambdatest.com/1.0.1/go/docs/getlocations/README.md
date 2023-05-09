# GetLocations

### Available Operations

* [Locations](#locations) - Fetch Locations

## Locations

Fetch list of available Geolocations

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
    res, err := s.GetLocations.Locations(ctx, operations.LocationsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Locations != nil {
        // handle response
    }
}
```
