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
                    calendarId = "accusantium";
                    ruleId = "minima";
                }};
                queryParams = new CalendarAclDeleteQueryParams() {{
                    alt = "json";
                    fields = "consectetur";
                    key = "est";
                    oauthToken = "tempora";
                    prettyPrint = false;
                    quotaUser = "dolorum";
                    userIp = "blanditiis";
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