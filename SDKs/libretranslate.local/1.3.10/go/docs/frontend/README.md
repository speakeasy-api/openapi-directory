# Frontend

### Available Operations

* [GetFrontendSettings](#getfrontendsettings) - Retrieve frontend specific settings

## GetFrontendSettings

Retrieve frontend specific settings

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Frontend.GetFrontendSettings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
