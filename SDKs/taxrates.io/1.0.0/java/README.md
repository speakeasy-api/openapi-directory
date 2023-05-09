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
import org.openapis.openapi.models.operations.TaxRatesByCountryCodeRequest;
import org.openapis.openapi.models.operations.TaxRatesByCountryCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaxRatesByCountryCodeRequest req = new TaxRatesByCountryCodeRequest() {{
                countryCode = "US";
                date = "2020-09-02";
                domain = "api.taxrates.io";
                filter = "corrupti";
                productCodes = "C010";
                province = "provident";
                zip = "71642";
            }};            

            TaxRatesByCountryCodeResponse res = sdk.v1Tax.taxRatesByCountryCode(req);

            if (res.taxRatesByCountryCode200ApplicationJSONObject != null) {
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


### [v1Tax](docs/v1tax/README.md)

* [taxRatesByCountryCode](docs/v1tax/README.md#taxratesbycountrycode) - Tax rates by Country Code
* [taxRatesByIpAddress](docs/v1tax/README.md#taxratesbyipaddress) - Tax rates by IP address

### [v3Tax](docs/v3tax/README.md)

* [allTaxRates](docs/v3tax/README.md#alltaxrates) - All tax rates
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
