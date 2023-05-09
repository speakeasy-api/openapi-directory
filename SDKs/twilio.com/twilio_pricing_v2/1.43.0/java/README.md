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
import org.openapis.openapi.models.operations.FetchTrunkingCountryRequest;
import org.openapis.openapi.models.operations.FetchTrunkingCountryResponse;
import org.openapis.openapi.models.operations.FetchTrunkingCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTrunkingCountryRequest req = new FetchTrunkingCountryRequest("corrupti");            

            FetchTrunkingCountryResponse res = sdk.fetchTrunkingCountry(req, new FetchTrunkingCountrySecurity("provident", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pricingV2TrunkingCountryInstance != null) {
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

### [SDK](docs/sdk/README.md)

* [fetchTrunkingCountry](docs/sdk/README.md#fetchtrunkingcountry) - Fetch a specific Country.
* [fetchTrunkingNumber](docs/sdk/README.md#fetchtrunkingnumber) - Fetch pricing information for a specific destination and, optionally, origination phone number.
* [fetchVoiceCountry](docs/sdk/README.md#fetchvoicecountry) - Fetch a specific Country.
* [fetchVoiceNumber](docs/sdk/README.md#fetchvoicenumber) - Fetch pricing information for a specific destination and, optionally, origination phone number.
* [listTrunkingCountry](docs/sdk/README.md#listtrunkingcountry)
* [listVoiceCountry](docs/sdk/README.md#listvoicecountry)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
