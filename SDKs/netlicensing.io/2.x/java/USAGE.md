<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateLicenseSecurity;
import org.openapis.openapi.models.operations.CreateLicenseRequestBody;
import org.openapis.openapi.models.operations.CreateLicenseRequest;
import org.openapis.openapi.models.operations.CreateLicenseResponse;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateLicenseRequest req = new CreateLicenseRequest() {{
                security = new CreateLicenseSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateLicenseRequestBody() {{
                    active = false;
                    currency = "corrupti";
                    hidden = false;
                    licenseTemplateNumber = "provident";
                    licenseeNumber = "distinctio";
                    name = "quibusdam";
                    number = "unde";
                    parentfeature = "nulla";
                    price = 5448.83;
                    quantity = "illum";
                    startDate = "2022-05-18T09:34:54.894Z";
                    timeVolume = "deserunt";
                    timeVolumePeriod = "suscipit";
                    usedQuantity = "iure";
                }};
            }};            

            CreateLicenseResponse res = sdk.license.createLicense(req);

            if (res.netlicensing.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->