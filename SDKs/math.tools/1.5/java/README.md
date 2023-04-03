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

import org.openapis.openapi.models.operations.GetNumbersBaseSecurity;
import org.openapis.openapi.models.operations.GetNumbersBaseRequest;
import org.openapis.openapi.models.operations.GetNumbersBaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNumbersBaseRequest req = new GetNumbersBaseRequest() {{
                from = 548814;
                number = 592845;
                to = 715190;
            }}            

            GetNumbersBaseResponse res = sdk.baseConversion.getNumbersBase(req, new GetNumbersBaseSecurity() {{
                xMathtoolsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### baseConversion

* `getNumbersBase` - Convert a given number from one base to another base
* `getNumbersBaseBinary` - Convert a given number to binary
* `getNumbersBaseHex` - Convert a given number to hexadecimal
* `getNumbersBaseOctal` - Convert a given number to octal

### numberChecks

* `getNumbersIsCube` - Checks whether a given number is a cube number or not.
* `getNumbersIsPalindrome` - Checks whether a given number is a palindrome number or not.
* `getNumbersIsSquare` - Checks whether a given number is a square number or not.
* `getNumbersIsTriangle` - Checks whether a given number is a triangle number or not.
* `getNumbersPrimeIsFermatPrime` - Checks whether a given number is a known fermat prime number or not.
* `getNumbersPrimeIsFibonacciPrime` - Checks whether a given number is a known fibonacci prime number or not.
* `getNumbersPrimeIsMersennePrime` - Checks whether a given number is a known mersenne prime number or not.
* `getNumbersPrimeIsPartitionPrime` - Checks whether a given number is a known partition prime number or not.
* `getNumbersPrimeIsPellPrime` - Checks whether a given number is a known pell prime number or not.
* `getNumbersPrimeIsPerfect` - Checks whether a given number is a perfect number or not.
* `getNumbersPrimeIsPrime` - Checks whether a given number is a known prime number or not.

### numberFacts

* `getNumbersFact` - Get a random fact about a number

### numberGeneration

* `getNumbersRandom` - Generate random number(s)

### numberSystemsConversion

* `getNumbersNumeralChinese` - Convert base 10 representation of a given number to chinese numeral.
* `getNumbersNumeralEgyptian` - Convert base 10 representation of a given number to egyptian numeral.
* `getNumbersNumeralRoman` - Convert base 10 representation of a given number to roman numeral.

### numberOfTheDay

* `getNumbersNod` - Get the number of the day for current day

### pi

* `getNumbersPi` - Get digits of pi (Ï€)

### prime

* `getNumbersPrimeFactors` - Get the prime factors of a given number.
* `getNumbersPrimeIsFermatPrime` - Checks whether a given number is a known fermat prime number or not.
* `getNumbersPrimeIsFibonacciPrime` - Checks whether a given number is a known fibonacci prime number or not.
* `getNumbersPrimeIsMersennePrime` - Checks whether a given number is a known mersenne prime number or not.
* `getNumbersPrimeIsPartitionPrime` - Checks whether a given number is a known partition prime number or not.
* `getNumbersPrimeIsPellPrime` - Checks whether a given number is a known pell prime number or not.
* `getNumbersPrimeIsPerfect` - Checks whether a given number is a perfect number or not.
* `getNumbersPrimeIsPrime` - Checks whether a given number is a known prime number or not.

### spell

* `getNumbersCardinal` - Get the cardinal of the given number
* `getNumbersCurrency` - Spells out the number as a currency
* `getNumbersOrdinal` - Get the ordinal of the given number
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
