<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetglobalnumberinfoRequest;
import org.openapis.openapi.models.operations.GetglobalnumberinfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetglobalnumberinfoRequest req = new GetglobalnumberinfoRequest() {{
                intlnumber = "corrupti";
                license = "provident";
            }}            

            GetglobalnumberinfoResponse res = sdk.globalPhoneNumberInformation.getglobalnumberinfo(req);

            if (res.getglobalnumberinfo200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->