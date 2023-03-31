<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteRealmAttackDetectionBruteForceUsersPathParams;
import org.openapis.openapi.models.operations.DeleteRealmAttackDetectionBruteForceUsersRequest;
import org.openapis.openapi.models.operations.DeleteRealmAttackDetectionBruteForceUsersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = new SchemeAccessToken() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }})
                .build();

            DeleteRealmAttackDetectionBruteForceUsersRequest req = new DeleteRealmAttackDetectionBruteForceUsersRequest() {{
                pathParams = new DeleteRealmAttackDetectionBruteForceUsersPathParams() {{
                    realm = "corrupti";
                }};
            }};            

            DeleteRealmAttackDetectionBruteForceUsersResponse res = sdk.attackDetection.deleteRealmAttackDetectionBruteForceUsers(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->