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
                    calendarId = "sit";
                    ruleId = "voluptas";
                }};
                queryParams = new CalendarAclDeleteQueryParams() {{
                    alt = "json";
                    fields = "expedita";
                    key = "consequuntur";
                    oauthToken = "dolor";
                    prettyPrint = true;
                    quotaUser = "voluptas";
                    userIp = "fugit";
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