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

            GetglobalnumberinfoRequest req = new GetglobalnumberinfoRequest() {{
                queryParams = new GetglobalnumberinfoQueryParams() {{
                    intlnumber = "sit";
                    license = "voluptas";
                }};
            }};

            GetglobalnumberinfoResponse res = sdk.globalPhoneNumberInformation.getglobalnumberinfo(req);

            if (res.getglobalnumberinfo200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->