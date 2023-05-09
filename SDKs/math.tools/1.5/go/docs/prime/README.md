# Prime

## Overview

Things to do with Prime numbers

### Available Operations

* [GetNumbersPrimeFactors](#getnumbersprimefactors) - Get the prime factors of a given number.
* [GetNumbersPrimeIsFermatPrime](#getnumbersprimeisfermatprime) - Checks whether a given number is a known fermat prime number or not.
* [GetNumbersPrimeIsFibonacciPrime](#getnumbersprimeisfibonacciprime) - Checks whether a given number is a known fibonacci prime number or not.
* [GetNumbersPrimeIsMersennePrime](#getnumbersprimeismersenneprime) - Checks whether a given number is a known mersenne prime number or not.
* [GetNumbersPrimeIsPartitionPrime](#getnumbersprimeispartitionprime) - Checks whether a given number is a known partition prime number or not.
* [GetNumbersPrimeIsPellPrime](#getnumbersprimeispellprime) - Checks whether a given number is a known pell prime number or not.
* [GetNumbersPrimeIsPerfect](#getnumbersprimeisperfect) - Checks whether a given number is a perfect number or not.
* [GetNumbersPrimeIsPrime](#getnumbersprimeisprime) - Checks whether a given number is a known prime number or not.

## GetNumbersPrimeFactors

Get the prime factors of a given number.

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
    res, err := s.Prime.GetNumbersPrimeFactors(ctx, operations.GetNumbersPrimeFactorsRequest{
        Number: sdk.Int64(20218),
    }, operations.GetNumbersPrimeFactorsSecurity{
        XMathtoolsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNumbersPrimeIsFermatPrime

Checks whether a given number is a known fermat prime number or not.

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
    res, err := s.Prime.GetNumbersPrimeIsFermatPrime(ctx, operations.GetNumbersPrimeIsFermatPrimeRequest{
        Number: sdk.Int64(368241),
    }, operations.GetNumbersPrimeIsFermatPrimeSecurity{
        XMathtoolsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNumbersPrimeIsFibonacciPrime

Checks whether a given number is a known fibonacci prime number or not.

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
    res, err := s.Prime.GetNumbersPrimeIsFibonacciPrime(ctx, operations.GetNumbersPrimeIsFibonacciPrimeRequest{
        Number: sdk.Int64(832620),
    }, operations.GetNumbersPrimeIsFibonacciPrimeSecurity{
        XMathtoolsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNumbersPrimeIsMersennePrime

Checks whether a given number is a known mersenne prime number or not.

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
    res, err := s.Prime.GetNumbersPrimeIsMersennePrime(ctx, operations.GetNumbersPrimeIsMersennePrimeRequest{
        Number: sdk.Int64(957156),
    }, operations.GetNumbersPrimeIsMersennePrimeSecurity{
        XMathtoolsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNumbersPrimeIsPartitionPrime

Checks whether a given number is a known partition prime number or not.

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
    res, err := s.Prime.GetNumbersPrimeIsPartitionPrime(ctx, operations.GetNumbersPrimeIsPartitionPrimeRequest{
        Number: sdk.Int64(778157),
    }, operations.GetNumbersPrimeIsPartitionPrimeSecurity{
        XMathtoolsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNumbersPrimeIsPellPrime

Checks whether a given number is a known pell prime number or not.

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
    res, err := s.Prime.GetNumbersPrimeIsPellPrime(ctx, operations.GetNumbersPrimeIsPellPrimeRequest{
        Number: sdk.Int64(140350),
    }, operations.GetNumbersPrimeIsPellPrimeSecurity{
        XMathtoolsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNumbersPrimeIsPerfect

Checks whether a given number is a perfect number or not.

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
    res, err := s.Prime.GetNumbersPrimeIsPerfect(ctx, operations.GetNumbersPrimeIsPerfectRequest{
        Number: sdk.Int64(870013),
    }, operations.GetNumbersPrimeIsPerfectSecurity{
        XMathtoolsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNumbersPrimeIsPrime

Checks whether a given number is a known prime number or not.

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
    res, err := s.Prime.GetNumbersPrimeIsPrime(ctx, operations.GetNumbersPrimeIsPrimeRequest{
        Number: sdk.Int64(870088),
    }, operations.GetNumbersPrimeIsPrimeSecurity{
        XMathtoolsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
