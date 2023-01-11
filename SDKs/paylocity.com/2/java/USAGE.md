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
                    companyId = "sit";
                    employeeId = "voluptas";
                }};
                request = new AdditionalRate() {{
                    changeReason = "culpa";
                    costCenter1 = "expedita";
                    costCenter2 = "consequuntur";
                    costCenter3 = "dolor";
                    effectiveDate = "expedita";
                    endCheckDate = "voluptas";
                    job = "fugit";
                    rate = 28.100000;
                    rateCode = "rerum";
                    rateNotes = "dicta";
                    ratePer = "debitis";
                    shift = "voluptatum";
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