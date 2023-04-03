<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesSecurity;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesRequest;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesResponse;
import org.openapis.openapi.models.shared.AdditionalRate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrUpdateAdditionalRatesRequest req = new AddOrUpdateAdditionalRatesRequest() {{
                additionalRate = new AdditionalRate() {{
                    changeReason = "corrupti";
                    costCenter1 = "provident";
                    costCenter2 = "distinctio";
                    costCenter3 = "quibusdam";
                    effectiveDate = "unde";
                    endCheckDate = "nulla";
                    job = "corrupti";
                    rate = 8472.52;
                    rateCode = "vel";
                    rateNotes = "error";
                    ratePer = "deserunt";
                    shift = "suscipit";
                }};
                companyId = "iure";
                employeeId = "magnam";
            }}            

            AddOrUpdateAdditionalRatesResponse res = sdk.additionalRates.addOrUpdateAdditionalRates(req, new AddOrUpdateAdditionalRatesSecurity() {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->