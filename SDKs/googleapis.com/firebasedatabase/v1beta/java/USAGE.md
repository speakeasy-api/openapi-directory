<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption2;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceTypeEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedatabaseProjectsLocationsInstancesCreateRequest req = new FirebasedatabaseProjectsLocationsInstancesCreateRequest() {{
                dollarXgafv = "2";
                databaseInstanceInput = new DatabaseInstanceInput() {{
                    name = "provident";
                    type = "USER_DATABASE";
                }};
                accessToken = "quibusdam";
                alt = "media";
                callback = "nulla";
                databaseId = "corrupti";
                fields = "illum";
                key = "vel";
                oauthToken = "error";
                parent = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
                validateOnly = false;
            }}            

            FirebasedatabaseProjectsLocationsInstancesCreateResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesCreate(req, new FirebasedatabaseProjectsLocationsInstancesCreateSecurity() {{
                option1 = new FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.databaseInstance.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->