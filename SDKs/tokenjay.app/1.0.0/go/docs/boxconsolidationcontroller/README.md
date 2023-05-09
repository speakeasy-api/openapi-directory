# BoxConsolidationController

### Available Operations

* [EpConsolidate](#epconsolidate)
* [MainApp1](#mainapp1)

## EpConsolidate

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
    res, err := s.BoxConsolidationController.EpConsolidate(ctx, operations.EpConsolidateRequest{
        P2pkaddress: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MainApp1

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
    res, err := s.BoxConsolidationController.MainApp1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
