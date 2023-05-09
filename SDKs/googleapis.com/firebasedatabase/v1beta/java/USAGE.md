<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceInput;
import org.openapis.openapi.models.shared.DatabaseInstanceTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedatabaseProjectsLocationsInstancesCreateRequest req = new FirebasedatabaseProjectsLocationsInstancesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                databaseInstanceInput = new DatabaseInstanceInput() {{
                    name = "Ellis Mitchell";
                    type = DatabaseInstanceTypeEnum.USER_DATABASE;
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                databaseId = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
                validateOnly = false;
            }};            

            FirebasedatabaseProjectsLocationsInstancesCreateResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesCreate(req, new FirebasedatabaseProjectsLocationsInstancesCreateSecurity() {{
                option1 = new FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1("suscipit", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.databaseInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->