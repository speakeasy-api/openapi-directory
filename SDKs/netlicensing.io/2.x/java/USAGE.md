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

            CreateLicenseRequest req = new CreateLicenseRequest() {{
                security = new CreateLicenseSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateLicenseRequestBody() {{
                    active = false;
                    currency = "voluptas";
                    hidden = true;
                    licenseTemplateNumber = "expedita";
                    licenseeNumber = "consequuntur";
                    name = "dolor";
                    number = "expedita";
                    parentfeature = "voluptas";
                    price = 88.099998;
                    quantity = "nihil";
                    startDate = "2004-06-02T10:14:12Z";
                    timeVolume = "voluptatum";
                    timeVolumePeriod = "et";
                    usedQuantity = "ut";
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