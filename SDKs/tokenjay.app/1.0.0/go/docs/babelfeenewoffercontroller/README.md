# BabelFeeNewOfferController

### Available Operations

* [DoCreateBabelBox](#docreatebabelbox)
* [ErgoPayCreateBabelBox](#ergopaycreatebabelbox)
* [GetBabelFeeNewOffer](#getbabelfeenewoffer)
* [ReplaceTokenAmountInputFields](#replacetokenamountinputfields)

## DoCreateBabelBox

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
    res, err := s.BabelFeeNewOfferController.DoCreateBabelBox(ctx, map[string]map[string]interface{}{
        "temporibus": map[string]interface{}{
            "quis": "veritatis",
        },
        "deserunt": map[string]interface{}{
            "ipsam": "repellendus",
        },
        "sapiente": map[string]interface{}{
            "odit": "at",
            "at": "maiores",
            "molestiae": "quod",
            "quod": "esse",
        },
        "totam": map[string]interface{}{
            "dolorum": "dicta",
            "nam": "officia",
            "occaecati": "fugit",
            "deleniti": "hic",
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

## ErgoPayCreateBabelBox

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
    res, err := s.BabelFeeNewOfferController.ErgoPayCreateBabelBox(ctx, operations.ErgoPayCreateBabelBoxRequest{
        Address: "514 Diego Divide",
        ErgAmount: 774234,
        TokenAmount: 736918,
        TokenID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetBabelFeeNewOffer

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
    res, err := s.BabelFeeNewOfferController.GetBabelFeeNewOffer(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ReplaceTokenAmountInputFields

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
    res, err := s.BabelFeeNewOfferController.ReplaceTokenAmountInputFields(ctx, map[string]map[string]interface{}{
        "excepturi": map[string]interface{}{
            "perferendis": "ad",
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
