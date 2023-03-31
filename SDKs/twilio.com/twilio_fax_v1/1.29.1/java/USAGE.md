<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteFaxSecurity;
import org.openapis.openapi.models.operations.DeleteFaxPathParams;
import org.openapis.openapi.models.operations.DeleteFaxRequest;
import org.openapis.openapi.models.operations.DeleteFaxResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFaxRequest req = new DeleteFaxRequest() {{
                security = new DeleteFaxSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new DeleteFaxPathParams() {{
                    sid = "corrupti";
                }};
            }};            

            DeleteFaxResponse res = sdk.deleteFax(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->