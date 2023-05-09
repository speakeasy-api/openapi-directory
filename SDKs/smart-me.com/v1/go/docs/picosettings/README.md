# PicoSettings

### Available Operations

* [PicoSettingsGet](#picosettingsget) - GET: api/pico/settings
            
            Returns the settings of a pico charging station.

## PicoSettingsGet

GET: api/pico/settings
            
            Returns the settings of a pico charging station.

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
    res, err := s.PicoSettings.PicoSettingsGet(ctx, operations.PicoSettingsGetRequest{
        ID: "7a60ff2a-54a3-41e9-8764-a3e865e7956f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PicoSettingsDto != nil {
        // handle response
    }
}
```
