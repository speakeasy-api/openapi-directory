# GetProfiles

### Available Operations

* [Profiles](#profiles) - Fetch login profiles

## Profiles

Fetch login profiles

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
    res, err := s.GetProfiles.Profiles(ctx, operations.ProfilesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Profiles != nil {
        // handle response
    }
}
```
