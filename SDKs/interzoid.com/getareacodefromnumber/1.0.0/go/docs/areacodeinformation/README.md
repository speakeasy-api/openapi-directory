# AreaCodeInformation

### Available Operations

* [Getareacodefromnumber](#getareacodefromnumber) - Gets area code information from a telephone number

## Getareacodefromnumber

The area code will be parsed out of a telephone number and used to retrieve information about the area code.

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
    res, err := s.AreaCodeInformation.Getareacodefromnumber(ctx, operations.GetareacodefromnumberRequest{
        License: "distinctio",
        Number: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getareacodefromnumber200ApplicationJSONObject != nil {
        // handle response
    }
}
```
