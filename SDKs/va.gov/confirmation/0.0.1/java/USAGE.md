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

            GetVeteranStatusRequest req = new GetVeteranStatusRequest() {{
                security = new GetVeteranStatusSecurity() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new VeteranStatusRequest() {{
                    birthDate = "sit";
                    firstName = "voluptas";
                    gender = "F";
                    lastName = "expedita";
                    middleName = "consequuntur";
                    ssn = "dolor";
                }};
            }};

            GetVeteranStatusResponse res = sdk.veteranConfirmationStatus.getVeteranStatus(req);

            if (res.veteranStatusConfirmation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->