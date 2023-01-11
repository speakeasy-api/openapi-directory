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

            FindFormByFormNameRequest req = new FindFormByFormNameRequest() {{
                security = new FindFormByFormNameSecurity() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new FindFormByFormNamePathParams() {{
                    formName = "sit";
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