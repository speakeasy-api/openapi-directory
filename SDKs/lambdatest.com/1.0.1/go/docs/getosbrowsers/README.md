# GetOSBrowsers

### Available Operations

* [OsBrowsers](#osbrowsers) - Fetch all available os-browser combinations.

## OsBrowsers

Fetch all os browsers combinations available on lambdatest platform.

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
    res, err := s.GetOSBrowsers.OsBrowsers(ctx, operations.OsBrowsersRequest{
        Os: sdk.String("distinctio"),
    }, operations.OsBrowsersSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OsBrowsers != nil {
        // handle response
    }
}
```
