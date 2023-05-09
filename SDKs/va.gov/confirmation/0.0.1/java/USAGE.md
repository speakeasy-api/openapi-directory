<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVeteranStatusResponse;
import org.openapis.openapi.models.operations.GetVeteranStatusSecurity;
import org.openapis.openapi.models.shared.VeteranStatusRequest;
import org.openapis.openapi.models.shared.VeteranStatusRequestGenderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.VeteranStatusRequest req = new VeteranStatusRequest("1965-01-01", "John", "Doe", "555-55-5555") {{
                gender = VeteranStatusRequestGenderEnum.M;
                middleName = "Theodore";
            }};            

            GetVeteranStatusResponse res = sdk.veteranConfirmationStatus.getVeteranStatus(req, new GetVeteranStatusSecurity("corrupti") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.veteranStatusConfirmation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->