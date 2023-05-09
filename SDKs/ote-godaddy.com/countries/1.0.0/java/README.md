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
import org.openapis.openapi.models.operations.GetCountriesOrderEnum;
import org.openapis.openapi.models.operations.GetCountriesRequest;
import org.openapis.openapi.models.operations.GetCountriesResponse;
import org.openapis.openapi.models.operations.GetCountriesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCountriesRequest req = new GetCountriesRequest("corrupti") {{
                order = GetCountriesOrderEnum.DESCENDING;
                regionName = "distinctio";
                regionTypeId = 844266L;
                sort = GetCountriesSortEnum.LABEL;
            }};            

            GetCountriesResponse res = sdk.v1.getCountries(req);

            if (res.arrayOfCountrySummary != null) {
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


### [v1](docs/v1/README.md)

* [getCountries](docs/v1/README.md#getcountries) - Retrieves summary country information for the provided marketId and filters
* [getCountry](docs/v1/README.md#getcountry) - Retrieves country and summary state information for provided countryKey
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
