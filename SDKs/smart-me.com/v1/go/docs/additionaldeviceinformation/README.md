# AdditionalDeviceInformation

### Available Operations

* [AdditionalDeviceInformationGet](#additionaldeviceinformationget) - Gets the additional information (e.g. Firmware Version) about a device.

## AdditionalDeviceInformationGet

Gets the additional information (e.g. Firmware Version) about a device.

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
    res, err := s.AdditionalDeviceInformation.AdditionalDeviceInformationGet(ctx, operations.AdditionalDeviceInformationGetRequest{
        ID: "8fc81674-2cb7-4392-8592-9396fea7596e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdditionalDeviceInformation != nil {
        // handle response
    }
}
```
