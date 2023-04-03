<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddressAutocompleteRequest;
import org.openapis.openapi.models.operations.AddressAutocompleteResponse;
import org.openapis.openapi.models.shared.BiasIpParamEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddressAutocompleteRequest req = new AddressAutocompleteRequest() {{
                apiKey = "ak_test";
                biasCountry = "corrupti";
                biasIp = "true";
                biasLonlat = "-2.095,57.15,100";
                biasPostTown = "provident";
                biasPostcode = "/addresses?postcode=SW1A2AA&q=10";
                biasPostcodeArea = "The postcode area of SW1A 2AA and N1 6RT are SW and N respectively";
                biasPostcodeOutward = "distinctio";
                biasPostcodeSector = "SW1A 2AA is SW1A 2";
                biasThoroughfare = "quibusdam";
                box = "2.095,57.15,-2.096,57.14";
                context = "unde";
                country = "England";
                limit = 5;
                postTown = "London";
                postcode = "SW1A 2AA";
                postcodeArea = "SW";
                postcodeOutward = "1AA";
                postcodeSector = "SW1A 2";
                postcodeType = "L";
                query = "nulla";
                suOrganisationIndicator = "Y";
                uprn = 100023336956;
            }}            

            AddressAutocompleteResponse res = sdk.addressSearch.addressAutocomplete(req);

            if (res.autocompleteResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->