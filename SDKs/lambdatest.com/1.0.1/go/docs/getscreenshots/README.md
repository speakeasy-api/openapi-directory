# GetScreenshots

### Available Operations

* [Screenshots](#screenshots) - Fetch specified screenshot details

## Screenshots

To fetch specified screenshot details

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
    res, err := s.GetScreenshots.Screenshots(ctx, operations.ScreenshotsRequest{
        TestID: "quibusdam",
    }, operations.ScreenshotsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScreenshotDetails != nil {
        // handle response
    }
}
```
