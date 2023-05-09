# VirtualBillingMeters

### Available Operations

* [VirtualBillingMetersGet](#virtualbillingmetersget) - Beta: Gets all Meters available to activate as a Virtual Meter.

## VirtualBillingMetersGet

Beta: Gets all Meters available to activate as a Virtual Meter.

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
    res, err := s.VirtualBillingMeters.VirtualBillingMetersGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Devices != nil {
        // handle response
    }
}
```
