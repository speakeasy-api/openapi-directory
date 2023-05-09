# VirtualTariff

### Available Operations

* [VirtualTariffGet](#virtualtariffget) - Gets all Virtual Tariffs of a user
* [GetAPIVirtualTariffID](#getapivirtualtariffid) - Gets all virtual tariffs of a folder

## VirtualTariffGet

Gets all Virtual Tariffs of a user

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
    res, err := s.VirtualTariff.VirtualTariffGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualTariffsOfFolders != nil {
        // handle response
    }
}
```

## GetAPIVirtualTariffID

Gets all virtual tariffs of a folder

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
    res, err := s.VirtualTariff.GetAPIVirtualTariffID(ctx, operations.GetAPIVirtualTariffIDRequest{
        ID: "5ff2e4b2-7537-4a8c-99e7-319c177d525f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualTariffsOfFolder != nil {
        // handle response
    }
}
```
