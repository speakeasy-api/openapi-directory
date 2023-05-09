<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLicenseRequestBody;
import org.openapis.openapi.models.operations.CreateLicenseResponse;
import org.openapis.openapi.models.operations.CreateLicenseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateLicenseRequestBody req = new CreateLicenseRequestBody(false, "corrupti", "provident") {{
                currency = "distinctio";
                hidden = false;
                name = "Stuart Stiedemann";
                number = "vel";
                parentfeature = "error";
                price = 6458.94;
                quantity = "suscipit";
                startDate = OffsetDateTime.parse("2022-09-14T09:35:47.986Z");
                timeVolume = "debitis";
                timeVolumePeriod = "ipsa";
                usedQuantity = "delectus";
            }};            

            CreateLicenseResponse res = sdk.license.createLicense(req, new CreateLicenseSecurity("tempora", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->