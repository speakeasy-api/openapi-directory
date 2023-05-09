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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BaseConversion.GetNumbersBase(ctx, operations.GetNumbersBaseRequest{
        From: sdk.Int64(548814),
        Number: 592845,
        To: 715190,
    }, operations.GetNumbersBaseSecurity{
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


### [BaseConversion](docs/baseconversion/README.md)

* [GetNumbersBase](docs/baseconversion/README.md#getnumbersbase) - Convert a given number from one base to another base
* [GetNumbersBaseBinary](docs/baseconversion/README.md#getnumbersbasebinary) - Convert a given number to binary
* [GetNumbersBaseHex](docs/baseconversion/README.md#getnumbersbasehex) - Convert a given number to hexadecimal
* [GetNumbersBaseOctal](docs/baseconversion/README.md#getnumbersbaseoctal) - Convert a given number to octal

### [NumberChecks](docs/numberchecks/README.md)

* [GetNumbersIsCube](docs/numberchecks/README.md#getnumbersiscube) - Checks whether a given number is a cube number or not.
* [GetNumbersIsPalindrome](docs/numberchecks/README.md#getnumbersispalindrome) - Checks whether a given number is a palindrome number or not.
* [GetNumbersIsSquare](docs/numberchecks/README.md#getnumbersissquare) - Checks whether a given number is a square number or not.
* [GetNumbersIsTriangle](docs/numberchecks/README.md#getnumbersistriangle) - Checks whether a given number is a triangle number or not.
* [GetNumbersPrimeIsFermatPrime](docs/numberchecks/README.md#getnumbersprimeisfermatprime) - Checks whether a given number is a known fermat prime number or not.
* [GetNumbersPrimeIsFibonacciPrime](docs/numberchecks/README.md#getnumbersprimeisfibonacciprime) - Checks whether a given number is a known fibonacci prime number or not.
* [GetNumbersPrimeIsMersennePrime](docs/numberchecks/README.md#getnumbersprimeismersenneprime) - Checks whether a given number is a known mersenne prime number or not.
* [GetNumbersPrimeIsPartitionPrime](docs/numberchecks/README.md#getnumbersprimeispartitionprime) - Checks whether a given number is a known partition prime number or not.
* [GetNumbersPrimeIsPellPrime](docs/numberchecks/README.md#getnumbersprimeispellprime) - Checks whether a given number is a known pell prime number or not.
* [GetNumbersPrimeIsPerfect](docs/numberchecks/README.md#getnumbersprimeisperfect) - Checks whether a given number is a perfect number or not.
* [GetNumbersPrimeIsPrime](docs/numberchecks/README.md#getnumbersprimeisprime) - Checks whether a given number is a known prime number or not.

### [NumberFacts](docs/numberfacts/README.md)

* [GetNumbersFact](docs/numberfacts/README.md#getnumbersfact) - Get a random fact about a number

### [NumberGeneration](docs/numbergeneration/README.md)

* [GetNumbersRandom](docs/numbergeneration/README.md#getnumbersrandom) - Generate random number(s)

### [NumberSystemsConversion](docs/numbersystemsconversion/README.md)

* [GetNumbersNumeralChinese](docs/numbersystemsconversion/README.md#getnumbersnumeralchinese) - Convert base 10 representation of a given number to chinese numeral.
* [GetNumbersNumeralEgyptian](docs/numbersystemsconversion/README.md#getnumbersnumeralegyptian) - Convert base 10 representation of a given number to egyptian numeral.
* [GetNumbersNumeralRoman](docs/numbersystemsconversion/README.md#getnumbersnumeralroman) - Convert base 10 representation of a given number to roman numeral.

### [NumberOfTheDay](docs/numberoftheday/README.md)

* [GetNumbersNod](docs/numberoftheday/README.md#getnumbersnod) - Get the number of the day for current day

### [Pi](docs/pi/README.md)

* [GetNumbersPi](docs/pi/README.md#getnumberspi) - Get digits of pi (Ï€)

### [Prime](docs/prime/README.md)

* [GetNumbersPrimeFactors](docs/prime/README.md#getnumbersprimefactors) - Get the prime factors of a given number.
* [GetNumbersPrimeIsFermatPrime](docs/prime/README.md#getnumbersprimeisfermatprime) - Checks whether a given number is a known fermat prime number or not.
* [GetNumbersPrimeIsFibonacciPrime](docs/prime/README.md#getnumbersprimeisfibonacciprime) - Checks whether a given number is a known fibonacci prime number or not.
* [GetNumbersPrimeIsMersennePrime](docs/prime/README.md#getnumbersprimeismersenneprime) - Checks whether a given number is a known mersenne prime number or not.
* [GetNumbersPrimeIsPartitionPrime](docs/prime/README.md#getnumbersprimeispartitionprime) - Checks whether a given number is a known partition prime number or not.
* [GetNumbersPrimeIsPellPrime](docs/prime/README.md#getnumbersprimeispellprime) - Checks whether a given number is a known pell prime number or not.
* [GetNumbersPrimeIsPerfect](docs/prime/README.md#getnumbersprimeisperfect) - Checks whether a given number is a perfect number or not.
* [GetNumbersPrimeIsPrime](docs/prime/README.md#getnumbersprimeisprime) - Checks whether a given number is a known prime number or not.

### [Spell](docs/spell/README.md)

* [GetNumbersCardinal](docs/spell/README.md#getnumberscardinal) - Get the cardinal of the given number
* [GetNumbersCurrency](docs/spell/README.md#getnumberscurrency) - Spells out the number as a currency
* [GetNumbersOrdinal](docs/spell/README.md#getnumbersordinal) - Get the ordinal of the given number
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
