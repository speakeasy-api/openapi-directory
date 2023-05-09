# NumberChecks

## Overview

Check Property of a given number.

### Available Operations

* [GetNumbersIsCube](#getnumbersiscube) - Checks whether a given number is a cube number or not.
* [GetNumbersIsPalindrome](#getnumbersispalindrome) - Checks whether a given number is a palindrome number or not.
* [GetNumbersIsSquare](#getnumbersissquare) - Checks whether a given number is a square number or not.
* [GetNumbersIsTriangle](#getnumbersistriangle) - Checks whether a given number is a triangle number or not.
* [GetNumbersPrimeIsFermatPrime](#getnumbersprimeisfermatprime) - Checks whether a given number is a known fermat prime number or not.
* [GetNumbersPrimeIsFibonacciPrime](#getnumbersprimeisfibonacciprime) - Checks whether a given number is a known fibonacci prime number or not.
* [GetNumbersPrimeIsMersennePrime](#getnumbersprimeismersenneprime) - Checks whether a given number is a known mersenne prime number or not.
* [GetNumbersPrimeIsPartitionPrime](#getnumbersprimeispartitionprime) - Checks whether a given number is a known partition prime number or not.
* [GetNumbersPrimeIsPellPrime](#getnumbersprimeispellprime) - Checks whether a given number is a known pell prime number or not.
* [GetNumbersPrimeIsPerfect](#getnumbersprimeisperfect) - Checks whether a given number is a perfect number or not.
* [GetNumbersPrimeIsPrime](#getnumbersprimeisprime) - Checks whether a given number is a known prime number or not.

## GetNumbersIsCube

Checks whether a given number is a cube number or not.

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
    res, err := s.NumberChecks.GetNumbersIsCube(ctx, operations.GetNumbersIsCubeRequest{
        Number: sdk.Int64(437587),
    }, operations.GetNumbersIsCubeSecurity{
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

## GetNumbersIsPalindrome

Checks whether a given number is a palindrome number or not.

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
    res, err := s.NumberChecks.GetNumbersIsPalindrome(ctx, operations.GetNumbersIsPalindromeRequest{
        Number: sdk.Int64(297534),
    }, operations.GetNumbersIsPalindromeSecurity{
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

## GetNumbersIsSquare

Checks whether a given number is a square number or not.

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
    res, err := s.NumberChecks.GetNumbersIsSquare(ctx, operations.GetNumbersIsSquareRequest{
        Number: sdk.Int64(891773),
    }, operations.GetNumbersIsSquareSecurity{
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

## GetNumbersIsTriangle

Checks whether a given number is a triangle number or not.

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
    res, err := s.NumberChecks.GetNumbersIsTriangle(ctx, operations.GetNumbersIsTriangleRequest{
        Number: sdk.Int64(56713),
    }, operations.GetNumbersIsTriangleSecurity{
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
    res, err := s.NumberChecks.GetNumbersPrimeIsFermatPrime(ctx, operations.GetNumbersPrimeIsFermatPrimeRequest{
        Number: sdk.Int64(963663),
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
    res, err := s.NumberChecks.GetNumbersPrimeIsFibonacciPrime(ctx, operations.GetNumbersPrimeIsFibonacciPrimeRequest{
        Number: sdk.Int64(272656),
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
    res, err := s.NumberChecks.GetNumbersPrimeIsMersennePrime(ctx, operations.GetNumbersPrimeIsMersennePrimeRequest{
        Number: sdk.Int64(383441),
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
    res, err := s.NumberChecks.GetNumbersPrimeIsPartitionPrime(ctx, operations.GetNumbersPrimeIsPartitionPrimeRequest{
        Number: sdk.Int64(477665),
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
    res, err := s.NumberChecks.GetNumbersPrimeIsPellPrime(ctx, operations.GetNumbersPrimeIsPellPrimeRequest{
        Number: sdk.Int64(791725),
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
    res, err := s.NumberChecks.GetNumbersPrimeIsPerfect(ctx, operations.GetNumbersPrimeIsPerfectRequest{
        Number: sdk.Int64(812169),
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
    res, err := s.NumberChecks.GetNumbersPrimeIsPrime(ctx, operations.GetNumbersPrimeIsPrimeRequest{
        Number: sdk.Int64(528895),
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
