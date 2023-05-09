# GetZippedScreenshots

### Available Operations

* [ZippedScreenshots](#zippedscreenshots) - Fetch Zipped Screenshots

## ZippedScreenshots

Fetch Zipped Screenshots

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
    res, err := s.GetZippedScreenshots.ZippedScreenshots(ctx, operations.ZippedScreenshotsRequest{
        TestID: "unde",
    }, operations.ZippedScreenshotsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ZippedScreenshotsSuccess != nil {
        // handle response
    }
}
```
