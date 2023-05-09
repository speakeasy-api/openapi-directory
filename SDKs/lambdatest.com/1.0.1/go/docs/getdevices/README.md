# GetDevices

### Available Operations

* [Devices](#devices) - Fetch all available device combinations.

## Devices

Fetch all os devices combinations available on lambdatest platform.

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
    res, err := s.GetDevices.Devices(ctx, operations.DevicesRequest{
        Os: sdk.String("provident"),
    }, operations.DevicesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OsDevices != nil {
        // handle response
    }
}
```
