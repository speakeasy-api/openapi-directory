# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/math.tools/1.5/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/math.tools/1.5/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetNumbersBaseRequest,
  GetNumbersBaseResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetNumbersBaseRequest = {
  from: 548814,
  number: 592845,
  to: 715190,
};

sdk.baseConversion.getNumbersBase(req).then((res: GetNumbersBaseResponse | AxiosError) => {
   // handle response
});
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

