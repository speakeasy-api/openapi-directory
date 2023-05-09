<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlusActivitiesGetRequest;
import org.openapis.openapi.models.operations.PlusActivitiesGetResponse;
import org.openapis.openapi.models.operations.PlusActivitiesGetSecurity;
import org.openapis.openapi.models.operations.PlusActivitiesGetSecurityOption1;
import org.openapis.openapi.models.operations.PlusActivitiesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlusActivitiesGetRequest req = new PlusActivitiesGetRequest("corrupti") {{
                alt = AltEnum.JSON;
                fields = "provident";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "unde";
                userIp = "nulla";
            }};            

            PlusActivitiesGetResponse res = sdk.activities.plusActivitiesGet(req, new PlusActivitiesGetSecurity() {{
                option1 = new PlusActivitiesGetSecurityOption1("corrupti", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.activity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->