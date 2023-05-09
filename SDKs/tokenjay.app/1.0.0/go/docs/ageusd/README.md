# AgeUsd

### Available Operations

* [CalcSigmaRsvExchange](#calcsigmarsvexchange) - Calculates SigRSV exchange
* [CalcSigmaUsdExchange](#calcsigmausdexchange) - Calculates SigUSD exchange
* [DoSigmaRsvExchange](#dosigmarsvexchange) - Builds ErgoPayRequest for SigRSV exchange
* [DoSigmaUsdExchange](#dosigmausdexchange) - Builds ErgoPayRequest for SigUSD exchange
* [GetAgeUsdInfo](#getageusdinfo) - Returns state of AgeUSD at this moment
* [GetSigmaRsvPrice](#getsigmarsvprice) - Lists price and available volume for SigmaRSV
* [GetSigmaUsdPrice](#getsigmausdprice) - Lists price and available volume for SigmaUSD

## CalcSigmaRsvExchange

Calculates SigRSV exchange

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
    res, err := s.AgeUsd.CalcSigmaRsvExchange(ctx, operations.CalcSigmaRsvExchangeRequest{
        Amount: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CalcSigmaUsdExchange

Calculates SigUSD exchange

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
    res, err := s.AgeUsd.CalcSigmaUsdExchange(ctx, operations.CalcSigmaUsdExchangeRequest{
        Amount: 715190,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## DoSigmaRsvExchange

Builds ErgoPayRequest for SigRSV exchange

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
    res, err := s.AgeUsd.DoSigmaRsvExchange(ctx, operations.DoSigmaRsvExchangeRequest{
        Address: "685 Kassulke Passage",
        Amount: 645894,
        CheckRate: sdk.Int64(384382),
        ExecutionFee: sdk.Int64(437587),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## DoSigmaUsdExchange

Builds ErgoPayRequest for SigUSD exchange

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
    res, err := s.AgeUsd.DoSigmaUsdExchange(ctx, operations.DoSigmaUsdExchangeRequest{
        Address: "80923 Paxton Spurs",
        Amount: 528895,
        CheckRate: sdk.Int64(479977),
        ExecutionFee: sdk.Int64(568045),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAgeUsdInfo

Returns state of AgeUSD at this moment

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
    res, err := s.AgeUsd.GetAgeUsdInfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSigmaRsvPrice

Lists price and available volume for SigmaRSV

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
    res, err := s.AgeUsd.GetSigmaRsvPrice(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSigmaUsdPrice

Lists price and available volume for SigmaUSD

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
    res, err := s.AgeUsd.GetSigmaUsdPrice(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
