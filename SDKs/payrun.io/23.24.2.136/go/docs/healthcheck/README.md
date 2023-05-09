# Healthcheck

### Available Operations

* [GetHealthCheck](#gethealthcheck) - Get health check status

## GetHealthCheck

Returns the health status of the application

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
    res, err := s.Healthcheck.GetHealthCheck(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.HealthCheck != nil {
        // handle response
    }
}
```
