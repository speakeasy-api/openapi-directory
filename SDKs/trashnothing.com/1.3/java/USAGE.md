<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ContactModeratorsPathParams;
import org.openapis.openapi.models.operations.ContactModeratorsRequestBody;
import org.openapis.openapi.models.operations.ContactModeratorsRequest;
import org.openapis.openapi.models.operations.ContactModeratorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2Code = new SchemeOauth2Code() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }})
                .build();

            ContactModeratorsRequest req = new ContactModeratorsRequest() {{
                pathParams = new ContactModeratorsPathParams() {{
                    groupId = "corrupti";
                }};
                request = new ContactModeratorsRequestBody() {{
                    message = "provident";
                    subject = "distinctio";
                }};
            }};            

            ContactModeratorsResponse res = sdk.groups.contactModerators(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->