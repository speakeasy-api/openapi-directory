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
                    currency = "impedit";
                    hidden = false;
                    licenseTemplateNumber = "voluptatibus";
                    licenseeNumber = "porro";
                    name = "molestias";
                    number = "consequatur";
                    parentfeature = "voluptas";
                    price = 42.099998;
                    quantity = "reprehenderit";
                    startDate = "2018-03-31T02:02:22Z";
                    timeVolume = "sed";
                    timeVolumePeriod = "amet";
                    usedQuantity = "unde";
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