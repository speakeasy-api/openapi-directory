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
                    accept = "nemo";
                    authorization = "architecto";
                    contentType = "neque";
                }};
                request = new VaccineStatusRequest() {{
                    departmentId = "autem";
                    patientId = "saepe";
                    token = "voluptatem";
                }};
            }};

            GetVaccineStatusResponse res = sdk.athenaApi.getVaccineStatus(req);

            if (res.vaccineResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->