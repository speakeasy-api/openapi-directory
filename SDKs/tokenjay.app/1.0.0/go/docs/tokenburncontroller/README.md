# TokenBurnController

### Available Operations

* [GetBurningTransaction](#getburningtransaction)
* [MainApp](#mainapp)
* [PrepareTransaction](#preparetransaction)

## GetBurningTransaction

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
    res, err := s.TokenBurnController.GetBurningTransaction(ctx, operations.GetBurningTransactionRequest{
        UUID: "7596eb10-faaa-4235-ac59-55907aff1a3a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MainApp

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
    res, err := s.TokenBurnController.MainApp(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PrepareTransaction

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
    res, err := s.TokenBurnController.PrepareTransaction(ctx, map[string]map[string]interface{}{
        "repellat": map[string]interface{}{
            "occaecati": "numquam",
            "commodi": "quam",
            "molestiae": "velit",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
