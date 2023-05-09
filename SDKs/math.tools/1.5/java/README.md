# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNumbersBaseRequest;
import org.openapis.openapi.models.operations.GetNumbersBaseResponse;
import org.openapis.openapi.models.operations.GetNumbersBaseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersBaseRequest req = new GetNumbersBaseRequest(548814L, 592845L) {{
                from = 715190L;
            }};            

            GetNumbersBaseResponse res = sdk.baseConversion.getNumbersBase(req, new GetNumbersBaseSecurity("quibusdam") {{
                xMathtoolsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [baseConversion](docs/baseconversion/README.md)

* [getNumbersBase](docs/baseconversion/README.md#getnumbersbase) - Convert a given number from one base to another base
* [getNumbersBaseBinary](docs/baseconversion/README.md#getnumbersbasebinary) - Convert a given number to binary
* [getNumbersBaseHex](docs/baseconversion/README.md#getnumbersbasehex) - Convert a given number to hexadecimal
* [getNumbersBaseOctal](docs/baseconversion/README.md#getnumbersbaseoctal) - Convert a given number to octal

### [numberChecks](docs/numberchecks/README.md)

* [getNumbersIsCube](docs/numberchecks/README.md#getnumbersiscube) - Checks whether a given number is a cube number or not.
* [getNumbersIsPalindrome](docs/numberchecks/README.md#getnumbersispalindrome) - Checks whether a given number is a palindrome number or not.
* [getNumbersIsSquare](docs/numberchecks/README.md#getnumbersissquare) - Checks whether a given number is a square number or not.
* [getNumbersIsTriangle](docs/numberchecks/README.md#getnumbersistriangle) - Checks whether a given number is a triangle number or not.
* [getNumbersPrimeIsFermatPrime](docs/numberchecks/README.md#getnumbersprimeisfermatprime) - Checks whether a given number is a known fermat prime number or not.
* [getNumbersPrimeIsFibonacciPrime](docs/numberchecks/README.md#getnumbersprimeisfibonacciprime) - Checks whether a given number is a known fibonacci prime number or not.
* [getNumbersPrimeIsMersennePrime](docs/numberchecks/README.md#getnumbersprimeismersenneprime) - Checks whether a given number is a known mersenne prime number or not.
* [getNumbersPrimeIsPartitionPrime](docs/numberchecks/README.md#getnumbersprimeispartitionprime) - Checks whether a given number is a known partition prime number or not.
* [getNumbersPrimeIsPellPrime](docs/numberchecks/README.md#getnumbersprimeispellprime) - Checks whether a given number is a known pell prime number or not.
* [getNumbersPrimeIsPerfect](docs/numberchecks/README.md#getnumbersprimeisperfect) - Checks whether a given number is a perfect number or not.
* [getNumbersPrimeIsPrime](docs/numberchecks/README.md#getnumbersprimeisprime) - Checks whether a given number is a known prime number or not.

### [numberFacts](docs/numberfacts/README.md)

* [getNumbersFact](docs/numberfacts/README.md#getnumbersfact) - Get a random fact about a number

### [numberGeneration](docs/numbergeneration/README.md)

* [getNumbersRandom](docs/numbergeneration/README.md#getnumbersrandom) - Generate random number(s)

### [numberSystemsConversion](docs/numbersystemsconversion/README.md)

* [getNumbersNumeralChinese](docs/numbersystemsconversion/README.md#getnumbersnumeralchinese) - Convert base 10 representation of a given number to chinese numeral.
* [getNumbersNumeralEgyptian](docs/numbersystemsconversion/README.md#getnumbersnumeralegyptian) - Convert base 10 representation of a given number to egyptian numeral.
* [getNumbersNumeralRoman](docs/numbersystemsconversion/README.md#getnumbersnumeralroman) - Convert base 10 representation of a given number to roman numeral.

### [numberOfTheDay](docs/numberoftheday/README.md)

* [getNumbersNod](docs/numberoftheday/README.md#getnumbersnod) - Get the number of the day for current day

### [pi](docs/pi/README.md)

* [getNumbersPi](docs/pi/README.md#getnumberspi) - Get digits of pi (Ï€)

### [prime](docs/prime/README.md)

* [getNumbersPrimeFactors](docs/prime/README.md#getnumbersprimefactors) - Get the prime factors of a given number.
* [getNumbersPrimeIsFermatPrime](docs/prime/README.md#getnumbersprimeisfermatprime) - Checks whether a given number is a known fermat prime number or not.
* [getNumbersPrimeIsFibonacciPrime](docs/prime/README.md#getnumbersprimeisfibonacciprime) - Checks whether a given number is a known fibonacci prime number or not.
* [getNumbersPrimeIsMersennePrime](docs/prime/README.md#getnumbersprimeismersenneprime) - Checks whether a given number is a known mersenne prime number or not.
* [getNumbersPrimeIsPartitionPrime](docs/prime/README.md#getnumbersprimeispartitionprime) - Checks whether a given number is a known partition prime number or not.
* [getNumbersPrimeIsPellPrime](docs/prime/README.md#getnumbersprimeispellprime) - Checks whether a given number is a known pell prime number or not.
* [getNumbersPrimeIsPerfect](docs/prime/README.md#getnumbersprimeisperfect) - Checks whether a given number is a perfect number or not.
* [getNumbersPrimeIsPrime](docs/prime/README.md#getnumbersprimeisprime) - Checks whether a given number is a known prime number or not.

### [spell](docs/spell/README.md)

* [getNumbersCardinal](docs/spell/README.md#getnumberscardinal) - Get the cardinal of the given number
* [getNumbersCurrency](docs/spell/README.md#getnumberscurrency) - Spells out the number as a currency
* [getNumbersOrdinal](docs/spell/README.md#getnumbersordinal) - Get the ordinal of the given number
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
