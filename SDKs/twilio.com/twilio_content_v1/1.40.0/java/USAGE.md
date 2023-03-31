<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteContentSecurity;
import org.openapis.openapi.models.operations.DeleteContentPathParams;
import org.openapis.openapi.models.operations.DeleteContentRequest;
import org.openapis.openapi.models.operations.DeleteContentResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteContentRequest req = new DeleteContentRequest() {{
                security = new DeleteContentSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new DeleteContentPathParams() {{
                    sid = "corrupti";
                }};
            }};            

            DeleteContentResponse res = sdk.deleteContent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->