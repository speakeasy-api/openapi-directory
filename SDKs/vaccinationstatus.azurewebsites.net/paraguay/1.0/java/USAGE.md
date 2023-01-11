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

            GetVaccineStatusRequest req = new GetVaccineStatusRequest() {{
                headers = new GetVaccineStatusHeaders() {{
                    accept = "non";
                    authorization = "aut";
                    contentType = "autem";
                }};
                request = new VaccineStatusRequest() {{
                    documento = "dolores";
                }};
            }};

            GetVaccineStatusResponse res = sdk.paraguayApi.getVaccineStatus(req);

            if (res.vaccineResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->