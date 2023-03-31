<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesSecurity;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesPathParams;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesRequest;
import org.openapis.openapi.models.operations.AddOrUpdateAdditionalRatesResponse;
import org.openapis.openapi.models.shared.AdditionalRate;
import org.openapis.openapi.models.shared.SchemePaylocityAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrUpdateAdditionalRatesRequest req = new AddOrUpdateAdditionalRatesRequest() {{
                security = new AddOrUpdateAdditionalRatesSecurity() {{
                    paylocityAuth = new SchemePaylocityAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AddOrUpdateAdditionalRatesPathParams() {{
                    companyId = "corrupti";
                    employeeId = "provident";
                }};
                request = new AdditionalRate() {{
                    changeReason = "distinctio";
                    costCenter1 = "quibusdam";
                    costCenter2 = "unde";
                    costCenter3 = "nulla";
                    effectiveDate = "corrupti";
                    endCheckDate = "illum";
                    job = "vel";
                    rate = 6235.64;
                    rateCode = "deserunt";
                    rateNotes = "suscipit";
                    ratePer = "iure";
                    shift = "magnam";
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