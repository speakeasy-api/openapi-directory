<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CalendarAclDeleteSecurity;
import org.openapis.openapi.models.operations.CalendarAclDeletePathParams;
import org.openapis.openapi.models.operations.CalendarAclDeleteQueryParams;
import org.openapis.openapi.models.operations.CalendarAclDeleteRequest;
import org.openapis.openapi.models.operations.CalendarAclDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarAclDeleteRequest req = new CalendarAclDeleteRequest() {{
                security = new CalendarAclDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CalendarAclDeletePathParams() {{
                    calendarId = "corrupti";
                    ruleId = "provident";
                }};
                queryParams = new CalendarAclDeleteQueryParams() {{
                    alt = "json";
                    fields = "distinctio";
                    key = "quibusdam";
                    oauthToken = "unde";
                    prettyPrint = false;
                    quotaUser = "nulla";
                    userIp = "corrupti";
                }};
            }};            

            CalendarAclDeleteResponse res = sdk.acl.calendarAclDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->