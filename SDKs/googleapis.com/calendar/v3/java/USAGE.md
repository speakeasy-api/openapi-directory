<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarAclDeleteRequest;
import org.openapis.openapi.models.operations.CalendarAclDeleteResponse;
import org.openapis.openapi.models.operations.CalendarAclDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarAclDeleteRequest req = new CalendarAclDeleteRequest("corrupti", "provident") {{
                alt = AltEnum.JSON;
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "nulla";
                userIp = "corrupti";
            }};            

            CalendarAclDeleteResponse res = sdk.acl.calendarAclDelete(req, new CalendarAclDeleteSecurity("illum", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->