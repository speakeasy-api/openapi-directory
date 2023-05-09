# VirtualTariffsForProperty

### Available Operations

* [VirtualTariffsForPropertyGet](#virtualtariffsforpropertyget) - Gets all Virtual Tariffs for a property (folder)

## VirtualTariffsForPropertyGet

Gets all Virtual Tariffs for a property (folder)

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
    res, err := s.VirtualTariffsForProperty.VirtualTariffsForPropertyGet(ctx, operations.VirtualTariffsForPropertyGetRequest{
        ID: "4eeb52ff-785f-4c37-814d-4c98e0c2bb89",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualTariffsOfFolders != nil {
        // handle response
    }
}
```
