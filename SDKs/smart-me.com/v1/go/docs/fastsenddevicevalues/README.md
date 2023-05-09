# FastSendDeviceValues

### Available Operations

* [FastSendDeviceValuesGet](#fastsenddevicevaluesget) - Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.

## FastSendDeviceValuesGet

Force a device to send the data every second (if supported). This for about 30s.
            Don't use this call to force a device to send the data every second for a longer time.

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
    res, err := s.FastSendDeviceValues.FastSendDeviceValuesGet(ctx, operations.FastSendDeviceValuesGetRequest{
        ID: "ce5e6a95-d8a0-4d44-ace2-af7a73cf3be4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
