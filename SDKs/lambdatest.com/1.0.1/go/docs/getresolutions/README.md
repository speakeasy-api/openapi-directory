# GetResolutions

### Available Operations

* [Resolutions](#resolutions) - Fetch all available resolution on different OS

## Resolutions

Fetch all available resolution on different OS

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
    res, err := s.GetResolutions.Resolutions(ctx, operations.ResolutionsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resolutions != nil {
        // handle response
    }
}
```
