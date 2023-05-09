# StopScreenshotTest

### Available Operations

* [StopScreenshotsTest](#stopscreenshotstest) - Stop specified screenshot test

## StopScreenshotsTest

Stop specified screenshot test

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
    res, err := s.StopScreenshotTest.StopScreenshotsTest(ctx, operations.StopScreenshotsTestRequest{
        TestID: "deserunt",
    }, operations.StopScreenshotsTestSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopScreenshotSuccess != nil {
        // handle response
    }
}
```
