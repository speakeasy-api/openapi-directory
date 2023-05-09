# TokenPrices

### Available Operations

* [GetTokenPrice](#gettokenprice) - Lists price and available volume for a certain token
* [GetTokenPrices](#gettokenprices) - Lists all token prices and available volume

## GetTokenPrice

Lists price and available volume for a certain token

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
    res, err := s.TokenPrices.GetTokenPrice(ctx, operations.GetTokenPriceRequest{
        TokenID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTokenPrices

Lists all token prices and available volume

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
    res, err := s.TokenPrices.GetTokenPrices(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
