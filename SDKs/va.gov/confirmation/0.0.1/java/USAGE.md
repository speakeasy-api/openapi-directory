<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetVeteranStatusSecurity;
import org.openapis.openapi.models.operations.GetVeteranStatusResponse;
import org.openapis.openapi.models.shared.VeteranStatusRequestGenderEnum;
import org.openapis.openapi.models.shared.VeteranStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.VeteranStatusRequest req = new VeteranStatusRequest() {{
                birthDate = "1965-01-01";
                firstName = "John";
                gender = "M";
                lastName = "Doe";
                middleName = "Theodore";
                ssn = "555-55-5555";
            }}            

            GetVeteranStatusResponse res = sdk.veteranConfirmationStatus.getVeteranStatus(req, new GetVeteranStatusSecurity() {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.veteranStatusConfirmation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->