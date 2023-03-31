<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteAttributesComputedIdPathParams;
import org.openapis.openapi.models.operations.DeleteAttributesComputedIdRequest;
import org.openapis.openapi.models.operations.DeleteAttributesComputedIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteAttributesComputedIdRequest req = new DeleteAttributesComputedIdRequest() {{
                pathParams = new DeleteAttributesComputedIdPathParams() {{
                    id = 548814;
                }};
            }};            

            DeleteAttributesComputedIdResponse res = sdk.attributes.deleteAttributesComputedId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->