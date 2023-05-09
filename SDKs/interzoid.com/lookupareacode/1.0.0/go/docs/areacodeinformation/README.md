# AreaCodeInformation

### Available Operations

* [Getareacode](#getareacode) - Gets telephone area code information

## Getareacode

Gets telephone area code information for a given area code.

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
    res, err := s.AreaCodeInformation.Getareacode(ctx, operations.GetareacodeRequest{
        Areacode: "distinctio",
        License: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getareacode200ApplicationJSONObject != nil {
        // handle response
    }
}
```
