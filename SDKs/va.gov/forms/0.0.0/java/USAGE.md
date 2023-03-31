<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FindFormByFormNameSecurity;
import org.openapis.openapi.models.operations.FindFormByFormNamePathParams;
import org.openapis.openapi.models.operations.FindFormByFormNameRequest;
import org.openapis.openapi.models.operations.FindFormByFormNameResponse;
import org.openapis.openapi.models.shared.SchemeApikey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindFormByFormNameRequest req = new FindFormByFormNameRequest() {{
                security = new FindFormByFormNameSecurity() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new FindFormByFormNamePathParams() {{
                    formName = "corrupti";
                }};
            }};            

            FindFormByFormNameResponse res = sdk.forms.findFormByFormName(req);

            if (res.findFormByFormName200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->