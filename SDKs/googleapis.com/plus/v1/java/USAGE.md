<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PlusActivitiesGetSecurityOption1;
import org.openapis.openapi.models.operations.PlusActivitiesGetSecurityOption2;
import org.openapis.openapi.models.operations.PlusActivitiesGetSecurity;
import org.openapis.openapi.models.operations.PlusActivitiesGetPathParams;
import org.openapis.openapi.models.operations.PlusActivitiesGetQueryParams;
import org.openapis.openapi.models.operations.PlusActivitiesGetRequest;
import org.openapis.openapi.models.operations.PlusActivitiesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    activityId = "corrupti";
                }};
                queryParams = new PlusActivitiesGetQueryParams() {{
                    alt = "json";
                    fields = "provident";
                    key = "distinctio";
                    oauthToken = "quibusdam";
                    prettyPrint = false;
                    quotaUser = "unde";
                    userIp = "nulla";
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