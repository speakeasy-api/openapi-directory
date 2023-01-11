<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            AddOrUpdateAdditionalRatesRequest req = new AddOrUpdateAdditionalRatesRequest() {{
                security = new AddOrUpdateAdditionalRatesSecurity() {{
                    paylocityAuth = new SchemePaylocityAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AddOrUpdateAdditionalRatesPathParams() {{
                    companyId = "dolorum";
                    employeeId = "possimus";
                }};
                request = new AdditionalRate() {{
                    changeReason = "non";
                    costCenter1 = "occaecati";
                    costCenter2 = "itaque";
                    costCenter3 = "fugit";
                    effectiveDate = "illo";
                    endCheckDate = "consequatur";
                    job = "eaque";
                    rate = 42.200001;
                    rateCode = "ut";
                    rateNotes = "odio";
                    ratePer = "rerum";
                    shift = "non";
                }};
            }};

            AddOrUpdateAdditionalRatesResponse res = sdk.additionalRates.addOrUpdateAdditionalRates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->