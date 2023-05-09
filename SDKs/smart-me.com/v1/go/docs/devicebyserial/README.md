# DeviceBySerial

### Available Operations

* [DeviceBySerialGet](#devicebyserialget) - Gets a Device by it's Serial Number. The Serial is the part before the "-".

## DeviceBySerialGet

Gets a Device by it's Serial Number. The Serial is the part before the "-".

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
    res, err := s.DeviceBySerial.DeviceBySerialGet(ctx, operations.DeviceBySerialGetRequest{
        Serial: 659669,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```
