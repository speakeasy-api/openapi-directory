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
                    accept = "error";
                    authorization = "consequuntur";
                    contentType = "in";
                }};
                request = new VaccineStatusRequest() {{
                    patientId = "mollitia";
                }};
            }};

            GetVaccineStatusResponse res = sdk.brasilApi.getVaccineStatus(req);

            if (res.vaccineResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->