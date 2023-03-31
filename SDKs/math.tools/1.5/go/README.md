# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/math.tools/1.5/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetNumbersBaseRequest{
        From: 548814,
        Number: 592845,
        To: 715190,
    }

    ctx := context.Background()
    res, err := s.BaseConversion.GetNumbersBase(ctx, req, operations.GetNumbersBaseSecurity{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### BaseConversion

* `GetNumbersBase` - Convert a given number from one base to another base
* `GetNumbersBaseBinary` - Convert a given number to binary
* `GetNumbersBaseHex` - Convert a given number to hexadecimal
* `GetNumbersBaseOctal` - Convert a given number to octal

### NumberChecks

* `GetNumbersIsCube` - Checks whether a given number is a cube number or not.
* `GetNumbersIsPalindrome` - Checks whether a given number is a palindrome number or not.
* `GetNumbersIsSquare` - Checks whether a given number is a square number or not.
* `GetNumbersIsTriangle` - Checks whether a given number is a triangle number or not.
* `GetNumbersPrimeIsFermatPrime` - Checks whether a given number is a known fermat prime number or not.
* `GetNumbersPrimeIsFibonacciPrime` - Checks whether a given number is a known fibonacci prime number or not.
* `GetNumbersPrimeIsMersennePrime` - Checks whether a given number is a known mersenne prime number or not.
* `GetNumbersPrimeIsPartitionPrime` - Checks whether a given number is a known partition prime number or not.
* `GetNumbersPrimeIsPellPrime` - Checks whether a given number is a known pell prime number or not.
* `GetNumbersPrimeIsPerfect` - Checks whether a given number is a perfect number or not.
* `GetNumbersPrimeIsPrime` - Checks whether a given number is a known prime number or not.

### NumberFacts

* `GetNumbersFact` - Get a random fact about a number

### NumberGeneration

* `GetNumbersRandom` - Generate random number(s)

### NumberSystemsConversion

* `GetNumbersNumeralChinese` - Convert base 10 representation of a given number to chinese numeral.
* `GetNumbersNumeralEgyptian` - Convert base 10 representation of a given number to egyptian numeral.
* `GetNumbersNumeralRoman` - Convert base 10 representation of a given number to roman numeral.

### NumberOfTheDay

* `GetNumbersNod` - Get the number of the day for current day

### Pi

* `GetNumbersPi` - Get digits of pi (Ï€)

### Prime

* `GetNumbersPrimeFactors` - Get the prime factors of a given number.
* `GetNumbersPrimeIsFermatPrime` - Checks whether a given number is a known fermat prime number or not.
* `GetNumbersPrimeIsFibonacciPrime` - Checks whether a given number is a known fibonacci prime number or not.
* `GetNumbersPrimeIsMersennePrime` - Checks whether a given number is a known mersenne prime number or not.
* `GetNumbersPrimeIsPartitionPrime` - Checks whether a given number is a known partition prime number or not.
* `GetNumbersPrimeIsPellPrime` - Checks whether a given number is a known pell prime number or not.
* `GetNumbersPrimeIsPerfect` - Checks whether a given number is a perfect number or not.
* `GetNumbersPrimeIsPrime` - Checks whether a given number is a known prime number or not.

### Spell

* `GetNumbersCardinal` - Get the cardinal of the given number
* `GetNumbersCurrency` - Spells out the number as a currency
* `GetNumbersOrdinal` - Get the ordinal of the given number
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
