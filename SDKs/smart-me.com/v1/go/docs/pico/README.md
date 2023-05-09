# Pico

### Available Operations

* [PicoGet](#picoget) - Gets all pico charging stations for this user

## PicoGet

Gets all pico charging stations for this user

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
    res, err := s.Pico.PicoGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Devices != nil {
        // handle response
    }
}
```
