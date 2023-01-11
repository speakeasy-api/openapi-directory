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

            PlusActivitiesGetRequest req = new PlusActivitiesGetRequest() {{
                security = new PlusActivitiesGetSecurity() {{
                    option1 = new PlusActivitiesGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new PlusActivitiesGetPathParams() {{
                    activityId = "sit";
                }};
                queryParams = new PlusActivitiesGetQueryParams() {{
                    alt = "json";
                    fields = "culpa";
                    key = "expedita";
                    oauthToken = "consequuntur";
                    prettyPrint = false;
                    quotaUser = "expedita";
                    userIp = "voluptas";
                }};
            }};

            PlusActivitiesGetResponse res = sdk.activities.plusActivitiesGet(req);

            if (res.activity.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->