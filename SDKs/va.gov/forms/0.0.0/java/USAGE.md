<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FindFormByFormNameSecurity;
import org.openapis.openapi.models.operations.FindFormByFormNameRequest;
import org.openapis.openapi.models.operations.FindFormByFormNameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindFormByFormNameRequest req = new FindFormByFormNameRequest() {{
                formName = "corrupti";
            }}            

            FindFormByFormNameResponse res = sdk.forms.findFormByFormName(req, new FindFormByFormNameSecurity() {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.findFormByFormName200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->