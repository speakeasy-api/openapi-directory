<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindFormByFormNameRequest;
import org.openapis.openapi.models.operations.FindFormByFormNameResponse;
import org.openapis.openapi.models.operations.FindFormByFormNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindFormByFormNameRequest req = new FindFormByFormNameRequest("corrupti");            

            FindFormByFormNameResponse res = sdk.forms.findFormByFormName(req, new FindFormByFormNameSecurity("provident") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.findFormByFormName200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->