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