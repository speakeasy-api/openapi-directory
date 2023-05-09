# PageLoadPerformanceTime

### Available Operations

* [Globalpageload](#globalpageload) - Gets page load (or an API call) performance from a specified global geography such as Paris, Tokyo, Virginia, Mumbai, Frankfurt, London, Seoul, California, Sao Paolo, and many more.

## Globalpageload

Gets page load performance from a specified geography


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
    res, err := s.PageLoadPerformanceTime.Globalpageload(ctx, operations.GlobalpageloadRequest{
        License: "quibusdam",
        Origin: "unde",
        URL: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Globalpageload200ApplicationJSONObject != nil {
        // handle response
    }
}
```
