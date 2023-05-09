<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListRequest;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListResponse;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurity;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurityOption3;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseAvailableProjectsListRequest req = new FirebaseAvailableProjectsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                pageSize = 847252L;
                pageToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            FirebaseAvailableProjectsListResponse res = sdk.availableProjects.firebaseAvailableProjectsList(req, new FirebaseAvailableProjectsListSecurity() {{
                option1 = new FirebaseAvailableProjectsListSecurityOption1("iure", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAvailableProjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->