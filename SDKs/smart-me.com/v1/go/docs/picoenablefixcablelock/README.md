# PicoEnableFixCableLock

### Available Operations

* [PicoEnableFixCableLockPost](#picoenablefixcablelockpost) - Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

## PicoEnableFixCableLockPost

Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

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
    res, err := s.PicoEnableFixCableLock.PicoEnableFixCableLockPost(ctx, operations.PicoEnableFixCableLockPostRequest{
        ID: "e881ead4-f0e1-4012-963f-94e29e973e92",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```
